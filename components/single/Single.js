import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { H3, H4, Carousel } from 'nachos-ui';

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
        return (
            <ScrollView style={styles.container}>
                <H3 align="center" style={styles.black} >{curso.nome}</H3>
                
                <Carousel
                images={[
                    foto,
                    'https://placehold.it/300/59C480',
                    foto,
                ]}
                width={DEVICE_WIDTH}
                height={DEVICE_WIDTH/1.8}
                />

                <View style={styles.informacoes}>
                    <H4 style={styles.black} >DESCRIÇÃO</H4>
                    <Text>{curso.obs}</Text>

                    <View style={styles.datas}>
                        <View>
                            <H4 align="center" style={styles.black}>INICIA</H4>
                            <Text>{curso.dt_inicio}</Text>
                        </View>
                        <View style={styles.leftBorder} ></View>
                        <View>
                            <H4 align="center" style={styles.black}>TERMINA</H4>
                            <Text>{curso.dt_fim}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.btnIncricao} >
                        <Button
                            title="INSCRIÇÃO"
                            color="#b71c1c"
                            onPress={() => console.warn('inscrição')}
                        />
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
    informacoes: {
        padding: 10
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    leftBorder: {
        borderRightWidth: 1
    },
    btnIncricao: {
        width: DEVICE_WIDTH/2,
        marginTop: 30,
        marginLeft: DEVICE_WIDTH/4 - 10
    }
});
