import { useState } from "react";
import "./contact.scss";
import axios from "axios";
export default function Contact({ company, phonemessage, sendphonemessge }) {
  const [Message, setMessage] = useState("");
  const [Email, setemail] = useState("");
  const [Name, setname] = useState("");
  const [res, setres] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "") {
      setres('name is required')
      setTimeout(() => { setres(null) }, 3000);
    }
    else if (Email === "") {
      setres("Email is required")
      setTimeout(() => { setres(null) }, 3000);
    }
    else if (Message === "") {
      setres(" Message is required")
      setTimeout(() => { setres(null) }, 3000);
    }
    else {
 
      axios.post('/data/message', { Name, Email, Message }) 
        .then(res => {
          const { message } = res.data
          setres(message)
          setTimeout(() => {
            setres(null)
            setMessage("")
            setname("")
            setemail("")
            sendphonemessge(null)
            window.location.reload(true);
          }, 2000)
        })
    }
  };
  return (
    <>
      <div className="bg4" style={{ backgroundImage: "url(https://res.cloudinary.com/avrnikh/image/upload/v1641770784/clavierbg_aruty3.jpg)" }}>
      </div>
      <div className="contacts" id="contact">
        <h1>Contact</h1>
        <div className="message">
          <div className="right">
            <div className="logo">
              <img src="/fa.ico" alt="" />
            </div>
            <div className="company">
              {company}
            </div>
          </div>
          <div className="midle">
            <div className="di"></div>
          </div>
          <div className="left">
            <h3>Hi 👋 What's your name?</h3>
            <form onSubmit={handleSubmit}>
              <input onClick={() => sendphonemessge(true)} type="text" placeholder="Name" className="inpu" value={Name} onChange={e => setname(e.target.value)} />
              <input onClick={() => sendphonemessge(true)} type="text" placeholder="Email" className="inpu" value={Email} onChange={e => setemail(e.target.value)} />
              <textarea onClick={() => sendphonemessge(true)} placeholder="Message" className="inpu" value={Message} onChange={e => setMessage(e.target.value)}></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
            {res && <div className="res">{res}</div>}
          </div>
        </div>
        <div className="info">
          <div className="media">
            <a href="https://fr.linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Avrnikh-iziki" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer" >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="copyright">&copy; Avrnikh {new Date().getFullYear()}</div>
        </div>
      </div>
      <div className={"phonemessag " + (phonemessage && "active")}>
        <div className="back" onClick={() => sendphonemessge(null)}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <form onSubmit={handleSubmit} className="submit">
          <input type="text" placeholder="Name" className="inpu" value={Name} onChange={e => setname(e.target.value)} />
          <input type="text" placeholder="Email" className="inpu" value={Email} onChange={e => setemail(e.target.value)} />
          <textarea className="inpu" placeholder="Message" value={Message} onChange={e => setMessage(e.target.value)}></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
        {res && <div className="res">{res}</div>}
      </div>
    </>
  );
}
