import { Component } from 'react';
import App from './App';

import { NavLink } from 'react-router-dom';

import './Navigation.css';

interface NavigationItemProperties {
    text: string;
    url: string;
}

class NavigationItem extends Component<NavigationItemProperties> {
    render() {
        return (
            <NavLink to={this.props.url} className='nav-link mx-1'>{this.props.text}</NavLink>
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
                { text: 'Portfolio', url: '/portfolio' }
            ]
        }
    }

    render() {
        return (
            <nav id='navigation' className='nav nav-fill nav-pills py-0'>
            { 
                this.state.tabs.map((tab, i) => { 
                    return <NavigationItem key={i} text={tab.text} url={tab.url} />
                }) 
            }
            </nav>
        )
    };
}
