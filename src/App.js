import React from 'react';

import { Grid } from '@material-ui/core';  //las llaves significan que no es el export por default

import { Buscar, DetalleVideo, ListaVideo } from './componentes';
// import { ListaVideo } from './componentes/ListaVideo';

import youtube from './api/youtube';

//smart components
class App extends React.Component{
    state = {
        videos: [],
        videoSeleccionado: null,
    }

    componentDidMount(){
        this.handleSubmit("noticias");
    }

    onVideoSelect = (video) => {
        this.setState({ videoSeleccionado: video });
    }

    handleSubmit = async (busqueda) =>{
        const respuesta = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: '5',
                key:'AIzaSyCPM5JeV5IG-u0Inb09pQi0RRQuuIaOQt8',
                q: busqueda,
            }
        });

        console.log(respuesta);
        console.log(respuesta.data.items);
        this.setState({ videos: respuesta.data.items, videoSeleccionado: respuesta.data.items[0]});
    }

    

    render(){
        const { videoSeleccionado, videos } = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Buscar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <DetalleVideo video={videoSeleccionado} />
                        </Grid>
                        <Grid item xs={4}>
                            <ListaVideo onVideoSelect={this.onVideoSelect} videos={videos} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

//dummy components
// const App = () =>{
//     return(<h1>Youtube clone</h1>);
// }

export default App;