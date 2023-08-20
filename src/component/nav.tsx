import React, { useState } from "react";
import { Link } from "react-router-dom";

import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

import AshiqurLogo from '../assets/images/Ashiqur_logo.png';

function Nav() {
	const [navActive, setNavActive] = useState(false);

	const toggleNav = () => {
		console.log("toggle");
		setNavActive(!navActive);
		document.body.classList.toggle("nav-active");
	};
	return (
		<div>
			<header className="header" data-header>
				<div className="container">
					<Link to="https://ashiqurrahaman02.github.io/blog/" className="logo">
						<img
							src={AshiqurLogo}
							width="119"
							height="37"
							alt="Ashiqur logo"
						/>
					</Link>

					<nav className={`navbar ${navActive ? "active" : ""}`} data-navbar>
						<div className="navbar-top">
							<Link to="https://ashiqurrahaman02.github.io/blog/" className="logo">
								<img
									src={AshiqurLogo}
									width="119"
									height="37"
									alt="Ashiqur logo"
								/>
							</Link>

							<button
								className="nav-close-btn"
								aria-label="close menu"
								data-nav-toggler
                                onClick={toggleNav}
							>
								<ClearIcon />
							</button>
						</div>

						<ul className="navbar-list">
							<li>
								<Link
									to="https://ashiqurrahaman02.github.io/blog/"
									className="navbar-link hover-1"
									data-nav-toggler
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									to="https://ashiqurrahaman02.github.io/blog/#topics"
									className="navbar-link hover-1"
									data-nav-toggler
								>
									Topics
								</Link>
							</li>

							<li>
								<Link
									to="https://ashiqurrahaman02.github.io/blog/#featured"
									className="navbar-link hover-1"
									data-nav-toggler
								>
									Featured Post
								</Link>
							</li>

							<li>
								<Link
									to="https://ashiqurrahaman02.github.io/blog/#recent"
									className="navbar-link hover-1"
									data-nav-toggler
								>
									Recent Post
								</Link>
							</li>

							<li>
								<Link
									to="https://ashiqurrahaman02.github.io/blog/#contact"
									className="navbar-link hover-1"
									data-nav-toggler
								>
									Contact
								</Link>
							</li>
						</ul>

						<p className="copyright-text">
							Redesigned & Rebuilt by Ashiqur Rahaman Inspired By
							codewithsadee
						</p>
					</nav>

					<Link to="#" className="btn btn-primary">
						Subscribe
					</Link>
                    

					<button
                        className={`nav-open-btn ${navActive ? 'active' : ''}`}
						aria-label="open menu"
						data-nav-toggler
                        onClick={toggleNav}
					>
						<MenuIcon />
					</button>
				</div>
			</header>
		</div>
	);
}

export default Nav;
