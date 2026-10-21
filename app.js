const dialog = document.querySelector('#page-dialog');
const largePage = document.querySelector('#large-page');
document.querySelectorAll('.sample').forEach(button => {
  button.addEventListener('click', () => {
    largePage.src = button.querySelector('img').src;
    largePage.alt = button.dataset.caption;
    document.querySelector('#dialog-title').textContent = button.dataset.caption;
    dialog.showModal();
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
const shop = window.COLOR_KEEPERS_SHOP || {};
const checkout = document.querySelector('#checkout');
checkout.hidden = true;
checkout.removeAttribute('href');
let checkoutUrl;
try { checkoutUrl = new URL(shop.checkoutUrl); } catch {}
if (shop.acceptingOrders === true && shop.checkoutReady === true &&
    checkoutUrl?.protocol === 'https:' && checkoutUrl.hostname === 'buy.stripe.com' && shop.priceLabel) {
  const checkout = document.querySelector('#checkout');
  checkout.href = checkoutUrl.href;
  checkout.hidden = false;
  document.querySelector('#price').textContent = shop.priceLabel;
  document.querySelector('#availability').textContent = 'Shipping is not included in the book price. Review shipping charges and your full order total at checkout.';
  document.querySelector('#purchase-faq').textContent = 'Yes. Use the buy button in the book section to pay through our secure checkout. Review shipping charges and delivery details before completing your purchase.';
}
