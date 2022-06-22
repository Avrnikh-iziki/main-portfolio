import "./order.scss"
import axios from "axios"
import { useState } from "react"

export default function Neworder({ order, token, settoken }) {
    const [ides, setides] = useState([])
    const viewed = (id) => {
        axios.post('/data/cheked', { id }, { headers: { Authorization: token } })
    }
    const logout = () => {
        localStorage.setItem("token", "")
        settoken(null)
    }
    const delet = (id) => {
        axios.post('/data/delet', { id }, { headers: { Authorization: token } })
            .then(res => {
                window.location.reload(true);
            })
    }
    const [active, setactive] = useState(null)
    return (
        <>
            <div className="bg3" style={{ backgroundImage: 'url(https://res.cloudinary.com/avrnikh/image/upload/v1641770784/clavierbg_aruty3.jpg)' }}>
            </div>
            <div className="neworder" id="newOrder">
                <div className="continer">
                    <h3 onClick={logout} >Orders</h3>
                    {
                        order?.map((el, index) => (
                            <div className={"displyOrder " + ((active === index) && "fullh ")} key={index}>
                                <div className={"cont " + ((el.cheked === true || ides.includes(el._id)) && "color1")}
                                    onClick={() => {
                                        active === index ? setactive(null) : setactive(index);
                                        if (el.cheked !== true && !ides.includes(el._id)) {
                                            viewed(el._id)
                                            setides([...ides, el._id])
                                        }
                                    }}>
                                    <div className="name">
                                        <span >
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <p>
                                            new message from  {el.Name}
                                        </p>
                                    </div>
                                    <div className="email">
                                        {el.Email}
                                    </div>
                                    <div className={(el.cheked === true || ides.includes(el._id)) ? "color2" : "message"} >
                                        {el.Message}
                                    </div>
                                    <div className={(el.cheked === true || ides.includes(el._id)) ? "date" : "date1"}>
                                        {el.date}
                                    </div>
                                </div>
                                <div className="arch" onClick={() => delet(el._id)}>
                                    <i className="fa fa-trash"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
