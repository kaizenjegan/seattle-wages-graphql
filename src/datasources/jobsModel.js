const mongoose = require('mongoose');
module.exports = mongoose.model('Job', new mongoose.Schema({
    name: String,
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
    noFemaleEmployee: String,
    averageOfFemaleMonthsLongevityInCurrentClassification: String, //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION
    maleAvgHrlyRate: String, //Male Avg Hrly Rate
    numberOfMaleEmployees: String, //No. Male Empl"
    averageOfMaleMonthsLongevityInCurrentClassification: String, //Average of Male MONTHS LONGEVITY IN CURRENT CLASSIFICATION
    totalAvgHourlyRate: String, //Total Avg Hrly Rate
    totalNoEmployee: String,
    totalAverageOfMonthsLongevityInCurrentClassification: String,
    ratioOfWomenHourlyRateToMenHourlyRatePercentage: String,
    notes: String
  }));
