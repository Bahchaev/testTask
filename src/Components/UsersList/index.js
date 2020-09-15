import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import UserDataMobile from "../UserDataMobile";
import PaginatorToolbar from "../PaginatorToolbar";
import UsersDataDesktop from "../UsersListDesctop";

function UsersList({data}) {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);

    let lastPage = Math.ceil(data.length / limit);

    function paginate(array, limit, page) {
        return array.slice ((page-1)*limit, page*limit)
    }

    let showData = paginate(data, limit, page);
    console.log(data);
    console.log(showData);
    const users = showData.map((user) => {
        return window.innerWidth <= 425 ? (<UserDataMobile user={user}/>) : <UsersDataDesktop user={user}/>
    });



    return (
        <Grid>
            {users}
            <PaginatorToolbar page={page} setPage={setPage} setLimit={setLimit} lastPage={lastPage}/>
        </Grid>
    )
}

export default UsersList