// // // // const {test , expect }  = require ('@playwright/test'); 


// // // // test ('Basic test ' , async ({page}) =>{ 
    
// // // //     // await page.goto('https://playwright.dev/'); 
// // // //     // const name = await page.innerText('.navbar__title');
// // // //     // expect(name).toBe('Playwright');
       


// // // //     await page.goto('http://cd.blueway.fr:20104/BWDesignerFaces/'); 
// // // //     // const name = await page.innerText('.navbar__title');
// // // //     // expect(name).toBe('Playwright');



// // // //     });


// // // const { test, expect } = require('@playwright/test');

// // // test('test', async ({ page }) => {

// // //   // Go to http://cd.blueway.fr:20104/BWDesignerFaces/
// // //   await page.goto('http://cd.blueway.fr:20104/BWDesignerFaces/');

// // //   // Click input[role="textbox"]
// // //   await page.click('input[role="textbox"]');

// // //   // Fill input[role="textbox"]
// // //   await page.fill('input[role="textbox"]', 'admin');

// // //   // Press Tab
// // //   await page.press('input[role="textbox"]', 'Tab');

// // //   // Fill input[name="loginForm:password"]
// // //   await page.fill('input[name="loginForm:password"]', 'admin');

// // //   // Click button[role="button"]:has-text("Connexion")
// // //   await Promise.all([
// // //     page.waitForNavigation(/*{ url: 'http://cd.blueway.fr:20104/BWDesignerFaces/designer.jsf' }*/),
// // //     page.click('button[role="button"]:has-text("Connexion")')
// // //   ]);

// // //   // Click button[role="button"]:has-text("Objets")
// // //   await page.click('button[role="button"]:has-text("Objets")');

// // //   // Click text=EcranNouveauAcha_e1 - 1Acha_e2a - 1Acha_e2b - 1Acha_e3 - 1CheckModel_MySql_porta >> label
// // //   await page.click('text=EcranNouveauAcha_e1 - 1Acha_e2a - 1Acha_e2b - 1Acha_e3 - 1CheckModel_MySql_porta >> label');

// // //   // Click text=NouveauAcha_e1 - 1Acha_e2a - 1Acha_e2b - 1Acha_e3 - 1CheckModel_MySql_portail_Da >> label
// // //   await page.click('text=NouveauAcha_e1 - 1Acha_e2a - 1Acha_e2b - 1Acha_e3 - 1CheckModel_MySql_portail_Da >> label');

// // //   // Click input[name="tabscontent:tabView:edittext_1_0"]
// // //   await page.click('input[name="tabscontent:tabView:edittext_1_0"]');

// // //   // Fill input[name="tabscontent:tabView:edittext_1_0"]
// // //   await page.fill('input[name="tabscontent:tabView:edittext_1_0"]', 'Hello_Cyrille');

// // //   // Click textarea[role="textbox"]
// // //   await page.click('textarea[role="textbox"]');

// // //   // Fill textarea[role="textbox"]
// // //   await page.fill('textarea[role="textbox"]', 'This is a Playwright :  ');

// // //   // Press Enter
// // //   await page.press('textarea[role="textbox"]', 'Enter');

// // //   // Fill textarea[role="textbox"]
// // //   await page.fill('textarea[role="textbox"]', 'This is a Playwright :');
 

// // //   // Press Enter with modifiers
// // //   await page.press('textarea[role="textbox"]', 'Shift+Enter');

// // //   // Fill textarea[role="textbox"]
// // //   await page.fill('textarea[role="textbox"]', 'This is a Playwright : ');
 

// // //   // Click textarea[role="textbox"]
// // //   await page.click('textarea[role="textbox"]');

// // //   // Click textarea[role="textbox"]
// // //   await page.click('textarea[role="textbox"]');

// // //   // Click textarea[role="textbox"]
// // //   await page.click('textarea[role="textbox"]');

// // //   // Click button[name="tabscontent:tabView:j_idt1255"]
// // //   await page.click('button[name="tabscontent:tabView:j_idt1255"]');

// // // });


// // const { test, expect } = require('@playwright/test');

// // test('test', async ({ page }) => {

// //   // Go to http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf
// //   await page.goto('http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf');

// //   // Click input[role="textbox"]
// //   await page.click('input[role="textbox"]');

// //   // Fill input[role="textbox"]
// //   await page.fill('input[role="textbox"]', 'admin');

// //   // Click input[name="loginForm:password"]
// //   await page.click('input[name="loginForm:password"]');

// //   // Fill input[name="loginForm:password"]
// //   await page.fill('input[name="loginForm:password"]', 'admin');

// //   // Click button[role="button"]:has-text("Connexion")
// //   await Promise.all([
// //     page.waitForNavigation(/*{ url: 'http://cd.blueway.fr:20104/BWDesignerFaces/designer.jsf' }*/),
// //     page.click('button[role="button"]:has-text("Connexion")')
// //   ]);

// //   // Click button[role="button"]:has-text("Objets")
// //   await page.click('button[role="button"]:has-text("Objets")');

