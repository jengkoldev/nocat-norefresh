const init = (productP, coP, product) => {
    return new Promise(async (resolve, reject) => {
        try {
            // goto page
            await productP.goto(product.link, {
                waitUntil: 'domcontentloaded',
            });

            await coP.goto(product.direct, {
                waitUntil: 'networkidle0',
            });

            await coP.click('.page-checkout-payment-method');

            // await coP.goto(product.cart, {
            //     waitUntil: 'domcontentloaded',
            // });

            resolve(coP);
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = init;