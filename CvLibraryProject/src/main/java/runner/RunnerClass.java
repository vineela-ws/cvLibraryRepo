package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = {"C:\\Users\\vineelaa\\Desktop\\CvLibrary\\CvLibraryProject\\src\\main\\java\\features\\jobSearchFile.feature"},
 glue={"stepDefination"},
 format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
 monochrome = true //display the console output in a proper readable format
 
 )

public class RunnerClass {

}
