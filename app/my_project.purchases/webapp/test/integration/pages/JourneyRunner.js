sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"myproject/purchases/test/integration/pages/PurchasesList",
	"myproject/purchases/test/integration/pages/PurchasesObjectPage"
], function (JourneyRunner, PurchasesList, PurchasesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('myproject/purchases') + '/test/flpSandbox.html#myprojectpurchases-tile',
        pages: {
			onThePurchasesList: PurchasesList,
			onThePurchasesObjectPage: PurchasesObjectPage
        },
        async: true
    });

    return runner;
});

