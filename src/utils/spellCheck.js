export default function spellCheck(searchInput) {

    let query = searchInput.toLowerCase();

    // Determine if non-alpha chars used, remove if so
    if (query.match(/[^a-z]/).length) {
        query = query.replace(/[^a-z]/gi, '');
    }

    console.log(query, '<-- query after regex');

    return query;
}