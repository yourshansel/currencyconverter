import { StatusBar, Platform  } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      
    },
    
    },
  {
    headerMode: 'none',
  },
);

const CurrencyListStack = createStackNavigator(
  {
  CurrencyList: {
    screen: CurrencyList,
    
  },
  
},
{
  headerMode: 'none',
},

);

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Currency',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          width: '100%',
          flex: 1,
        },
        
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        
       
      },
    },
    CurrencyList: {
      screen: CurrencyListStack,
      navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: Platform.OS === 'ios' ? 'center' : "left",
        flex: 1,
      },
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
      },


    }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
