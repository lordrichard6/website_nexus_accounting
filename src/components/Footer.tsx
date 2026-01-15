import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <span className={styles.logo}>NEXUS ACCOUNTING</span>
                        <p className={styles.tagline}>Precision. Strategy. Growth.</p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Services</h4>
                        <Link href="#">Tax Planning</Link>
                        <Link href="#">Bookkeeping</Link>
                        <Link href="#">Audits</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Company</h4>
                        <Link href="#">About Us</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Client Portal</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Legal</h4>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Nexus Accounting Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
