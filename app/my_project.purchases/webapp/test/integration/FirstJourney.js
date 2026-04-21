sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onThePurchasesList.iSeeThisPage();
            Then.onThePurchasesList.onFilterBar().iCheckFilterField("Customer");
            Then.onThePurchasesList.onFilterBar().iCheckFilterField("Selected Product");
            Then.onThePurchasesList.onTable().iCheckColumns(4, {"purchaseValue":{"header":"Purchase Value"},"rewardPoints":{"header":"Reward Points"},"customer_ID":{"header":"Customer"},"selectedProduct_ID":{"header":"Selected Product"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onThePurchasesList.onFilterBar().iExecuteSearch();
            
            Then.onThePurchasesList.onTable().iCheckRows();

            When.onThePurchasesList.onTable().iPressRow(0);
            Then.onThePurchasesObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});