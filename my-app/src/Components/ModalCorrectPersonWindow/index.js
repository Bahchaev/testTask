import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Button, Header, Image, Modal} from 'semantic-ui-react'

function ModalCorrectPersonWindow(props) {

    const [modalOpen, setModalOpen] = useState(false); // статус модалоьного окна "закрыто/открыто"
    const [firstName, setFirstName] = useState();   // Имя пользовател
    const [secondName, setSecondName] = useState("");   // Фамилия пользователя
    const [idPatch, setIdPatch] = useState();   //ID изменяемого объекта
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    // открытие модального окна
    const handleOpen = (event) => {
        setModalOpen(true);
        let idFull = event.target.id;
        let id = idFull.slice(0, idFull.indexOf("_"));
        setIdPatch(id);
        setFirstName(document.getElementById(id + "_firstName").textContent);
        setSecondName(document.getElementById(id + "_secondName").textContent)
        document.getElementById("ModalBackground").className = "styles_ModalBackground__vLQlF";
    };

    // закрытие модального окна
    const handleClose = () => {
        setModalOpen(false);
        document.getElementById("ModalBackground").className = "";
    };

    //отправка данных на сервер
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Данные откорретированы");
        handleClose();
        patchData(idPatch, firstName, secondName);
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
        document.location.reload(true)
    };

    // функция onChange для мгновенного измеения input.value
    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    };

    // функция onChange для мгновенного измеения input.value
    const onChangeSecondName = (event) => {
        setSecondName(event.target.value)
    };

    // отправка откорректированных данных на сервер
    function patchData(id, firstName, secondName) {

        // отправляемые данные
        let data = {
            "firstName": firstName,
            "lastName": secondName
        };

        fetch("http://localhost:3001/persons/" + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((error) => {
                    setError(error)
                }
            )
    }

    return (
        <Modal trigger={<button className={styles.CorrectButton} id={props.id + "_button"} onClick={handleOpen}/>}
               className={styles.ModalWindowField}
               open={modalOpen}
               onClose={handleClose}
        >
            <h1>Редактирование сотрудника</h1>

            <Modal.Content>
                <div className={styles.ContentField}>
                    <form className={styles.InputField} onSubmit={handleSubmit}>
                        <a href="" className={styles.BackToMainLink} onClick={handleClose}>Назад к списку</a>
                        <input name={"firstName"} value={firstName} onChange={onChangeFirstName}
                               className={styles.InputFistName} type="text"
                               placeholder="Введите имя сотрудника"/><br/>
                        <input name={"secondName"} value={secondName} onChange={onChangeSecondName}
                               className={styles.InputSecondName} type="text"
                               placeholder="Введите фамилию сотрудника"/>
                        <input type={"submit"} className={styles.SaveButton} value={"Сохранить"}/>
                    </form>
                </div>
            </Modal.Content>

        </Modal>
    )
}

export default ModalCorrectPersonWindow