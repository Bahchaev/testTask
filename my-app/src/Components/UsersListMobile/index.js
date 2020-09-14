import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import ModalAddPersonWindow from "../ModalAddPersonWindow";
import {getRequest} from "../../serverRequest.js"
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames'; //для присваивания нескольких классов
import avatar from './avatar.png'
import Hidden from "@material-ui/core/Hidden/Hidden";
import Box from "@material-ui/core/Box/Box";


function UsersListMobile() {

    const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        getRequest("http://localhost:3001/persons")
            .then((fetchedData) => {
                    setServerData(fetchedData);
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
            <Grid>
                {
                    serverData.map((element) =>
                        <Grid container
                              className={styles.tableContent}>

                            <Grid container
                                  xs={3}
                                  alignItems="center" justify="center">
                                <img src={avatar} alt={"avatar"} className={styles.image}/>
                            </Grid>

                            <Grid container
                                  xs
                                  direction={"column"}>
                                <Grid container
                                      xs
                                      alignItems="center" justify="flex-start">
                                    <p id={element.id + "_firstName"}>{element.firstName}</p>
                                </Grid>

                                <Grid container
                                      xs
                                      alignItems="center" justify="flex-start">
                                    <p id={element.id + "_secondName"}>{element.lastName}</p>
                                </Grid>
                            </Grid>
                            <Grid container
                                  xs={2}
                                  alignItems="center" justify="space-between">
                                <ModalCorrectPersonWindow id={element.id + "_correct"}/>
                                <DeleteButton id={element.id + "_delete"}/>
                            </Grid>
                        </Grid>
                    )
                }
                <Grid container className={styles.buttonMarginTop}>
                    <Grid items>
                        <ModalAddPersonWindow/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default UsersListMobile