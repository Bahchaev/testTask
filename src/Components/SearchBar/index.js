import React, {useState} from 'react';
import styles from "./styles.module.css"
import Grid from "@material-ui/core/Grid";

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
        <Grid container className={styles.searchBar} justify={"flex-end"}>
            <Grid item>
                <input
                    value={term}
                    type={"search"}
                    placeholder={"Поиск..."}
                    onChange={dataSearch}
                />
            </Grid>
        </Grid>
    )
}

export default SearchBar