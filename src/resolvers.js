module.exports = {
    Query: {
        jobs: (_, __, { dataSources }) =>
            dataSources.SeattleAPI.getJobs(),
        job: (_,{ title, id} , { dataSources}) =>

            //to do men Greater than
            //number of male employees higher than women
            dataSources.SeattleAPI.getJobsWith({title})
    }

};
