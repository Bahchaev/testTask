import React, {useState} from 'react';
import styles from "./styles.module.css"

function DeleteButton(props) {

    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    // удаление данных с сервера
    function deleteData(item, url) {
        return fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => response.json())
            .then((error) => {
                    setError(error)
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
            document.getElementById("ModalBackground").className = "";
            document.location.reload(true)
        }

        //отображение ошибки
        if (error === 400) {
            alert("Ошибка 400: неверный запрос")
        } else if (error === 404) {
            alert("Ошибка 404: сущность рне найдена в системе")
        } else if (error === 500) {
            alert("Ошибка 500 - серверная ошибка")
        } else if ((error !== "200") && (error !== null)) {
            alert("Неизвестная ошибка")
        }
    }

    return (
        <button className={styles.DeleteButton} id={props.id + "_button"} onClick={buttonClick}/>
    )
}

export default DeleteButton