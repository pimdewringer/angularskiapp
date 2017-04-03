describe('SkiApp.filters', function() {
  describe('lift filter', function() {
    beforeEach(module('SkiApp'));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(1);
      expect( countryText).toBe("Chairlift");

    }));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(2);
      expect( countryText).toBe("Anchor");

    }));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(3);
      expect( countryText).toBe("Cabine");

    }));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(4);
      expect( countryText).toBe("Train");

    }));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(5);
      expect( countryText).toBe("errore");

    }));

    it('should make the int into a lift name ', inject(function($filter) {
      var countryText = $filter('liftfilter')(1);
      expect( countryText).not.toBe("Train");

    }));


  });
});