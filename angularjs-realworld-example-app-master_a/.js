
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test_protractor_spec.js'],

    onPrepare: function(){
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './tests/reports/'
        }))
    },
    capabilities:{
        'browserName':'firefox'
    }

  }
