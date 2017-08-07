#Author: freeautomationlearning@gmail.com
Feature: Google Search

  @SearchText
  Scenario Outline: Validate Search feature
    Given I open a browser
    When I navigate to google page
    And I enter "<searchText>" in search keyword
    Then I validate searched text

    Examples: 
      | searchText |
      | Cucumber   |
      | YouTube   |
      