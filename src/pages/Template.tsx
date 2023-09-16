import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Ashiqur from "../assets/images/ashiqur_pic_circle.png";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareModel from "../component/ShareModel";

import "../Blog.css";

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
		notify(
			"Great things are on the way! Stay tuned for exciting updates as we work diligently to bring you these amazing features.",
			"info"
		);
	};
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
						handleError={handleError}
					/>
				)}
			</header>
			<main>
				<img
					src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/hero_1c2VDMd.width-1200.format-webp.webp"
					alt=""
					id="blogImage"
				/>
				<article id="textContent">
					<p>
						Last month, we introduced the Secure AI Framework (SAIF),
						designed to help address risks to AI systems and drive
						security standards for the technology in a responsible manner.
					</p>
					<p id="content">
						To build on this momentum, today, we’re publishing a new
						report to explore one critical capability that we deploy to
						support SAIF: red teaming. We believe that red teaming will
						play a decisive role in preparing every organization for
						attacks on AI systems and look forward to working together to
						help everyone utilize AI in a secure way. The report examines
						our work to stand up a dedicated AI Red Team and includes
						three important areas: 1) what red teaming in the context of
						AI systems is and why it is important; 2) what types of
						attacks AI red teams simulate; and 3) lessons we have learned
						that we can share with others.
					</p>
					<h1 id="heading">What is red teaming?</h1>
					<p id="content">
						Google Red Team consists of a team of hackers that simulate a
						variety of adversaries, ranging from nation states and
						well-known Advanced Persistent Threat (APT) groups to
						hacktivists, individual criminals or even malicious insiders.
						The term came from the military, and described activities
						where a designated team would play an adversarial role (the
						“Red Team”) against the “home” team.
					</p>
					<p id="content">
						Over the past decade, we’ve evolved our approach to translate
						the concept of red teaming to the latest innovations in
						technology, including AI. The AI Red Team is closely aligned
						with traditional red teams, but also has the necessary AI
						subject matter expertise to carry out complex technical
						attacks on AI systems. To ensure that they are simulating
						realistic adversary activities, our team leverages the latest
						insights from world class Google Threat Intelligence teams
						like Mandiant and the Threat Analysis Group (TAG), content
						abuse red teaming in Trust & Safety, and research into the
						latest attacks from Google DeepMind.
					</p>
					<h1 id="heading">
						Common types of red team attacks on AI systems
					</h1>
					<p id="content">
						One of the key responsibilities of Google’s AI Red Team is to
						take relevant research and adapt it to work against real
						products and features that use AI to learn about their impact.
						Exercises can raise findings across security, privacy, and
						abuse disciplines, depending on where and how the technology
						is deployed. To identify these opportunities to improve
						safety, we leverage attackers' tactics, techniques and
						procedures (TTPs) to test a range of system defenses. In
						today’s report, there is a list of TTPs that we consider most
						relevant and realistic for real world adversaries and red
						teaming exercises. They include prompt attacks, training data
						extraction, backdooring the model, adversarial examples, data
						poisoning and exfiltration.
					</p>
					<img
						src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Inline_image_-_attacks_1.width-1000.format-webp.webp"
						alt=""
						id="blogImage"
					/>
					<h1 id="heading">Lessons learned</h1>
					<p id="content">
						We’ve already seen early indications that investments in AI
						expertise and capabilities in adversarial simulations are
						highly successful. Red team engagements, for example, have
						highlighted potential vulnerabilities and weaknesses, which
						helped anticipate some of the attacks we now see on AI
						systems. Here are the key lessons we list in the report.
					</p>
					<ul id="list">
						<li>
							Traditional red teams are a good starting point, but
							attacks on AI systems quickly become complex, and will
							benefit from AI subject matter expertise.
						</li>
						<li>
							Addressing red team findings can be challenging, and some
							attacks may not have simple fixes, so we encourage
							organizations to incorporate red teaming into their work
							feeds to help fuel research and product development
							efforts.
						</li>
						<li>
							Traditional security controls such as ensuring the systems
							and models are properly locked down can significantly
							mitigate risk.
						</li>
						<li>
							Many attacks on AI systems can be detected in the same way
							as traditional attacks.
						</li>
					</ul>
					<h1 id="heading">Looking forward</h1>
					<p id="content">
						Since its inception over a decade ago, Google’s Red Team has
						adapted to a constantly evolving threat landscape and been a
						reliable sparring partner for defense teams across Google. We
						hope this report helps other organizations understand how
						we’re using this critical team to secure AI systems and that
						it serves as a call to action to work together to advance SAIF
						and raise security standards for everyone. We recommend that
						every organization conduct regular red team exercises to help
						secure critical AI deployments in large public systems. You
						can review more information on SAIF implementation, securing
						AI pipelines, and you can also check out my talk this year at
						the DEF CON AI Village.
					</p>
				</article>
			</main>
		</div>
	);
}

export default Template;
