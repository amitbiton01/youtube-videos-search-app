import React from 'react';
import SearchBar from "./SearchBar";
import youTube from "../apis/youTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('Maccabi Haifa');
    }

    onTermSubmit = async (term) => {
        const response = await youTube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {

        const {videos, selectedVideo} = this.state;

        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
