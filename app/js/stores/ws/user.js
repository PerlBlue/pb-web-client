'use strict';

var Reflux              = require('reflux');
var _                   = require('lodash');
var StatefulMixinsStore = require('js/stores/mixins/stateful');
var UserWSActions       = require('js/actions/ws/user');

var util                = require('js/util');
var clone               = util.clone;


var UserWSStore = Reflux.createStore({
    listenables : [
        UserWSActions
    ],

    mixins : [
        StatefulMixinsStore
    ],

    getDefaultData : function() {
        return {
            firstname       : '',
            lastname        : '',
            log_seconds     : 0,
            clientCode      : ''
        };
    },

    onSuccessUserWSClientCode : function(result) {
        var update = clone(this.state);

        console.log("client code: "+result.clientCode);

        update.clientCode = result.clientCode;

        this.emit(update);
    },

    onSuccessUserWSStats : function(result) {
        var update = clone(this.state);
        update.firstname    = result.firstname;
        update.lastname     = result.lastname;
        update.log_seconds  = result.log_seconds;

        this.emit(update);
    },

    onUserClear : function() {
        this.emit(this.getDefaultData());
    }
});

module.exports = UserWSStore;
