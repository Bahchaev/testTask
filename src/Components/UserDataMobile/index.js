import React from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import Grid from '@material-ui/core/Grid';
import avatar from './avatar.png'

function UserDataMobile({user, setDbUpdateTime}) {
    // data — объект, содержащий информацию об одном пользователе,
    // update — функция, написанная нами ранее в компоненте <App />, отвечающая за обновление состояния компонента-начальника,
    // index — номер пользователя в общей таблице данных
    return (
        <Grid container
              className={styles.tableContent}>

            <Grid container item
                  xs={3}
                  alignItems="center" justify="center">
                <img src={avatar} alt={"avatar"} className={styles.image}/>
            </Grid>

            <Grid container item
                  xs
                  direction={"column"}>
                <Grid container item
                      xs
                      alignItems="center" justify="flex-start">
                    <p id={user.id + "_firstName"} className={styles.text}>{user.firstName}</p>
                </Grid>

                <Grid container item
                      xs
                      alignItems="center" justify="flex-start">
                    <p id={user.id + "_secondName"} className={styles.text}>{user.lastName}</p>
                </Grid>
            </Grid>
            <Grid container item
                  xs={1}
                  direction={"column"}
                  alignItems="center" justify="center">
                <ModalCorrectPersonWindow id={user.id + "_correct"} setDbUpdateTime={setDbUpdateTime}/>
                <DeleteButton id={user.id + "_delete"} setDbUpdateTime={setDbUpdateTime}/>
            </Grid>
        </Grid>
    );
}

export default UserDataMobile