# Playwright Visual Automation for OrangeHRM

## 📌 Overview
This project automates visual regression testing for the **OrangeHRM application** using **Playwright**. The tests capture and compare screenshots to detect UI changes across key workflows, ensuring UI consistency.

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v16 or later)
- Playwright installed globally
- OrangeHRM demo or production environment

### 2️⃣ Install Dependencies
Run the following commands:
```sh
# Initialize the project (if not already done)
npm init -y

# Install Playwright and dotenv for environment variables
npm install --save-dev @playwright/test dotenv

# Install browsers
npx playwright install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory:
```sh
USERNAME=
PASSWORD=
BASE_URL=
```

## 🚀 Running Tests
To execute the visual tests:
```sh
npx playwright test
```

To run in headed mode (visible browser):
```sh
npx playwright test --headed
```

To update baseline screenshots (if UI changes are expected):
```sh
npx playwright test --update-snapshots
```

## 📝 Test Scenarios

### ✅ Admin Dashboard Verification
- Validate the visual appearance of the Admin Dashboard after logging in.

### ✅ Employee Search Results
- Verify the UI consistency of the Employee List page after performing a search.

### ✅ Employee Addition and Details Page
- Compare the UI of the "Add Employee" form and the "Employee Details" page after saving a new employee.


## 🔍 How Playwright Handles Visual Testing
- Playwright uses `expect(page).toHaveScreenshot()` to capture and compare screenshots.
- It automatically generates a **baseline image** on the first run.
- On subsequent test runs, it **compares the new screenshot with the baseline**.
- If there's a **difference**, Playwright **highlights the changes** and saves the **diff images**.


---
📌 **Happy Testing! 🚀**


