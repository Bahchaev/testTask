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
                  alignItems="center" justify={{xs: "center", sm: "flex-start"}}>
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
    );
}

export default UsersDataDesktop