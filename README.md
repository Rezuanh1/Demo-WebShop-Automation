# Demo WebShop Automation

Playwright UI Automation and API Testing Assignment.

## Project Overview

This project automates test scenarios for the Demo Web Shop website using Playwright with JavaScript and Page Object Model (POM).

The project includes UI automation test cases for invalid login, user registration, product search, shopping cart, and checkout.

## Tools & Technologies

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Postman
- Newman
- Allure Report
- GitHub

## UI Automation Test Cases

### Q1 – Invalid Login

- Navigate to Demo Web Shop.
- Enter invalid login credentials.
- Verify the error message.

### Q2 – Register and Add Product to Cart

- Register a new user.
- Login with registered credentials.
- Navigate to Books category.
- Select Computing and Internet product.
- Add product to cart.
- Verify product and quantity.

### Q3 – Search Product and Complete Checkout

- Search for a product.
- Verify search results.
- Increase product quantity.
- Add product to cart.
- Complete checkout.
- Verify order confirmation and order details.

## Project Structure

```text
Demo-WebShop-Automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── SearchPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── q1-invalid-login.spec.js
│   ├── q2-register-cart.spec.js
│   └── q3-search-checkout.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Install project dependencies:

```bash
npm install
```

## Run UI Tests

Run individual test cases:

```bash
npx playwright test tests/q1-invalid-login.spec.js
```

```bash
npx playwright test tests/q2-register-cart.spec.js
```

```bash
npx playwright test tests/q3-search-checkout.spec.js
```

Run all UI tests:

```bash
npx playwright test
```

## Playwright HTML Report

Open the HTML report:

```bash
npx playwright show-report
```

## Allure Report

Generate Allure report:

```bash
npx allure generate allure-results --clean
```

Open Allure report:

```bash
npx allure open allure-report
```

## Test Execution Summary

| Test Case | Status |
|---|---|
| Q1 – Invalid Login | Passed |
| Q2 – Register and Add Product to Cart | Passed |
| Q3 – Search Product and Complete Checkout | Passed |

All three UI automation test cases passed successfully.

## Test Reports

- Playwright HTML Report
- Allure Report
- Screenshots and execution evidence

## GitHub Workflow

- Separate branches were created for Q1, Q2, and Q3.
- Each question was developed in its respective branch.
- Pull Requests were used to merge changes into the main branch.
- The main branch contains the final project files.



