import './styles.css';
import numeral from 'numeral';

/* eslint-disable no-console */

const drugMoney = numeral(1000).format('$0,0.00');
console.log(`I would pay ${drugMoney} for a ton of charlie!`);
