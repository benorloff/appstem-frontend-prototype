## Appstem Frontend Prototype

This is a simple web app that allows users to search for images by word. It utilizes the Unsplash API to retrieve images based on the user's search term.

## How It Works

#### Search Input

The user enters a search term in the form located in the header. Upon submitting the query, it is stripped of all non-alpha characters on the client side using regex.

Once the query has been converted to lowercase and only alpha characters, it is then sent to a RESTful API endpoint /api/search.

From here, the server-side handles checking the validity of the query by referencing a word list. If it is a valid English word, the query will be added as a param to a GET request sent to the Unsplash /search/photos endpoint.

If it is not a valid english word, the server will attempt to find the closest valid match, by permutating all the vowels in the word and then returning the first valid match, if any.

#### Spellcheck

This app accounts for certain spelling mistakes made by users. For example, "typawroter" will be corrected to "typewriter" and "ceku" will be corrected to "cake". 

This is achieved by testing other vowel combinations until a match is found in the library of valid English words. 

#### Assumptions

The primary assumption is that the user will enter a single word query. Future versions of the app could include support for multi-word queries. 

## Credits

This app uses Semantic UI for frontend styling and react-medium-image-zoom for responsive overlays on image clicks.

