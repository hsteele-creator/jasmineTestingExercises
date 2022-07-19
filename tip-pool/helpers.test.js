describe("testing the helper functions", function() {
    it("checks if the payments object is not blank", function() {
        sumPaymentTotal();
        expect(allPayments.length).not.toEqual({});
    })
    it("checks if the function is truthy", function() {
        calculateTipPercent(10, 20);
        expect(calculateTipPercent).toBeTruthy();
    })
    it("checks if the body that the tr is put in is not blank", function() {
        expect(paymentTbody).not.toEqual("");
    })

})