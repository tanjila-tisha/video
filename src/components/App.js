import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.onSearchSubmit("Funny kids");
  }

  onSearchSubmit = async (videoSearchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: videoSearchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos } = this.state;
    console.log(this.state.videos);
    return (
      <div className="ui container">
        <SearchBar onVideoSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videoList={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
