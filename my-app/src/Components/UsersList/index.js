import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import DeleteButton from "../DeleteButton";
import ModalCorrectPersonWindow from "../ModalCorrectPersonWindow";
import ModalAddPersonWindow from "../ModalAddPersonWindow";
import {getRequest} from "../../serverRequest.js"
import { Grid, Row, Col } from 'react-flexbox-grid';




function UsersList() {

    const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        getRequest("http://localhost:3001/persons")
            .then((fetchedData) => {
                    setServerData(fetchedData);
                    setIsLoaded(true)
                }
            )
            .catch((error) => {
                setError(error);
            })
    }, []);

    if (error) {
        return <div>{error.message}</div>
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
                                <td className={styles.imageColl}/>
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
                <br/>
                <Row className={styles.tableHeader}>
                    <Col xs={2} className={styles.imageColl}/>
                    <Col xs={4} className={styles.textColl}>Имя</Col>
                    <Col xs={4} className={styles.textColl}>Фамилия</Col>
                    <Col xs={2} className={styles.buttonsColl}/>
                </Row>
                {
                    serverData.map((element) =>
                        <Row className={styles.tableContent}>
                            <Col xs={2} className={styles.imageColl}/>
                            <Col xs={4} className={styles.textColl} id={element.id + "_firstName"}>{element.firstName}</Col>
                            <Col xs={4} className={styles.textColl} id={element.id + "_secondName"}>{element.lastName}</Col>
                            <Col xs={2} className={styles.buttonsColl}><ModalCorrectPersonWindow
                                id={element.id + "_correct"}/><DeleteButton id={element.id + "_delete"}/></Col>
                        </Row>
                    )
                }
            </div>
        )
    }
}

export default UsersList