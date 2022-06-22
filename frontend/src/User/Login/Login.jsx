import "./user.scss";
import { useState } from "react";
import axios from "axios"
export default function Login() {
    const [password, setpassword] = useState("")
    const [Email, setemail] = useState("")
    const [err, seterr] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            Email,
            password
        }
        axios.post('/user', data)
            .then(res => {
                const { message } = res.data
                if (message?.token) {
                    localStorage.setItem("token", message.token)
                   window.location = "user"
                }
                else {
                    seterr(message?.err)
                    setTimeout(() => { seterr(null) }, 1000);
                }
            })
    }
   
    return (
        <div className="user" style={{ backgroundImage: 'url(https://res.cloudinary.com/avrnikh/image/upload/v1641770784/clavierbg_aruty3.jpg)' }}>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" className="inpu" value={Email} onChange={e => setemail(e.target.value)} />
                    <input type="password" placeholder="Password" className="inpu" value={password} onChange={e => setpassword(e.target.value)} />
                    <button type="submit">LOGON</button>
                </form>
                {err && <div className="err">{err}</div>}
            </div>
        </div>
    );
}

