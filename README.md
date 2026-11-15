# Demo Web Shop Automation & API Testing

## Project Overview
This project focuses on UI automation and API testing using Playwright, Postman, and Newman. It automates key workflows of the Demo Web Shop application and validates API requests using JSONPlaceholder.

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Postman
- Newman
- Allure Report
- Git & GitHub

## UI Automation Test Scenarios

| Test Case | Description |
|---|---|
| Q1 | Invalid Login – Verify error message for invalid credentials |
| Q2 | Register, Login & Add Product to Cart |
| Q3 | Search Product & Complete Checkout |

## API Automation
API testing is performed using JSONPlaceholder.

- GET `/users` – Verify status code, response array, and user information.
- PUT `/users/{id}` – Update user details using a dynamically stored user ID.
- Validate response status, ID, phone, and updated name.

## Test Reports

### Allure Report
![Allure Report](screenshots/allure-report.png)

### Playwright HTML Report
![Playwright HTML Report](screenshots/playwright-report.png)

### Newman HTML Report
Newman HTML report is available in the `API Automation/newman/` directory.

## Project Structure

```text
Demo-WebShop-Automation/
├── tests/
├── pages/
├── screenshots/
│   ├── allure-report.png
│   └── playwright-report.png
├── API Automation/
│   ├── API Automation.postman_collection.json
│   └── newman/
├── playwright.config.js
├── package.json
└── README.md
```

## Installation

```bash
git clone https://github.com/Rezuanh1/Demo-WebShop-Automation.git
cd Demo-WebShop-Automation
npm install
npx playwright install
```

## Execute UI Tests

```bash
npx playwright test
```

## Generate Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## View Playwright HTML Report

```bash
npx playwright show-report
```

## Execute API Tests with Newman

```bash
newman run "API Automation/API Automation.postman_collection.json" -r cli,htmlextra
```

## Run All UI Tests Sequentially

```bash
npx playwright test
```

