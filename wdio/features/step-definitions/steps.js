import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page";
import ListPage from "../pageobjects/list.page";
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

Given(/^I am on the "([^"]*)" page$/, async (page) => {
  const pageKey = page.replace(/\s+/g, "");
  switch (pageKey) {
    case "test1":
      await LoginPage.open(pageKey);
      break;
    case "test2":
      await ListPage.open(pageKey);
      break;
    default:
      Page.open(pageKey);
  }
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I click the "([^"]*)" button$/, (element) => {
  if (![element.toLowerCase()]) {
    throw new Error(
      `Function or property "${element}" does not exist on Login page"`
    );
  }

  try {
    typeof LoginPage[element.toLowerCase()] === "function"
      ? LoginPage[element.toLowerCase()].bind(LoginPage)
      : LoginPage[element.toLowerCase()].click();
  } catch (err) {
    throw new Error(err);
  }
});

When(/^I select "([^"]*)" checkbox$/, (element) => {
  if (!ListPage[element.toLowerCase().replace(/\s+/g, "")]) {
    throw new Error(
      `Function or property "${element}" does not exist on List page"`
    );
  }

  try {
    typeof ListPage[element.toLowerCase().replace(/\s+/g, "")] === "function"
      ? ListPage[element.toLowerCase().replace(/\s+/g, "")].bind(ListPage)
      : ListPage[element.toLowerCase().replace(/\s+/g, "")].click();
  } catch (err) {
    throw new Error(err);
  }
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I expect the "([^"]*)" to contain "([^"]*)"$/, async (element, text) => {
  if (!ListPage[element.toLowerCase().replace(/\s+/g, "")]) {
    throw new Error(
      `Function or property "${element}" does not exist on List page"`
    );
  }

  try {
    await expect(
      ListPage[element.toLowerCase().replace(/\s+/g, "")]
    ).toHaveTextContaining(text);
  } catch (err) {
    throw new Error(err);
  }
});
