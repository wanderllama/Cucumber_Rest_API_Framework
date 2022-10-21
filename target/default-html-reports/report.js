$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "test framework",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test framework",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "thi",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.thi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.that()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.they()"
});
formatter.result({
  "status": "passed"
});
});