const axios = require('axios').default;
const fs = require('fs')
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const BASE_URL = 'https://api.unsplash.com/';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

async function getImages(req, res) {

    const query = req.query.query;
    let cleanedQuery = '';

    console.log(query, '<-- query from getImages')

    // if query is not a valid english word from word list, find the closest match
    if (isValidWord(query) === false) {
        console.log(query, '<-- IS NOT a valid word');
        cleanedQuery = findClosestMatch(query);
    } else {
        console.log(query, '<-- IS a valid word');
        cleanedQuery = query;
    }

    try {
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
    const vowels = ['a','e','i','o','u'];
    const queryVowelIndices = [];
    const candidates = [];
    const tempWord = '';
    let match = '';

    // Store indices of vowels
    query.forEach((char,i) => {
        if ( vowels.includes(char) ) {
            queryVowelIndices.push(i);
        }
    })

    for ( let i = 0; i < query.length; i++ ) {
        if ( !vowels.includes(query.charAt(i)) ) {
            tempWord += query.charAt(i);
        }
    }
    
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