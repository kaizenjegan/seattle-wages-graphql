const { gql } = require('apollo-server');

const typeDefs = gql`
    type Wage {
        sid: String
        id: String
        position: String
        created_at: String
        created_meta: String
        updated_at: String
        updated_meta: String
        meta: String
        job_title: String
        female_avg_hrly_rate: String
        no_female_empl: String
        average_of_female_months_longevity_in_current_classification: String
        male_avg_hrly_rate: String
        no_male_empl: String
        average_of_male_months_longevity_in_current_classification: String
        total_avg_hrly_rate: String
        total_no_empl: String
        total_average_of_months_longevity_in_current_classification: String
        ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage: String

    }


    type Query {
        allSeattleWages: [Wage!]!
    }
`;

module.exports = typeDefs;