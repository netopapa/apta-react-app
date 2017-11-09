import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './components/menu/Menu';

//components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
      <View style={styles.container}>
        <Header toggleMenu={this.toggle} ></Header>
        <Home></Home>
      </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
});
