const priceWactcher = async (payP) => {
    const price = await payP.evaluate(() => {
        return new Promise(function (res, rej) {
            let spiner;

            let finding = setInterval(function () {
                spiner = document.querySelectorAll('.stardust-spinner')[1];

                if (spiner.getAttribute('class') == 'stardust-spinner') {
                    let finding2 = setInterval(function () {
                        spiner = document.querySelectorAll('.stardust-spinner')[1];

                        if (spiner.getAttribute('class').indexOf('stardust-spinner--hidden') > -1) {
                            let price = document.querySelector('.page-checkout-shop-order-item__price').textContent;
                            res(price);
                            clearInterval(finding2);
                        }
                    }, 100);
                    clearInterval(finding);
                }
            }, 100);
        });
    }); // eval

    return price;
};

const pay = async (payP) => {
    await payP.evaluate(() => {
        document.querySelectorAll('.page-checkout-payment-channel-item__header')[0].click();
    });

    let price = await priceWactcher(payP);

    price = 'Rp12.000';

    if (price == 'Rp12.000') {
        await payP.evaluate(() => {
            document.querySelector('.page-checkout-place-order-section__button').click();
        });
    }

    // click place order

    return price;
}

module.exports = pay;