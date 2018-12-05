import React, { Component } from "react";
import VideoCarousel from "./components/Carousel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row Content_1">
          <div className="text-1 col-md-12 order-md-1 col-lg-6 order-lg-2">
            <h2>MONSOON III</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>
          <div className="col-md-12 order-md-2 col-lg-6 order-lg-1">
            <img
              src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
              alt="asset 1"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row Content_2">
          <div className="text-2 col-lg-6">
            <h2>BEAMS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
              alt="asset 2"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row Content_3">
          <div className="text-1 col-md-12 order-md-1 col-lg-6 order-lg-2">
            <h2>MOVE 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>

          <div className="col-md-12 order-md-2 col-lg-6 order-lg-1">
            <img
              src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
              alt="asset 3"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row Carousel">
          <div className="col-md-12 col-lg-12">
            <VideoCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
