const { gql } = require('apollo-server');

const typeDefs = gql`
    type Job {
        sid: String
        id: String
        position: String
        createdAt: String
        updatedAt: String
        meta: String
        title: String
        femaleAvgHrlyRate: String
        numberOfFemaleEmployees: String
        averageOfFemaleLongevityInMonths: String
        maleAvgHrlyRate: String
        numberOfMaleEmployees: String
        averageOfMaleLongevityInMonths: String
        totalAvgHourlyRate: String
        totalNoEmployee: String
        totalAverageOfMonthsLongevityInCurrentClassification: String
        ratioOfWomenHourlyRateToMenHourlyRatePercentage: String
        notes: String
    }

    input WhereInput{
      men_earns_more: Boolean
      men_stay_longer: Boolean
    }

    type Query {
        jobs(where: WhereInput): [Job!]!
        job(title: String!): Job
    }
`;


module.exports = typeDefs;