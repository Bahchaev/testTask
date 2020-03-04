import React from 'react';
import styles from "./styles.module.css"
import PersonList from "../../personList";
import CorrectButton from "../CorrectButton";
import DeleteButton from "../DeleteButton";

function UsersList() {
    return (
        <table className={styles.usersListTable}>
            <tr className={styles.tableHeader}>
                <td className={styles.imageColl}/>
                <td className={styles.textColl}>Имя</td>
                <td className={styles.textColl}>Фамилия</td>
                <td className={styles.buttonsColl}/>
            </tr>

            {Array.from(PersonList.values()).map((element) =>
                <tr className={styles.tableContent}>
                    <td className={styles.imageColl}>IMG</td>
                    <td className={styles.textColl}>{element.fistName}</td>
                    <td className={styles.textColl}>{element.lastName}</td>
                    <td className={styles.buttonsColl}><CorrectButton/><DeleteButton/></td>
                </tr>
            )}
        </table>
    )
}

export default UsersList