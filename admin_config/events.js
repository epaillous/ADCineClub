var moment = require('moment');

exports.preSave = function (req, res, args, next) {
    if (args.name == 'users') {
        var now = moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
            record = args.data.view.user.records[0].columns;
        if (args.action == 'insert') {
            record.created_at = now;
            record.updated_at = now;
        }
        else if (args.action == 'update') {
            record.updated_at = now;
        }
    }
    next();
}

exports.preSave = function (req, res, args, next) {
    if (args.name == 'screenings') {
        var now = moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
            record = args.data.view.screening.records[0].columns;
        if (args.action == 'insert') {
            record.created_at = now;
            record.updated_at = now;
        }
        else if (args.action == 'update') {
            record.updated_at = now;
        }
    }
    next();
}