import React from 'react';
import styles from "./styles.module.css"

function AddPersonButton() {
    return(
        <button className={styles.AddPersonButton} onClick='location.href="../../../public/addPersonPage.html'>Добавить сотрудника</button>
    )
}

export default AddPersonButton