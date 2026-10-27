# Color Protectors — Tax and checkout readiness (prepared 2026-10-27)

This repository serves the public static website at https://thecolorprotectors.onrender.com. It must NOT accept customer payments until explicit owner approval.

## Verified Stripe account state
- Stripe Tax settings status: **active** (configuration complete only; this does not mean tax collection registration is complete).
- Tax head office: the existing business address already registered with the Stripe account. Do not add address or personal information to this public repository.
- Preset product tax category: **Books for Children** (`txcd_35010001`). The Colorful Adventure paperback already has this product tax code.
- Book price: **$9.99**, one-time, with **exclusive** tax behavior (tax, if applicable, is added above the price).
- Stripe Tax registrations: **none recorded** at time of setup.
- Payment Links: **none created** at time of setup.

## Do not launch until
1. New York sales-tax Certificate of Authority is obtained and effective, if required by applicable law. Confirm the effective date and add the real registration in Stripe Tax > Locations; do not add a registration before it exists.
2. Shipping services, destinations, prices, packaging and fulfillment have been decided and tested.
3. Set up a Stripe-hosted Checkout / Payment Link for the existing physical paperback price. Enable `automatic_tax.enabled=true`, collect the full shipping address (`shipping_address_collection.allowed_countries=["US"]` when US-only), and configure actual `shipping_options`/shipping rate(s). Confirm the book plus shipping plus tax total appears clearly. In New York, merchant-charged shipping on taxable merchandise is generally taxable even if itemized separately; do not exempt it simply because shown as a separate charge.
4. Validate tax calculations for relevant destinations in a safe Stripe testing environment, and verify that tax is only calculated for jurisdictions with appropriate registrations.
5. Verify order capture, receipts, fulfillment handoff, refund handling, inventory updates, and that stock cannot oversell.
6. Require explicit owner approval to start selling before changing config flags.

## Website safeguards
The public website's buy button only appears if ALL are true in `shop-config.js`:
- `acceptingOrders === true`
- `checkoutReady === true`
- `taxRegistrationReady === true`
- `shippingReady === true`
- `checkoutUrl` is HTTPS hosted on `buy.stripe.com`
- `priceLabel` is present

ALL readiness flags are currently **false** and checkoutUrl empty. Do not activate automatically after a tax registration is added.

## In-person Tap to Pay on iPhone
For the simplest no-code path, the owner can use the official Stripe Dashboard mobile app on a compatible iPhone with the same Stripe account. When allowed to sell, the owner must sign in, enable two-factor authentication, verify a phone number, complete any required Tap to Pay terms, and choose the appropriate in-person charge amount.

**Important:** Configuring Stripe Tax defaults in the Stripe account does not confirm the Stripe Dashboard mobile app automatically adds sales tax to manual Tap to Pay amounts. Verify the app's current tax handling before the first transaction; otherwise use a supported POS/tax workflow that calculates the correct local rate and displays tax separately. Physical, in-person sales generally source tax to the actual sale location. Do not assume the website's future shipping/tax flow applies to Tap to Pay.

The website code cannot enable/disable Tap to Pay within the seller's Stripe mobile app and cannot prevent the Stripe account owner from manually initiating a charge there. Do not initiate any in-person payments until the owner expressly approves opening sales.

## Inventory
The first batch consists of 40 copies purchased for $148.60 including tax and shipping. No automatic inventory decrement, reconciliation, or sale webhook is currently configured in this static-only website. Plan a server-backed ledger and verified Stripe webhook integration separately before online sales.
