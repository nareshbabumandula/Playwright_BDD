Feature: Store Search Functionality

Background:
Given I access eyeglassworld portal 

Scenario: Verify the functionality of searching an eyeglass store based on 'City' name
When I search for an eyeglass store based on City as 'tampa'
Then I should see the appropriate store results

Scenario: Verify the functionality of searching an eyeglass store based on 'State' name
When I search for an eyeglass store based on State as 'florida'
Then I should see the appropriate store results

Scenario: Verify the functionality of searching an eyeglass store based on 'zipcode'
When I search for an eyeglass store based on zipcode as '33629'
Then I should see the appropriate store results

@smoke
Scenario Outline: Verify the functionality of searching an eyeglass store based on 'city/state/zipcode'
When I search for an eyeglass store based on '<searchType>' as '<searchValue>'
Then I should see the '<searchValue>' in store search results 
Examples:
|searchType|searchValue|
|City|tampa|
|State|florida|
|Zipcode|33629|
