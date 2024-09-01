import '/src/css/Header.css'

function Header() {

    return (
        <header className="Header">
            <div className="Header-content">
                <h1 id='title'>Chuck Norris: Facts.</h1>
                <img
                    src="/legochuck.png"
                    alt="Lego Chuck Norris"
                    id='legochuck'/>
            </div>
        </header>

    );
}
export default Header;