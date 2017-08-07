#Author: freeautomationlearning@gmail.com
Feature: Google Search

  Scenario: Validate Search feature
    Given I open a browser
    When I navigate to google page
    And I enter "Cucumber" in search keyword
    And I enter "Youtube" in search keyword
    Then I validate searched text
