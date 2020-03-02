import React from 'react';
import styles from "./styles.module.css"

function UsersList() {
    return (
        <table className={styles.usersListTable}>
            <tr className={styles.tableHeader}>
                <td className={styles.textColl}>Имя</td>
                <td className={styles.textColl}>Фамилия</td>
                <td className={styles.buttonsColl}></td>
            </tr>
        </table>
    )
}

export default UsersList