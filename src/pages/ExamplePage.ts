import { type Page } from '@playwright/test';

export class ExamplePage {
  constructor(readonly page: Page) {}

  readonly heading = this.page.getByRole('heading', { level: 1 });
}
