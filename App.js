import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
});
