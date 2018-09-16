import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", function(){



    class Row1TextHeader extends React.Component{
        render(){
            return(
                <h2 className="row1_h">SIT <span className="green">ON</span> OUR <span
                    className="green">CHAIR</span>
                </h2>
            )
        }
    }

    class Row1TextInnerText extends React.Component{
        render(){
            return(
                <p className="row1_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores atque beatae doloribus dolorum
                    eligendi eveniet, ex incidunt libero nam nihil officiis optio perspiciatis possimus,
                    quas quisquam
                    repudiandae sint, vero voluptate.
                </p>
            )
        }
    }

    class Row1TextButton extends React.Component{
        render(){
            return(
                <div className="row1_button_container">
                    <button className="row1_button green_filled">Zobacz więcej</button>
                </div>
            )
        }
    }

    class Row1Text extends React.Component{
        render(){
            return(
                <article className="row1_text_container">
                    <Row1TextHeader />
                    <Row1TextInnerText />
                    <Row1TextButton />
                </article>
            )
        }
    }

    class Row1Move1 extends React.Component{
        render(){
            return(
                <article className="row1_move">
                    <a className="move green" href="#">&lt;</a>
                </article>
            )
        }
    }

    class Row1Slider extends React.Component{
        render(){
            const list = [
                ['visible', 'images/black_chair.png', 'blackchair', 'black_chair'],
                ['', 'images/red_chair.png', 'redchair', 'red_chair'],
                ['', 'images/orange_chair.png', 'orangechair', 'orange_chair'],
            ];
            const listEl = list.map((element, index) => {
                return <li key={index} className={element[0]}><img src={element[1]} alt={element[2]} title={element[3]} /></li>
            });
            console.log(list);
            console.log(listEl);
            return(
                <ul className="slider">
                    {listEl}
                </ul>
            )
        }
    }

    class Row1Move2 extends React.Component{
        render(){
            return(
                <article className="row1_move">
                    <a className="move green" href="#">&gt;</a>
                </article>
            )
        }
    }

    class Row1 extends React.Component{
        handleMove1 = () => {

        }

        handleMove2 = () => {

        }

        handleRow1Button = () => {

        }

        render(){
            return(
                <section className="row1">
                    <article className="container flex">
                        <Row1Move1 handleClick={this.handleMove1}/>
                        <Row1Slider />
                        <Row1Text handleClickBtn={this.handleRow1Button}/>
                        <Row1Move2 handleClick={this.handleMove2}/>
                    </article>
                </section>
            )
        }
    }

    class Main extends React.Component{
        render(){
            return(
                <section>
                    <Row1 />
                </section>

            )
        }
    }


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
                    <Main />
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