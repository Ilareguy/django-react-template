import React from 'react';
import {MemoryRouter} from "react-router";

const StorybookLayout = ({children}) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            {children}
        </MemoryRouter>
    )
}

export default StorybookLayout;
