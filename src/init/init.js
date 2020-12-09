const init = (productP, coP, product) => {
    return new Promise(async (resolve, reject) => {
        try {
            // goto page
            await productP.goto(product.link, {
                waitUntil: 'domcontentloaded',
            });

            // await payP.goto(product.direct, {
            //     waitUntil: 'networkidle0',
            // });

            // await payP.click('.page-checkout-payment-method');

            await coP.goto(product.cart, {
                waitUntil: 'domcontentloaded',
            });

            resolve("loaded");
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = init;