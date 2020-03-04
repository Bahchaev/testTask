import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Button, Header, Image, Modal} from 'semantic-ui-react'

function ModalAddPersonWindow() {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };
    const handleClose = () => setModalOpen(false);

    const saveButtonClick = () => {
        handleClose();
        //педача данных на сервер
    };

    return (
        <Modal trigger={<button className={styles.AddPersonButton} onClick={handleOpen}>Добавить сотрудника</button>}
               className={styles.ModalWindowField}
               open={modalOpen}
               onClose={handleClose}
        >
            <h1>Создание сотрудника</h1>

            <Modal.Content>
                <div className={styles.ContentField}>
                    <div className={styles.InputField}>
                        <a href="" className={styles.BackToMainLink} onClick={handleClose}>Назад к списку</a>
                        <input className={styles.Input} type="text" placeholder="Введите имя сотрудника"/><br/>
                        <input className={styles.Input} type="text" placeholder="Введите фамилию сотрудника"/>
                        <Button className={styles.SaveButton} onClick={saveButtonClick}>Сохранить</Button>
                    </div>
                </div>
            </Modal.Content>

        </Modal>
    )
}

export default ModalAddPersonWindow