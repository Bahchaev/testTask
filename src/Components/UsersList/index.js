import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import UserDataMobile from "../UserDataMobile";
import PaginatorToolbar from "../PaginatorToolbar";
import UsersDataDesktop from "../UsersDataDesctop";
import TableHeaderDesktop from "../TableHeaderDesktop";
import {Hidden} from "@material-ui/core";

function UsersList({data, setDbUpdateTime}) {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);

    let lastPage = 1;
    if (data.length !== 0 && limit.toString() !== "все") {
        lastPage = Math.ceil(data.length / limit);
    }


    function paginate(array, limit, page) {
        return array.slice((page - 1) * limit, page * limit)
    }

    let showData = paginate(data, limit, page);
    if (limit.toString() === "все") {
        showData = data
    }

    const usersMobile = showData.map((user) => {
        return <UserDataMobile user={user} setDbUpdateTime={setDbUpdateTime}/>
    });

    const usersDesktop = showData.map((user) => {
        return <UsersDataDesktop user={user} setDbUpdateTime={setDbUpdateTime}/>
    });


    return (
        <Grid container>
            <Hidden xsDown> {/*600px*/}
                <TableHeaderDesktop/>
                {usersDesktop}
            </Hidden>

            <Hidden smUp>
                {usersMobile}
            </Hidden>

            <Grid container justify={"center"}>
                <PaginatorToolbar page={page} setPage={setPage} setLimit={setLimit} lastPage={lastPage}/>
            </Grid>
        </Grid>
    )
}

export default UsersList