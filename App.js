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

const App = async () => {
    const BROWSER = await puppeteer.launch(config);
    let productP = await BROWSER.newPage();
    let payP = await BROWSER.newPage();

    // initial page
    await init(productP, payP, product);

    // timer
    await timer('38:55')

    // atc
    var atcs = await atc(productP);
    console.log(atcs)

    // pay

    console.time('start')
    await pay(payP);
    console.timeEnd('start')

    await productP.close();
    await payP.close();
    await BROWSER.close();
}

App();
