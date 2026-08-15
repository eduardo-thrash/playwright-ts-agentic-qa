import { createBdd } from 'playwright-bdd';
import { test } from '@fixtures/test';
import { ExampleActions } from '@actions/ExampleActions';
import { ExampleValidations } from '@validations/ExampleValidations';

const { Given, Then } = createBdd(test);

Given('the user has opened the example application', async ({ page }) => {
  await new ExampleActions(page).open();
});

Then('the example page is displayed', async ({ page }) => {
  await new ExampleValidations(page).pageIsDisplayed();
});
