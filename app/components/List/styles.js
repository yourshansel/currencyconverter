import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  $backgroundColor: '$primaryBlue',
  row: {
    paddingLeft: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    flexWrap:'wrap',
    backgroundColor: '$white',
  },
  text: {
    color: '$black',
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    textAlign: 'center',
    width: 40,
  },
  currencyName: {
    color: '$black',
    fontSize: 16,
    fontWeight: "normal",
    textAlign: 'left',
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
  },
  icon: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    marginVertical: 18,
  },
  flagIcon: {
    backgroundColor: 'transparent',
    borderRadius: 2,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkIcon: {
    width: 20,
  },
  currencyValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '$black',
    textAlign: 'right',
    position: 'absolute',
    right: 20,
    paddingVertical: 18,
    width: 100,
    overflow: 'hidden',
  },
  
});
