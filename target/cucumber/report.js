$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SimpleScenario.feature");
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
formatter.before({
  "duration": 3821149296,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate google search text field",
  "description": "",
  "id": "google-search;validate-google-search-text-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@web"
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
  "name": "I validate the search text field",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 140653472,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 4371875045,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_validate_the_search_text_field()"
});
formatter.result({
  "duration": 61211552,
  "status": "passed"
});
formatter.after({
  "duration": 1091105776,
  "status": "passed"
});
});