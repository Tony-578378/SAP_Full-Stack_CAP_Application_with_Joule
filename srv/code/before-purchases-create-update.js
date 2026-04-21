/**
 * The custom logic attached to the Purchases entity to calculate reward points based on the purchase value and update the total purchase value and total reward points of the related customer.
 * @Before(event = { "CREATE","UPDATE" }, entity = "my_projectSrv.Purchases")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	// Your code here
}