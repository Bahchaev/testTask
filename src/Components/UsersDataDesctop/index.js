import React from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import Grid from '@material-ui/core/Grid';
import avatar from './avatar.png'


function UsersDataDesktop({user, setDbUpdateTime}) {
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
                <ModalCorrectPersonWindow id={user.id + "_correct"} setDbUpdateTime={setDbUpdateTime}/>
                <DeleteButton id={user.id + "_delete"} setDbUpdateTime={setDbUpdateTime}/>
            </Grid>
        </Grid>
    );
}

export default UsersDataDesktop