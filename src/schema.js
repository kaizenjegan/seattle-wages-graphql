const { gql } = require('apollo-server');

const typeDefs = gql`
    type NoteType{
        body: String
    }

    scalar YeetType

    type WageType {
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
        notes: YeetType
    }

    input FilterInput {
        title_starts_with: String
    }

    input WageInput {
        name: String
        DOB: String
    }

    type Query {
        wages(filter: FilterInput, id: String, orderBy: String): [WageType!]!
        wage(title: String!): WageType
    }

    type Mutation{
        setWages(input: WageInput): [WageType]
    }
`;


module.exports = typeDefs;