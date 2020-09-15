import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import {doGetRequest} from "./serverRequest";
import UsersListMobile from "./Components/UsersListMobile";
import ModalAddPersonWindow from "./Components/ModalAddPersonWindow";
import Grid from "@material-ui/core/Grid";
import SortToolbar from "./Components/SortToolbar";
import SearchBar from "./Components/SearchBar";

function App() {

    //состояния приложения
    const [data, setData] = useState(null); //данные, полученные с сервера
    const [searchData, setSearchData] = useState(null);
    const [term, setTerm] = useState("");   // поисковый запрос
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        doGetRequest("http://localhost:3001/persons")
            .then((fetchedData) => {
                    setSearchData(fetchedData);
                    setData(fetchedData);
                    setIsLoaded(true)
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
                        <UsersListMobile data={data}/>
                    </div>
                    <Grid container className={styles.buttonMarginTop}>
                        <ModalAddPersonWindow/>
                    </Grid>
                    <Grid container className={styles.buttonMarginTop}>
                        <SortToolbar/>
                    </Grid>
                    <Grid container className={styles.buttonMarginTop}>
                        <SearchBar searchData={searchData} term={term} setData={setData} setTerm={setTerm}/>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
