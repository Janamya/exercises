Feature: Trello Application Website

Scenario: As a user, I can login with valid credentials

    Given I am on the login page
    When I login with email and "Avirad23_"
    Then I should see Trello homepage


Scenario: As a user, I can create workspace

    Given I am on the homepage 
    When I fill the workspace form
    Then I should see workspace board


Scenario: As a user, I can create a board

    Given I am on the create board page
    When I fill out the board form 
    Then The board should be created


Scenario: As a user, I can create a list on the board

    Given I am on the board page
    When I submit list form
    Then The list is created


Scenario: As a user, I can create a card on the list

    Given I am on the create card board page
    When I submit card form
    Then The card is created