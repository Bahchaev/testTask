import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import {doGetRequest} from "./serverRequest";
import UsersList from "./Components/UsersList";
import ModalAddPersonWindow from "./Components/ModalAddPersonWindow";
import Grid from "@material-ui/core/Grid";
import SortToolbar from "./Components/SortToolbar";
import SearchBar from "./Components/SearchBar";

function App() {

    //состояния приложения
    const [data, setData] = useState(null); //данные, полученные с сервера
    const [searchData, setSearchData] = useState(null);
    const [sortData, setSortData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        doGetRequest("http://localhost:3001/persons")
            .then((fetchedData) => {
                    setSearchData(fetchedData);
                    setSortData(fetchedData);
                    setData(fetchedData);
                    setIsLoaded(true);

                }
            )
            .catch((error) => {
                setError(error);
            });
    }, []);


    if (error) {
        return <div>{error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <div>
                <div id={"ModalBackground"}>
                    <div className={styles.TablePageContent}>
                        <UsersList data={data}/>
                    </div>
                    <Grid container className={styles.buttonMarginTop}>
                        <ModalAddPersonWindow/>
                    </Grid>
                    <Grid container className={styles.buttonMarginTop}>
                        <SortToolbar sortData={sortData} setData={setData}/>
                    </Grid>
                    <Grid container className={styles.buttonMarginTop}>
                        <SearchBar searchData={searchData} setData={setData}/>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
