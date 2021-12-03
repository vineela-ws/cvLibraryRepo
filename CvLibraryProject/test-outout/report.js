$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vineelaa/Desktop/CvLibrary/CvLibraryProject/src/main/java/features/jobSearchFile.feature");
formatter.feature({
  "line": 2,
  "name": "Job Serch Feature",
  "description": "",
  "id": "job-serch-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Job serch Scenario",
  "description": "",
  "id": "job-serch-feature;job-serch-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on cv library page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Check the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter the \u003cjobtitle\u003e and \u003clocation\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on the FindJobs button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "job-serch-feature;job-serch-scenario;",
  "rows": [
    {
      "cells": [
        "jobtitle",
        "location"
      ],
      "line": 12,
      "id": "job-serch-feature;job-serch-scenario;;1"
    },
    {
      "cells": [
        "Auotomation",
        "United"
      ],
      "line": 13,
      "id": "job-serch-feature;job-serch-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Job serch Scenario",
  "description": "",
  "id": "job-serch-feature;job-serch-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on cv library page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Check the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter the Auotomation and United",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on the FindJobs button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearch.user_is_on_cv_library_page()"
});
formatter.result({
  "duration": 39713171900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearch.Check_the_logo()"
});
formatter.result({
  "duration": 102623700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearch.user_Enter_the_Auotomation_and_United(String,String)"
});
formatter.result({
  "duration": 934600,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefination.JobSearch.user_Enter_the_Auotomation_and_United(String,String) in file:/C:/Users/vineelaa/Desktop/CvLibrary/CvLibraryProject/target/classes/\u0027 with pattern [^User Enter the Auotomation and United$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: When User Enter the Auotomation and United\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearch.click_on_the_FindJobs_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearch.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});