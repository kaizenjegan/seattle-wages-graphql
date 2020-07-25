module.exports = {
  Job: {
    meta: (_, __, { dataSources }) => {
      //store in other collection
      return { totalCount: 100, menEarnMore: 68, womenEarnMore: 22 }
    },
    pageInfo:(_, __, { dataSources }) => {
      return {
        // endCursor: "Y3Vyc29yMw==",
        hasNextPage: false,
        hasPreviousPage: false,
      }
    },
  },
  Query: {
    careers: async (_, { filter, where }, { dataSources }) => {
      console.log("resolve page");
      const jobs = await dataSources.SeattleAPI.getJobs({ where });

      // console.log(jobs);
      const edges = jobs.map(job => {
        return {
          cursor: "",
          node: job
        }
      })

      return { edges }
    }
  }

};
