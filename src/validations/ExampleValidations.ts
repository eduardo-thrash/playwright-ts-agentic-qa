import { expect, type Page } from '@playwright/test';
import { ExamplePage } from '@pages/ExamplePage';

export class ExampleValidations {
  private readonly examplePage: ExamplePage;

  constructor(page: Page) {
    this.examplePage = new ExamplePage(page);
  }

  async pageIsDisplayed(): Promise<void> {
    await expect(this.examplePage.heading).toBeVisible();
  }
}
