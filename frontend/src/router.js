import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import User from "./User"
import { useEffect, useState } from "react";
import axios from "axios"
export default function Rout() {
    const [token, settoken] = useState(null)
    const [order, setorder] = useState([])
    useEffect(() => {
        axios.post('/data/order')
            .then(res => {
                const { message } = res.data
                setorder(message?.sucess)
            })        
        settoken(localStorage.getItem("token"))
    }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App  />} />
                <Route path="/user" element={<User token={token} settoken={settoken}  order={order}/>} />
            </Routes>
        </Router>
    )
}
