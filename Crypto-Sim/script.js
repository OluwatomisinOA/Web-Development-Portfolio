const container = document.getElementById('crypto-container');
const balanceDisplay = document.getElementById('balance-display');
const portfolioValue = document.getElementById('portfolio-value');

let userBalance = 105000;
const userPortfolio = {};

const market = [
  { id: 'btc', name: 'BitCoin', price: 45000, volatility: 0.02 },
  { id: 'eth', name: 'Ethereum', price: 2800, volatility: 0.04 },
  { id: 'doge', name: 'DodgeCoin', price: 0.15, volatility: 0.12 },
  { id: 'sol', name: 'Solana', price: 100, volatility: 0.08 }
]

function createCoinCard(coin) {

  if 
  return `
    <div onclick="buyCoin('${coin.id}')" class="bg-crypto-card rounded-lg p-4 flex justify-between items-center hover:bg-slate-700 hover:scale-105 cursor-pointer w-full">
      <div class="">
          <h4 class="font-bold text-white">${coin.id}</h4>
          <p class="text-sm text-gray-400">${coin.name}</p>
        </div>
        <div class="text-right">
          <p class="font-mono text-crypto-green">${coin.price}</p>
          <p class="text-xs text-gray-500">Vol: ${coin.volatility}%</p>
        </div>
    </div>`;
}

function renderMarket() {
  container.innerHTML = '';

  market.forEach(coin => {
    const coinCard = createCoinCard(coin);
    container.innerHTML += coinCard;
  })
} 

function updatePrices() {

  market.forEach(coin => {

    const changePercent = (Math.random() - 0.5) * 2 * coin.volatility;
    let newPrice = (coin.price * (1 + changePercent));
    if (newPrice < 0.01) {
      coin.price = 0.01;
    }
    coin.price = parseFloat(newPrice.toFixed(2));

  });

}

setInterval(() => {
  updatePrices();
  renderMarket();
  renderBalance();
}, 1000);

function buyCoin(id) {

  const coin = market.find(c => c.id === id);
  if (userBalance >= coin.price) {
    userBalance -= coin.price;
    if (coin.id in userPortfolio) {
      userPortfolio[coin.id] += 1;
    } else {
      userPortfolio[coin.id] = 1;
    }
  } else {
    alert('Insufficient balance to buy ' + coin.name);
  }
}

function renderBalance() { 

  balanceDisplay.innerHTML = `Balance: <span class="text-crypto-green">$${userBalance.toFixed(2)}</span>`;
  calculatePortfolioValue();
  portfolioValue.innerHTML = `Portfolio Value: <span class="text-crypto-green">$${calculatePortfolioValue().toFixed(2)}</span>`;

}

function calculatePortfolioValue() { 

  let total = 0;
  for (const coin in userPortfolio) {
    const marketCoin = market.find(c => c.id === coin);
    total += marketCoin.price * userPortfolio[coin];
  }
  return total;

} 

function portfolioContainer() {

}