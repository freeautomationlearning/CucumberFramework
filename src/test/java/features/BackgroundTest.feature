#Author: freeautomationlearning@gmail.com
Feature: Test Background Keyword

  Background: 
    Given I open a browser
    When I navigate to google page

  Scenario: Validate google search text field
    Then I validate the search text field
	@SmokeTest @All
  Scenario: Validate Gmail Link
    Then I validate the Gmail Link

  Scenario: Validate Image Link
    Then I validate the Image Link
