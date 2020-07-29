const { gql } = require('apollo-server');

const typeDefs = gql`

    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
    }

    type Edge {
      cursor: String
      node: JobType
    }

    type MetaInfo {
      totalCount: Int
      menEarnMore: Int
      womenEarnMore: Int
    }

    type Job {
      pageInfo: PageInfo
      meta: MetaInfo
      edges: [Edge]
    }

    type JobType {
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
      men_earn_more: Boolean
      men_stay_longer: Boolean
    }

    input PageInput {
      pageSize: Int
    }


    type Dashboard {
      totalCount: Int
      menEarnMore: Int
      womenEarnMore: Int
    }

    type Query {
      careers(page: Int!, size: Int!): Job
      dashboard: Dashboard
    }
`;


module.exports = typeDefs;