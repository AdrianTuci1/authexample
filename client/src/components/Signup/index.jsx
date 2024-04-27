import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { toast } from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const {name, email, password} = data
        try{
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            }else {
                setData({})
                toast.success('login successful. Welcome!')
                navigate('/login')
            }
        } catch(error) {
            console.log(error)
        }
    }


    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome back</h1>
                    <Link to='/login'>
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={registerUser}>
                        <h1>Create Account</h1>
                        <input 
                        type="text"
                        placeholder="Name"
                        name = "name"
                        onChange={(e) => setData({...data, name: e.target.value})}
                        value = {data.name}
                        required
                        className={styles.input}
                        />
                        <input 
                        type="email"
                        placeholder="Email"
                        name = "email"
                        onChange={(e) => setData({...data, email: e.target.value})}
                        value = {data.email}
                        required
                        className={styles.input}
                        />
                        <input 
                        type="password"
                        placeholder="Password"
                        name = "password"
                        onChange={(e) => setData({...data, password: e.target.value})}
                        value = {data.password}
                        required
                        className={styles.input}
                        />
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;