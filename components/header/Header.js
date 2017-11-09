import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { DEVICE_WIDTH } from '../../config/constants';

import Icon from 'react-native-vector-icons/FontAwesome';

export class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
         <TouchableOpacity onPress={ this.props.toggleMenu } style={styles.button} >
          <Icon name="list" size={30} color="#000" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo/logo.png')} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10
  },
  logo: {
      width: DEVICE_WIDTH/3,
      height: 50
  }
});
