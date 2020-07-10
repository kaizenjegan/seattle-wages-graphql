module.exports = {
    Page: {
      meta: (_, __, { dataSources }) => {
        return {totalCount: 100, menEarnMore: 68, womenEarnMore: 22}
      }
    },
    Query: {
      jobs: (_, { filter, where }, { dataSources }) => {

          return dataSources.SeattleAPI.getJobs({where});
      },
        job: (_,{ title, id} , { dataSources}) => {
            //to do men Greater than
            //number of male employees higher than women
          return dataSources.SeattleAPI.getJobsWith({ title })
        },

      Page: async (_, { filter, where }, { dataSources }) => {
        console.log("resolve page");
          const jobs = await dataSources.SeattleAPI.getJobs({where});
        return {
            jobs: jobs
          }
        }
    }

};
