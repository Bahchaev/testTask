import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import {doGetRequest} from "../../serverRequest";
import UsersList from "../UsersList";
import ModalAddPersonWindow from "../ModalAddPersonWindow";
import Grid from "@material-ui/core/Grid";
import SortToolbar from "../SortToolbar";
import SearchBar from "../SearchBar";

function Index() {

    //состояния приложения
    const [data, setData] = useState(null); //данные, полученные с сервера
    const [searchData, setSearchData] = useState(null);
    const [sortData, setSortData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера
    const [dbUpdateTime, setDbUpdateTime] = useState();

    useEffect(() => {
        doGetRequest("http://localhost:3001/persons")
            .then((fetchedData) => {
                    setSearchData(fetchedData);
                    setSortData(fetchedData);
                    setData(fetchedData.sort((a, b) => {
                        // чтобы сортировка всегда была одинаковой учтём все условия
                        // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
                        // значения метод массивов sort сделает свой выбор
                        if (a.firstName === b.firstName) {
                            return 0;
                        }
                        return a.firstName > b.firstName ? 1 : -1;
                    }));
                    setIsLoaded(true);
                }
            )
            .catch((error) => {
                setError(error);
            });
    }, [dbUpdateTime]);


    if (error) {
        return <div>{error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <Grid container className={styles.pageContent}>

                <Grid container>
                    <UsersList data={data} setDbUpdateTime={setDbUpdateTime}/>
                </Grid>
                <Grid container className={styles.addPersonButtonContainer}>
                    <ModalAddPersonWindow setDbUpdateTime={setDbUpdateTime}/>
                </Grid>
                <Grid container className={styles.buttonMarginTop}>
                    <SortToolbar sortData={sortData} setData={setData}/>
                </Grid>

                <Grid container className={styles.buttonMarginTop}>
                    <SearchBar searchData={searchData} setData={setData}/>
                </Grid>
            </Grid>
        );
    }
}

export default Index;
