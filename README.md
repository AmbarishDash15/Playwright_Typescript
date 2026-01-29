# 🎭 Playwright TypeScript Automation Framework

<p align="left">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Maintenance-Active-green?style=for-the-badge" />
</p>

### 📖 Overview
The **Playwright_Typescript** framework is an enterprise-grade automation solution designed for high-performance end-to-end testing. Targeting the **The Internet (HerokuApp)**, this project serves as a showcase for handling complex web interactions using the **Page Object Model (POM)** and TypeScript's strict type-safety.

---

## ✨ Key Framework Features

| 🏗️ Architecture | 🛠️ Reliability | 📊 Reporting |
| :--- | :--- | :--- |
| **Page Object Model** - Clean separation of UI logic and test scripts. | **Auto-Wait Logic** - Web-first assertions to eliminate flakiness. | **HTML Reports** - Detailed logs with embedded screenshots. |
| **Type Safety** - Catch errors during development with TypeScript. | **Parallel Execution** - Run tests across multiple workers for speed. | **Trace Viewer** - Record and replay test failures for easy debugging. |

---

## 📑 Test Coverage: HerokuApp Scenarios
This framework handles the most challenging web components found in modern applications:

* **🔐 Authentication:** Full flow for secure login, session management, and error validation.
* **🖱️ Interactivity:** Automated handling of Checkboxes, Radio buttons, and Select menus.
* **⚠️ Alert Management:** Programmatic interaction with JS Alerts, Confirms, and Prompts.
* **📂 File Operations:** Seamless automation for file uploads and downloads.
* **🔲 Complex Contexts:** Robust handling of iFrames and multiple browser windows/tabs.
* **⚡ Dynamic UI:** Strategies for AJAX-loaded content and hidden element visibility.

---

## ⚙️ Major Implementation Details
* **`playwright.config.ts`**: Centralized configuration for retries, timeouts, and browser engines (Chromium, Firefox, WebKit).
* **Custom Fixtures**: Simplified test setup that reduces boilerplate and improves readability.
* **Smart Locators**: Implementation of resilient locator strategies that ignore DOM noise.
* **Cross-Browser Emulation**: Configured to test responsiveness across desktop and mobile viewports.

---

## 🚀 Getting Started

### 1. Installation
```bash
# Clone the repository
git clone [https://github.com/AmbarishDash15/Playwright_Typescript.git](https://github.com/AmbarishDash15/Playwright_Typescript.git)

# Enter the project directory
cd Playwright_Typescript

# Install dependencies
npm install

# Install Playwright browser binaries
npx playwright install
