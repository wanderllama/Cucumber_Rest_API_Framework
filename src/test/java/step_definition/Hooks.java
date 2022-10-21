package step_definition;

import gherkin.ast.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.*;

public class Hooks extends MyStepdefs {

    @Before
    public void setup(Scenario scenario) {
        log.info("--- Start: " + scenario.getName() + " ---");
    }

    @After void tearDown(Scenario scenario) {
        log.info("--- End: " + scenario.getName() + " ---");
    }
}
