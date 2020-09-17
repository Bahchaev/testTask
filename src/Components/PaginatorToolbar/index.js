import React, {useState} from 'react';
import styles from "./styles.module.css"
import Grid from "@material-ui/core/Grid";

function PaginatorToolbar({page, setPage, setLimit, lastPage}) {

    const handleFirstPage = () => setPage(1);
    const handleLeftPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handleRightPage = () => {
        if (page < lastPage) {
            setPage(page + 1)
        }
    };
    const handleLastPage = () => setPage(lastPage);
    const handleLimit = (e) => setLimit(e.target.value);

    if (page > lastPage) {
        setPage(lastPage)
    }

    if (page <= 0) {
        setPage(1)
    }

    return (
        <Grid container className={styles.paginatorToolbarContent}>
            <Grid container xs={12} className={styles.pageSelectionToolbar} justify={"center"}>
                <button onClick={handleFirstPage}>&lt;&lt;</button>
                <button onClick={handleLeftPage}>&lt;</button>
                <span className={styles.page}>страница {page} из {lastPage}</span>
                <button onClick={handleRightPage}>&gt;</button>
                <button onClick={handleLastPage}>&gt;&gt;</button>
            </Grid>

            <Grid container xs={12} className={styles.pageLimitToolbar} justify={"center"}>
            <span>Отображать по</span>
            <select onChange={handleLimit} className={styles.select}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
            </select>
            </Grid>
        </Grid>
    )
}

export default PaginatorToolbar