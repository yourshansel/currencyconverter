import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Humanize from 'humanize-plus';

const LastConverted = ({
  date, base, quote, conversionRate,
}) => (
  <Text style={styles.smallText}>
    1
    {' '}
    {base}
    {' '}
=
    {' '}
    {Humanize.formatNumber(conversionRate,4)}
    {' '}
    {quote}
    {' '}
as of
    {' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
