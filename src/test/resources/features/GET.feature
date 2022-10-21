@all @GET
Feature: GET HTTP Requests

  Scenario: validate status code GET request all
    Given GET request "all"
    Then status code is "200"

  Scenario: validate status code GET request id
    Given GET request "id"
    Then status code is "200"

  Scenario: validate json schema GET request
    Given GET request "id"
    Then json schema mathces "GET"

  Scenario: invalid id GET request
    Given GET request "id"
    Then status code is "404"
