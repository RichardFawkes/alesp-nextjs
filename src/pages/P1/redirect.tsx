const Redirect = () => {
  const { Builder, By, Key, until } = require('selenium-webdriver');

  async function loginAndRedirect() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
      // Acessa o site
      await driver.get('https://vvdemo.visualvault.com/VVLogin');

      // Localiza os elementos de login
      let username = await driver.findElement(By.id('txtUserID'));
      let password = await driver.findElement(By.id('txtPassword'));
      let submitButton = await driver.findElement(By.id('btnLogin'));

      // Preenche os campos de login
      await username.sendKeys('richard.ferreira@grmdoc.com.br');
      await password.sendKeys('123456');

      // Envia o formulário de login
      await submitButton.click();

      // Verifica se o redirect foi bem-sucedido
      let currentUrl = await driver.getCurrentUrl();
      if (
        currentUrl.includes(
          'https://vvdemo.visualvault.com/VVLogin?returnUrl=%7e%2fapp%2fPedroDemo%2fMain%2fDocumentLibrary%3fFolderID%3d5d36a0b1-5ba2-ed11-a9e7-ffacaa825bd0'
        )
      ) {
        console.log('Redirect bem-sucedido!');
      } else {
        console.log('Redirect falhou.');
      }
    } finally {
      // Fecha o navegador
      await driver.quit();
    }
  }

  loginAndRedirect();
};

export default Redirect;
