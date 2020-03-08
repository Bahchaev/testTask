import React from 'react';
import styles from "./styles.module.css"

function DeleteButton(props) {

    function deleteData(item, url) {
        return fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => response.json());
    }

    function buttonClick(event) {
        let idFull = event.target.id;
        let id = idFull.slice(0, idFull.indexOf("_"));
        deleteData(id, "http://localhost:3001/persons")
    }

    return(
        <button className={styles.DeleteButton} id={props.id + "_button"} onClick={buttonClick}/>
    )
}

export default DeleteButton