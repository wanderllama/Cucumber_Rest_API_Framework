@all @DELETE
Feature: DELETE HTTP Requests

  Background: make POST request and retrieve {id} for DELETE request
    When "/skus" is the endpoint
    And parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
    Given "POST" request
    Then status code is "201"

  Scenario: validate status code for DELETE request by id
    When "/skus/181PFD6R1INKLFTNUKE9V9SLU7VV4KQNSO5AEMVJF66Q9ASUAAJG" is the endpoint
    Given "DELETE" request
    Then status code is "200"