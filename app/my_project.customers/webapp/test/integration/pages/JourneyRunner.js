sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"myproject/customers/test/integration/pages/CustomersList",
	"myproject/customers/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('myproject/customers') + '/test/flpSandbox.html#myprojectcustomers-tile',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

