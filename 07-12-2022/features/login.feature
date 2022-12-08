Feature: Trello Application Website

Scenario: As a user, I can login with valid credentials

    Given I am on the login page
    When I login with email and "Avirad23_"
    Then I should see Trello homepage


Scenario: As a user, I can create workspace

    Given I am on the homepage 
    When I fill the workspace form
    Then I should see workspace board
