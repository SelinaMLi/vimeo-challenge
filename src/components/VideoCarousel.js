import React, { Component } from "react";
import Slide from "./Slide";
import { Carousel } from "react-responsive-carousel";
import "./Slide.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class VideoCarousel extends Component {
	render() {
		return (
			<Carousel
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				infiniteLoop={true}
			>
				<div className="Carousel">
					<Slide
						posterSrc="https://i.vimeocdn.com/vod_poster/117162_550x814.jpg"
						title="Hunt for the Wilderpeople"
						description="Raised on hip-hop and foster care,
											defiant city kid Ricky gets a fresh
											start in the New Zealand
											countryside. From the director of
											What We Do In The Shadows."
						tintColor="#081d2b"
						secondaryColor="#3298DA"
					/>
				</div>
				<div>
					<Slide
						posterSrc="https://i.vimeocdn.com/vod_poster/112546_550x814.jpg"
						title="Nichts passiert / A Decent Man"
						description="A Swiss family takes a ski vacation
											and runs into trouble when the
											father, the titular decent man,
											finds himself in a series of moral
											quandaries."
						tintColor="#083645"
						secondaryColor="#1ab7e6"
					/>
				</div>
				<div>
					<Slide
						posterSrc="https://i.vimeocdn.com/vod_poster/114877_550x814.jpg"
						title="Vice Versa"
						description="Come along with the Good Company
											Crew as they travel throughout the
											US, Japan, BC and Quebec to showcase
											skiing in the best way possible."
						tintColor="#444422"
						secondaryColor="#aaaa55"
					/>
				</div>
				<div>
					<Slide
						posterSrc="https://i.vimeocdn.com/vod_poster/113412_550x814.jpg"
						title="The Fourth Phase"
						description="From the creators of The Art of
											FLIGHT, Red Bull Media House
											presents THE FOURTH PHASE, a
											snowboarding epic starring iconic
											athlete Travis Rice."
						tintColor="#122a3b"
						secondaryColor="#306f9a"
					/>
				</div>
				<div>
					<Slide
						posterSrc="https://i.vimeocdn.com/vod_poster/117464_550x814.jpg"
						title="Full Moon"
						description="Be inspired by women who push boundaries. 
						FULL MOON showcases the legends, current icons and future 
						prodigies of this ever-evolving lifestyle sport."
						tintColor="#333333"
						secondaryColor="#808080"
					/>
				</div>
			</Carousel>
		);
	}
}

export default VideoCarousel;
