'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 3000;
app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default }));
app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({
    endpointURL: '/graphql'
}));
app.listen(port, function () {
    return console.log('Server on ' + port);
});
//# sourceMappingURL=app.js.map