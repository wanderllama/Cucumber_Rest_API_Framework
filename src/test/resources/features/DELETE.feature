@all @DELETE
Feature: DELETE HTTP Requests

  Scenario: validate status code for DELETE request by id
    Given "DELETE" request
    And by "id"
    Then status code is "200"
    And "GET" request
    And by "id"
    Then status code is "404"