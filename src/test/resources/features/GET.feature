@all @GET
Feature: GET HTTP Requests

  Scenario: validate status code GET request all
    Given "GET" request
    And for "all"
    Then status code is "200"

  Scenario: validate status code for GET request by id
    Given "GET" request
    And by "id"
    Then status code is "200"

  Scenario: validate json schema GET request
    Given "GET" request
    And by "id"
    Then json schema mathces "GET"

  Scenario: invalid id GET request
    Given "GET" request
    And by "id"
    Then status code is "404"
