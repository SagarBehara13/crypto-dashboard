const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple%2C%20chainlink%2C%20tether%2C%20dai%2C%20bitcoin-cash%2C%20litecoin%20&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export const getListings = async () => {
  return fetch(`${baseUrl}` )
  .then( console.log('fetching data from url') )
  .then( response => response.json() )
}
