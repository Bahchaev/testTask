import React from 'react';
import styles from "./styles.module.css"
import UsersListMobile from "./Components/UsersListMobile";



import ModalAddPersonWindow from "./Components/ModalAddPersonWindow";

function App() {
    return (
        <div>
            <div id={"ModalBackground"}>
                <div className={styles.TablePageContent}>
                    <UsersListMobile/>
                </div>
            </div>
        </div>
    );
}

export default App;
