import react from 'react';

import { Input, Menu } from 'semantic-ui-react';

export default function Header() {
    return(
        <Menu>
            <Menu.Item>
                Photo Finder
            </Menu.Item>
            <Menu.Item position='right'>
                <Input
                    action={{ type: 'submit', content: 'Search'}}
                    placeholder='Search terms...'
                />
            </Menu.Item>
        </Menu>
    )
}