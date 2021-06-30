import {Fragment} from 'react';
import classes from './Header.module.css';
import hardeesLogo from '../../assets/hardees_logo.png';
import burger from '../../assets/burger.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {

   return(

    <Fragment>
    <header className={classes.header}>
    <img className="logo" src={hardeesLogo} alt="hardees logo"/>
    <HeaderCartButton onClick={props.onShowCart}/>
    </header>

    <div className={classes['main-image']}>
    <img src={burger} alt="burger"/>
    </div>
    </Fragment>
   )
}

export default Header;