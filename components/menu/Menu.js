import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../config/constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: '#000',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25
  },
  avatarContainer: {
    width: DEVICE_WIDTH*0.57,
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  name: {
    fontWeight: '700',
    fontSize: 20
  },
  white: {
    color: '#fff'
  },
  item: {
    width: DEVICE_WIDTH*0.57,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderColor: '#666'
  },
  lastItem: {
    borderBottomWidth: 0.3
  },
  textItem: {
      fontSize: 15,
      marginLeft: 10
  }
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={[styles.name, styles.white]}>Walter White</Text>
      </View>

      <View style={styles.item}>
        <Icon name="archive" size={15} color="#4edcba" />
        <Text
            onPress={() => onItemSelected('About')}
            style={[styles.white, styles.textItem]}
        >
            FEED DE CURSOS
        </Text>
      </View>

      <View style={styles.item}>
        <Icon name="flag" size={15} color="#4edcba" />
        <Text
            onPress={() => onItemSelected('About')}
            style={[styles.white, styles.textItem]}
        >
            MEUS CURSOS
        </Text>
      </View>

      <View style={styles.item}>
        <Icon name="phone" size={15} color="#4edcba" />
        <Text
            onPress={() => onItemSelected('About')}
            style={[styles.white, styles.textItem]}
        >
            CONTATO
        </Text>
      </View>

      <View style={styles.item}>
        <Icon name="industry" size={15} color="#4edcba" />
        <Text
            onPress={() => onItemSelected('About')}
            style={[styles.white, styles.textItem]}
        >
            SOBRE
        </Text>
      </View>

      <View style={[styles.item, styles.lastItem]}>
        <Icon name="arrow-left" size={15} color="#4edcba" />
        <Text
            onPress={() => onItemSelected('About')}
            style={[styles.white, styles.textItem]}
        >
            SAIR
        </Text>
      </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
