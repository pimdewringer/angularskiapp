describe('SkiApp.filters', function() {
  describe('Piste filter', function() {
    beforeEach(module('SkiApp'));

    it('should make the int into a piste type ', inject(function($filter) {
      var pisteText = $filter('pistefilter')(1);
      expect( pisteText).toBe("Green");

    }));

    it('should make the int into a piste type ', inject(function($filter) {
      var pisteText = $filter('pistefilter')(2);
      expect( pisteText).toBe("Blue");

    }));

    it('should make the int into a piste type ', inject(function($filter) {
      var pisteText = $filter('pistefilter')(3);
      expect( pisteText).toBe("Red");

    }));

    it('should make the int into a piste type ', inject(function($filter) {
      var pisteText = $filter('pistefilter')(4);
      expect( pisteText).toBe("Black");

    }));

    it('should make the int into a piste type ', inject(function($filter) {
      var pisteText = $filter('pistefilter')(3);
      expect( pisteText).not.toBe("Black");

    }));

  });
});