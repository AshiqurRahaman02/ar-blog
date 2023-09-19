import React from "react";
import { Link } from "react-router-dom";

function Comment() {
	return (
		<div className="post-main">
			
            <h2 className="headline headline-2 section-title">
				<span className="span">Comments</span>
			</h2>
            <div id="comment">
						<input type="text" placeholder="Enter Your answer..." />
						<Link to="#" className="btn btn-primary">
						Post Comment
					</Link>
					</div>
			<ul className="grid-list">
            
				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "50px", height: "50px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-3.jpg"
								width="50px"
								height="50px"
								loading="lazy"
								alt="Every day, in every city and town across the country"
								className="img-cover"
							/>
						</figure>

						<div className="card-content" style={{position:"relative", top: "-10px"}}>
							<div className="warpper">
								<p className="card-subtitle">Ashiqur Rahaman</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
							<h4 className=" headline-4"  style={{position:"relative", top: "-10px"}}>
                            Every day, in every city and town across the country
							</h4>
						</div>
					</div>
				</li>
			</ul>

			<nav aria-label="pagination" className="pagination" style={{ display: "none" }}>
				<Link to="#" className="pagination-btn" aria-label="previous page">
					{/* <ion-icon
										name="arrow-back"
										aria-hidden="true"
									></ion-icon> */}
				</Link>

				<Link to="#" className="pagination-btn">
					1
				</Link>
				<Link to="#" className="pagination-btn">
					2
				</Link>
				<Link to="#" className="pagination-btn">
					3
				</Link>
				<Link to="#" className="pagination-btn" aria-label="more page">
					...
				</Link>

				<Link to="#" className="pagination-btn" aria-label="next page">
					{/* <ion-icon
										name="arrow-forward"
										aria-hidden="true"
									></ion-icon> */}
				</Link>
			</nav>
		</div>
	);
}

export default Comment;
