Feature: Trello Application Website

Scenario: As a user, I can login with valid credentials

    Given I am on the login page
    When I login with email and "Avirad23_"
    Then I should see Trello homepage
