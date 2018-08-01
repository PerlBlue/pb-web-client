'use strict';

YAHOO.namespace('lacuna');

var React           = require('react');
var ReactDom        = require('react-dom');
var _               = require('lodash');
var ReactTooltip    = require('react-tooltip');

var GameWindow      = require('js/components/gameWindow');


var LoginWindow     = require('js/components/window/login');
var UserPanel       = require('js/components/window/userPanel');
var WindowActions   = require('js/actions/window');

if (typeof YAHOO.lacuna.Game === 'undefined' || !YAHOO.lacuna.Game) {

    (function() {

        var Game = {

            Start : function(query) {
                var l = window.location;
                Game.domain = l.hostname || 'perlblue.com';

                WindowActions.windowAdd(LoginWindow, 'login');
                WindowActions.windowAdd(UserPanel, 'userPanel');
console.log("got here!");
                var body = document.getElementById('body');

                // Give the React stuff somewhere to go.
                var container = document.createElement('div');
                container.id = 'mainGameContainer';
                body.appendChild(container);

                ReactDom.render(
                    <GameWindow />,
                    document.getElementById('mainGameContainer')
                );
            },

        };

        YAHOO.lacuna.Game = Game;
    })();

}
