import Link from 'next/link';
import styles from './Header.module.css';
import { Calculator } from 'lucide-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Calculator size={32} className={styles.logoIcon} />
                    <div className={styles.logoText}>
                        <span className={styles.brand}>NEXUS</span>
                        <span className={styles.sub}>ACCOUNTING</span>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#about" className={styles.link}>About Us</Link>
                    <Link href="#resources" className={styles.link}>Resources</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="#portal" className={styles.portalLink}>Client Portal</Link>
                    <Link href="#consultation" className="btn btn-primary">Free Consultation</Link>
                </div>
            </div>
        </header>
    );
}
