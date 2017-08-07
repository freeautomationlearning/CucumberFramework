$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenarioOutlineTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: freeautomationlearning@gmail.com"
    }
  ],
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Search feature",
  "description": "",
  "id": "google-search;validate-search-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SearchText"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003csearchText\u003e\" in search keyword",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate searched text",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "google-search;validate-search-feature;",
  "rows": [
    {
      "cells": [
        "searchText"
      ],
      "line": 12,
      "id": "google-search;validate-search-feature;;1"
    },
    {
      "cells": [
        "Cucumber"
      ],
      "line": 13,
      "id": "google-search;validate-search-feature;;2"
    },
    {
      "cells": [
        "YouTube"
      ],
      "line": 14,
      "id": "google-search;validate-search-feature;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4295138493,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Search feature",
  "description": "",
  "id": "google-search;validate-search-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SearchText"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Cucumber\" in search keyword",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate searched text",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 3227738010,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 4168193101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.i_enter_in_search_keyword(String)"
});
formatter.result({
  "duration": 5237066150,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_validate_searched_text()"
});
formatter.result({
  "duration": 5014868386,
  "status": "passed"
});
formatter.after({
  "duration": 979447886,
  "status": "passed"
});
formatter.before({
  "duration": 3210774049,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Search feature",
  "description": "",
  "id": "google-search;validate-search-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SearchText"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"YouTube\" in search keyword",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate searched text",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 3056525016,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 3782945645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YouTube",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.i_enter_in_search_keyword(String)"
});
formatter.result({
  "duration": 5198768859,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_validate_searched_text()"
});
formatter.result({
  "duration": 5009635114,
  "status": "passed"
});
formatter.after({
  "duration": 916206836,
  "status": "passed"
});
});