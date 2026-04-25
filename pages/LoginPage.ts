import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('http://localhost:8080/login');
    }

    async login(mail: string, pass: string) {
        await this.page.fill("input[name='mailAddress']", mail);
        await this.page.fill("input[name='password']", pass);
        await this.page.click("button#reg_submit");
    }
}