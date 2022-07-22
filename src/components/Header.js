import '../styles/Header.css';
import logo from '../logo.png';
import Category from './Category';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';



function Header ({children}){


    return(
        <div className='head'>
            <div className='image'>
                <a href="/" itemprop="url" class="site-header__logo-link">
                    <img src={logo} className="logo" alt="logo" itemprop="logo" />              
                </a>
            </div>
            <div className='grid_item'>

            <Category children={children}/>
                <div class="search" >
                    <form action="/search" method="get" class="site-header__search small--hide" role="search">
                        <input className='search' type="search" name="q" id="SiteNavSearch" placeholder="Recherche" aria-label="Recherche" class="site-header__search-input"/>
                        <button type="submit" class="text-link site-header__link site-header__search-submit">
                            <AiOutlineSearch />
                        </button>
                    </form>
                </div>
                <div class="account-log">
                    <a href="/Login" className="account">
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