const container = document.getElementById('crypto-container');
const balanceDisplay = document.getElementById('balance-display');
const portfolioValue = document.getElementById('portfolio-value');

let userBalance = parseFloat(localStorage.getItem('cryptoSimBalance')) || 105000;
let userPortfolio = JSON.parse(localStorage.getItem('cryptoSimPortfolio')) || {};

const market = [
  { id: 'btc', name: 'BitCoin', price: 45000, volatility: 0.02 },
  { id: 'eth', name: 'Ethereum', price: 2800, volatility: 0.04 },
  { id: 'doge', name: 'DodgeCoin', price: 0.15, volatility: 0.12 },
  { id: 'sol', name: 'Solana', price: 100, volatility: 0.08 }
]

function createCoinCard(coin) {

  let owned = userPortfolio[coin.id] || 0;  
  return `
    <div onclick="buyCoin('${coin.id}')" class="bg-crypto-card rounded-lg p-4 flex justify-between items-center hover:bg-slate-700 hover:scale-105 cursor-pointer w-full">
      <div class="">
          <h4 class="font-bold text-white">${coin.id}</h4>
          <p class="text-sm text-gray-400">${coin.name}</p>
          <p class="text-xs text-crypto-green">Owned: ${owned}</p>
          <button class="mt-2 px-3 py-1 bg-crypto-red text-black text-xs rounded-full hover:bg-crypto-red/80 hover:scale-105" onclick="event.stopPropagation(); sellCoin('${coin.id}')">Sell</button>
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

    let volatility = coin.volatility;
    if (Math.random() < 0.01) { 
      volatility *= 5;
    }
    const changePercent = (Math.random() - 0.5) * 2 * volatility;
    
    let newPrice = (coin.price * (1 + changePercent));
    if (newPrice < 0.01) {
      newPrice = 0.01;
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
    balanceDisplay.classList.add('bg-crypto-green/20', 'scale-105');
    setTimeout(() => {
      balanceDisplay.classList.remove('bg-crypto-green/20', 'scale-105');
    }, 300);

    if (coin.id in userPortfolio) {
      userPortfolio[coin.id] += 1;
    } else {
      userPortfolio[coin.id] = 1;
    }
  } else {
    alert('Insufficient balance to buy ' + coin.name);

  }

  saveGame()
}

function renderBalance() { 

  balanceDisplay.innerHTML = `Balance: <span class="text-crypto-green">$${userBalance.toFixed(2)}</span>`;
  calculatePortfolioValue();

}

function calculatePortfolioValue() { 

  let total = 0;
  for (const coin in userPortfolio) {
    const marketCoin = market.find(c => c.id === coin);
    total += marketCoin.price * userPortfolio[coin];
  }
  let netWorth = userBalance + total;
  portfolioValue.innerHTML = `Net Worth: <span class="text-crypto-green">$${netWorth.toFixed(2).toLocaleString()}</span>`;
  return total;

} 

function sellCoin(id) {
  const coin = market.find(c => c.id === id);
  if (userPortfolio[coin.id] > 0) {

    userPortfolio[coin.id] -= 1;
    userBalance += coin.price;
    balanceDisplay.classList.add('bg-crypto-red/20', 'scale-105');
    setTimeout(() => {
      balanceDisplay.classList.remove('bg-crypto-red/20', 'scale-105');
    }, 300);
  } else {
    alert('You do not own any ' + coin.name + ' to sell.');
  }

  if (userPortfolio[coin.id] === 0) {
    delete userPortfolio[coin.id];
  }

  saveGame();
}

function saveGame() {
  localStorage.setItem('cryptoSimBalance', userBalance);
  localStorage.setItem('cryptoSimPortfolio', JSON.stringify(userPortfolio));
}