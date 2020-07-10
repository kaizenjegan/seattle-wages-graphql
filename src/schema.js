const { gql } = require('apollo-server');

const typeDefs = gql`

    type PageInfo {
      endCursor: String
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
    }

    type MetaInfo {
      totalCount: Int
      menEarnMore: Int
      womenEarnMore: Int
    }

    type Page {
      pageInfo: PageInfo
      meta: MetaInfo
      jobs: [JobType]
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



    type Query {
        jobs(where: WhereInput): [JobType!]!
        job(title: String!): JobType
        Page: Page
    }
`;


module.exports = typeDefs;