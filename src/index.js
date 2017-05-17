import './styles.css';
import numeral from 'numeral';

const drugMoney = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${drugMoney} for a ton of charlie!`);
