import React from 'react';
import styles from "./styles.module.css"

function AddPersonField() {
    return (
        <div className={styles.Field}>
            <h1>Создание сотрудника</h1>
            <div className={styles.InputField}>
                <p>Назад к списку</p>
                <input className={styles.Input} type="text" placeholder="Введите имя сотрудника"/><br/>
                <input className={styles.Input} type="text" placeholder="Введите фамилию сотрудника"/>
                <button className={styles.SaveButton}>Сохранить</button>
            </div>
        </div>
    )
}

export default AddPersonField