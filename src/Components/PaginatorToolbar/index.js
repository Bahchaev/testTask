import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import Grid from "@material-ui/core/Grid";

function PaginatorToolbar({page, setPage, setLimit, limit, data}) {


    useEffect(() => {
        setLimit(document.getElementById("PaginatorToolbarSelection").value);
    },[]);

    let lastPage = 1;
    if (data.length !== 0 && limit.toString() !== "все") {
        lastPage = Math.ceil(data.length / limit);
    }

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
            <Grid container item xs={12} className={styles.pageSelectionToolbar} justify={"center"}>
                <button onClick={handleFirstPage}>&lt;&lt;</button>
                <button onClick={handleLeftPage}>&lt;</button>
                <span className={styles.page}>страница {page} из {lastPage}</span>
                <button onClick={handleRightPage}>&gt;</button>
                <button onClick={handleLastPage}>&gt;&gt;</button>
            </Grid>

            <Grid container item xs={12} className={styles.pageLimitToolbar} justify={"center"}>
            <span>Отображать по</span>
            <select onChange={handleLimit} className={styles.select} id={"PaginatorToolbarSelection"}>
                <option>2</option>
                <option>5</option>
                <option>все</option>
            </select>
            </Grid>
        </Grid>
    )
}

export default PaginatorToolbar