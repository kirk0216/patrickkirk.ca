import React from 'react';

import envelope from 'bootstrap-icons/icons/envelope.svg';
import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import github from 'bootstrap-icons/icons/github.svg';

export class Contact extends React.Component {
    render() {
        return (
            <div className='text-center'>
                <h1>Patrick Kirk</h1>
                <ul className='list-unstyled'>
                    <li className='text-muted'>Software Developer</li>
                    <li className='text-muted'>Ontario, Canada</li>
                </ul>
                <ul className='list-group list-group-flush text-start'>
                    <li className='list-group-item'><img src={envelope} alt='Email' /> <a href='mailto:pat.kirk@gmail.com'>pat.kirk@gmail.com</a></li>
                    <li className='list-group-item'><img src={linkedin} alt='Linked In' /> <a href='https://www.linkedin.com/in/patrick-j-kirk/' target='_blank' rel='noreferrer'>patrick-j-kirk</a></li>
                    <li className='list-group-item'><img src={github} alt='GitHub' /> <a href='https://github.com/kirk0216' target='_blank' rel='noreferrer'>kirk0216</a></li>
                </ul>
            </div>
        );
    }
}
