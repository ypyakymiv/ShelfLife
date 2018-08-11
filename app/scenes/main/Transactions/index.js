import React, { Component } from 'react';
import TransactionsTemplate from './TransactionsTemplate';
import TransactionsBody from './TransactionsBody';

class Transactions extends Component {
  render() {
    return (
      <TransactionsTemplate>
        <TransactionsBody />
      </TransactionsTemplate>
    );
  }
}

export default Transactions;
