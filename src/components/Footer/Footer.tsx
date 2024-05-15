import logo from '../../assets/logo.png';
import './Footer.scss';

function Footer() {
    return (
        
        <footer className='footer'>
            <div className='footer-content'>
                <img src={logo} className="footer-logo-jardin" alt="logo O'Jardin"/>

                <button
                type="button"
                className="footer-button">
                    Contactez-nous
                </button>

                <div className='footer-social-network'>
                <p className='footer-logo-facebook'>Facebook</p>
                <p className='footer-logo-instagram'>Instagram</p>
                </div>
            </div>

            <div className='footer-mandatory-information'>
                <a className='footer-legal-notice'>Mentions légales   |</a>   
                <a className='footer-confidentiality'>Confidentialité</a>
                <p className='footer-copyright'>©2024</p>
            </div>

        </footer>
    );
}

export default Footer;
