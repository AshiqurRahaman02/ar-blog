import React from "react";
import { Link } from "react-router-dom";

interface Arguments {
	tag: string;
}

function RelatedPost({ tag }: Arguments) {
	return (
		<div className="card aside-card">
			<h3 className="headline headline-2 aside-title">
				<span className="span">Related Posts</span>
			</h3>
			<ul className="popular-list">
				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "64px", height: "64px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-1.jpg"
								width="64"
								height="64"
								loading="lazy"
								alt="Creating is a privilege but it’s also a gift"
								className="img-cover"
							/>
						</figure>

						<div className="card-content">
							<h4 className="headline headline-4 card-title">
								<Link to="#" className="link hover-2">
									Creating is a privilege but it’s also a gift
								</Link>
							</h4>

							<div className="warpper">
								<p className="card-subtitle">15 mins read</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
						</div>
					</div>
				</li>

				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "64px", height: "64px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-2.jpg"
								width="64"
								height="64"
								loading="lazy"
								alt="Being unique is better than being perfect"
								className="img-cover"
							/>
						</figure>

						<div className="card-content">
							<h4 className="headline headline-4 card-title">
								<Link to="#" className="link hover-2">
									Being unique is better than being perfect
								</Link>
							</h4>

							<div className="warpper">
								<p className="card-subtitle">15 mins read</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
						</div>
					</div>
				</li>

				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "64px", height: "64px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-3.jpg"
								width="64"
								height="64"
								loading="lazy"
								alt="Every day, in every city and town across the country"
								className="img-cover"
							/>
						</figure>

						<div className="card-content">
							<h4 className="headline headline-4 card-title">
								<Link to="#" className="link hover-2">
									Every day, in every city and town across the country
								</Link>
							</h4>

							<div className="warpper">
								<p className="card-subtitle">15 mins read</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
						</div>
					</div>
				</li>

				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "64px", height: "64px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-4.jpg"
								width="64"
								height="64"
								loading="lazy"
								alt="Your voice, your mind, your story, your vision"
								className="img-cover"
							/>
						</figure>

						<div className="card-content">
							<h4 className="headline headline-4 card-title">
								<Link to="#" className="link hover-2">
									Your voice, your mind, your story, your vision
								</Link>
							</h4>

							<div className="warpper">
								<p className="card-subtitle">15 mins read</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
						</div>
					</div>
				</li>

				<li>
					<div className="popular-card">
						<figure
							className="card-banner img-holder"
							style={{ width: "64px", height: "64px" }}
						>
							<img
								src="https://ashiqurrahaman02.github.io/blog/assets/images/popular-post-2.jpg"
								width="64"
								height="64"
								loading="lazy"
								alt="Being unique is better than being perfect"
								className="img-cover"
							/>
						</figure>

						<div className="card-content">
							<h4 className="headline headline-4 card-title">
								<Link to="#" className="link hover-2">
									Being unique is better than being perfect
								</Link>
							</h4>

							<div className="warpper">
								<p className="card-subtitle">15 mins read</p>

								<time className="publish-date" dateTime="2022-04-15">
									15 April 2022
								</time>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default RelatedPost;
