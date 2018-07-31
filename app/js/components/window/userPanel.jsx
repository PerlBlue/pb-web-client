'use strict';

var React                   = require('react');
var Reflux                  = require('reflux');

var WindowActions           = require('js/actions/window');
var UserWSStore             = require('js/stores/ws/user');

var Tabber                  = require('js/components/tabber');

var Tabs                    = Tabber.Tabs;
var Tab                     = Tabber.Tab;

var UserPanel = React.createClass({
    statics : {
        options : {
            title  : 'User Details',
            width  : 700,
            height : 420
        }
    },
    mixins : [
        Reflux.connect(UserWSStore, 'user'),
    ],
    componentWillMount : function() {
    },

    closeWindow : function() {
        WindowActions.windowCloseByType('planetPanel');
    },

    render : function() {
        var tabs = [];
        tabs.push(
            <Tab title="User Details" key="User Details" >
                <p>{this.state.clientCode}</p>
            </Tab>
        );

        tabs.push(
            <Tab title="About" key="About" >
                <p>Not Yet Implemented</p>
            </Tab>
        );
        return (
            <div>
                <div>
                    <Tabs>
                        {tabs}
                    </Tabs>
                </div>
            </div>
        );
    }
});

module.exports = UserPanel;
