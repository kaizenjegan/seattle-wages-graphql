module.exports = {
    Query: {
        jobs: (_, __, { dataSources }) =>
            dataSources.SeattleAPI.getJobs(),
        job: (_,{ title } , { dataSources}) =>
            dataSources.wageAPI.wagesByJobTitle({title})
    }

};
