@all @DELETE
Feature: DELETE HTTP Requests

  Background: make POST request and retrieve {id} for DELETE request
    When "/skus" is the endpoint
    And parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
    Given "POST" request
    Then status code is "200"

  Scenario: validate status code for DELETE request by id
    When "/skus/{id}" is the endpoint
    Given "DELETE" request
    Then status code is "200"