
Feature: Job Serch Feature
   
  Scenario Outline: Job serch Scenario
    Given User is on cv library page 
    Then Check the logo
    When User Enter the <jobtitle> and <location>
    Then Click on the FindJobs button
    And  Close the Browser
    
    Examples:
    |jobtitle     | location |
    | Auotomation | United   |
     
     
    
    
  