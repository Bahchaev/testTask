import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import ModalAddPersonWindow from "../ModalAddPersonWindow";
import {doGetRequest} from "../../serverRequest.js"
import Grid from '@material-ui/core/Grid';
import avatar from './avatar.png'
import Hidden from "@material-ui/core/Hidden/Hidden";
import Box from "@material-ui/core/Box/Box";


function UsersDataDesktop({user}) {
// data — объект, содержащий информацию об одном пользователе,
    // update — функция, написанная нами ранее в компоненте <App />, отвечающая за обновление состояния компонента-начальника,
    // index — номер пользователя в общей таблице данных
    return (
        <Grid container
              className={styles.tableContent}>
            <Grid container
                  xs={1}
                  alignItems="center" justify="center">
                <img src={avatar} alt={"avatar"} className={styles.image}/>
            </Grid>
            <Grid container
                  xs
                  alignItems="center" justify={{xs:"center", sm:"flex-start"}}>
                <p id={user.id + "_firstName"}>{user.firstName}</p>
            </Grid>
            <Grid container
                  xs
                  alignItems="center" justify="flex-start">
                <p id={user.id + "_secondName"}>{user.lastName}</p>
            </Grid>
            <Grid container
                  xs={2}
                  alignItems="center" justify="flex-end">
                <ModalCorrectPersonWindow id={user.id + "_correct"}/>
                <DeleteButton id={user.id + "_delete"}/>
            </Grid>
        </Grid>


        /*<Grid container
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
                    <p id={user.id + "_firstName"}>{user.firstName}</p>
                </Grid>

                <Grid container
                      xs
                      alignItems="center" justify="flex-start">
                    <p id={user.id + "_secondName"}>{user.lastName}</p>
                </Grid>
            </Grid>
            <Grid container
                  xs={2}
                  alignItems="center" justify="space-between">
                <ModalCorrectPersonWindow id={user.id + "_correct"}/>
                <DeleteButton id={user.id + "_delete"}/>
            </Grid>
        </Grid>*/
    );


    /*const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        doGetRequest("http://localhost:3001/persons")
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
                <Hidden xsDown>
                    <Grid container className={styles.tableHeader}>
                        <Grid container
                              sm={1}
                              alignItems="center" justify="center"/>
                        <Grid container
                              sm
                              alignItems="center" justify="flex-start">
                            <p>Имя</p>
                        </Grid>
                        <Grid container
                              sm
                              alignItems="center" justify="flex-start">
                            <p>Фамилия</p>
                        </Grid>
                        <Grid container
                              sm={2}
                              alignItems="center" justify="flex-end"/>
                    </Grid>
                </Hidden>

                {
                    serverData.map((element) =>
                        <Grid container
                              className={styles.tableContent}>
                            <Grid container
                                  xs={12} sm={1}
                                  alignItems="center" justify="center">
                                <img src={avatar} alt={"avatar"} className={styles.image}/>
                            </Grid>
                            <Grid container
                                  xs={12} sm
                                  alignItems="center" justify={{xs:"center", sm:"flex-start"}}>
                                <p id={element.id + "_firstName"}>{element.firstName}</p>
                            </Grid>
                            <Grid container
                                  xs={12} sm
                                  alignItems="center" justify="flex-start">
                                <p id={element.id + "_secondName"}>{element.lastName}</p>
                            </Grid>
                            <Grid container
                                  xs={12} sm={2}
                                  alignItems="center" justify="flex-end">
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
    }*/
}

export default UsersDataDesktop