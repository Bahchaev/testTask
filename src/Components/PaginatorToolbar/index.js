import React, {useState} from 'react';

function PaginatorToolbar({page, setPage, setLimit, lastPage}) {

    const handleFirstPage = () => setPage(1);
    const handleLeftPage = () => {
        if (page>1) {setPage(page - 1);}
    };
    const handleRightPage = () => {
        if(page<lastPage) {setPage(page + 1)}
    };
    const handleLastPage = () => setPage(lastPage);
    const handleLimit = (e) => setLimit(e.target.value);

    return (
        <div>
            <button onClick={handleFirstPage}>Первая</button>
            <button onClick={handleLeftPage}>Предыдущая</button>
             страница {page} из {lastPage}
            <button onClick={handleRightPage}>Следующая</button>
            <button onClick={handleLastPage}>Последняя</button>
            <br/>

            Отображать по
            <select onChange={handleLimit}>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
    )
}

export default PaginatorToolbar