import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencydata from '../data/currencydata';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['name', 'currency'];

class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
    baseCurrencyName: PropTypes.string,
    quoteCurrencyFlag: PropTypes.string,
    baseCurrencyFlag: PropTypes.any,
    quoteCurrencyFlag: PropTypes.any,
    prefix: PropTypes.string,

  };

  handlePress = ( countryflag, currency, name, prefix) => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(countryflag, currency, name, prefix));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(countryflag, currency, name, prefix));
    }

    navigation.goBack(null);
  };



  render() {


    const filteredList = currencydata.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    const {
      baseCurrency, quoteCurrency, navigation, 
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
      <View style={styles.searchContainer}>
        <SearchInput  
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Search Currency..."
          />
        <FlatList
          data={filteredList}
          renderItem={({ item }) => (
            <ListItem
              countryflag={item.countryflag}
              currency={item.currency}
              prefix={item.prefix}
              name={item.name}
              selected={item.currency === comparisonCurrency}
              onPress={() => this.handlePress(item.countryflag, item.currency, item.name, item.prefix)}
            />
          )}
          keyExtractor = {(item, index) => index.toString()}
          ItemSeparatorComponent={Separator}
        />
             </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  searchInput:{
    marginVertical: 8,
    paddingVertical: 10,
    marginHorizontal: 16,
    paddingLeft: 12,
    borderColor: '#CCC',
    backgroundColor: "#F1F1F2",
    borderRadius: 8,
    fontSize: 16,
  }
});


const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  baseCurrencyName: state.currencies.baseCurrencyName,
  quoteCurrencyName: state.currencies.quoteCurrencyName,
  baseCurrencyFlag: state.currencies.baseCurrencyFlag,
  quoteCurrencyFlag: state.currencies.quoteCurrencyFlag,
});

export default connect(mapStateToProps)(CurrencyList);
