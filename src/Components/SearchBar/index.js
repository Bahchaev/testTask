import React from 'react';

function SearchBar({term, searchData, setData, setTerm}) {
    // term — строка, показывающая приложению, что мы ищем в данный момент,
    // data — исходные данные, которые будем фильтровать
    // update — функция для обновления состояния компонента <App />
    const dataSearch = (e) => {
        const value = e.target.value.toLowerCase();

        const filter = searchData.filter(user => {
            return (user.firstName + " " + user.lastName).toLowerCase().includes(value)
        });

        setData(filter);
        setTerm(value);
    };

    return (
        <div>
            <input
                value={term}
                type={"search"}
                placeholder={"Поиск..."}
                onChange={dataSearch}
            />
        </div>
    )
}

export default SearchBar