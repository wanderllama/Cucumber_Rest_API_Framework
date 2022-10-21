@all @GET
Feature: GET HTTP Requests

  Scenario: validate status code GET request all
    When "/skus" is the endpoint
    Given "GET" request
    Then status code is "200"

  Scenario: validate status code for GET request by id
    When "/skus/JB7RKM52IHBC0I99M6KVHLKC9NVV4KQNSO5AEMVJF66Q9ASUAAJG" is the endpoint
    Given "GET" request
    Then status code is "200"

#  Scenario: validate json schema GET request
#    When "/skus/JB7RKM52IHBC0I99M6KVHLKC9NVV4KQNSO5AEMVJF66Q9ASUAAJG" is the endpoint
#    Given "GET" request
#    Then json schema mathces "GET"

  Scenario: invalid id GET request
    When "/skus/invalidIdNumber" is the endpoint
    Given "GET" request
    Then status code is "404"
