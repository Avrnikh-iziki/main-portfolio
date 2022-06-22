import "./testimonial.scss";
export default function Testimonial({testomonial}) {

  return (
    <>
    <div className="bg3" style={{backgroundImage:'url(https://res.cloudinary.com/avrnikh/image/upload/v1641770785/clavierbg_dntbea.jpg)'}}>
    </div>
      <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {testomonial.map((d, index) => (
            <div key={index} className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img
                  className="user"
                  src={d.img} 
                  alt=""
                />
                <i className={d.icon}></i>
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
