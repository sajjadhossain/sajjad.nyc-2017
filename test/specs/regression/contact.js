// This is a regression test for contact
// Feature: I want to test my application contact form
// As a tester
// I want to test the entire scope of the contact form
// So that I can contact Sajjad Hossain via sajjad@withpulp.com

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
var contact = data['contact'];

// Set viewport size
//browser
//    .windowHandleSize({
//        width: viewportSize['width'],
//        height: viewportSize['height']
//    });

// Test all my contact forms' elements
describe('Contact form elements via /home', function() {
    browser
        // Go to home url
        .url('/');
    // Use async to grab and forEach against each element in data/data.json
    async.each( contact['form'], function( element ) {
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
// Test all that the form makes a post
describe('Send eMail via /home', function() {
    // Fill in and get value of name input in contact form
    it('Fills in ' + contact['form']['name'] + ' with ' + contact['values']['name'], function ( done ) {
        // Use webdriverio to check if element exists, implicitWaitFor
        browser
            // Go to home url
            .url('/')
            // Scroll, click element and fill in input
            .scroll( contact['form']['name'] )
            .setValue( contact['form']['name'], contact['values']['name'] )
            // Pause for async
            .pause( async )
            // Get value of input
            .getValue( contact['form']['name'])
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === contact['values']['name'], contact['values']['name'] + ' not found in ' + contact['form']['name']);
            })
            // Call done after test
            .call ( done );
    });
    // Fill in and get value of email input in contact form
    it('Fills in ' + contact['form']['email'] + ' with ' + contact['values']['email'], function ( done ) {
        // Use webdriverio to check if element exists, implicitWaitFor
        browser
            .setValue( contact['form']['email'], contact['values']['email'] )
            // Pause for async
            .pause( async )
            // Get value of input
            .getValue( contact['form']['email'])
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === contact['values']['email'], contact['values']['email'] + ' not found in ' + contact['form']['email']);
            })
            // Call done after test
            .call ( done );
    });
    // Fill in and get value of message input in contact form
    it('Fills in ' + contact['form']['message'] + ' with ' + contact['values']['message'], function ( done ) {
        // Use webdriverio to check if element exists, implicitWaitFor
        browser
            .setValue( contact['form']['message'], contact['values']['message'] )
            // Pause for async
            .pause( async )
            // Get value of input
            .getValue( contact['form']['message'])
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === contact['values']['message'], contact['values']['message'] + ' not found in ' + contact['form']['message']);
            })
            // Call done after test
            .call ( done );
    });
    // Fill in and get value of message input in contact form
    it('Submits form via ' + contact['form']['submit'], function ( done ) {
        // Use webdriverio to check if element exists, implicitWaitFor
        browser
            // Pause for async
            .pause( async )
            .click( contact['form']['submit'])
            // Get url
            .url(function( err, res ) {
                chai.assert( res.value === 'http://sajjad.nyc/', 'Url responded with ' + res.value );
            })
            // Pause for form
            .pause( 3000 )
            .call ( done );
    });
});