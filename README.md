# Demo Web Shop Automation & API Testing

## Project Overview
This project automates UI testing of the Demo Web Shop application using Playwright and performs API testing using Postman and Newman.

## Technologies Used
- Playwright
- JavaScript
- Node.js
- Postman
- Newman
- Newman HTML Extra Reporter
- Allure Report
- Git & GitHub

## Project Structure
```text
Demo-WebShop-Automation/
├── API Automation/
│   ├── newman/
│   │   └── Newman HTML Report
│   └── API Automation.postman_collection.json
├── pages/
├── tests/
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Part A: UI Automation

### Q1: Invalid Login
- Attempt login with invalid credentials.
- Verify the error message.
- Verify the user is not logged in.

### Q2: Register, Login & Add to Cart
- Register a new user.
- Login with registered credentials.
- Select a product.
- Add the product to the shopping cart.
- Verify the cart product and quantity.

### Q3: Search & Checkout
- Search for a product.
- Verify search results.
- Open the product details.
- Increase product quantity.
- Add the product to the cart.
- Accept terms and conditions.
- Complete checkout.
- Verify order confirmation and order details.

### UI Test Execution

Run all tests:

```bash
npx playwright test
```

Run individual tests:

```bash
npx playwright test tests/q1-invalid-login.spec.js
npx playwright test tests/q2-register-cart.spec.js
npx playwright test tests/q3-search-checkout.spec.js
```

### Playwright HTML Report

```bash
npx playwright show-report
```

## Part B: GitHub Workflow
- Separate branches were created for individual questions.
- Each question was committed separately.
- Branches were merged into the main branch.
- Project source code and reports are maintained in GitHub.

## Part C: API Testing

### API Used
JSONPlaceholder API

### Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/users` | Retrieve users |
| PUT | `/users/{id}` | Update user information |

Base URL:
`https://jsonplaceholder.typicode.com`

### API Test Scenarios
- Verify GET response status code is 200.
- Verify response is a non-empty array.
- Verify each user contains id, name, and email.
- Dynamically save a user ID from the GET response.
- Use the saved user ID in the PUT request.
- Update name, email, and company name.
- Verify PUT response status code is 200.
- Verify returned ID matches the saved user ID.
- Verify phone is not empty.
- Verify updated name matches the submitted name.

### API Test Execution

Install Newman:

```bash
npm install -g newman
```

Install HTML reporter:

```bash
npm install -g newman-reporter-htmlextra
```

Run API tests:

```bash
newman run "API Automation.postman_collection.json" -r cli,htmlextra
```

### Newman Test Results
- Total Requests: 2
- Total Assertions: 7
- Passed Assertions: 7
- Failed Assertions: 0
- Skipped Tests: 0

### Newman HTML Report
The Newman HTML report is available in the `API Automation/newman` directory.

## Reports
- Playwright HTML Report
- Allure Report
- Newman HTML Report
