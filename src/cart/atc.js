const atc = (payP) => {
    return new Promise(async (resolve, reject) => {
        await payP.evaluate(() => {
            let counter = setInterval(function () {
                document.querySelector('.product-bottom-panel__add-to-cart').click();
            }, 1000);
        });

        resolve('done');
    });
}

module.exports = atc;