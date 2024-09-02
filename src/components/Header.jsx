import { useEffect, useRef } from 'react';
import '/src/css/Header.css';

function Header() {
    // Create references for the image and title
    const imgRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // Function to trigger the shake effect on the title
        const handleAnimationEnd = () => {
            if (titleRef.current) {
                // Reset and trigger the shake animation
                titleRef.current.style.animation = 'none'; // Reset the animation
                setTimeout(() => {
                    titleRef.current.style.animation = 'shake 0.5s ease-in-out';
                }, 0); // Small delay to re-trigger the animation
            }
        };

        // Add event listener to the image to trigger shake effect after spin
        const imgElement = imgRef.current;
        imgElement.addEventListener('animationend', handleAnimationEnd);

        // Clean up event listener on component unmount
        return () => {
            imgElement.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return (
        <header className="Header">
            <div className="Header-content">
                <h1 id="title" ref={titleRef}>
                    Chuck Norris: Facts.
                </h1>
                <img
                    src="./legochuck.png"
                    alt="Lego Chuck Norris"
                    id="legochuck"
                    ref={imgRef}
                />
            </div>
        </header>
    );
}

export default Header;
