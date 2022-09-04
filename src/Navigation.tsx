import 'bootstrap/dist/js/bootstrap.js';

import React, { Component } from 'react';
import App from './App';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { Welcome } from './Welcome';

type ValidNavigationComponents = Contact | Portfolio | Resume | Welcome;

interface NavigationItemProperties {
    text: string;
    component: ValidNavigationComponents;
    is_active?: boolean;
    onNavLinkClicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class NavigationItem extends Component<NavigationItemProperties> {
    render() {
        let cssClasses: string[] = ['nav-link'];

        if (this.props.is_active) {
            cssClasses.push('active');
        }

        return (
            <button className={cssClasses.join(' ')} onClick={this.props.onNavLinkClicked}>{this.props.text}</button>
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
                { text: 'Home', component: new Welcome({}) },
                { text: 'Resume', component: new Resume({}) },
                { text: 'Portfolio', component: new Portfolio({}) },
                { text: 'Contact', component: new Contact({}) }
            ]
        }
    }

    onNavLinkClicked(index: number, event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        this.setState({ activeTabIndex: index });
        this.props.app.setState({ currentContent: this.state.tabs[index].component })
    }

    render() {
        return (
            <nav className='nav nav-fill nav-pills pt-3'>
            { 
                this.state.tabs.map((tab, i) => { 
                    return <NavigationItem key={i} component={tab.component} text={tab.text} is_active={i === this.state.activeTabIndex} 
                        onNavLinkClicked={this.onNavLinkClicked.bind(this, i)} />
                }) 
            }
            </nav>
        )
    };
}
