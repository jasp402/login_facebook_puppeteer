const puppeteer = require('puppeteer');

(async () => {
    //Instanciamos todas las configuraciones en el Launch()
    const browser = await puppeteer.launch({headless:false});

    //Creamos una nueva pagina
    const page = await browser.newPage();

    //abrimos la pagina de Facebook
    await page.goto('https://www.facebook.com');

    //Escribimos en el input de correo
    await page.type('#email', '_AQUI_VA_TU_CORREO_')


    //Escribimos en el input de contraseña
    await page.type('#pass', '_AQUI_VA_TU_CONTRASEÑA_')

    //Presionamos el boton entrar
    await page.$eval('button[name="login"]', el => el.click());


    //Tomamos un screenshot una vez
    await page.screenshot({path: 'example.png'});

    //cerramos el navegador
    await browser.close();
})();