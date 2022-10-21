import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-html-reports"},
        features = "src/test/resources/features/",
        glue = "step_definition/"
//       , dryRun = true
//        ,tags = "@all"
)
public class Runner {
}
