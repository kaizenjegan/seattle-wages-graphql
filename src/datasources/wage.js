const { RESTDataSource } = require('apollo-datasource-rest');

class WageAPI extends RESTDataSource {
  constructor() {
    super();
    // https://data.seattle.gov/api/views/cf52-s8er/rows.json
    this.baseURL = 'https://data.seattle.gov/api/views/cf52-s8er/';
  }

  async getAllWages() {
    console.log('get all wages');
    const responseBlob = await this.get('rows.json');  //data is very unstructured
    const response = responseBlob["data"];

    return Array.isArray(response)
      ? response.map(launch => this.wageReducer(launch))
      : [];
  }

  wageReducer(wage){
    return {
        sid: wage[0],
        id: wage[1],
        position: wage[2],
        createdAt: wage[3],
        createdMeta: wage[4],
        updatedAt: wage[5],
        updatedMeta: wage[6],
        meta: wage[7],
        jobTitle: wage[8],
        femaleAvgHrlyRate: wage[9],
        noFemaleEmployee: wage[10],
        averageOfFemaleMonthsLongevityInCurrentClassification: wage[11], //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION 
        maleAvgHrlyRate: wage[12], //Male Avg Hrly Rate 
        noMaleEmployees: wage[13], //No. Male Empl"
        averageOfMaleMonthsLongevityInCurrentClassification: wage[14], //Average of Male MONTHS LONGEVITY IN CURRENT CLASSIFICATION
        totalAvgHourlyRate: wage[15], //Total Avg Hrly Rate
        totalNoEmployee: wage[16],
        totalAverageOfMonthsLongevityInCurrentClassification: wage[17],
        ratioOfWomenHourlyRateToMenHourlyRatePercentage: wage[18],
        notes: wage[19]       
    }
  }

  //not optimal
  async wagesByJobTitle({ title }){ 
    console.log('get wages by job title');

    let promise = new Promise(async(resolve, reject)=>{
      const wages = await this.getAllWages();
      const wage = wages.filter( w => w.jobTitle.toLowerCase() === title.toLowerCase() )

      resolve(wage[0]);
    })

    return promise;
  }

}

module.exports = WageAPI;