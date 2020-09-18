import React from 'react';
import styles from "./styles.module.css"
import Grid from '@material-ui/core/Grid';



function TableHeaderDesktop() {
    return (
        <Grid container
              className={styles.tableHeader}>
            <Grid container item
                  xs={1}
                  alignItems="center" justify="center">
            </Grid>
            <Grid container item
                  xs
                  alignItems="center" justify="flex-start">
                <p>Имя</p>
            </Grid>
            <Grid container item
                  xs
                  alignItems="center" justify="flex-start">
                <p>Фамилия</p>
            </Grid>
            <Grid container item
                  xs={2}
                  alignItems="center" justify="flex-end">
            </Grid>
        </Grid>
    );
}

export default TableHeaderDesktop