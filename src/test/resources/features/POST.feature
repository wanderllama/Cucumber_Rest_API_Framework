@all @POST
Feature: POST HTTP Requests

  Scenario: validate status code for POST request with valid data
    When parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
    Given "POST" request
    Then status code is "200"
    And response body
      | createdAt | string |
      | updatedAt | string |

  Scenario: validate status code for POST request with invalid data
    When parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
      | trash       | trash       |
    Given "POST" request
    Then status code is "400"
    And response body
      | createdAt | string |
      | updatedAt | string |

