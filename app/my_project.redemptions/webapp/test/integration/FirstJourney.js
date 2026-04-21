sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheRedemptionsList.iSeeThisPage();
            Then.onTheRedemptionsList.onFilterBar().iCheckFilterField("Customer");
            Then.onTheRedemptionsList.onTable().iCheckColumns(2, {"redeemedAmount":{"header":"Redeemed Amount"},"customer_ID":{"header":"Customer"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheRedemptionsList.onFilterBar().iExecuteSearch();
            
            Then.onTheRedemptionsList.onTable().iCheckRows();

            When.onTheRedemptionsList.onTable().iPressRow(0);
            Then.onTheRedemptionsObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});