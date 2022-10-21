# API Testing For Maintenance of Stock Keeping Unit Identifiers (SKUs)
### Description of framework
This is a java cucumber-junit framework with REST-ASSURED libraries built using maven to properly test the behavior of this REST API.  

The framework is seperated into two layers. The business layer is in the features package located in resources. Each feature file has a list of BDD scenarios describing an event designed to test the API. The scenarios are broken into steps and each step is written in gherkin, an easy to understand business language.   

The second layer is the implementation layer is located in the step_definitions package. Each step of a scenario has code implementation to automate the step.   

The runner class uses the @CucumberOptions annotation to define the file locations of the features and step definitions.  

A plugin has been added to produce simple HTML reports that are generated in the target folder each time this class is executed. log4j is used to generate logs during test execution.  

Tags are annotations that are assigned to each feature or scenario to create testing suites (@all, @post, @get). If you want to run a suite you can define a tag in @CucumberOptions to run locally or when using the mvn command (mvn clean test -Dcucumber.filter.tags="@TestTag") where @TestTag is the tag to be run.  
### Description of API
The development team for a retail organization has built an API intended to be used for the
maintenance of Stock Keeping Unit identifiers (__SKUs__) which are used to identify and track the
items the company has for sale.

This API implements the basic __CRUD__ operations

Create/Update operations are handled through HTTP __POST__
- Expected __POST__ body has __sku__, __description__, and __price__  
  {  
  "sku": "berliner",  
  "description": "Jelly donut",  
  "price": "2.99"  
  }

Read operations are handled through HTTP __GET__

Delete operations are handled through HTTP __DELETE__

### List of Dependencies


