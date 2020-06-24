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
        noMaleEmployees: String
        averageOfMaleLongevityInMonths: String
        totalAvgHourlyRate: String
        totalNoEmployee: String
        totalAverageOfMonthsLongevityInCurrentClassification: String
        ratioOfWomenHourlyRateToMenHourlyRatePercentage: String
        notes: String
    }

    type Query {
        jobs(filter: String): [Job!]!
        job(title: String!): Job
    }
`;


module.exports = typeDefs;