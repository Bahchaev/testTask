import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";

function UsersList() {

    const [serverData, setServerData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        fetch("http://localhost:3001/persons")
            .then(response => response.json())
            .then((personsData) => {
                    setServerData(personsData);
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }

    useEffect(() => {
            fetchData();
        }, []
    );

    if (error) {
        return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <table className={styles.usersListTable}>
                <tr className={styles.tableHeader}>
                    <td className={styles.imageColl}/>
                    <td className={styles.textColl}>Имя</td>
                    <td className={styles.textColl}>Фамилия</td>
                    <td className={styles.buttonsColl}/>
                </tr>

                {
                    serverData.map((element) =>
                        <tr className={styles.tableContent}>
                            <td className={styles.imageColl}></td>
                            <td className={styles.textColl} id={element.id + "_firstName"}>{element.firstName}</td>
                            <td className={styles.textColl} id={element.id + "_secondName"}>{element.lastName}</td>
                            <td className={styles.buttonsColl}><ModalCorrectPersonWindow id={element.id + "_correct"}/><DeleteButton id={element.id + "_delete"}/></td>
                        </tr>
                    )}
            </table>
        )
    }
}

export default UsersList