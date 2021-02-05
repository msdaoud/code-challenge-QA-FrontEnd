/// Generate random dates (Currently between Feb and March)
let dayDate = Math.floor((Math.random() * 27) + 1);
const startDate = Cypress.moment()
  .add(dayDate, 'day')
  .format('YYYY-MM-DD')

  const endDate = Cypress.moment()
  .add(1, 'month')
  .add(dayDate, 'day')
  .format('YYYY-MM-DD')
////////
// Arrays of Data
let Origin  = ['DXB', 'AUH', 'SHJ', 'JED', 'RUH'];
let Destination = ['AMM', 'CAI', 'DEL', 'KHI', 'PAR'];
let randomIndex = 0; 

// Select random Orgin to add
exports.generateRandomOrgin = () => {
    randomIndex = Math.floor((Math.random() * 5));
    cy.get('[data-testid="FlightSearchBox__FromAirportInput"]').focus().type(Origin[randomIndex]).wait(2000);
    cy.get('[data-testid="FlightSearchBox__AirportOption1"]').click();
  };

// Select Random destination to add
exports.generateRandomDestination = () => {
   randomIndex = Math.floor((Math.random() * 5));
   cy.get('[data-testid="FlightSearchBox__ToAirportInput"]').focus().type(Destination[randomIndex]).wait(2000);
   cy.get('[data-testid="FlightSearchBox__AirportOption1"]').click();
  };

// Select 2 random date
exports.generateRandomDates = () => {
    cy.get('[data-testid="FlightSearchBox__FromDateButton"]').click().wait(1000)
    cy.get(`[data-testid="FlightSearchCalendar__${startDate}"]`).click().wait(1000);
    cy.get('[data-testid="FlightSearchBox__ToDateButton"]').click().wait(1000)
    cy.get(`[data-testid="FlightSearchCalendar__${endDate}"]`).click();
  };

  // Adding Passengers (1Adult)
exports.addPasserngersOneAdult = () => {
// default value is one passenger 
// we need to confirm that 1 adult is selected + all other values are 0
cy.get('[data-testid="FlightSearchBox__PaxDropdown"]').click().wait(100)
cy.get('[data-testid="FlightSearchPAXSelection__AdultsCountLabel"]').contains('1') // adults value =1 
cy.get('[data-testid="FlightSearchPAXSelection__ChildrenCountLabel"]').contains('0') // children value =0 
cy.get('[data-testid="FlightSearchPAXSelection__InfantCountLabel"]').contains('0') // infant value =0

}

  // Adding Cabin Class (Economy)
  exports.addCabinCalsssEconnomy = () => {
    cy.get('[data-testid="FlightSearchBox__CabinTypeDropdown"]').click().wait(250);
    cy.get('[data-testid="FlightSearchCabinSelection__EconomyOption"]').click().wait(250);    
}
