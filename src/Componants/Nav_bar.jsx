import React from 'react';

function Nav_bar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark' style={{ height: "5rem" }}>
                <div className='container'>
                    <a className='navbar-brand' href='/home'>
                        <img src='Assets/logo.png' alt='bg img' width="15%" />
                    </a>
                    <div className='navbar-collapse align-items-center'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Overview</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Features</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Getting Started</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Forum</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact Us</a>
                            </li>
                            <li className='nav-item' style={{ paddingRight: '2rem', paddingTop: '1rem' }}>
                                <button className='btn btn-primary mr-1'>Play</button>
                            </li>
                            <li className='nav-item' style={{ paddingTop: '1rem' }}>
                                <button className='btn btn-secondary'>Account</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav_bar;
