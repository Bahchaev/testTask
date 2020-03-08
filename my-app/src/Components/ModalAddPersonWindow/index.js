import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Button, Header, Image, Modal} from 'semantic-ui-react'

function ModalAddPersonWindow() {

    const [modalOpen, setModalOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => setModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Имя " + firstName + " " + secondName);
        handleClose();
        postData(firstName, secondName)
    };

    const saveButtonClick = () => {
        postData();
        handleClose();
    };

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    };

    const onChangeSecondName = (event) => {
        setSecondName(event.target.value)
    };

    function postData(firstName, secondName) {

        let data = {
            "firstName": firstName,
            "lastName": secondName
        };

        fetch("http://localhost:3001/persons", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((personsData) => {
                    console.log("Пользователь добавлен")
                },
                (error) => {
                    console.log(error)
                }
            )
    }


    return (

        <Modal
            trigger={<button className={styles.AddPersonButton} onClick={handleOpen}>Добавить сотрудника</button>}
            open={modalOpen}
            onClose={handleClose}
        >
            <div className={styles.ModalWindowField}>
                <h1>Создание сотрудника</h1>

                <Modal.Content>
                    <div className={styles.ContentField}>
                        <form className={styles.InputField} onSubmit={handleSubmit}>
                            <a href="" className={styles.BackToMainLink} onClick={handleClose}>Назад к списку</a>
                            <input name={"firstName"} value={firstName} onChange={onChangeFirstName} className={styles.InputFistName} type="text"
                                   placeholder="Введите имя сотрудника"/><br/>
                            <input name={"secondName"} value={secondName} onChange={onChangeSecondName} className={styles.InputSecondName} type="text"
                                   placeholder="Введите фамилию сотрудника"/>
                            <input type={"submit"} className={styles.SaveButton} value={"Сохранить"}/>
                        </form>
                    </div>
                </Modal.Content>
            </div>
        </Modal>
    )
}

export default ModalAddPersonWindow