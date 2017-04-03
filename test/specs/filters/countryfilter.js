describe('SkiApp.filters', function() {
  describe('country filter', function() {
    beforeEach(module('SkiApp'));

    it('should make the int into a country name ', inject(function($filter) {
      var countryText = $filter('countryfilter')(1);
      expect( countryText).toBe("France");

    }));

        it('should make the int into a country name ', inject(function($filter) {
      var countryText = $filter('countryfilter')(2);
      expect( countryText).toBe("Italy");
      
    }));
            it('should make the int into a country name ', inject(function($filter) {
      var countryText = $filter('countryfilter')(3);
      expect( countryText).toBe("Switzerland");
      
    }));
    it('should make the int into a country name ', inject(function($filter) {
      var countryText = $filter('countryfilter')(4);
      expect( countryText).toBe("Austria");
      
    }));

    it('should make the int into a country name ', inject(function($filter) {
      var countryText = $filter('countryfilter')(4);
      expect( countryText).not.toBe("France");
      
    }));


  });
});