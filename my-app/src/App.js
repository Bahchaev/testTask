import React from 'react';
import styles from "./styles.module.css"
import UsersList from "./Components/UsersList";



import ModalAddPersonWindow from "./Components/ModalAddPersonWindow";

function App() {
    return (
        <div>
            <div id={"ModalBackground"}>
                <div className={styles.TablePageContent}>
                    <UsersList/>
                </div>
            </div>
        </div>
    );
}

export default App;
