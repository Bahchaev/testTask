import React, {useState} from 'react';

function PaginatorToolbar({page, setPage, limit, setLimit, lastPage}) {

    const handleFirstPage = () => setPage(1);
    const handleLeftPage = () => setPage(page - 1);
    const handleRightPage = () => setPage(page + 1);
    const handleLastPage = () => setPage(lastPage);

    return (
        <div>
            <button onClick={handleFirstPage}>Первая</button>
            <button onClick={handleLeftPage}>Предыдущая</button>
            Отображать по <select>
            <option>5</option>
            <option>10</option>
            <option>20</option>
        </select>
            <button onClick={handleRightPage}>Следующая</button>
            <button onClick={handleLastPage}>Последняя</button>

            <datalist id="defaultNumbers">
                <option value="5"/>
                <option value="10"/>
                <option value="20"/>
            </datalist>
        </div>
    )
}

export default PaginatorToolbar