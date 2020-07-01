module.exports = {
    Query: {
    jobs: (_, { filter, where }, { dataSources }) =>
            //where male greater than female
            //where male employees
            // ( where: {men_earns_more: {_eq: true}} ) false means women_earns_more
            // ( where: {women_earns_more: {_eq: true}} )
            //where: {men_stay_longer: {_eq: true }}
            //where: {women_stay_longer: {_eq: true }}

            dataSources.SeattleAPI.getJobs(),
        job: (_,{ title, id} , { dataSources}) =>

            //to do men Greater than
            //number of male employees higher than women
            dataSources.SeattleAPI.getJobsWith({title})
    }

};
