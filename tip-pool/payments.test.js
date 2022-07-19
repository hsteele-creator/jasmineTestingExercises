describe("checking payment functions", function() {
    it("checks if the payment and bill inputs are reset to empty after the function is run", function() {
        submitPaymentInfo();
        expect(billAmtInput.value).toEqual("");
        expect(tipAmtInput.value).toEqual("");
    })

    it("checks if the bill and tip are truthy values", function() {
        createCurPayment();
        expect(billAmt).toBeTruthy();
        expect(tipAmt).toBeTruthy();
    })

    it("checks if the payment table is a truthy value", function() {
        createCurPayment();
        expect(paymentTbody).toBeTruthy();
    })
    it("checks if the tds are not blank", function() {
        updateSummary();
        expect(summaryTds).not.toEqual("");
    })
})