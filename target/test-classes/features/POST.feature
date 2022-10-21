@all @POST
Feature: POST HTTP Requests

  Scenario: validate status code for POST request with valid data
    When "/skus" is the endpoint
    And parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
    Given "POST" request
    Then status code is "201"
    And response body has the following
      | createdAt | string |
      | updatedAt | string |

  Scenario: validate status code for POST request with invalid data
    When "/skus" is the endpoint
    And parameters
      | sku         | berliner    |
      | description | Jelly donut |
      | price       | 2.99        |
      | trash       | trash       |
    Given "POST" request
    Then status code is "400"
    And response body has the following
      | createdAt | string |
      | updatedAt | string |

