sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"myproject/redemptions/test/integration/pages/RedemptionsList",
	"myproject/redemptions/test/integration/pages/RedemptionsObjectPage"
], function (JourneyRunner, RedemptionsList, RedemptionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('myproject/redemptions') + '/test/flpSandbox.html#myprojectredemptions-tile',
        pages: {
			onTheRedemptionsList: RedemptionsList,
			onTheRedemptionsObjectPage: RedemptionsObjectPage
        },
        async: true
    });

    return runner;
});

