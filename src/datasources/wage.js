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
    // console.log(wage)
    return {
        sid: wage[0],
        id: wage[1],
        position: wage[2],
        created_at: wage[3],
        created_meta: wage[4],
        updated_at: wage[5],
        updated_meta: wage[6],
        meta: wage[7],
        job_title: wage[8],
        female_avg_hrly_rate: wage[9],
        no_female_empl: wage[10],
        average_of_male_months_longevity_in_current_classification: wage[11],
        total_avg_hrly_rate: wage[11],
        total_no_empl: wage[12],
        total_average_of_months_longevity_in_current_classification: wage[13],
        ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage: wage[14]
    }
  }

  async getWageById({ wageId }){
    // const respon
  }

  getWagesByIds({ wageIds }) {

  }
}

module.exports = WageAPI;