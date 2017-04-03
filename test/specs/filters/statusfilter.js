describe('SkiApp.filters', function() {
  describe('status filter', function() {
    beforeEach(module('SkiApp'));

    it('should make the int into a status name ', inject(function($filter) {
      var statusText = $filter('statusfilter')(1);
      expect( statusText).toBe("Open");

    }));

    it('should make the int into a status name ', inject(function($filter) {
      var statusText = $filter('statusfilter')(2);
      expect( statusText).toBe("Closed");

    }));

    it('should make the int into a status name ', inject(function($filter) {
      var statusText = $filter('statusfilter')(3);
      expect( statusText).toBe("Soon to open");

    }));

    it('should make the int into a status name ', inject(function($filter) {
      var statusText = $filter('statusfilter')(4);
      expect( statusText).toBe("errore");

    }));


    it('should make the int into a status name ', inject(function($filter) {
      var statusText = $filter('statusfilter')(2);
      expect( statusText).not.toBe("Open");

    }));




  });
});