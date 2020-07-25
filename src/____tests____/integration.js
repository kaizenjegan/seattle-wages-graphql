const { createTestClient } = require('apollo-server-testing');
const {constructTestServer} = require('./__utils');


const GET_JOBS = `query getJobs {
	Page{
    jobs{
      id
      title
      position
      createdAt
      updatedAt
      meta
      femaleAvgHrlyRate
      numberOfFemaleEmployees
      averageOfFemaleLongevityInMonths
      maleAvgHrlyRate
      numberOfMaleEmployees
      averageOfMaleLongevityInMonths
      ratioOfWomenHourlyRateToMenHourlyRatePercentage
      notes
    }
  }
}`
describe('Queries', () => {
  it('fetches list of launches', async () => {
    // create an instance of ApolloServer that mocks out context, while reusing
    // existing dataSources, resolvers, and typeDefs.
    // This function returns the server instance as well as our dataSource
    // instances, so we can overwrite the underlying fetchers
    const {server, seattleApi, } = constructTestServer({
      context: () => ({user: {id: 1, email: 'a@a.a'}}),
    });

    // mock the datasources' underlying fetch methods, whether that's a REST
    // lookup in the RESTDataSource or the store query in the Sequelize datasource
    launchAPI.get = jest.fn(() => [mockLaunchResponse]);

    // use our test server as input to the createTestClient fn
    // This will give us an interface, similar to apolloClient.query
    // to run queries against our instance of ApolloServer
    const {query} = createTestClient(server);
    const res = await query({query: GET_LAUNCHES});
    expect(res).toMatchSnapshot();
  });

});