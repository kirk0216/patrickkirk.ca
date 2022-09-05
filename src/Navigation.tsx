import 'bootstrap/dist/js/bootstrap.js';

import React, { Component } from 'react';
import App from './App';

import { NavLink } from 'react-router-dom';

interface NavigationItemProperties {
    text: string;
    url: string;
}

class NavigationItem extends Component<NavigationItemProperties> {
    render() {
        return (
            <NavLink to={this.props.url} className='nav-link'>{this.props.text}</NavLink>
        )
    };
}

interface NavigationProperties {
    app: App
}

interface NavigationState {
    activeTabIndex: number;
    tabs: NavigationItemProperties[];
}

export class Navigation extends Component<NavigationProperties, NavigationState> {
    constructor(props: any) {
        super(props);

        this.state = {
            activeTabIndex: 0,
            tabs: [
                { text: 'Welcome', url: '/' },
                { text: 'Resume', url: '/resume' },
                { text: 'Portfolio', url: '/portfolio' },
                { text: 'Contact', url: '/contact' }
            ]
        }
    }

    render() {
        return (
            <nav className='nav nav-fill nav-pills pt-3'>
            { 
                this.state.tabs.map((tab, i) => { 
                    return <NavigationItem key={i} text={tab.text} url={tab.url} />
                }) 
            }
            </nav>
        )
    };
}
