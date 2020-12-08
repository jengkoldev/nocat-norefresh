const priceWactcher = async (payP) => {
    const price = await payP.evaluate(() => {
        return new Promise(function (res, rej) {
            let spiner;

            let finding = setInterval(function () {
                spiner = document.querySelectorAll('.stardust-spinner')[1];

                console.log(spiner.getAttribute('class'))
                if (spiner.getAttribute('class') == 'stardust-spinner') {
                    let finding2 = setInterval(function () {
                        spiner = document.querySelectorAll('.stardust-spinner')[1];

                        console.log(spiner.getAttribute('class'))
                        if (spiner.getAttribute('class').indexOf('stardust-spinner--hidden') > -1) {
                            let price = document.querySelector('.page-checkout-shop-order-item__price').textContent;
                            res(price);
                            clearInterval(finding2);
                        }
                    }, 500);
                    clearInterval(finding);
                }
            }, 500);
        });
    }); // eval

    return price;
};

const pay = async (payP) => {
    await payP.evaluate(() => {
        document.querySelectorAll('.page-checkout-payment-channel-item__header')[5].click();
    });

    let price = await priceWactcher(payP);

    // if (price != 'Rp12.000') {
    //     await payP.evaluate(() => {
    //         document.querySelectorAll('.page-checkout-payment-channel-item__header')[6].click();
    //     });

    //     price = await priceWactcher(payP)
    // }

    // if (price != 'Rp12.000') {
    //     await payP.evaluate(() => {
    //         document.querySelectorAll('.page-checkout-payment-channel-item__header')[5].click();
    //     });

    //     price = await priceWactcher(payP)
    // }

    price = 'Rp12.000';

    if (price == 'Rp12.000') {
        await payP.evaluate(() => {
            document.querySelectorAll('.page-checkout-payment-channel-item__header')[6].click();
        });

        price = await priceWactcher(payP);
        // await payP.click('.page-checkout-place-order-section__button');
    }

    // click place order
    await payP.evaluate(() => {
        document.querySelector('.page-checkout-place-order-section__button').click();
    });

}

module.exports = pay;