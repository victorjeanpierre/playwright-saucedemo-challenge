# 🚀 Reto de Automatización Front-End - Sauce Demo

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![Node](https://img.shields.io/badge/Node.js-16+-blue)
![Status](https://img.shields.io/badge/Status-Stable-success)

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web [Sauce Demo](https://www.saucedemo.com) utilizando **Playwright** con **Cucumber JS**, implementando el patrón de diseño **Page Object Model (POM)**.

---

## 🎯 Objetivo

Validar el flujo de compra de un e-commerce asegurando calidad funcional mediante pruebas automatizadas bajo enfoque BDD.

---

## 🧠 Estrategia de Automatización

Se aplicaron buenas prácticas de ingeniería de calidad orientadas a escalabilidad y mantenimiento:

- **Page Object Model (POM):**  
  Separación de responsabilidades encapsulando lógica de UI en clases (`LoginPage`, `ProductsPage`, `CheckoutPage`).

- **BDD (Behavior Driven Development):**  
  Uso de Gherkin para describir escenarios entendibles por negocio y QA.

- **Ejecución Aislada:**  
  Hooks (`Before` / `After`) garantizan independencia entre pruebas.

- **Cobertura Funcional:**  
  - ✅ Flujo de compra exitoso  
  - ❌ Validación de usuario bloqueado  

---

## 🛠️ Stack Tecnológico

- **Playwright**
- **Cucumber JS**
- **Node.js**
- **JavaScript (ES6+)**

---

## 📦 Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd playwright-saucedemo-challenge
npm install
npx playwright install chromium
🏃 Ejecución de Pruebas
npm test
📊 Reportes

Se genera automáticamente un reporte HTML:

reports/cucumber-report.html
📁 Estructura del Proyecto
├── features/
│   ├── step_definitions/
│   │   └── steps.js
│   └── compra.feature
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   └── CheckoutPage.js
├── cucumber.js
├── package.json
└── README.md

👨‍💻 Autor
Jean Pierre Curipaco Marquez
QA Automation Engineer
