import '../styles/Footer.css';
import logo from '../logo.png';
import { AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';


function Footer (){
    return(
        <div className='footer'>
            <div className='image'>
                <a href="/" itemprop="url" class="site-header__logo-link">
                    
                    <img src={logo} className="logo" alt="logo" itemprop="logo" />              
                </a>
                <p>Shopping website</p>
            </div>
            <div className='contact'>
                <h>Contact: </h> 
                <p>Phone : +33 780 98 94 00</p>
                <p>Adress :
                    25 Rue Claude Tillier,
                    Paris
                    75012
                    France</p> 
                    <h>2022 All rights reserved</h> 
                    <a href='https://www.cnil.fr/'>Mentions Légales & RGPD </a>      
            </div>
            <div className='social'>
                <h>Stay connected 😉</h> 
                <div className='grid'>
                    <div class="facebook">
                        <a href="" className="facebook">
                            <AiOutlineFacebook />
                        </a>
                    </div>
                    <div class="insta">
                        <a href="" className="insta">
                        < AiOutlineInstagram/>
                        </a>
                    </div> 
                </div>      
            </div>

        </div>
    )

}
export default Footer