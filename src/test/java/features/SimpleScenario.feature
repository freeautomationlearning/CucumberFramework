#Author: freeautomationlearning@gmail.com
Feature: Google Search

	@web
  Scenario: Validate google search text field
    Given I open a browser
    When I navigate to google page
    Then I validate the search text field
