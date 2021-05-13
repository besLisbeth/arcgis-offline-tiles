import React from 'react';
import Icon from '../common/Icon';
import { Brand, ButtonSection, NavBar, NavButton } from './elements';

export default function NavigationBar() {

    return (
        <NavBar>
            <Brand href={'/'}>{'arcgis offline tiles demo'}</Brand>
            <ButtonSection>
                <NavButton href={'https://github.com/besLisbeth/arcgis-offline-tiles'}>
                    <Icon name={'github'}/>
                </NavButton>
            </ButtonSection>
        </NavBar>
    )
}
