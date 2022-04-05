Feature: Assessments

# This assessment is designed to test a candidates ability to debug broken tests
# and their ability to understand the test structure
# For this test assume the app is correct and no changes need to be made in the app.

  Scenario Outline: Assessment 1 - As a user, I can log into the app
    Given I am on the "test 1" page
    When I login with <username> and <password>
    And I click the "Submit" button
    Then I should view a flash message saying <message>
    Examples:
      | username | password     | message        |
      | JohnDoe  | Password1234 | Access Granted |
      | foobar   | barfoo       | Access Denied  |


# This assessment is designed to test a candidates basic Javascript ability
# For this assessment assume the below test is correct
# Any changes that need to be made will be made in the app under src/pages/Test2.js
# Can view test app at http://localhost:3000/test2

  Scenario Outline: Assessment 2 - As a user, I can select items from a list
    Given I am on the "test 2" page
    When I select "item 1" checkbox
    And I select "item 2" checkbox
    Then I expect the "selected items" to contain "Item 1,Item 2"