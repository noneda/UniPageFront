import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroolly = window.scrollY;
            if (currentScroolly > 300){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);
    return (
        <>
            <header className={isScrolled ? 'shrink' : ''}>
                <h1>Universidad de Pobres</h1>
            </header>

        </>
    );
};

export default Header;
