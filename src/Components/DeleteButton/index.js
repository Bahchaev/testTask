import React, {useState} from 'react';
import styles from "./styles.module.css"

function DeleteButton({id, setDbUpdateTime}) {

    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    // удаление данных с сервера
    function deleteData(item, url) {
        return fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => {
                response.json();
                setDbUpdateTime(Date.now())
            })
            .catch(() => {
                document.location.reload(true)
                }
            )
    }

    function buttonClick(event) {
        let idFull = event.target.id;
        let id = idFull.slice(0, idFull.indexOf("_"));
        let firstName = document.getElementById(id + "_firstName").textContent;
        let secondName = document.getElementById(id + "_secondName").textContent;

        if (window.confirm("Удалить пользователя " + firstName + " " + secondName + "?") === true) {
            deleteData(id, "http://localhost:3001/persons");
        }
    }

    //отображение ошибки

    if (error) {
        return <div>{error.message}</div>;
    } else {
        return (
            <button className={styles.DeleteButton} id={id + "_button"} onClick={buttonClick}/>
        )
    }
}

export default DeleteButton