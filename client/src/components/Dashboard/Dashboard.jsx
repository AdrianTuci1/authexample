import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { user } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            localStorage.removeItem('isLogedIn');
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    
    return (
        <div>
            <h1>Dashboard</h1>{}
            {user ? (<h2>Hi {user.name}</h2>) : (<h1>not loaded</h1>)}
            <button onClick={handleLogout}>
                    Logout
                </button>
            <Link to='/'><button type="button">HomePage</button></Link>
        </div>
    )
}