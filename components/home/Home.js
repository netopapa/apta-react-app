import React from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';
import { DEVICE_WIDTH } from '../../config/constants';
import { Curso } from './Curso';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, H3 } from 'nachos-ui';

//import { getAllCursos } from "../../services/CursosService";

export class Home extends React.Component {

  constructor(){
      super();
      this.state = {
        cursos: []
      }
  }

  componentDidMount(){
    fetch('http://aptacet.com.br/wp-content/themes/apta/php/server.php')
    .then(resp => resp.json())
    .then(resp => this.setState({cursos: resp}))   
  }

  render() {
    return (
      <View>
        <H3 align="center" style={styles.black} >CURSOS</H3>
        <FlatList
            keyExtractor = {curso => curso.ID}
            data = {this.state.cursos}
            renderItem = {
                ({item}) =>
                <Curso curso={item} />
            }
        />
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
    }
});
