import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", function(){



    class NavLogo extends React.Component{
        render(){
            return(
                <article className="nav__logo">
                    <h1 className="nav__h">SIT <span className="green">ON</span> CHAIR</h1>
                </article>
            )
        }
    }

    class NavInnerList extends React.Component{
        handleListClick = (e) => {
            e.target.nextSibling.style.display = e.target.nextSibling.style.display == 'block' ? 'none': 'block';
            // console.log(e.target.nextSibling);
        }

        render(){
            const list = ['Aktualności', 'Nasz team', 'Historia'];
            const listItems = list.map((element, index) => {
                return <li key={index} className="nav__item--2"><a className="nav__link" href="#">{element}</a></li>
            });
            return(
                <li className="nav__item--1" id="nav__display" >
                    <a className="nav__link" href="#" id="nav__link_id" onClick={this.handleListClick}>
                        O FIRMIE
                    </a>
                    <ul className="nav__list--2" id="list">
                        {listItems}
                    </ul>
                </li>
            )
        }
    }

    class NavList extends React.Component{
        render(){
            const list = ['GALERIA', 'KONTAKT'];
            const listItems = list.map((element, index) => {
                return <li key={index} className="nav__item--1"><a className="nav__link" href="">{element}</a></li>
            });
            return(
                <ul className="nav__list--1">
                    <NavInnerList />
                    {listItems}
                </ul>
            )
        }
    }
    
    class Header extends React.Component{
        render(){
            return(
                <header className="header">
                    <nav className="container flex">
                        <NavLogo />
                        <NavList />
                    </nav>
                </header>
            )
        }
    }

    class App extends React.Component{
        render(){
            return(
                <section>
                    <Header />
                    {/*<Main />*/}
                    {/*<Footer />*/}
                </section>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});