/**
 * The custom logic attached to the Redemptions entity to deduct the redemption amount from the customer's total reward points and add that to their total redeemed points.
 * @Before(event = { "CREATE" }, entity = "my_projectSrv.Redemptions")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	// Your code here
}