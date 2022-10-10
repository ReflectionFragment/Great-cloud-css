import './App.css';

function App() {
    return (<div className='background'>

        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__logo'>Rainbow</div>

                    <nav className='nav'>
                        <a className='nav__link active' href='#'>About</a>
                        <a className='nav__link' href='#'>Service</a>
                        <a className='nav__link' href='#'>Blog</a>
                        <a className='nav__link' href='#'>Work</a>
                        <a className='nav__link' href='#'>Contact</a>
                    </nav>
                </div>
            </div>
        </header>

        <div className='intro'>
            <div className='container'>
                <div className='intro__inner'>
                    <h2 className='intro__suptitle'> smile </h2>
                    <h1 className='intro__title'>Great cloud</h1>
                    <a className='btn' href='#'>Learn more</a>
                </div>
                <div className="slider">
                    <div className="slider__item active">
                        <span className='slider__num'>01</span>
                        Intro
                    </div>
                    <div className="slider__item">
                        <span className='slider__num'>2</span>
                        Work
                    </div>
                    <div className="slider__item">
                        <span className='slider__num'>03</span>
                        About
                    </div>
                    <div className="slider__item">
                        <span className='slider__num'>04</span>
                        Contacts
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default App;
