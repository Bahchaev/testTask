import React, {useEffect, useState} from 'react';
import {doGetRequest} from "../../serverRequest.js"
import Grid from '@material-ui/core/Grid';
import UserDataMobile from "../UserDataMobile";


/*function UsersListMobile() {

    const [serverData, setServerData] = useState(); // данные с сервера
    const [isLoaded, setIsLoaded] = useState(false); // статус загрузки данных с сервера
    const [error, setError] = useState(null); // ошибки при загрузке данных с сервера

    useEffect(() => {
        doGetRequest("http://localhost:3001/persons?")
            .then((fetchedData) => {
                    setServerData(fetchedData);
                    setIsLoaded(true)
                }
            )
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>{error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <Grid>
                {
                    /!* список пользователей*!/
                    serverData.map((element) =>
                        <UserDataMobile user={element}/>
                    )
                }
            </Grid>
        )
    }
}*/

function UsersListMobile({data}) {

    const users = data.map((user, index) => {
        return (<UserDataMobile user={user} index={index}/>)
    });

    return (
        <Grid>
            {users}
        </Grid>
    )
}

export default UsersListMobile