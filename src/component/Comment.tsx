import React from "react";
import { Link } from "react-router-dom";

function Comment() {
	const comments = [
		{
		  name: "Alice",
		  comment: "Great job!",
		  createdAt: "2023-08-04T04:02:15.640+00:00",
		},
		{
		  name: "Bob",
		  comment: "I love this!",
		  createdAt: "2023-08-04T04:12:25.640+00:00",
		},
		{
		  name: "Charlie",
		  comment: "Awesome work!",
		  createdAt: "2023-08-04T04:22:35.640+00:00",
		},
		{
		  name: "David",
		  comment: "Impressive!",
		  createdAt: "2023-08-04T04:32:45.640+00:00",
		},
		{
		  name: "Eve",
		  comment: "This is fantastic!",
		  createdAt: "2023-08-04T04:42:55.640+00:00",
		},
		{
		  name: "Frank",
		  comment: "Well done!",
		  createdAt: "2023-08-04T04:53:05.640+00:00",
		},
		{
		  name: "Grace",
		  comment: "Incredible!",
		  createdAt: "2023-08-04T05:03:15.640+00:00",
		},
		{
		  name: "Harry",
		  comment: "I'm amazed!",
		  createdAt: "2023-08-04T05:13:25.640+00:00",
		},
		{
		  name: "Ivy",
		  comment: "Outstanding!",
		  createdAt: "2023-08-04T05:23:35.640+00:00",
		},
		{
		  name: "Jack",
		  comment: "Brilliant!",
		  createdAt: "2023-08-04T05:33:45.640+00:00",
		},
		{
		  name: "Katie",
		  comment: "Superb!",
		  createdAt: "2023-08-04T05:43:55.640+00:00",
		},
		{
		  name: "Liam",
		  comment: "Excellent work!",
		  createdAt: "2023-08-04T05:54:05.640+00:00",
		},
		{
		  name: "Mia",
		  comment: "This is top-notch!",
		  createdAt: "2023-08-04T06:04:15.640+00:00",
		},
		{
		  name: "Noah",
		  comment: "I'm speechless!",
		  createdAt: "2023-08-04T06:14:25.640+00:00",
		},
		{
		  name: "Olivia",
		  comment: "You're incredible!",
		  createdAt: "2023-08-04T06:24:35.640+00:00",
		},
		{
		  name: "Paul",
		  comment: "You're a genius!",
		  createdAt: "2023-08-04T06:34:45.640+00:00",
		},
		{
		  name: "Quinn",
		  comment: "This is mind-blowing!",
		  createdAt: "2023-08-04T06:44:55.640+00:00",
		},
		{
		  name: "Ryan",
		  comment: "Remarkable!",
		  createdAt: "2023-08-04T06:55:05.640+00:00",
		},
		{
		  name: "Sophia",
		  comment: "I'm in awe!",
		  createdAt: "2023-08-04T07:05:15.640+00:00",
		},
		{
		  name: "Thomas",
		  comment: "You're a legend!",
		  createdAt: "2023-08-04T07:15:25.640+00:00",
		},
	  ];

	  function formatDate(timestamp: string): string {
		const options: Intl.DateTimeFormatOptions = {
		  year: 'numeric',
		  month: 'long',
		  day: 'numeric',
		};
	  
		const date = new Date(timestamp);
		return date.toLocaleDateString(undefined, options);
	  }
	  
	return (
		<div className="post-main">
			
            <h2 className="headline headline-2 section-title">
				<span className="span">Comments</span>
			</h2>
            <div id="comment">
						<input type="text" placeholder="Enter Your answer..." />
						<Link to="#" className="btn btn-primary" id="post-comment">
						Post Comment
					</Link>
					</div>
			<ul className="grid-list" id="comments">
				{comments.map(comment =>{

					const formattedDate = formatDate(comment?.createdAt);
					return<li>
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
								<p className="card-subtitle">{comment?.name}</p>

								<time className="publish-date" dateTime="2022-04-15">
									{formattedDate}
								</time>
							</div>
							<h4 className=" headline-4"  style={{position:"relative", top: "-10px"}}>
                            	{comment?.comment}
							</h4>
						</div>
					</div>
					</li>
				})}
            
				{/* <li>
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
				</li> */}
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
