let firstFlightPrice = 0;

// Select and confirm that flight list are sorted by the cheapest
exports.sortByCheapest = () => {
    cy.get('button[data-testid="Cheapest__SortBy__selected"]').click().wait(500).should('be.visible') 
  };

// Saving first flight price into a variable
exports.saveFirstFlightPrice = () =>{
    cy.get('[data-testid="Group0__PriceLabel"]').then(($btn) => { 
        firstFlightPrice = $btn.text()
})
}

// Comapring between min price udner and first flight price
exports.minPrice_and_FirstFlightPrice = () => {
    
    cy.get('[data-testid="Collapsed_PriceFilter"]').click();
    cy.get('[data-testid="FlightSearchResult__PriceFilter__Min"]').then(($value) => { 
        // we need to take the min price value entire string and then split it and save the price value from the created array 
      const minPrice = $value.text()
      const price = minPrice.split(' ')
      let minPriceValue = price[2];
      expect(minPriceValue).to.equal(firstFlightPrice)
    })
}
