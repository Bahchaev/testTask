import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";

function UsersList() {

    const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

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

            //отображение ошибки
            if (error === 400) {
                alert("Ошибка 400: неверный запрос")
            } else if (error === 404) {
                alert("Ошибка 404: сущность рне найдена в системе")
            } else if (error === 500) {
                alert("Ошибка 500 - серверная ошибка")
            } else if ((error !== "200") && (error !== null)) {
                alert("Неизвестная ошибка")
            }
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
                            <td className={styles.buttonsColl}><ModalCorrectPersonWindow
                                id={element.id + "_correct"}/><DeleteButton id={element.id + "_delete"}/></td>
                        </tr>
                    )
                }
            </table>
        )
    }
}

export default UsersList