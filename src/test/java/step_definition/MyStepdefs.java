package step_definition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import static io.restassured.RestAssured.*;

import java.util.Map;

public class MyStepdefs {

    Logger log = LogManager.getLogger();

    Response response;

    Map<String, String> requestBody;

    String endpoint;

    @When("{string} is the endpoint")
    public void isTheEndpoint(String endpoint) {
        log.info("\nstart of test case");
        RestAssured.baseURI = "https://1ryu4whyek.execute-api.us-west-2.amazonaws.com";
        RestAssured.basePath = "/dev";
        this.endpoint = endpoint;
    }

    @Given("{string} request")
    public void request(String requestType) throws Exception {
        switch (requestType) {
            case "GET":
                response = given().accept(ContentType.JSON)
                        .get(endpoint);
                log.info("GET request made to " + endpoint);
                break;
            case "POST":
                response = given().accept(ContentType.JSON)
                        .body(requestBody)
                        .post(endpoint);
                log.info("POST request made to " + endpoint);
                break;
            case "DELETE":
                response = given().accept(ContentType.JSON)
                        .delete(endpoint);
                log.info("DELETE request made to " + endpoint);
                break;
            default:
                log.info("invalid request type used in Give \"requestType\" request step of this scenario");
                throw new Exception(requestType + " is not a valid request type to be used in scenario -> POST, GET, DELETE are valid types");
        }
    }

    @Then("status code is {string}")
    public void statusCodeIs(String statusCode) {
        log.info(statusCode + " is the expected status code for this request");
        try {
            int actualStatusCode = response.getStatusCode();
            log.info(actualStatusCode + " is the actual status code for this request");
            int tmp = Integer.parseInt(statusCode);
            response.then().assertThat().statusCode(tmp);
        } catch (NumberFormatException e) {
            log.info(statusCode + " is not a valid number and can not be used in step definition");
        }
    }

//    @Then("json schema mathces {string}")
//    public void jsonSchemaMathces(String schemaType) {
//
//    }

    @And("parameters")
    public void parameters(Map<String , String> requestBody) {

    }

    @And("response body has the following")
    public void responseBodyHasTheFollowing(Map<String , String> responseBody) {

    }
}
