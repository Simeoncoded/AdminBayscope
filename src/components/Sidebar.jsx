import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={styles['sidebar-toggle']} onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles['sidebar-header']}>
                    <h2>Bayscope Admin Panel</h2>
                </div>
                <nav className={styles['sidebar-nav']}>
                    <ul>
                        <li>
                            <Link to="/clients" activeClassName={styles.active}>
                               Clients
                            </Link>
                        </li>
                        <li>
                            <Link to="/plans" activeClassName={styles.active}>
                                Plans
                            </Link>
                        </li>
                        <li>
                            <Link to="/employees" activeClassName={styles.active}>
                                Employees
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="settings" activeClassName={styles.active}>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
