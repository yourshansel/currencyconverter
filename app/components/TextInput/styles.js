import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: null,
  container: {
    backgroundColor: '$white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '$white',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '$black',
  },
  input: {
    padding: 4,
    color: '$inputText',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    maxWidth: "100%",
    
  },
  icon: {
    width: 20,
  },
  currencyName: {
    padding: 4,
    fontWeight: 'normal',
    fontSize: 14,
    color: '$black',
    textAlign: 'center',
  },
  flagIcon: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    alignSelf: 'center',
    width: 40,
    height: 40,
  },

});
