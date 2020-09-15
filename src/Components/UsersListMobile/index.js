import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import UserDataMobile from "../UserDataMobile";
import PaginatorToolbar from "../PaginatorToolbar";

function UsersListMobile({data}) {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    let lastPage = Math.ceil(data.length / limit);

    function paginate(array, limit, page) {
        return array.slice ((page-1)*limit, page*limit)
    }

    let showData = paginate(data, 2, 2);
    console.log(data);
    console.log(showData);
    const users = showData.map((user) => {
        return window.innerWidth <= 425 ? (<UserDataMobile user={user}/>) : <UserDataMobile user={user}/>
    });



    return (
        <Grid>
            {users}
            <PaginatorToolbar page={page} setPage={setPage} limit={limit} setLimit={setLimit} lastPage={lastPage}/>
        </Grid>
    )
}

export default UsersListMobile