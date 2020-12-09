var moment = require('moment-timezone');


const timer = (time, reload, coP, product) => {

    return new Promise((res, rej) => {
        let getWaktu = setInterval(() => {
            if (moment().tz("Asia/Jakarta").format('mm:ss') == time) {
                res('starting order');
                clearInterval(getWaktu);
            } else {
                console.log(moment().tz("Asia/Jakarta").format('hh:mm:ss'))
            }
        }, 500);

        let reloading = setInterval(async () => {
            if (moment().tz("Asia/Jakarta").format('mm:ss') == reload) {
                console.log("reload");
                clearInterval(reloading);
                await coP.goto(product.direct, {
                    waitUntil: 'networkidle0',
                });

                await coP.click('.page-checkout-payment-method');
            }
            console.log("wait relod");
        }, 1000);
    });
}

module.exports = timer;