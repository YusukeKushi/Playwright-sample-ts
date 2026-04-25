import { test, expect } from '../fixtures/my-fixtures';

// 引数に書き加えるだけ！
test('Fixturesでログイン成功テスト', async ({ loginPage, topPage, page }) => {
    // 自分でインスタンス化する必要がない！勝手に用意されている
    await loginPage.navigate();
    await loginPage.login('sample+36686@gmail.com', 'Test0123');

    await expect(page).toHaveTitle('メインページ');

    
});