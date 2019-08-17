describe('Protractor Demo', function() {
    browser.ignoreSynchronization = true; 
    
	// it('choose selects', function() {
	// 	browser.get("https://chercher.tech/practice/dropdowns");
	// 	element(by.tagName("select#first")).click();
	// 	browser.sleep(1000);
	// 	element(by.css("#first [value='Google']")).click();
    // });
    

    it('choose selects', function() {
		browser.get("https://chercher.tech/practice/dropdowns");
    
        element(by.tagName("select#animals")).click();
		browser.sleep(1000);
        element(by.css("#first [value='avatar']")).click();
        
        element(by.tagName("select#order-same")).click();
		browser.sleep(1000);
        element(by.css("#first [value='Apple']")).click();
        

        
    });
});