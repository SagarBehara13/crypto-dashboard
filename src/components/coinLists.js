import React, { Component } from 'react'
import '../App.css';

class CoinList extends Component {
  render() {
    let coin = this.props.coinData //this is an object
    if (coin) {
      console.log('coindata',coin);
    }

    return (
      <div id="index">
        <div className="headersContainer">
          <div className="coinNameLabel"> Name </div>
          <div className="coinSymbolLabel"> Symbol </div>
          <div className="coinPriceLabel"> Price </div>
          <div className="Change24Label"> 24h Change </div>
          <div className="MarketCap"> Mkt Cap </div>
          <div className="ChartLabel"> Chart </div>
        </div>
        <div className="coinTab">
          { coin ?
            coin.map((data, index) =>
              <div className="coinPanel" key={index}>
                <div className="coinAvatar">
                  <img src={ data.image } className="img"/>
                </div>
                <div className="chartCointainer">
                  <p className="lab">{data.name}</p>
                </div>
                <div className="chartCointainer">
                  <p className="lab">{data.symbol}</p>
                </div>
                <div className="chartCointainer">
                  <p className="lab">{data.current_price}</p>
                </div>
                <div className="chartCointainer">
                  <p className="lab">{data.market_cap_change_percentage_24h}</p>
                </div>
                <div className="chartCointainer">
                  <p className="lab">{data.market_cap}</p>
                </div>
                <div className="chartCointainer">
                  <p className="lab">charts</p>
                </div>
              </div>
            ) :
            <div className="DashboardContainer">
              {"no tickerData..."}
            </div>
          }
        </div>
      </div>
    )
  }
}
export default CoinList
