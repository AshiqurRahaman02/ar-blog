import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Ashiqur from "../assets/images/ashiqur_pic_circle.png";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareModel from "../component/ShareModel";

// for practice purposes

function Template() {
	const [isLiked, setIsLiked] = useState(false);
	const [isShare, setIsShare] = useState(false);
	const url = window.location.href;

	const handelLike = () => {
		setIsLiked(true);
	};
	const handelShare = () => {
		setIsShare(true);
	};
	const notify = (message: string, type: string) => {
		if (type === "error") {
			toast.error(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (type === "success") {
			toast.success(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (type === "info") {
			toast.info(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (type === "warning") {
			toast.warn(message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			toast("🦄 Wow so easy!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	const handelCopyLink = () => {
		let q: string = url;

		navigator.clipboard.writeText(q).then(
			function () {
				notify("Link copied in clipboard", "success");
			},
			function () {
				notify("Failed to copy question", "error");
			}
		);
	};

  const handleError = () => {
    notify("Great things are on the way! Stay tuned for exciting updates as we work diligently to bring you these amazing features.", "info")
  }
	return (
		<div
			className="container"
			style={{ marginTop: "120px", marginBottom: "50px" }}
		>
			<ToastContainer />
			<header>
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
						{isLiked ? (
							<p>
								<ThumbUpAltIcon id="like-icon" /> Liked
							</p>
						) : (
							<p onClick={handelLike}>
								<ThumbUpOffAltIcon id="like-icon" /> Like
							</p>
						)}
						<p onClick={handelShare}>
							<ShareOutlinedIcon id="share-icon" /> Share
						</p>
					</div>
				</div>
				{isShare && (
					<ShareModel
						url={url}
						onClose={() => setIsShare(false)}
						handelCopyLink={handelCopyLink}
            handleError = {handleError}
					/>
				)}
			</header>
		</div>
	);
}

export default Template;
