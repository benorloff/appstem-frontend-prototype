const axios = require('axios').default;
const fs = require('fs')
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const BASE_URL = 'https://api.unsplash.com/';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

function getImages(req, res) {

    let query = req.query.query;
    console.log(query, '<-- query from getImages')

    // if query is not an english word, find the closest match
    if (wordArray.includes(query) === false) {

    }

    try {
        console.log(req.body, '<--req.body from getImages');
        console.log(req.params, '<--req.params from getImages');
        console.log(query, '<--query from getImages');
        res.status(201).json({ query: query })
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

/* Helper Functions */

function isValidWord(str) {
    return wordArray.includes(str);
}

function findClosestMatch(query) {
    
}


module.exports = {
    getImages,
};

// params: {
//     query: query,
//     page: 1,
//     per_page: 10,
//     client_id: 'yzNpICMF7Ug9xI5XGdr7uYFVTzR-p05ZGKkR7OGTIEs'
// }