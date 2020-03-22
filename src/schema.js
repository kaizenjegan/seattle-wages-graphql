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
                data.map( unstructuredWage =>{
                    let wage = {
                        sid: unstructuredWage[0],
                        id: unstructuredWage[1],
                        position: unstructuredWage[2],
                        created_at: unstructuredWage[3],
                        created_meta: unstructuredWage[4],
                        updated_at: unstructuredWage[5],
                        updated_meta: unstructuredWage[6],
                        meta: unstructuredWage[7],
                        job_title: unstructuredWage[8],
                        female_avg_hrly_rate: unstructuredWage[9],
                        no_female_empl: unstructuredWage[10],
                        average_of_male_months_longevity_in_current_classification: unstructuredWage[11],
                        male_avg_hrly_rate: unstructuredWage[12],
                        no_male_empl: unstructuredWage[13],
                        average_of_male_months_longevity_in_current_classification: unstructuredWage[13],
                        total_avg_hrly_rate: unstructuredWage[14],
                        total_average_of_months_longevity_in_current_classification: unstructuredWage[15],
                        ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage: unstructuredWage[16],
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