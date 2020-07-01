module.exports = {
    Query: {
    jobs: (_, { filter, where }, { dataSources }) => {

        return dataSources.SeattleAPI.getJobs({where});
    },
        job: (_,{ title, id} , { dataSources}) =>

            //to do men Greater than
            //number of male employees higher than women
            dataSources.SeattleAPI.getJobsWith({title})
    }

};
