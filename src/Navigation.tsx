import 'bootstrap/dist/js/bootstrap.js';

import { Component } from 'react';

interface NavigationItemProperties {
    'text': string;
    'url': string;
}

class NavigationItem extends Component<NavigationItemProperties> {
    render() {
        return (
            <li className='nav-item'>
                <a className='nav-link' href={this.props.url}>{this.props.text}</a>
            </li>
        )
    };
}

export class Navigation extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>Patrick Kirk</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-items' aria-controls='narbar-items' aria-expanded='false' aria-label='Toggle Navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbar-items'>
                        <ul className='navbar-nav'>
                            <NavigationItem text='Home' url='#' />
                            <NavigationItem text='Portfolio' url='#' />
                            <NavigationItem text='Resume' url='#' />
                            <NavigationItem text='Contact' url='#' />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    };
}
