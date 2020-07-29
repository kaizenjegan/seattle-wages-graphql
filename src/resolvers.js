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
    careers: async (_, { where, page, size }, { dataSources }) => {
      console.log("resolve page");
      console.log(`page: ${page} size:${size}`);
      const jobs = await dataSources.SeattleAPI.getJobs({ where, page, size });

      // console.log(jobs);
      //rough not optimized
      const edges = jobs.map(job => {
        return {
          cursor: "",
          node: job
        }
      })

      return { edges }
    },
    dashboard: async (_, __, { dataSources }) => {
      return {
        totalCount: 100,
        menEarnMore: 70,
        womenEarnMore: 60
      }
    }
  }

};
