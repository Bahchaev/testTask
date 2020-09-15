import React from 'react';

function SortToolbar({sortData, setData}) {

   let sorted = { firstName: true, lastName: true };

const sort = (type) => {
    const sorted = [].slice.call(sortData).sort((a, b) => {
        // чтобы сортировка всегда была одинаковой учтём все условия
        // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
        // значения метод массивов sort сделает свой выбор
        if (a[type] === b[type]) { return 0; }
        return a[type] > b[type] ? 1 : -1;
    });

    setData(sorted)

};

    return (
        <div>
            <button onClick={() => sort('firstName')}>сортировка по имени</button>
            <br/>
            <button onClick={() => sort('lastName')}>сортировка по фамилии</button>
            <br/>
            <button onClick={() => sort('id')}>Сброс</button>
        </div>
    )
}

export default SortToolbar