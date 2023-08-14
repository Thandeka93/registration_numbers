function SelectTown() {
  let townSelected = "";
  let names = {};


    function townSelect(selectedTown) {
      townSelected = selectedTown;
    }

    function addRegistration(registrationNumber) {
     return registrationNumber
    }

    function resetRegistration() {

    }

    return {
        townSelect,
        addRegistration,
        resetRegistration

    }

}