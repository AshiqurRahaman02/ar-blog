import React, { useState } from "react";
import Ashiqur from "../assets/images/ashiqur_pic_circle.png";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

// for practice purposes

function Template() {
  const [isLiked, setIsLiked] = useState(false)

  const handelLike = ()=>{
    setIsLiked(true);
  }
	return (
		<div
			className="container"
			style={{ marginTop: "120px", marginBottom: "50px" }}
		>
			<p id="hashtags">
				<span>#safety </span> &nbsp;&nbsp; <span> #security</span>
			</p>

			<h1 id="title">
				Google's AI Red Team: the ethical hackers making AI safer
			</h1>

			<p id="read-time">
				<AccessTimeIcon /> 3 min read
			</p>

			<div id="card">
				<div className="profile-card">
					<img
						src={Ashiqur}
						width="48"
						height="48"
						loading="lazy"
						alt="Ashiqur"
						className="profile-banner"
					/>

					<div>
						<p className="card-title">Ashiqur</p>

						<p className="card-subtitle">25 Nov 2022</p>
					</div>
				</div>

        <div className="blog-card">
          {isLiked? <p><ThumbUpAltIcon id="like-icon"/> Liked</p> : <p onClick={handelLike}><ThumbUpOffAltIcon  id="like-icon"/> Like</p>}
          <p><ShareOutlinedIcon id="share-icon"/> Share</p>
        </div>
			</div>
		</div>
	);
}

export default Template;
