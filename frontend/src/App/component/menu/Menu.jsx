import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="mov">
                        <span><i className="fas fa-home"></i></span>
                        <a href="#intro">Home</a>
                    </div>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="mov">
                        <span> <i className="fas fa-briefcase"></i></span>
                        <a href="#portfolio">Portfolio</a>
                    </div>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="mov">
                        <span><i className="fas fa-user"></i></span>
                        <a href="#works">Works</a>
                    </div>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="mov">
                        <span><i className="fa fa-quote-left"></i></span>
                        <a href="#testimonials">Testimonials</a>
                    </div>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="mov">
                        <span><i className="fas fa-envelope"></i></span>
                        <a href="#contact">Contact</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}