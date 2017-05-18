import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Saying Hello in Dublish!', (done) =>{
    const index = fs.readFileSync('./src/index.html', "UTF-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Howaya yunfella! You alroi der?");
      done();
      window.close();
    });
  });
});
