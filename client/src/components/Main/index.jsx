import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { UserContext } from "../../context/userContext";

const Main = () => {
    const { user } = useContext(UserContext);
    const login = window.localStorage.getItem("isLogedIn");
    
    return(
        <div className={styles.main_container}>
            <div className={styles.main}>
                <h1>Ceva continut pentru pagina</h1>
                {login && user ? (<h2>Salut <p className={styles.username}>{user.name}</p></h2>) : (<h2>Salut, cine esti?</h2>)}
            </div>
            <div className={styles.page}>
                <div className={styles.left}>
                <h2>Login</h2>
                <Link to="/login">
                <button type="button" className={styles.green_btn}>Login</button>
                </Link>
                </div>

                <div className={styles.right}>
                <h2>Register</h2>
                <Link to="/register">
                <button type="button" className={styles.white_btn}>Register</button>
                </Link>
                </div>

                <div className={styles.down}>
                <h2>Dashboard</h2>
                <Link to="/dashboard">
                <button type="button" className={styles.white_btn}>Dashboard</button>
                </Link>
                </div>

            </div>
        </div>
    )
}

export default Main;