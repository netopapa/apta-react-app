import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { DEVICE_WIDTH, URL_IMG } from '../../config/constants';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'nachos-ui';

export class Curso extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        curso: this.props.curso
      }
  }

  render() {
    return (
      <View style={styles.container} >
        <Card
            footerContent={this.state.curso.nome}
            image={URL_IMG + this.state.curso.foto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
