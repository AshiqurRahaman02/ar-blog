import React, { useState } from "react";
import { Link } from "react-router-dom";

import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AshiqurLogo from '../assets/images/Ashiqur_logo.png';

function Footer() {
  return (
    <footer id="contact">
			<div className="container">
				<div className="card footer">
					<div className="section footer-top">
						<div className="footer-brand">
							<Link to="#" className="logo">
								<img
									src={AshiqurLogo}
									width="119"
									height="37"
									loading="lazy"
									alt="Ashiqur logo"
									style={{marginTop: '-20px'}}
								/>
							</Link>

							<p className="footer-text">
								When an unknown prnoto sans took a galley and scrambled
								it to make specimen book not only five When an unknown
								prnoto sans took a galley and scrambled it to five
								centurie.
							</p>

							<p className="footer-list-title">Address</p>

							<address className="footer-text address">
								Malda <br />
								West Bengal, India. <br />
								732101
							</address>
						</div>

						<div className="footer-list">
							<p className="footer-list-title">Contact</p>

							<ul>
								<li>
									<Link
										to="https://ashiqurrahaman02.github.io/"
										className="social-link"
										target="_blank"
									>
										<LanguageIcon/>

										<span className="span">Portfolio</span>
									</Link>
								</li>

								<li>
									<Link
										to="mailto:ashiqur999999@gmail.com"
										className="social-link"
										target="_blank"
									>
										<EmailIcon/>

										<span className="span">Gmail</span>
									</Link>
								</li>

								<li>
									<Link
										to="https://github.com/AshiqurRahaman02"
										className="social-link"
										target="_blank"
									>
										<GitHubIcon/>

										<span className="span">Github</span>
									</Link>
								</li>

								<li>
									<Link
										to="https://twitter.com/ashik_0273791"
										className="social-link"
										target="_blank"
									>
										<TwitterIcon/>

										<span className="span">Twitter</span>
									</Link>
								</li>

								<li>
									<Link
										to="https://www.linkedin.com/in/ashiqur-rahaman-76b010255/"
										className="social-link"
										target="_blank"
									>
										<LinkedInIcon/>

										<span className="span">LinkedIn</span>
									</Link>
								</li>

								<li>
									<Link
										to="https://www.instagram.com/_ashik__02/"
										className="social-link"
										target="_blank"
									>
										<InstagramIcon/>

										<span className="span">Instagram</span>
									</Link>
								</li>
							</ul>
						</div>

						<div className="footer-list">
							<p className="footer-list-title">Newsletter</p>

							<p className="footer-text">
								Sign up to be first to receive the latest stories
								inspiring us, case studies, and industry news.
							</p>

							<div className="input-wrapper">
								<input
									type="text"
									name="name"
									placeholder="Your name"
									required
									className="input-field"
									autoComplete="off"
								/>

								<PersonIcon style={{position: "relative",top: "-33px"}}/>
							</div>

							<div className="input-wrapper">
								<input
									type="email"
									name="email_address"
									placeholder="Emaill address"
									required
									className="input-field"
									autoComplete="off"
								/>

								<EmailIcon style={{position: "relative",top: "-33px"}}/>
							</div>

							<Link to="#" className="btn btn-primary">
								<span className="span">Subscribe</span>

								<ArrowForwardIcon/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
