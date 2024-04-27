import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { toast } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

   const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try{
        const {data} = await axios.post('/login', {
            email,
            password
        })
        if(data.error) {
            toast.error(data.error)
        } else {
            setData({});
            navigate('/dashboard')
            window.localStorage.setItem("isLogedIn", true)
              };
        
    }catch(error) {
        console.log(error)
    }
   }

    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container} onSubmit={loginUser}>
                        <h1>Login to your Account</h1>
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
                            Log in
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                <h1>New here?</h1>
                <Link to='/register'>
                    <button type="button" className={styles.white_btn}>
                        Sign up
                    </button>
                </Link>

                </div>
            </div>
        </div>
    )
}

export default Login;