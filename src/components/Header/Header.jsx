import react, { useState } from 'react';

import { Input, Menu, Form, Button } from 'semantic-ui-react';
import spellCheck from '../../utils/spellCheck';

export default function Header() {

    const [searchInput, setSearchInput] = useState('');

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const query = await spellCheck(searchInput);
        console.log(query, '<-- query from handleSubmit')
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