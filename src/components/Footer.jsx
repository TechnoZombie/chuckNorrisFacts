import '/src/css/Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                Chuck Norris: Facts. v.1.0
                <br />
                Powered by <a className='text' href="https://api.chucknorris.io/">ChuckNorris.io</a>
                <br />
                <span className="github-link">
                    <a 
                        href="https://github.com/TechnoZombie/chuckNorrisFacts" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="chuckNorrisFacts/github-logo.png" 
                            alt="GitHub Logo" 
                            className="github-logo" 
                        />
                        <span className="text">View project on GitHub</span>
                    </a>
                </span>
            </div>
        </>
    );
}

export default Footer;
