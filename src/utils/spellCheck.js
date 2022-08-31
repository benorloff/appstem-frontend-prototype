export default function spellCheck(searchInput) {
    console.log(searchInput, '<-- searchInput');

    let query = searchInput.toLowerCase();

    console.log(query, '<-- query before regex');

    // Determine if non-alpha chars used, remove if so
    if (query.match(/[^a-z]/).length) {
        query.replace(/[^a-z]/g, '');
    }

    console.log(query, '<-- query after regex');

    return query;
}