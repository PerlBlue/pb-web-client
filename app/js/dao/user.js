'use strict';

var dao                 = require('js/dao');
var vex                 = require('js/vex');
var UserRPCActions      = require('js/actions/rpc/empire');

function makeUserCall(options) {
    dao.makeServerCall('user', options, UserRPCActions);
}

UserRPCActions.requestUserRPCGetStats.listen(function(o) {
    makeUserCall({
        method  : 'get_stats',
        parms   : {},
        success : 'successUserRPCStats'
        error   : 'failureUserRPCStats'
    });
});

module.exports = UserRPCActions;
