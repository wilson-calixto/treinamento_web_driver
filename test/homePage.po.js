
var HomePage = function(){
    this.title = 'Home — Conduit';
    this.signed = element.all(by.xpath("//a[@class='nav-link ng-binding']")).first();
    
    this.settings_tab = element.all(by.xpath("//h1[@class='text-xs-center']")).first();
    this.settings = element(by.xpath("//a[@href='#!/settings']"));
};



module.exports = HomePage;