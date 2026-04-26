import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TopPage } from '../pages/TopPage';
import * as allureApi from "allure-js-commons";

// 型を定義して拡張する
type MyFixtures = {
  loginPage: LoginPage;
  topPage: TopPage;
};

// base.extend で拡張版の test を作成
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  topPage: async ({ page }, use) => {
    await use(new TopPage(page));
  },
});

// 2. この拡張されたtestに対して、afterEachを適用する
test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();
  await allureApi.attachment("snapshot", screenshot, "image/png");
  console.log(`Screenshot attached for test: ${testInfo.title}`);
});

export { expect } from '@playwright/test';