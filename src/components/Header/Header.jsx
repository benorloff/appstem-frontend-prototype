import react, { useState } from 'react';

import { Input, Menu } from 'semantic-ui-react';

export default function Header() {

    const [searchInput, setSearchInput] = useState('');

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <Menu>
            <Menu.Item>
                Photo Finder
            </Menu.Item>
            <Menu.Item position='right'>
                <Input
                    action={{ type: 'submit', content: 'Search' }}
                    name='searchInput'
                    placeholder='Search terms...'
                    value={searchInput}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    required
                />
            </Menu.Item>
        </Menu>
    )
}