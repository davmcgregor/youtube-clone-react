import React from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components';

import youtube from './api/youtube'

class App extends React.Component {
  state = {
    videos: []
    selectedVideo: null,
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchTerm,
    }
  });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  render () {
    return(
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* VDIEO LIST*/}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;