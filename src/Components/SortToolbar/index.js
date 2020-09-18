import React from 'react';
import Grid from "@material-ui/core/Grid";

function SortToolbar({sortData, setData}) {

    const sort = (type) => {
        const sorted = [].slice.call(sortData).sort((a, b) => {
            // чтобы сортировка всегда была одинаковой учтём все условия
            // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
            // значения метод массивов sort сделает свой выбор
            if (a[type] === b[type]) {
                return 0;
            }
            return a[type] > b[type] ? 1 : -1;
        });

        setData(sorted)

    };

    return (
        <Grid container direction={"column"} justify={"space-between"}>
            <Grid item>
                <span>Cортировка:</span>
            </Grid>
            <Grid item>
                <button onClick={() => sort('firstName')}>по имени</button>
            </Grid>
            <Grid item>
                <button onClick={() => sort('lastName')}>по фамилии</button>
            </Grid>
        </Grid>
    )
}

export default SortToolbar