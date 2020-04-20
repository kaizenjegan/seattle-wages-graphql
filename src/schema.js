const { gql } = require('apollo-server');

const typeDefs = gql`
    type Wage {
        sid: String
        id: String
        position: String
        createdAt: String
        createdMeta: String
        updatedAt: String
        updatedMeta: String
        meta: String
        jobTitle: String
        femaleAvgHrlyRate: String
        noFemaleEmployee: String
        averageOfFemaleMonthsLongevityInCurrentClassification: String
        maleAvgHrlyRate: String
        noMaleEmployees: String
        averageOfMaleMonthsLongevityInCurrentClassification: String
        totalAvgHourlyRate: String
        totalNoEmployee: String
        totalAverageOfMonthsLongevityInCurrentClassification: String
        ratioOfWomenHourlyRateToMenHourlyRatePercentage: String
        notes: String
    }

    type Query {
        allSeattleWages(filter: String): [Wage!]!
        wagesByJobTitle(title: String!): Wage
    }
`;


module.exports = typeDefs;