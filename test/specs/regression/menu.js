// This is a regression test for the menu
// Feature: I want to test my application menu
// As a tester
// I want to test the entire scope of the menu
// So that I can navigate through the site

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
var data = require('../../data/data.json');
var menu = data['menu'];

// Set viewport size
//browser
    //.windowHandleSize({
    //        width: viewportSize['width'],
    //        height: viewportSize['height']
    //    });

// Test that the menu works and redirects
describe('Menu via /home', function() {
    // Variables that replaces the goto- in the link id, TODO make this into a function
    //var introductionResolve = menu['introduction'].replace('goto-', '');
    //var codeResolve = menu['code'].replace('goto-', '');
    //var blogResolve = menu['blog'].replace('goto-', '');
    //var campaignsResolve = menu['campaigns'].replace('goto-', '');
    //var contactResolve = menu['contact'].replace('goto-', '');
    var closeResolve = "#site";

    // Test that the menu opens, TODO make this into a function
    it(menu['open'] + ' should open menu', function ( done ) {
        browser
            // Go to home url
            .url('/')
            // Wait 5000 ms for element
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Call done after test
            .call( done );
    });
    // Test that the menu links to introduction
    it(menu['introduction'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Wait 5000 ms for element
            .waitForExist( menu['introduction'], defaultWait )
            // Once visible click
            .click( menu['introduction'] )
            // Link resolves to expected anchor
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Call done after test
            .call( done );
    });
    // Test that the menu links to code
    it(menu['code'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Wait 5000 ms for element
            .waitForExist( menu['code'], defaultWait )
            // Once visible click
            .click( menu['code'] )
            // Link resolves to expected anchor
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Call done after test
            .call( done );
    });
    // Test that the menu links to blog
    it(menu['blog'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Wait 5000 ms for element
            .waitForExist( menu['blog'], defaultWait )
            // Once visible click
            .click( menu['blog'] )
            // Link resolves to expected anchor
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Call done after test
            .call( done );
    });
    // Test that the menu links to campaigns
    it(menu['campaigns'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Pause for async
            .pause( asyncWait )
            // Wait 5000 ms for element
            .waitForExist( menu['campaigns'], defaultWait )
            // Once visible click
            .click( menu['campaigns'] )
            // Link resolves to expected anchor
            // Pause for async
            .pause( asyncWait )
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Pause for async
            .pause( asyncWait )
            // Call done after test
            .call( done );
    });
    // Test that the menu links to contact
    it(menu['contact'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Pause for async
            .pause( asyncWait )
            // Wait 5000 ms for element
            .waitForExist( menu['contact'], defaultWait )
            // Once visible click
            .click( menu['contact'] )
            // Pause for async
            .pause( asyncWait )
            // Link resolves to expected anchor
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Pause for async
            .pause( asyncWait )
            // Call done after test
            .call( done );
    });
    // Test that the menu closes
    it(menu['close'] + ' should close menu and resolve to ' + closeResolve, function ( done ) {
        browser
            // TODO function
            // Go to home url
            .url('/')
            // Wait 5000 ms for .open-menu
            .waitForExist( menu['open'], defaultWait )
            // Once visible click and follow anchor
            .click( menu['open'] )
            // Pause for async
            .pause( asyncWait )
            // Wait 5000 ms for element
            .waitForExist( menu['close'], defaultWait )
            // Once visible click
            .click( menu['close'] )
            // Pause for async
            .pause( asyncWait )
            // Link resolves to expected anchor
            .isVisibleWithinViewport( closeResolve )
            // Assert state is true with callback
            .then(function( response ) {
                // Assert with chai that the response callback was true
                chai.assert( response === true, closeResolve + ' is not visible in viewport');
            })
            // Pause for async
            .pause( asyncWait )
            // Call done after test
            .call( done );
    });
});