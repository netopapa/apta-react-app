import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { H3, H4 } from 'nachos-ui';

import { DEVIVE_WIDTH, DEVIVE_HEIGHT, URL_API, URL_IMG } from '../../config/constants';
import { getCurso } from "../../services/CursosService";

export class Single extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curso: {}
        }
    }

    componentDidMount(){
        fetch(`${URL_API}?id=1`)
        .then(resp => resp.json())
        .then(resp => this.setState({curso: resp}))
    }

    render() {
        const { curso } = this.state;
        let foto = URL_IMG + curso.foto;
        console.debug(foto);
        return (
            <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                <H3 align="center" style={styles.black} >{curso.nome}</H3>
                <Image source={{uri: foto}} style={styles.fotoCurso}/>

                <H4 style={styles.black} >Sobre o curso:</H4>
                <Text>{curso.obs}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    black: {
        color: '#000'
    },
    fotoCurso: {
        width: DEVIVE_WIDTH,
        height: DEVIVE_WIDTH
    }
});
