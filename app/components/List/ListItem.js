import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  currency,
  countryflag,
  name,
  onPress,
  prefix,
  checkmark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
    <Image resizeMode="contain" source={countryflag} style={styles.flagIcon}></Image>
      <Text style={styles.text}>{currency}</Text>
      <Text style={styles.currencyName}>{name}</Text>
      {selected
        ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
        : <Icon />}
      {customIcon}

    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
  countryflag: PropTypes.any,
};

export default ListItem;
