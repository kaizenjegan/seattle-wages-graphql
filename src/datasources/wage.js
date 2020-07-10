const { RESTDataSource } = require('apollo-datasource-rest');
const mongoose = require('mongoose');
const JobsModel = require('./jobsModel.js');

const config = require('../../envconfig');
const { json } = require('sequelize');

mongoose.connect(config.connectionString, {useUnifiedTopology: true});


const jobsModel = JobsModel;

class SeattleAPI extends RESTDataSource {
  constructor() {
    super();
  }

  filterMenEarnMore({ where }, jobs) {
    if (typeof where !== 'undefined' && typeof where.men_earn_more !== 'undefined') {
      if (where.men_earn_more) {
        return jobs.filter(job => parseInt(job.maleAvgHrlyRate) > parseInt(job.femaleAvgHrlyRate));
      } else {
        return jobs.filter(job => parseInt(job.maleAvgHrlyRate) < parseInt(job.femaleAvgHrlyRate));
      }
    } else {
      return jobs;
    }
  }

  filterMenStayLonger({ where }, jobs) {
    if (typeof where !== 'undefined' && where.men_stay_longer !== 'undefined') {
      if (where.men_stay_longer) {
        return jobs.filter(job => parseInt(job.averageOfMaleLongevityInMonths) < parseInt(job.averageOfFemaleLongevityInMonths));
      } else {
        return jobs.filter(job => parseInt(job.averageOfMaleLongevityInMonths) > parseInt(job.averageOfFemaleLongevityInMonths));
      }
    } else {
      return jobs;
    }
  }

  async getJobs({ where }) {
    return new Promise((resolve, reject)=>{
      jobsModel.find({}, (err, jobs)=>{
        if (!err) {
          console.log(where);
          // console.log(jobs);

          //todo: fix
          // if (where) {
            jobs = this.filterMenEarnMore({ where }, jobs);
            jobs = this.filterMenStayLonger({ where }, jobs);
          // }

          resolve(jobs)
        }else{
          reject(err)
        }
      })
    })
  }

  //not optimal
  async getJobsWith({ title }){
    console.log('get wages by job title');
    //sanitization + logging
    const promise = new Promise(async (resolve, reject) => {
      jobsModel.find({ title: title }, (err, job) => {
        if (!err) {
          console.log(job)
          resolve(job[0])
        } else {
          reject(err)
        }
      })
    });

    return promise;
  }

}

module.exports = SeattleAPI;