# 🎭 Playwright Automation Framework

> Production-grade E2E + API test automation framework built with **Playwright** and **JavaScript**

[![Playwright Tests](https://github.com/gokulakannan7889/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/gokulakannan7889/playwright-automation-framework/actions)
![Playwright](https://img.shields.io/badge/Playwright-v1.44-2EAD33?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![CI/CD](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📁 Project Structure

```
playwright-automation-framework/
│
├── tests/
│   ├── e2e/                   # End-to-end UI tests
│   │   └── todo.spec.js
│   └── api/                   # API-level tests (no browser)
│       └── users.api.spec.js
│
├── pages/                     # Page Object Model classes
│   ├── BasePage.js            # Shared base with reusable actions
│   └── TodoPage.js            # Page-specific locators & methods
│
├── utils/
│   └── helpers.js             # Reusable utility functions
│
├── test-data/
│   └── testData.js            # Centralised test data
│
├── .github/
│   └── workflows/
│       └── playwright.yml     # CI/CD pipeline (GitHub Actions)
│
├── playwright.config.js       # Framework configuration
├── .env.example               # Environment variable template
└── package.json
```

---

## ✨ Key Features

| Feature | Detail |
|--------|--------|
| 🏗️ **Design Pattern** | Page Object Model (POM) |
| 🌐 **Cross-browser** | Chromium, Firefox, WebKit, Mobile |
| 🔗 **API Testing** | Built-in Playwright API request context |
| 🏷️ **Test Tagging** | `@smoke` and `@regression` for selective runs |
| 📊 **Reporting** | HTML report + JSON output |
| 🤖 **CI/CD** | GitHub Actions — runs on push, PR & nightly schedule |
| 🔄 **Retries** | Auto-retry on CI failure |
| 📸 **Artifacts** | Screenshots & videos on failure |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/gokulakannan7889/playwright-automation-framework.git
cd playwright-automation-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Environment Setup

```bash
cp .env.example .env
# Edit .env with your target URL and credentials
```

---

## ▶️ Running Tests

```bash
# Run all tests
npm test

# Run in headed mode (see browser)
npm run test:headed

# Run only smoke tests
npm run test:smoke

# Run only regression tests
npm run test:regression

# Run API tests only
npm run test:api

# View HTML report
npm run report
```

---

## 🧪 Test Tags

| Tag | Purpose | When to Run |
|-----|---------|-------------|
| `@smoke` | Critical happy-path checks | Every deployment |
| `@regression` | Full test coverage | Nightly / release |

---

## 📊 CI/CD Pipeline

GitHub Actions is configured to:
- ✅ Run **smoke tests** on every Pull Request
- ✅ Run **full suite** on push to `main` / `develop`
- ✅ Run **nightly regression** at 6 AM IST
- ✅ Upload **HTML reports** as pipeline artifacts
- ✅ Upload **screenshots/videos** on failure

---

## 👨‍💻 Author

**Gokulakannan** — Senior QA Automation Engineer  
🔗 [LinkedIn](https://linkedin.com/in/YOUR-LINKEDIN)  
📧 YOUR-EMAIL

---

*Part of my QA automation portfolio — see more at [github.com/gokulakannan7889](https://github.com/gokulakannan7889)*
