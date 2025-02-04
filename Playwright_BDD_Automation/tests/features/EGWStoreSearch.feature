@smoke
Feature: Store Search Functionality

Background:
Given I access eyeglassworld portal 

@smoke
Scenario: Verify the functionality of searching an eyeglass store based on 'City' name
When I search for an eyeglass store based on City as 'tampa'
Then I should see the appropriate store results
