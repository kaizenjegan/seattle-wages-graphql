import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './types.graphql';
const request = require('request');
import rp from 'request-promise';

const resolvers = {
    Query: {
        allSeattleWages: () => {
            return rp({ uri: `https://data.seattle.gov/api/views/cf52-s8er/rows.json` }).then(dataString => {
              let blob = JSON.parse(dataString);
              let data = blob["data"];
              let wages = [];
              data.map( unstructuredWage => {
                  let wage = {
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
                    notes: unstructuredWage[17],
                  }
                  wages.push(wage);
              } );

              return wages;
            });
        },
    }
}

export default makeExecutableSchema({ typeDefs, resolvers });