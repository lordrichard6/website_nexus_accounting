import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <div className={styles.footerLogo}>
                            <Image src="/icon.png" alt="Nexus" width={48} height={48} />
                            <div className={styles.logoText}>
                                <span className={styles.brandName}>NEXUS</span>
                                <span className={styles.brandTag}>ACCOUNTING</span>
                            </div>
                        </div>
                        <p className={styles.tagline}>Precision. Strategy. Growth.</p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Services</h4>
                        <Link href="/services">Tax Planning</Link>
                        <Link href="/services">Bookkeeping</Link>
                        <Link href="/services">Audits</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/#contact">Contact</Link>
                        <Link href="#">Client Portal</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Legal</h4>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Nexus Accounting Services. All rights reserved.</p>
                    <p>Built by <a href="https://lopes2tech.com" target="_blank" rel="noopener">Lopes2Tech</a></p>
                </div>
            </div>
        </footer>
    );
}
