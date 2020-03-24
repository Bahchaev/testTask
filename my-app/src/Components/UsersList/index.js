import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import ModalAddPersonWindow from "../ModalAddPersonWindow";


function checkResponseStatus(response) {
    //проверка статуса запроса
    if (response.ok) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function getJsonObject(response) {
    // получение JSON-объекта
    return response.json()
}

async function fetchData() {
    // GET-запрос
    return (
        fetch("http://localhost:3001/persons")
            .then(checkResponseStatus)
            .then(getJsonObject)
    )
}

function UsersList() {

    const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        fetchData()
            .then((fetchedData) => {
                    setServerData(fetchedData);
                    setIsLoaded(true)
                }
            )
            .catch((error) => {
                setError(error);
                setIsLoaded(true);
            })
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <div>
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
                <br/>
                <ModalAddPersonWindow/>
            </div>
        )
    }
}

export default UsersList