import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLinks}>
                <Link href="/" passHref>
                    <span className={styles.navItem}>Home</span>
                </Link>
                <Link href="/contact" passHref>
                    <span className={styles.navItem}>Contact Us</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
