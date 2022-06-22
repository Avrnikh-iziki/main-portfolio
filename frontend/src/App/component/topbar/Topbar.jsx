import "./topbar.scss";
export default function Topbar({ menuOpen, setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <img src="/fa.ico" alt="ico" className="logo" />
                    </a>
                    <div className="itemContainer">
                        <i className="fas fa-user"></i>
                        <span>+212 613 - 291 864 </span>
                    </div>
                    <div className="itemContainer">
                        <i className="fas fa-envelope"></i>
                        <span>avrnikh@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

