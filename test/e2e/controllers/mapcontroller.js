describe('maps page', function() {
    it('add a skiarea', function() {
        browser.get('http://angular.dev/#/skimaps');
        //Count the current amount of ingredients
        var countRowsBefore = element.all(by.className('skiarearow'));
        countRowsBefore.count().then(function (rows) {

            var Addmaprow = element(by.className('btn-primary'));
            Addmaprow.click();

            var id = element(by.id('mapName'));
            var name = element(by.id('mapName'));
            var country = element(by.id('mapCountry'));
            var map = element(by.id('mapImage'));
            id.sendKeys(1);
            name.sendKeys('testding');
            country.sendKeys(2);
            map.sendKeys('https://www.w3schools.com/w3images/fjords.jpg');
            var btnsubmit = element(by.id('mapSubmit'));
            btnsubmit.click();

            var countRowsAfter = element.all(by.exactRepeater('map in maps')).then(function(maps) {
                expect(maps.length).toEqual(rows + 1);
            })
        });
    });
});