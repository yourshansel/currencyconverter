import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';


const ListRates = ({
  name,
  currency,
  countryflag,
  value,
}) => (
  <View underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
    <Image resizeMode="contain" source={countryflag} style={styles.flagIcon}/>
    <Text style={styles.text}>{currency}</Text>
    <Text style={styles.currencyName}>{name}</Text>
    <Text style={styles.currencyValue} numberOfLines={1} underlineColorAndroid="transparent">{value}</Text>
    </View>
      
  </View>
);

ListRates.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
  countryflag: PropTypes.any,
  prefix: PropTypes.string,
};

export default ListRates;
