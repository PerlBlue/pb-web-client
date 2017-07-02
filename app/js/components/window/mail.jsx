'use strict';

var React           = require('react');
var Reflux          = require('reflux');

var MailWindowStore = require('js/stores/windows/mail');

var MailWindow = React.createClass({
    mixins : [
        Reflux.connect(MailWindowStore, 'mailWindow')
    ],
    render : function() {

        // TODO: make this into a React component!!

        return <div></div>;
    }
});

module.exports = MailWindow;
