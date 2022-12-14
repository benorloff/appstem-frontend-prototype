import react, { useState } from 'react';

import { Menu, Form } from 'semantic-ui-react';

export default function Header({ attemptSearch }) {

    const [searchInput, setSearchInput] = useState('');

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Simplify by converting to lower case and trimming
        let query = searchInput.toLowerCase().trim();

        // Determine if non-alpha chars used, if so remove them
        if (query.match(/[^a-z]/)) {
            query = query.replace(/[^a-z]/gi, '');
        }

        attemptSearch(query);
        setSearchInput('');

    }

    return(
        <Menu>
            <Menu.Item>
                Photo Finder
            </Menu.Item>
            <Menu.Item position='right'>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        action={{ type: 'submit', content: 'Search'}}
                        name='searchInput'
                        placeholder='Search terms...'
                        value={searchInput}
                        onChange={handleChange}
                        required
                    />
                </Form>
            </Menu.Item>
        </Menu>
    )
}