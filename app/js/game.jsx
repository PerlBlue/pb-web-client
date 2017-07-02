'use strict';

YAHOO.namespace('lacuna');

var React           = require('react');
var ReactDom        = require('react-dom');
var _               = require('lodash');
var ReactTooltip    = require('react-tooltip');

var KeyboardActions = require('js/actions/keyboard');
var MenuActions     = require('js/actions/menu');
var SessionActions  = require('js/actions/session');
var TickerActions   = require('js/actions/ticker');
var UserActions     = require('js/actions/user');
var WindowActions   = require('js/actions/window');

var GameWindow      = require('js/components/gameWindow');
var Captcha         = require('js/components/window/captcha');

var BodyRPCStore    = require('js/stores/rpc/body');

var constants       = require('js/constants');

var LoginWindow     = require('js/components/window/login');

if (typeof YAHOO.lacuna.Game === 'undefined' || !YAHOO.lacuna.Game) {

    (function() {

        var Game = {

            Start : function(query) {
                var l = window.location;
                Game.domain = l.hostname || 'perlblue.com';

//                require('js/stores/user').listen(_.noop);
//                require('js/stores/ticker').listen(_.noop);
 //               require('js/actions/menu/loader').loaderMenuShow();

                WindowActions.windowAdd(LoginWindow, 'login');

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
