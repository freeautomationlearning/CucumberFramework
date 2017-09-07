#Author: freeautomationlearning@gmail.com
Feature: Validate Different Options

  @appium
  Scenario: Validate Custom View
    Given I open the application
    When I tap on Accessibility
    Then I validate Custom View
