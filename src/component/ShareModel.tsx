import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CancelIcon from "@mui/icons-material/Cancel";

import Gmail from "../assets/images/gmail.svg";
import Whatsapp from "../assets/images/whatsapp.svg";
import Fackbook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import Linkedin from "../assets/images/linkedin.svg";

interface Arguments {
	onClose: () => void;
	handelCopyLink: () => void;
	handleError: () => void;
	url: string;
}

function ShareModel({ onClose, url, handelCopyLink, handleError }: Arguments) {
	return (
		<div id="model">
			<div>
				<h3 id="shareTop">
					<span>Share</span>{" "}
					<CancelIcon onClick={onClose} id="cancel-icon" />
				</h3>
				<p id="link">
					<input type="text" value={url} readOnly />
					<button className="btn btn-primary" onClick={handelCopyLink}>
						Copy Link
					</button>
				</p>
				<div id="platforms">
					<div onClick={handleError}>
						<img src={Gmail} alt="" />
						<span>Gmail</span>
					</div>
					<div onClick={handleError}>
						<img
							src={Whatsapp}
							alt=""
							style={{
								width: "55px",
								height: "55px",
								marginTop: "-8px",
							}}
						/>
						<span>Whatsapp</span>
					</div>
					<div onClick={handleError}>
						<img
							src={Fackbook}
							alt=""
							style={{ width: "45px", height: "45px", marginTop: "3px" }}
						/>
						<span>Facebook</span>
					</div>
					<div onClick={handleError}>
						<img
							src={Twitter}
							alt=""
							style={{
								width: "60px",
								height: "60px",
								marginTop: "-6px",
							}}
						/>
						<span>Twitter</span>
					</div>
					<div onClick={handleError}>
						<img
							src={Linkedin}
							alt=""
							style={{ width: "45px", height: "45px", marginTop: "3px" }}
						/>
						<span>Linkedin</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShareModel;
