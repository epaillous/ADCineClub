module.exports = function(config){
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath : './',

    // list of files / patterns to load in the browser
    files : [
      // '**/*.js'
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'content/javascripts/**/*.js',
      'content/tests/**/*_test.js'
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // frameworks to use
    frameworks: ['jasmine'],

    // test results reporter to use
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // Start these browsers
    browsers : ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};