const flightsHome = require('../../methods/flights-home.js');
const flightsListing = require('../../methods/flightLising');
//const { it } = require('mocha');


context('code-challenge // QA FrontEnd', () => {
  describe('Tajawal UI', () => {

    before(() => {
      cy.visit('');
    });

    it('Navigate to Tajwal and verify the site is in English', () => {
        cy.url().should('include', '/en'); // confirm the english in the URL
        cy.get('[data-testid="Header__LanguageSwitch"]').then(($label)=>{
            if($label.text().includes('English')){ // If "English" displays that mean site is in Arabic
              $label.click(); //switch the site to Engilsh 
            }
        })
    });


    it('Navigate to flights-home page and entering random criteria', () => {
      cy.visit('/flights-home');
      
      flightsHome.generateRandomOrgin(); // add orgin 
      flightsHome.generateRandomDestination(); // add destination
      flightsHome.generateRandomDates(); // add random dates for the next 2 month
      flightsHome.addPasserngersOneAdult(); // Add pssenger - 1 adult
      flightsHome.addCabinCalsssEconnomy(); // Add Cabin class - Economy

      // Click on search flight button
      cy.get('div[class*="sc-htpNat"] [data-testid="FlightSearchBox__SearchButton"]').click({ force: true }).wait(40000);
    });



    
    it('Waiting for flight list to load, and to sort fligh by cheap it and confirm it ', () => {
      // confirming that progress bar is finished
        cy.get('[data-testid="FlightSearchResults__ProgressBar__finished"]').wait(3000).should('exist');
        flightsListing.sortByCheapest(); // sorting by the cheapest and confirm it
    });

    // Saving the first flight price
    it('fetch and save price of first flight', () => {
      flightsListing.saveFirstFlightPrice();
    });


    // Compare the value of the first flight price and the min-price value under price range filter
    it('Assert the minimum-price displayed for price-range-filter equals to price of first-flight in list', () => {
      flightsListing.minPrice_and_FirstFlightPrice();
    });
  });
});


