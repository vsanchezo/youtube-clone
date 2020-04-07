import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const ListaVideo = ({ videos, onVideoSelect }) => {
    const listaDeVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />);

    return (
        <Grid container spacing={10}>
            {listaDeVideos}
        </Grid>
    )
}

export default ListaVideo;