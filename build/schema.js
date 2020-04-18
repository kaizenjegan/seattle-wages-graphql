'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import './types.graphql' */var typeDefs = 'type Wage {\n    sid: String\n    id: String\n    position: String\n    createdAt: String\n    createdMeta: String\n    updatedAt: String\n    updatedMeta: String\n    meta: String\n    jobTitle: String\n    femaleAvgHrlyRate: String\n    noFemaleEmpl: String\n    averageOfFemaleMonthsLongevityInCurrentClassification: String\n    maleAvgHrlyRate: String\n    noMaleEmployees: String\n    averageOfMaleMonthsLongevityInCurrentClassification: String\n    totalAvgHrlyRate: String\n    totalNoEmpl: String\n    totalAverageOfMonthsLongevityInCurrentClassification: String\n    ratioOfWomenHourlyRateToMenHourlyRatePercentage: String\n    notes: String\n}\n\n\n\ntype Query {\n    allSeattleWages: [Wage!]!\n}';

var request = require('request');


var resolvers = {
    Query: {
        allSeattleWages: function allSeattleWages() {
            return (0, _requestPromise2.default)({ uri: 'https://data.seattle.gov/api/views/cf52-s8er/rows.json' }).then(function (dataString) {
                var blob = JSON.parse(dataString);
                var data = blob["data"];
                var wages = [];
                data.map(function (unstructuredWage) {
                    var wage = {
                        sid: unstructuredWage[0],
                        id: unstructuredWage[1],
                        position: unstructuredWage[2],
                        createdAt: unstructuredWage[3],
                        createdMeta: unstructuredWage[4],
                        updatedAt: unstructuredWage[5],
                        updatedMeta: unstructuredWage[6],
                        meta: unstructuredWage[7],
                        jobTitle: unstructuredWage[8],
                        femaleAvgHrlyRate: unstructuredWage[9],
                        noFemaleEmpl: unstructuredWage[10],
                        averageOfFemaleMonthsLongevityInCurrentClassification: unstructuredWage[11],
                        maleAvgHrlyRate: unstructuredWage[12],
                        noMaleEmployees: unstructuredWage[13],
                        averageOfMaleMonthsLongevityInCurrentClassification: unstructuredWage[13],
                        totalAvgHrlyRate: unstructuredWage[14],
                        totalAverageOfMonthsLongevityInCurrentClassification: unstructuredWage[15],
                        ratioOfWomenHourlyRateToMenHourlyRatePercentage: unstructuredWage[16],
                        notes: unstructuredWage[17]
                    };
                    wages.push(wage);
                });

                return wages;
            });
        }
    }
};

exports.default = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: resolvers });
//# sourceMappingURL=schema.js.map