Feature: Login
  This feature is intended to test login feature the Login
  In order to login with facebook login feature
  As a user
  I want to see me login
  Scenario: login with E-mail
    Given I go to "https://www.facebook.com/"
    And I enter "longhaseng@gmail.com" and "123"
    When I click on login
    Then I should see button Recover Your Account

