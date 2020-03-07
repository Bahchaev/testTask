import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import PersonList from "../../personList";
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";

function UsersList() {

    // let requestURL = "../../../db.json";
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function () {
    //     let personsData = request.response;
    //     createTable(personsData)
    // };
    //
    // function createTable(jsonObj) {
    //     return (
    //         {
    //             jsonObj['persons'].map((element) =>
    //                 <tr className={styles.tableContent}>
    //                     <td className={styles.imageColl}>IMG</td>
    //                     <td className={styles.textColl}>{element.fistName}</td>
    //                     <td className={styles.textColl}>{element.lastName}</td>
    //                     <td className={styles.buttonsColl}><ModalCorrectPersonWindow/><DeleteButton/></td>
    //                 </tr>
    //             )
    //         }
    //     )
    // }

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
                            <td className={styles.textColl}>{element.fistName}</td>
                            <td className={styles.textColl}>{element.lastName}</td>
                            <td className={styles.buttonsColl}><ModalCorrectPersonWindow/><DeleteButton/></td>
                        </tr>
                    )}
            </table>
        )
    }
}

export default UsersList