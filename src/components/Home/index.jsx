import './style.css'
import selfie from '../../imagens/eu.jpeg'

const Home = () => {
    return(
        <div className="home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content">
                    <div className="home__data">
                        <h3 className="section__subtitle home__subtitle"><span className=''>Olá,</span> me chamo</h3>

                        <h1 className='section__title home__title'>Henrique</h1>

                        <p className="home__description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores mollitia officia nihil minus eligendi, possimus consequatur rem est voluptate maiores unde aut odit modi atque, iure, consectetur veritatis nesciunt?
                        </p>

                        <button className="btn__download">Download Curriculo</button>
                    </div>

                    <div className="home__social">
                        <a href="https://github.com/Jeidencw" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/henrique.camargoweigert" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/henrique-camargo-weigert-0064a8228/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="home__image">
                    <img src={selfie} alt="selfie" />
                </div>
            </div>
        </div>
    )
}

export default Home