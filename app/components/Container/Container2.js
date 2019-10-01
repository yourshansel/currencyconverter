import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container2 = ({ children}) => {
  const containerStyles = [styles.containerTop];


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={containerStyles}>
      {children}
    </View>
    </TouchableWithoutFeedback>
  );
};

Container2.propTypes = {
  children: PropTypes.any,
};

export default Container2;
