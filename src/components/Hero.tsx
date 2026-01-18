import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="pattern-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>Trusted by 500+ Businesses</div>
                    <h1 className={styles.title}>
                        Precision Accounting for <span className="text-teal">Growth</span>
                    </h1>
                    <p className={styles.desc}>
                        Expert financial guidance, tax planning, and strategic advisory to help your business thrive in a complex economy.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <CheckCircle2 size={20} className={styles.icon} />
                            <span>Certified CPA Experts</span>
                        </div>
                        <div className={styles.feature}>
                            <CheckCircle2 size={20} className={styles.icon} />
                            <span>Proactive Tax Strategy</span>
                        </div>
                        <div className={styles.feature}>
                            <CheckCircle2 size={20} className={styles.icon} />
                            <span>Cloud-Based Solutions</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Link href="#consultation" className="btn btn-primary">
                            Schedule Free Consultation
                        </Link>
                        <Link href="#services" className="btn btn-outline">
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero.png"
                        alt="Nexus Accounting Team"
                        width={600}
                        height={500}
                        className={styles.image}
                        priority
                    />
                    <div className={styles.floatCard}>
                        <span className={styles.floatLabel}>Client Savings 2024</span>
                        <span className={styles.floatValue}>$2.4M+</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
