import logo from '../../assets/logo_o_jardin.png';
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

                <p>Facebook</p>
                <p>Instagram</p>
            </div>

            <div className='footer-mandatory-information'>
                <a className='footer-legal-notice'>Mentions légales   |  </a>   ©2024
                <a className='footer-confidentiality'>Confidentialité </a>
            </div>

        </footer>
    );
}

export default Footer;
