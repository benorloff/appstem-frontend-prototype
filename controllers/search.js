const axios = require('axios').default;
const fs = require('fs')
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const BASE_URL = 'https://api.unsplash.com/search/photos';
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
        const response = await axios.get(BASE_URL, {
            params: {
                query: cleanedQuery,
                page: 1,
                per_page: 10,
                client_id: UNSPLASH_ACCESS_KEY
            }
        })
        const data = await response.data
        console.log(response, '<-- unsplash response');
        res.status(201).json(data)
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
    const queryArr = Array.from(query);
    const queryVowelIndices = [];
    const startSet = new Set();
    let candidates = new Set([...startSet]);
    let tempWord = [...queryArr];
    let match = '';

    // Store indices of vowels
    queryArr.forEach((char,i) => {
        if ( vowels.includes(char) ) {
            queryVowelIndices.push(i);
        }
    })

    // Handle exception of no vowels, return empty match
    if ( !queryVowelIndices.length ) {
        console.log('ERROR: this query has no vowels')
        return match;
    }

    // Push the first 5 vowel permutations of query to candidates
    vowels.forEach(v => {
        tempWord[queryVowelIndices[0]] = v;
        startSet.add(tempWord.join(''));
    })

    // Permutate the rest of the vowels
    startSet.forEach(c => {
        tempWord = Array.from(c);
        for ( let i = 1; i < queryVowelIndices.length ; i++ ) {
            vowels.forEach(v => {
                tempWord[queryVowelIndices[i]] = v;
                candidates.add(tempWord.join(''));
            })
        }
    })

    // Find a match from the candidates, if any
    for ( let candidate of candidates ) {
        if ( isValidWord(candidate) ) {
            match = candidate;
            break;
        }
    }

    console.log(match, '<-- match');
    return match;
    
}


module.exports = {
    getImages,
};