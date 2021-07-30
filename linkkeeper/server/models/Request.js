const { request } = require('https');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = mongoose.Schema({
    disease: {
        type:Boolean
    },
    funny: {
        type:Boolean
    },
    healing: {
        type:Boolean
    },
    hobby: {
        type:Boolean
    },
    lifestyle: {
        type:Boolean
    },
    saveMoney: {
        type:Boolean
    },
    scheduleMoney: {
        type:Boolean
    },
    schoolStudy: {
        type:Boolean
    },
    selfImprovement: {
        type:Boolean
    },
    tool: {
        type:Boolean
    },
    workout: {
        type:Boolean
    }
}, {timestamps: true})

const Request = mongoose.model('Request', requestSchema);

module.exports = { Request }