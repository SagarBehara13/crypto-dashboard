import React, { Component } from 'react';

import '../App.css';

import * as api from '../api'
import CoinList from '../components/coinLists'

class DashboardContainer extends Component {
  constructor(){
    super()
    this.state = {
      listings: [],
    }
  }

  componentDidMount(){
    api.getListings().then(response => this.setState({
      listings : response
    }))
  }

  render() {
    console.log('this.state is: ' , this.state)
    return (
      <div className="DashboardContainer">
        <header className="DashboardContainer-header">
          <h1>Crypto Dashboard</h1>
        </header>
        
        <CoinList
          coinData={this.state.listings}
        />
      </div>
    );
  }
}

export default DashboardContainer;
