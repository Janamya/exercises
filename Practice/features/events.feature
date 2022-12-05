Feature: The Demo Events Website - events page

  Scenario: Verify that the error message will pop up when user search for the event in the search bar

    Given I am on the events page
    When I search for "sport events"
    Then I should see results

  