import React from 'react';
import styles from "./styles.module.css"
import UsersList from "./Components/UsersList";


import ModalAddPersonWindow from "./Components/ModalAddPersonWindow";

function App() {



    return (
        <div>
            <div className={styles.TablePageContent}>
                <UsersList/>
                <br/>
                <ModalAddPersonWindow/>
            </div>
        </div>
    );
}

export default App;
