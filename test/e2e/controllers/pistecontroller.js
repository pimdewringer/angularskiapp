describe('skipistes page', function() {
    it('add a skipiste', function() {
        browser.get('http://angular.dev/#/skipistes');
        //Count the current amount of ingredients
        var countRowsBefore = element.all(by.className('skipisterow'));
        countRowsBefore.count().then(function (rows) {

            var Addmaprow = element(by.className('btn-primary'));
            Addmaprow.click();

            var name = element(by.id('pisteName'));
            var type = element(by.id('pisteType'));
            var distance = element(by.id('pisteDistance'));
            var status = element(by.id('pisteStatus'));
            var skiarea = element(by.id('pisteSkiarea'));
           
            name.sendKeys('testding');
            type.sendKeys(1);
            distance.sendKeys(2);
            status.sendKeys(2);
            skiarea.sendKeys(1);
          
            var btnsubmit = element(by.id('pisteSubmit'));
            btnsubmit.click();

            var countRowsAfter = element.all(by.exactRepeater('piste in pistes')).then(function(pistes) {
                expect(pistes.length).toEqual(rows + 1);
            })
        });
    });
});