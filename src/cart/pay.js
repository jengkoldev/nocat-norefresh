const pay = async (payP) => {
    await payP.evaluate(() => {
        return new Promise((res, rej) => {
            let price;
            let payBtn;
            let search = setInterval(() => {
                price = document.querySelector('.page-checkout-total-payment__price');

                if (price.textContent != 'Rp') {
                    payBtn = document.querySelector('.page-checkout-place-order-section__button');
                    payBtn.click();
                    res('pay found');
                    clearInterval(search);
                }
            }, 100);
        });
    });
}

module.exports = pay;