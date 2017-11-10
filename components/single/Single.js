import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { H3, H4 } from 'nachos-ui';

import { DEVICE_WIDTH, DEVICE_HEIGHT, URL_API, URL_IMG } from '../../config/constants';
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
        let dt_inicio = curso.dt_inicio.split('-').reverse().join('/');
        let dt_fim = curso.dt_fim.split('-').reverse().join('/');
        return (
            <ScrollView style={styles.container}>
                <H3 align="center" style={styles.black} >{curso.nome}</H3>
                
                <Image source={{uri: foto }} style={styles.fotoCurso} />

                <View style={styles.informacoes}>
                    <H4 style={styles.black} >DESCRIÇÃO</H4>
                    <Text>{curso.obs}</Text>

                    <View style={styles.datas}>
                        <View>
                            <H4 align="center" style={styles.black}>INICIA</H4>
                            <Text>{dt_inicio}</Text>
                        </View>
                        <View style={styles.leftBorder} ></View>
                        <View>
                            <H4 align="center" style={styles.black}>TERMINA</H4>
                            <Text>{dt_fim}</Text>                            
                        </View>
                    </View>
                </View>

            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        minHeight: DEVICE_HEIGHT
    },
    black: {
        color: '#000'
    },
    fotoCurso: {
        width: DEVICE_WIDTH,
        height: DEVICE_WIDTH/1.8
    },
    informacoes: {
        padding: 10
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    leftBorder: {
        borderRightWidth: 1
    }
});
