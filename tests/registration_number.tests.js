describe('addRegistrationNumber', function () {
    it('should add a registration number for Gauteng to the output', function () {
        const regApp = SelectTown()
        const select = regApp.addRegistration("KH78GP");
        assert.equal(select, "KH78GP");
    });

    it('should add a registration number for CapeTown to the output', function () {
        const regApp = SelectTown()
        const select = regApp.addRegistration("CA12345");
        assert.equal(select, "CA12345");
    });

    it('should add a registration number for Durban to the output', function () {
        const regApp = SelectTown()
        const select = regApp.addRegistration("ND1245");
        assert.equal(select, "ND1245");
    });

});

describe('filterRegistrationNumbers', function () {

    it('should filter registration numbers based on the selected town', function () {

    });
});
