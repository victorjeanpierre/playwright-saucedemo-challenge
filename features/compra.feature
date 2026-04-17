Feature: Flujo de compra en Sauce Demo

  Background:
    Given El usuario navega a la página de login

  Scenario: Comprar un producto exitosamente
    When Ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And Hace clic en el botón de login
    And Agrega el producto "Sauce Labs Backpack" al carrito
    And Abre el carrito de compras
    And Completa el checkout con nombre "Jean", apellido "Perez" y CP "15001"
    Then Debería ver el mensaje de confirmación "Thank you for your order!"
