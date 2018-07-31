'use strict';

var React         = require('react');
var ReactTooltip  = require('react-tooltip');

var WindowManager = require('js/components/windowManager');


// This React component will be the main container of everything that appears on the screen.

var GameWindow = React.createClass({
    render : function() {
        return (
            <div
                id="sidebarContainer"
                style={{
                    position : 'fixed',
                    top      : 0,
                    left     : 0,
                    width    : '100%',
                    height   : '100%'
                }}
            >

                {/* One container to rule them all... */}
                <div className="pusher">

                    { /*
                        This sets all the tooltips in the entire client.
                        See http://npmjs.org/package/react-tooltip for usage.
                    */ }
                    <ReactTooltip
                        effect="solid"
                        place="bottom"
                        type="dark"
                    />

                    <WindowManager />

                </div>
            </div>
        );
    }
});

module.exports = GameWindow;
