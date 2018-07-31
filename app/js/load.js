'use strict';

(function() {

    // TODO this code can be improved.
    var l = window.location;
    var query = {};
    var vars = l.hash.substring(1).split('&');
    if (vars.length > 0) {
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            query[pair[0]] = decodeURIComponent(pair[1]);
        }
    }
    if (window.history.replaceState) {
        window.history.replaceState({}, document.title, l.protocol + '//' + l.host + l.pathname + l.search);
    } else if (l.hash !== '') {
        l.hash = '';
    }

    var loader = new YAHOO.util.YUILoader({
        base        : '/app/vendor-js/yui2/build/',
        allowRollup : true,
        combine     : false
    });

    // List of YUI2 components that need to be loaded.
    loader.require([
        'animation',
        'autocomplete',
        'connection',
        'container',
        'cookie',
        'datatable',
        'dom',
        'dragdrop',
        'event-delegate',
        'event-mouseenter',
        'event',
        'get',
        'json',
        'logger',
        'menu',
        'paginator',
        'selector',
        'slider',
        'tabview',
        'yahoo'
    ]);

    loader.onSuccess = function(o) {

        // /////////////////////////////////////////////////////////////////////////////
        // WARNING: IF YOU CHANGE THE ORDER OF THESE, THINGS WILL NOT LOAD PROPERLY! //
        // /////////////////////////////////////////////////////////////////////////////

        // RPC and core stuff
        require('js/game');
console.log("loader");
        // Empire management and star map

        // Buildings

        // Menu stuff

        // Start everything!
        YAHOO.widget.Logger.enableBrowserConsole();
        YAHOO.lacuna.Game.Start(query);
    };

    // Start the loading process.
    loader.insert();

})();
