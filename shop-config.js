// Sales must stay closed until Brian explicitly approves opening orders.
// Readiness flags intentionally remain false until the corresponding external requirements are confirmed.
// Stripe Tax calculation defaults are configured, but no NY tax registration is recorded yet.
// A Stripe Tax settings status of "active" is NOT proof of tax registration.
// Keep customer checkout disabled until all flags are explicitly updated after launch approval.
// Never enable this until shipping, tax, fulfillment and checkout testing are complete.
window.COLOR_KEEPERS_SHOP = {
  checkoutUrl: '',
  priceLabel: '$9.99 + shipping / paperback',
  acceptingOrders: false,
  checkoutReady: false,
  taxRegistrationReady: false,
  shippingReady: false,
  stripeProductId: 'prod_VTj9XNpx5I1FEm',
  stripePriceId: 'price_1USlgmRruzmySlFQ1ihUbhj7'
};
