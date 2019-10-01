import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';

import styles from './styles';

const ClearButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
