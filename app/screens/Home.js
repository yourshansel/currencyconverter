import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ListRates, Separator } from '../components/List';

import { Container, Container2 } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import currencydata from '../data/currencydata';
import Humanize from 'humanize-plus';


import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    countryflag: PropTypes.any,
    baseCurrencyName: PropTypes.string,
    quoteCurrencyName: PropTypes.string,
    baseCurrencyFlag: PropTypes.any,
    quoteCurrencyFlag: PropTypes.any,
    baseCurrencyPrefix: PropTypes.string,
    quoteCurrencyPrefix: PropTypes.string,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getInitialConversion());
  }

  handleChangeText = (text) => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Select Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Select Quote Currency', type: 'quote' });
  };

  handleSwapCurrency = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      baseCurrencyName,
      quoteCurrencyName,
      baseCurrencyFlag,
      quoteCurrencyFlag,
      baseCurrencyPrefix,
      quoteCurrencyPrefix,
      rates,

    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = Humanize.formatNumber(amount * conversionRate,2);
    }



    return (
      <Container backgroundColor="white">
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <LastConverted
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <Container2>
          <InputWithButton
            countryflag={baseCurrencyFlag}
            prefix={baseCurrencyPrefix}
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            returnKeyType='done' 
            onChangeText={this.handleChangeText}
            currencyname={baseCurrencyName}
          />
          <ClearButton onPress={this.handleSwapCurrency}/>

          <InputWithButton
            countryflag={quoteCurrencyFlag}
            prefix={quoteCurrencyPrefix}
            editable={false}
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            currencyname={quoteCurrencyName}
          />
          </Container2>
          <Container>
          <View style={{borderBottomColor: '$border',borderBottomWidth: StyleSheet.hairlineWidth,}}/>
          <FlatList
          data={currencydata}
          extradata={this.props}

          renderItem={({ item }) => (
            <ListRates 
              countryflag={item.countryflag}
              currency={item.currency}
              name={item.name}
              value={Humanize.formatNumber((amount * rates[item.currency]|| amount),2)}
            />
          )}
          keyExtractor = {(item, index) => index.toString()}
          ItemSeparatorComponent={Separator}
        />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency, baseCurrencyName, quoteCurrencyName, baseCurrencyFlag, quoteCurrencyFlag, baseCurrencyPrefix, quoteCurrencyPrefix } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    rates,
    baseCurrencyPrefix,
    quoteCurrencyPrefix,
    baseCurrency,
    quoteCurrency,
    baseCurrencyName,
    quoteCurrencyName,
    baseCurrencyFlag,
    quoteCurrencyFlag,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
  };
};

export default connect(mapStateToProps)(Home);
