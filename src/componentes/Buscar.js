/* eslint-disable no-restricted-globals */
import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class buscar extends React.Component{
    state = {
        busqueda: '',
    }

    //las funciones arrow son especiales porque no tienen su propio "this"
    //this dento de una funcion arrow refiere al this de la clase
    //por el contrario, en las funciones normales el this refiere solo al alcance dentro de la propia funcion
    handleChange = () => {
        this.setState({ busqueda: event.target.value });
    }

    //destructuring
    handleSubmit = () => {
        const { busqueda } = this.state;
        const { onFormSubmit } = this.props;

        //se le mandan los datos a App
        onFormSubmit(busqueda);

        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={ {padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Buscar..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default buscar;