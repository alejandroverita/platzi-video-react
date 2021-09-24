import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import gravatar from '../utils/gravatar';
// import classNames from 'classnames';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props)=> {

    const {user} = props;

    const userLogedIn = () => user.email !== undefined; /* Verificamos si nuestro usuario ya tiene un email registrado en su sesion */
    const hasUser = Object.keys(user).length > 0;
    

    const handleLogout = () => {
        props.logoutRequest({})/* Le pasamos un objeto vacio como payload que sera lo que se establezca en el reducer */
    }

    const headerClass = (useLocation().pathname === '/register' || useLocation().pathname === '/login') ? 'header greenHeader' : 'header';
    
     return (
        <header className={`header ${headerClass}`}>
            {console.log(headerClass)}
            <Link to='/'>
                <img className="header__img" src={logo} alt="Platzi Video" />   
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">

                    {
                        userLogedIn() ? 
                        <img src={gravatar(user.email)} alt="user email" />
                        :

                        <img src={userIcon} alt="user icon" />

                    }
                    <p>Perfil</p>
                </div>
                {
                    hasUser ?
                        <ul>
                            <li><p>Bienvenido <b>{user.name}</b></p></li> 
                            <li><p>Mi perfil</p></li>
                            <li><a onClick={handleLogout}>Cerrar sesion</a></li>
                        </ul>
                        :
                        <ul>
                            <li><Link to="/login">Iniciar sesion</Link></li>
                            <li><Link to="/register">Registrate</Link></li>
                        </ul>
                }
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);