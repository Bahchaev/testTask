import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import {Modal} from 'semantic-ui-react'
import Grid from "@material-ui/core/Grid";
import {postRequest} from "../../serverRequest";

function ModalAddPersonWindow({setDbUpdateTime}) {

    const [modalOpen, setModalOpen] = useState(false); // статус модалоьного окна "закрыто/открыто"
    const [firstName, setFirstName] = useState(""); // Имя пользовател
    const [secondName, setSecondName] = useState(""); // Фамилия пользователя
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    // открытие модального окна
    function handleOpen() {
        setModalOpen(true);
    }

    // закрытие модального окна
    const handleClose = () => {
        setModalOpen(false);
    };

    //отправка данных на сервер
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert("Добавлен пользователь " + firstName + " " + secondName);
        handleClose();
        postRequest("http://localhost:3001/persons", firstName, secondName)
            .then((r) => {
                setDbUpdateTime(Date.now());
            })
            .catch((error) => {
                setError(error);
            });
    };

    // функция onChange для мгновенного измеения input.value
    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    };

    // функция onChange для мгновенного измеения input.value
    const onChangeSecondName = (event) => {
        setSecondName(event.target.value)
    };

    return (
        <Grid container>
            <Modal
                trigger={<button className={styles.AddPersonButton} onClick={handleOpen}>Добавить сотрудника</button>}
                open={modalOpen}
                onClose={handleClose}
            >
                <div className={styles.ModalBackground}/>
                <div className={styles.ModalWindowField}>

                    <Grid container className={styles.header} justify={"flex-start"} alignItems={"center"}>
                        <h1>Создание сотрудника</h1>
                    </Grid>

                    <Modal.Content>
                        <div className={styles.ContentField}>
                            <form className={styles.InputField} onSubmit={handleSubmit}>
                                <input name={"firstName"} value={firstName} onChange={onChangeFirstName}
                                       className={styles.InputFistName} type="text"
                                       placeholder="Введите имя сотрудника"/><br/>
                                <input name={"secondName"} value={secondName} onChange={onChangeSecondName}
                                       className={styles.InputSecondName} type="text"
                                       placeholder="Введите фамилию сотрудника"/>
                                <Grid container justify={"space-around"}>
                                    <Grid items>
                                        <input type={"submit"} className={styles.SaveButton} value={"Сохранить"}/>
                                    </Grid>
                                    <Grid items>
                                        <button className={styles.SaveButton} onClick={handleClose}>Отмена</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Modal.Content>
                </div>
            </Modal>
        </Grid>
    )
}

export default ModalAddPersonWindow