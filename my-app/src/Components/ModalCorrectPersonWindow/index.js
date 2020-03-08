import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Button, Header, Image, Modal} from 'semantic-ui-react'

function ModalCorrectPersonWindow(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState("");
    const [idPatch, setIdPatch] = useState()

    const handleOpen = (event) => {
        setModalOpen(true);
        let idFull = event.target.id;
        let id = idFull.slice(0, idFull.indexOf("_"));
        setIdPatch(id);
        setFirstName(document.getElementById(id + "_firstName").textContent);
        setSecondName(document.getElementById(id + "_secondName").textContent)
    };

    const handleClose = () => setModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Имя " + firstName + " " + secondName);
        handleClose();
        patchData(idPatch, firstName, secondName)
    };

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    };

    const onChangeSecondName = (event) => {
        setSecondName(event.target.value)
    };

    function patchData(id, firstName, secondName) {

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
            .then((personsData) => {
                    console.log("Пользователь добавлен")
                },
                (error) => {
                    console.log(error)
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