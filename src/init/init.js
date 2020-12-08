const init = (productP, payP, product) => {
    return new Promise(async (resolve, reject) => {
        try {
            // goto page
            await productP.goto(product.link, {
                waitUntil: 'networkidle0',
            });

            await payP.goto(product.direct, {
                waitUntil: 'networkidle0',
            });

            await payP.click('.page-checkout-payment-method');

            resolve("loaded");
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = init;