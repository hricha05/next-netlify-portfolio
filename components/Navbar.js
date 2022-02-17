import React from "react";
import styles from "/components/Navbar.module.scss";

export default function Navbar({logo}) {
	return (
        <div className={styles.header}>
            <h1 className={styles.logo}><a>{logo}</a></h1>
            <Toggle />
            <nav className={styles.navigation} id="sideNav">
                <ul className={styles.navigation__menu}>
                    <li className={styles.menu__link}><a href="#">About</a></li>
                    <li className={styles.menu__link}><a href="#">Projects</a></li>
                    <li className={styles.menu__link}><a href="#">Contact</a></li>
                    <li className={styles.menu__link}><a href="#" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </div>
	);
}

// const menuBtn = document.getElementById("btn");
// let menuOpen = false;

// menuBtn.addEventListener("click", () => {
// 	if (!menuOpen) {
// 		menuBtn.classList.add("open");
// 		menuOpen = true;
// 	} else {
// 		menuBtn.classList.remove("open");
// 		menuOpen = false;
// 	}
// });

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This blinding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className={styles.menu__btn} id="btn" onClick={this.handleClick}>
                {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
                <div className={styles.menu__btn__icon}></div>
            </div>
        )
    }
}