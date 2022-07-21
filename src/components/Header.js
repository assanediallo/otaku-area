import '../styles/Header.css';
import logo from '../logo.png';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

function Header (){


    return(
        <div className='head'>
            <div className='image'>
                <a href="/" itemprop="url" class="site-header__logo-link">
                    <img src={logo} className="logo" alt="logo" itemprop="logo" />              
                </a>
            </div>
            <div className='grid_item'>
                
                <div class="search" style={{marginRight:"30px;"}}>
                    <form action="/search" method="get" class="site-header__search small--hide" role="search">
                        <input type="search" name="q" id="SiteNavSearch" placeholder="Recherche" aria-label="Recherche" class="site-header__search-input"/>
                        <button type="submit" class="text-link site-header__link site-header__search-submit">
                            <AiOutlineSearch />
                        </button>
                    </form>
                </div>
                <div class="account-log">
                    <a href="/account" className="account">
                        <FaUserAlt />
                     </a>
                </div>
                <div class="cart">
                    <a href="/cart" className="cart">
                    <AiOutlineShoppingCart/>
                    </a>
                </div>
                
            </div>

        </div>
    )

}
export default Header