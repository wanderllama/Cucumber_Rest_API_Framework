@all @POST
Feature: POST HTTP Requests

  Scenario: validate status code for POST request valid data
    When parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
    Given "POST" request
    Then status code is "201"
