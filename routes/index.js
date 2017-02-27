// The V in MVC, routes views to jade templates
var express = require('express');
var router = express.Router();

// A year module
var year = require('../lib/modules/year.js');

// Get Home Page
router.get('/', function(req, res, next) {
  // Render index with data
  res.render('index', {
                          name: 'Sajjad Hossain',
                          appName: 'Novelist, Artisan, Programmer,  Entrepreneur',
                          appUrl: 'http://sajjad.nyc',
                          image: 'http://sajjad.nyc/images/logo.png',
                          year: year,
                          description: 'I am an Automation Engineer by day. By night, I crusade the town serving a cold dish of vigilante justice. My mission is to rid the world of bad UX practices, desktop-first design, poor testing systems and unscalable solutions alike. My hobbies include reading, writing, coding and playing the drums.  I follow the latest standards in W3C HTML, CSS, and Javascript development and believe in clean and minimal code.',
                          keywords: 'QA, ' +
                                    'Quality Assurance, ' +
                                    'QA Analyst, ' +
                                    'Quality Assurrance Analyst, ' +
                                    'Quality Assurance Engineer, ' +
                                    'Automation Engineer, ' +
                                    'Release Engineer, ' +
                                    'Test Engineer, ' +
                                    'Software Engineer in Test, ' +
                                    'SDET'
                        });
});

module.exports = router;
