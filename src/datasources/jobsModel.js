const mongoose = require('mongoose');
module.exports = mongoose.model('Job', new mongoose.Schema({
  sid: String,
  id: String,
  position: String,
  createdAt: String,
  createdMeta: String,
  updatedAt: String,
  updatedMeta: String,
  meta: String,
  title: String,
  numberOfFemaleEmployees: String,
  averageOfFemaleLongevityInMonths: String, //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION
  femaleAvgHrlyRate: String,
  maleAvgHrlyRate: String, //Male Avg Hrly Rate
  numberOfMaleEmployees: String,
  averageOfMaleLongevityInMonths: String,
  totalAvgHourlyRate: String, //Total Avg Hrly Rate
  totalNoEmployee: String,
  totalAverageOfMonthsLongevityInCurrentClassification: String,
  ratioOfWomenHourlyRateToMenHourlyRatePercentage: String,
  notes: String
  }));