// //   // Click text=EcranNouveau >> label
// //   await page.click('text=EcranNouveau >> label');

// //   // Click text=EcranNouveau >> :nth-match(label, 2)
// //   await page.click('text=EcranNouveau >> :nth-match(label, 2)');

// //   // Click input[name="tabscontent:tabView:edittext_1_0"]
// //   await page.click('input[name="tabscontent:tabView:edittext_1_0"]');

// //   // Fill input[name="tabscontent:tabView:edittext_1_0"]
// //   await page.fill('input[name="tabscontent:tabView:edittext_1_0"]', 'Hello_Cyrille');

// //   // Click textarea[role="textbox"]
// //   await page.click('textarea[role="textbox"]');

// //   // Fill textarea[role="textbox"]
// //   await page.fill('textarea[role="textbox"]', 'This is Playwright');

// //   // Click button[name="tabscontent:tabView:j_idt1255"]
// //   await page.click('button[name="tabscontent:tabView:j_idt1255"]');

// // });


// const { test, expect } = require('@playwright/test');

// test('test', async ({ page }) => {

//   // Go to http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf
//   await page.goto('http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf');

//   // Click input[role="textbox"]
//   await page.click('input[role="textbox"]');

//   // Fill input[role="textbox"]
//   await page.fill('input[role="textbox"]', 'admin');

//   // Click input[name="loginForm:password"]
//   await page.click('input[name="loginForm:password"]');

//   // Fill input[name="loginForm:password"]
//   await page.fill('input[name="loginForm:password"]', 'admin');

//   // Click button[role="button"]:has-text("Connexion")
//   await Promise.all([
//     page.waitForNavigation(/*{ url: 'http://cd.blueway.fr:20104/BWDesignerFaces/designer.jsf' }*/),
//     page.click('button[role="button"]:has-text("Connexion")')
//   ]);

//   // Click button[role="button"]:has-text("Objets")
//   await page.click('button[role="button"]:has-text("Objets")');

//   // Click text=EcranNouveau >> label
//   await page.click('text=EcranNouveau >> label');

//   // Click text=EcranNouveau >> :nth-match(label, 2)
//   await page.click('text=EcranNouveau >> :nth-match(label, 2)');

//   // Click input[name="tabscontent:tabView:edittext_1_0"]
//   await page.click('input[name="tabscontent:tabView:edittext_1_0"]');

//   // Fill input[name="tabscontent:tabView:edittext_1_0"]
//   await page.fill('input[name="tabscontent:tabView:edittext_1_0"]', 'Hello_Cyrille');

//   // Click textarea[role="textbox"]
//   await page.click('textarea[role="textbox"]');

//   // Fill textarea[role="textbox"]
//   await page.fill('textarea[role="textbox"]', 'This is : Playwright ');

//   // Click button[name="tabscontent:tabView:j_idt1255"]
//   await page.click('button[name="tabscontent:tabView:j_idt1255"]');

// });


const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf
  await page.goto('http://cd.blueway.fr:20104/BWDesignerFaces/login.jsf');

  // Click input[role="textbox"]
  await page.click('input[role="textbox"]');

  // Fill input[role="textbox"]
  await page.fill('input[role="textbox"]', 'admin');

  // Press Tab
  await page.press('input[role="textbox"]', 'Tab');

  // Fill input[name="loginForm:password"]
  await page.fill('input[name="loginForm:password"]', 'admin');

  // Click button[role="button"]:has-text("Connexion")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://cd.blueway.fr:20104/BWDesignerFaces/designer.jsf' }*/),
    page.click('button[role="button"]:has-text("Connexion")')
  ]);

  // Click button[role="button"]:has-text("Objets")
//   await page.click('button[role="button"]:has-text("Objets")');

await page.click('button[alt="groupproject"]');

  // Click text=BPMNouveauIFR_bpm_loop - 1 >> label
  await page.click('text=BPMNouveauIFR_bpm_loop - 1 >> label');

  // Click text=NouveauIFR_bpm_loop - 1 >> label
  await page.click('text=NouveauIFR_bpm_loop - 1 >> label');

  // Click input[name="tabscontent:tabView:edittext_1_0"]
  await page.click('input[name="tabscontent:tabView:edittext_1_0"]');

  // Fill input[name="tabscontent:tabView:edittext_1_0"]
  await page.fill('input[name="tabscontent:tabView:edittext_1_0"]', 'BPM_Yenzi');

  // Click button[name="tabscontent:tabView:j_idt1255"]
  await page.click('button[name="tabscontent:tabView:j_idt1255"]');

  // Click a:has-text("Editeur")
  await page.click('a:has-text("Editeur")');

  // Click text=Structure
  await page.click('text=Structure');

  // Click text=Activité
  await page.click('text=Activité');

  // Click [id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]
  await page.click('[id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]');

  // Click [id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]
  await page.click('[id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]');

  // Click [id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]
  await page.click('[id="tabscontent:tabView:diagram_2_FACET_zoneFonctionA_FACET_PANEL_3"]');

});

