import React, {useState} from 'react';

function SearchBar({searchData, setData}) {
    // searchData — исходные данные, которые будем фильтровать
    // setData — функция для обновления состояния компонента <App />

    const [term, setTerm] = useState("");   // поисковый запрос

    const dataSearch = (e) => { //e - объект события
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