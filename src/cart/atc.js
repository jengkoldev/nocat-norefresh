const atc = (payP) => {
    return new Promise(async (resolve, reject) => {
        await payP.evaluate(() => {
            document.querySelector('.product-bottom-panel__add-to-cart').click();
        });

        resolve('done');
    });
}

module.exports = atc;