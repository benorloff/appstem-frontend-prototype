import react from 'react';

import { Input, Menu } from 'semantic-ui-react';

const navigation = () => (
    <Menu>
        <Menu.Item>

        </Menu.Item>
        <Menu.Item position='right'>
            <Input
                action={{ type: 'submit', content: 'Search'}}
                placeholder='Search terms...'
            />
        </Menu.Item>
    </Menu>
)

export default navigation;