Feature: The Demo Events Website

  Scenario: As a user, I can login with valid credentials

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see the Events Website

    Examples:
      | email                   | password   | 
      | lamija.pehilj@gmail.com | Amazon123- |
    