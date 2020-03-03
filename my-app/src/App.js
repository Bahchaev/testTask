import React from 'react';
import styles from "./App.css"
import UsersList from "./Components/UsersList";
import AddPersonButton from "./Components/AddPersonButton";
import AddPersonField from "./Components/AddPersonField";

function App() {
  return (
    <div className={styles.tablePageContent}>
      <UsersList/>
      <br/>
      <AddPersonButton/>
      <AddPersonField/>
    </div>
  );
}

export default App;
