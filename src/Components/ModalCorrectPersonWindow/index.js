import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Modal} from 'semantic-ui-react'
import {patchRequest} from "../../serverRequest";

function ModalCorrectPersonWindow(props) {

    const [modalOpen, setModalOpen] = useState(false); // статус модалоьного окна "закрыто/открыто"
    const [firstName, setFirstName] = useState();   // Имя пользовател
    const [secondName, setSecondName] = useState("");   // Фамилия пользователя
    const [idPatch, setIdPatch] = useState();   //ID изменяемого объекта


    const handleOpen = (event) => {
        // открытие модального окна
        setModalOpen(true);
        let idFull = event.target.id;
        let id = idFull.slice(0, idFull.indexOf("_"));
        setIdPatch(id);
        setFirstName(document.getElementById(id + "_firstName").textContent);
        setSecondName(document.getElementById(id + "_secondName").textContent)
    };
    const handleClose = () => {
        // закрытие модального окна
        setModalOpen(false);
    };
    const handleSubmit = (event) => {
        //нажатие кнопки
        event.preventDefault();
        patchData(idPatch, firstName, secondName); //отправка данных на сервер
        document.location.reload(true) // обновление web страницы
    };
    const onChangeFirstName = (event) => {
        // функция onChange для мгновенного измеения input.value
        setFirstName(event.target.value)
    };
    const onChangeSecondName = (event) => {
        // функция onChange для мгновенного измеения input.value
        setSecondName(event.target.value)
    };

    function patchData(id, firstName, secondName) {
        // отправка откорректированных данных на сервер

        // отправляемые данные
        let data = {
            "firstName": firstName,
            "lastName": secondName
        };

        patchRequest("http://localhost:3001/persons/" + id, data) // PATCH-запрос
            .then(handleClose)
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