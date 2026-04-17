const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

// Aumentamos el tiempo de espera por si el internet está lento
setDefaultTimeout(60 * 1000);

let browser, context, page;
let loginPage, productsPage, checkoutPage;

Before(async function () {
    // Abrimos el navegador
    browser = await chromium.launch({ headless: false }); 
    context = await browser.newContext();
    page = await context.newPage();
    
    // Inicializamos los Page Objects
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutPage = new CheckoutPage(page);
});

After(async function () {
    // Solo cerramos si el browser existe para evitar el error que te salió
    if (browser) {
        await browser.close();
    }
});

// --- PASOS ---

Given('El usuario navega a la página de login', async function () {
    await loginPage.goto();
});

When('Ingresa el usuario {string} y la contraseña {string}', async function (user, pass) {
    await loginPage.login(user, pass);
});

When('Hace clic en el botón de login', async function () {
    // Este paso ya lo hace el método login, pero lo dejamos para cumplir con el Gherkin
});

Then('Debería ver la página de productos', async function () {
    await expect(page).toHaveURL(/inventory.html/);
});

Then('Debería aparecer un mensaje de error que dice {string}', async function (msg) {
    const error = await loginPage.errorMessage.textContent();
    expect(error).toContain(msg);
});

When('Agrega el producto {string} al carrito', async function (product) {
    await productsPage.addProductToCart(product);
});

When('Abre el carrito de compras', async function () {
    await productsPage.goToCart();
});

When('Completa el checkout con nombre {string}, apellido {string} y CP {string}', async function (n, a, c) {
    await checkoutPage.completeInformation(n, a, c);
});

Then('Debería ver el mensaje de confirmación {string}', async function (msg) {
    const text = await checkoutPage.completeHeader.textContent();
    expect(text).toBe(msg);
});
