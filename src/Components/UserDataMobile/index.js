import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import Grid from '@material-ui/core/Grid';
import avatar from './avatar.png'

/*function UserDataMobile(props) {
    const user = props.user;
    return (
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
        </Grid>
    )
}*/

function UserDataMobile({user, update, index}) {
    // data — объект, содержащий информацию об одном пользователе,
    // update — функция, написанная нами ранее в компоненте <App />, отвечающая за обновление состояния компонента-начальника,
    // index — номер пользователя в общей таблице данных
    return (
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
        </Grid>
    );
}

export default UserDataMobile