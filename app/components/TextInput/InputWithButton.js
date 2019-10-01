import PropTypes from 'prop-types';
import React from 'react';
import {
  View, TextInput, TouchableHighlight, Text, Image, KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import color from 'color';


const InputWithButton = ({
  editable,
  onPress,
  buttonText,
  textColor,
  text,
  countryflag,
  currencyname,
  prefix,
  ...props
}) => {

  

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  if (editable === false) {
    isit = false
  }
  else{
    isit = true
  }



return (

    <View>
      <Image resizeMode="contain" source={countryflag} style={styles.flagIcon}></Image>
      <TouchableHighlight
        onPress={onPress}
        style={styles.container}
        underlayColor={underlayColor}
      >
        <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
        </View>

      </TouchableHighlight>
      <View style={styles.wrapper}>
        <TextInput 
          maxLength={16} 
          selectTextOnFocus={true} 
          editable={this.isit} 
          style={styles.input} 
          underlineColorAndroid="transparent" 
          {...props} 
          />
      </View>
      <Text style={styles.currencyName}>{currencyname} {prefix}</Text>


    </View>
  );

}


InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
  countryflag: PropTypes.any,
  currencyName: PropTypes.string,
};

export default InputWithButton;
