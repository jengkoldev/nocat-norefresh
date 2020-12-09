const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const moment = require('moment-timezone');
const product = require('./src/config/product');
const config = require('./src/config/browser');
const init = require('./src/init/init');
const timer = require('./src/time/timer');
const atc = require('./src/cart/atc');
const pay = require('./src/cart/pay');
const co = require('./src/cart/co');

const App = async () => {
    const BROWSER = await puppeteer.launch(config);
    let productP = await BROWSER.newPage();
    let coP = await BROWSER.newPage();

    // initial page
    const coP2 = await init(productP, coP, product);

    // timer
    await timer('38:59', '38:30', coP2, product)

    // atc
    var atcs = await atc(productP);
    console.log(atcs)

    // co
    // await co(coP);

    // pay
    console.time('pay')
    const price = await pay(coP);
    console.timeEnd('pay')
    console.log(price)

    await coP.screenshot({path: './public/ss.png'})
    await coP.evaluate(() => {
        return new Promise((res, rej) => {
            setTimeout(function () {
                res(true);
            }, 15000);
        });
    });
    await productP.close();
    await coP.close();
    await BROWSER.close();
}

App();
