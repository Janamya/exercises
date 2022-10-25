Feature: swag labs

  Scenario Outline: As a user, I can log into the swag labs

    Given I am on the login page
    When I login with <username> and <password>
    Then validate that the <Product> page is open

    Examples:
      | username | password             | Product |
      | standard_user | secret_sauce |   Product |
     