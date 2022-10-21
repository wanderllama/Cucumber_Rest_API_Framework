package step_definition;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class Hooks {

    static Logger log = LogManager.getLogger();

    public static void logMessage(String msg) {
        log.info(msg);
    }

    @Before
    public void setup(Scenario scenario) {
        log.info("--- Start: " + scenario.getName() + " ---");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed())
            log.info("scenario failed");
        log.info("--- End: " + scenario.getName() + " ---");
    }
}
