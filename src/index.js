import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch  from 'youtube-api-search';

import SearchBar from './components/search_Bar';
import VideoList from './components/video_List';
import VideoDetail from './components/video_Detail'

const API_key = 'AIzaSyAa3mKeBTmREZ6D-mEYCFBGCDET-neeSdw';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('westworld')
    };

    videoSearch(term) {
        YTSearch({ key:API_key , term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
