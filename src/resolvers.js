module.exports = {
    Page: {
      meta: (_, __, { dataSources }) => {
        return {totalCount: 100, menEarnMore: 68, womenEarnMore: 22}
      }
    },
    Query: {
      Page: async (_, { filter, where }, { dataSources }) => {
        console.log("resolve page");
          const jobs = await dataSources.SeattleAPI.getJobs({where});
        return {
            jobs: jobs
          }
        }
    }

};
