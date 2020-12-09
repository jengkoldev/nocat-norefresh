const co = (page) => {
    return new Promise(async (resolve, reject) => {
        await page.evaluate(() => {
            document.querySelector('.stardust-button--primary').click();
        });

        console.time('waiting-pay')
        await page.waitForSelector('.page-checkout-place-order-section__button')
        console.timeEnd('waiting-pay')

        resolve('done')
    });
}

module.exports = co;