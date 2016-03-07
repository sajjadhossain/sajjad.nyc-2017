// This is a regression test for the home page
// Feature: I want to test my application home page
// As a tester
// I want to test the entire scope of the home page
// So that I can add the test to my regression suite

// To do things asynchronously
var async = require('async');
// Chai
var chai = require('chai');
// Curl with node, just cause
var request = require('request');
// Our JSONs and test data
var defaults = require('../../config/defaults.json');
var viewportSize = defaults['webdriverio']['viewportSize'];
var defaultWait = defaults['webdriverio']['defaultWait'];
var asyncWait = defaults['webdriverio']['asyncWait'];
var asyncWaitMore = defaults['webdriverio']['asyncWaitMore'];
var data = require('../../data/data.json');
var assets = data['assets'];
var links = data['links'];
var elements = data['elements'];
var anchors = data['anchors'];
var progress = data['progress'];

// Test all my applications assets
describe('Assets via /home', function() {
    // Use async to grab and forEach against each asset in data/data.json
    async.each( assets, function( url ) {
        // Test and assert that assets should respond with 200
        it(url + ' should respond in 200', function ( done ) {
            // Use request to curl those urls, TODO make this a function
            request(url, function ( error, response, body ) {
                // Use chai to assert that the urls are responding with a 200 via request module
                chai.assert( response.statusCode === 200, url + ' did not respond with 200');
                if ( response.statusCode !== 200 ) {
                    console.error( error );
                    // Finally, call done for each after each url has been tested
                    browser.call( done );
                } else {
                    // Call done
                    browser.call( done );
                }
            });
        });
    });
});

// Set viewport size
//browser
//    .windowHandleSize({
//        width: viewportSize['width'],
//        height: viewportSize['height']
//    })
//    // Pause for async
//    .pause( asyncWait );

// Test all my applications elements
describe('Elements via /home', function() {
    browser
        // Go to home url
        .url('/');
    // Use async to grab and forEach against each element in data/data.json
    async.each( elements, function( element ) {
        // Test and assert that elements exist in the DOM
        it(element + ' should exist in the DOM', function ( done ) {
            // Use webdriverio to check if element exists, implicitWaitFor
            browser
                // Wait 5000 ms for elements from JSON
                .waitForExist( element, defaultWait )
                // Assert state is true with callback
                .then(function( response ) {
                    // Assert with chai that the response callback was true
                    chai.assert( response === true, element + ' did not return with true state in DOM');
                })
                // Call done after test
                .call ( done );
        });
    });
});
// Test all my applications anchors
describe('Anchors via /home', function() {
    browser
        // Go to home url
        .url('/');
    // Use async to grab and forEach against each element in data/data.json
    async.each( anchors, function( anchor ) {
        // A variable that replaces the scrollto- in the link id
        var anchorResolve = anchor.replace('scrollto-', '');
        // Test and assert that anchors resolve
        it(anchor + ' should redirect to ' + anchorResolve, function ( done ) {
            // Use webdriverio to check if element exists, implicitWaitFor
            browser
                // Wait 5000 ms for elements from JSON
                .waitForExist( anchor, defaultWait )
                // Assert state is true with callback
                .then(function( response ) {
                    // Assert with chai that the response callback was true
                    chai.assert( response === true, anchor + ' did not return with true state in DOM');
                })
                // Once visible scroll
                .scroll( anchor )
                // Pause for async
                .pause( asyncWait )
                // Click element
                .click( anchor )
                .isVisibleWithinViewport( anchorResolve )
                // Assert state is true with callback
                .then(function( response ) {
                    // Assert with chai that the response callback was true
                    chai.assert( response === true, anchorResolve + ' is not visible in viewport');
                })
                // Call done after test
                .call ( done );
        });
    });
});
// Test all my applications links
describe('Links via /home', function() {
    browser
        // Pause for async
        .pause( asyncWaitMore )
        // Go to home url
        .url('/');
    // Use async to grab and forEach against each element in data/data.json
    async.each( links, function( link ) {
        // Test and assert that anchors resolve
        it(link + ' should resolve to a response code of 200', function ( done ) {
            // Use webdriverio to check if element exists, implicitWaitFor
            browser
                // Wait 5000 ms for elements from JSON
                .waitForExist( link, defaultWait )
                // Assert state is true with callback
                .then(function( response ) {
                    // Assert with chai that the response callback was true
                    chai.assert( response === true, link + ' did not return with true state in DOM');
                })
                // Once visible scroll
                .scroll( link )
                // Pause for async
                .pause( asyncWait )
                // Get link value
                .getAttribute( link, "href")
                // Then make request to link
                .then(function ( url ) {
                    request( url, function ( error, response, body ) {
                        // Use chai to assert that the urls are responding with a 200 via request module
                        chai.assert( response.statusCode === 200, url + ' did not respond with 200');
                        if ( response.statusCode !== 200 ) {
                            // Finally, call done for each after each url has been tested
                            browser.call( done );
                        } else {
                            // Call done anyway
                            browser.call( done );
                        }
                    });
                });
        });
    });
});
// Test that .pace-progress data-progress="100%"
describe('Successful load under 6 seconds', function() {
    // Test that the attribute has value 100%
    it(progress['div'] + ' should have ' + progress['attribute'] + '=' + progress['value'], function ( done ) {
        // Use webdriverio to check if progress bar (PaceJS) resolves to 100%
        browser
            // Go to home url
            .url('/')
            // Wait 5000 ms for element
            .waitForExist( progress['main'], defaultWait )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, progress['main'] + ' did not return with true state in DOM');
            })
            // Once visible get attribute value
            .getAttribute( progress['div'], progress['attribute'])
            // Assert attribute is value is 100% with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === progress['value'], progress['attribute'] + ' !== ' + progress['value']);
            })
            // Call done after test
            .call ( done );
    });
});