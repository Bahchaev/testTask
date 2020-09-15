import React, {useEffect, useState} from 'react';

function SortToolbar() {

    return (
        <div>
            <input type={"radio"} name={"sortType"} value={"sortByFirstName"}/>по имени
            <br/>
            <input type={"radio"} name={"sortType"} value={"sortByLastName"}/>по фамилии
        </div>
    )
}

export default SortToolbar