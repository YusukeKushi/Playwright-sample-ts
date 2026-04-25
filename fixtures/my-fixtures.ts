import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TopPage } from '../pages/TopPage';

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

export { expect } from '@playwright/test';