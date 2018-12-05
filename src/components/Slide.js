import React from "react";
import "./Slide.css";

const Slide = props => {
	var tint = {
		backgroundColor: props.tintColor,
		backgroundBlendMode: "multiply"
	};

	var buyBtnStyle = {
		backgroundColor: props.secondaryColor,
		color: "#ffffff",
		borderColor: props.secondaryColor
	};
	return (
		<div className="row">
			<div className="col-lg-12 " style={tint}>
				<div className="SlideBg SlideBgBlur">
					<img src={props.posterSrc} alt="" />
				</div>
				<div className="row">
					<div className="col-lg-4 SlideImageContainer">
						<div className="SlideImage">
							<img
								className="img-fluid"
								src={props.posterSrc}
								alt=""
							/>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="SlideDescription SlideDescriptionContainer">
							<h3>{props.title}</h3>
							<p>{props.description}</p>
							<button className="btn" style={buyBtnStyle}>
								<span className="glyphicon glyphicon-expand" />
								Buy Now
							</button>
							<button className="btn trailer-btn">
								Watch Trailer
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slide;