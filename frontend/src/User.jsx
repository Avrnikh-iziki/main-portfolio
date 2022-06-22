import './app.scss'
import Neworder from "./User/Order/Order"
import Login from './User/Login/Login'
export default function User({ token, order , settoken}) {
    return (
        <div className='app'> 
            {
                token ?
                    <div className='section1'>
                        <Neworder order={order} token={token} settoken={settoken} />
                    </div>
                    : <Login />  
            }
        </div>
    )
}
