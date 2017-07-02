'use strict';

var React                   = require('react');
var Reflux                  = require('reflux');

var vex                     = require('js/vex');
var util                    = require('js/util');

var LeftSidebarActions      = require('js/actions/menu/leftSidebar');
var OptionsWindowActions    = require('js/actions/windows/options');
var WindowActions           = require('js/actions/window');
var EmpireRPCActions        = require('js/actions/rpc/empire');

var EmpireRPCStore          = require('js/stores/rpc/empire');
var LeftSidebarStore        = require('js/stores/menu/leftSidebar');

// Because there's a bit of special logic going on here, this is in a separate component.
var SelfDestruct = React.createClass({

    mixins : [
        Reflux.connect(EmpireRPCStore, 'empireRPCStore')
    ],

    render : function() {
        var destructMs          = this.state.empireRPCStore.self_destruct_ms;
        var destructActive      = this.state.empireRPCStore.self_destruct_active && destructMs > 0;
        var formattedDestructMs = destructActive ? util.formatMillisecondTime(destructMs) : '';

        var itemStyle = destructActive
            ? {
                color : 'red'
            }
            : {};

        var verb = destructActive
            ? 'Disable'
            : 'Enable';

        return (
            <a
                className="item"
                style={itemStyle}
                onClick={this.handleDestructClick}
            >
                <i className="bomb icon"></i>
                {verb} Self Destruct {
                    destructActive
                    ? (
                        <span>
                            <p style={{
                                margin : 0
                            }}>
                                SELF DESTRUCT ACTIVE
                            </p>
                            <p style={{
                                textAlign : 'right !important'
                            }}>
                                {formattedDestructMs}
                            </p>
                        </span>
                    )
                    : ''
                }
            </a>
        );
    }
});

var LeftSidebar = React.createClass({
    mixins : [
        Reflux.connect(EmpireRPCStore, 'empire'),
        Reflux.connect(LeftSidebarStore, 'leftSidebar')
    ],

    componentDidMount : function() {
        var el = this.refs.sidebar;

        $(el)
            .sidebar({
                context    : $('#sidebarContainer'),
                duration   : 300,
                transition : 'overlay',
                onHidden   : LeftSidebarActions.hide,
                onVisible  : LeftSidebarActions.show
            });
    },

    componentDidUpdate : function(prevProps, prevState) {
        if (prevState.leftSidebar !== this.state.leftSidebar) {
            this.handleSidebarShowing();
        }
    },

    handleSidebarShowing : function() {
        var el = this.refs.sidebar;

        $(el)
            .sidebar(this.state.leftSidebar ? 'show' : 'hide');
    },

    render : function() {

        return (
            <div className="ui left vertical inverted sidebar menu" ref="sidebar">

                <div className="ui horizontal inverted divider">
                    Actions
                </div>

                <div className="ui horizontal inverted divider">
                    Links
                </div>

                <div className="ui horizontal inverted divider">
                    Windows
                </div>

                <a className="item" onClick={function() {
                    LeftSidebarActions.hide();
                    OptionsWindowActions.optionsWindowShow();
                }}
                >
                    <i className="options icon"></i>
                    Options
                </a>

            </div>
        );
    }
});

module.exports = LeftSidebar;
