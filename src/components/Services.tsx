import { PieChart, Briefcase, FileText, ShieldCheck, BadgeDollarSign, TrendingUp } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    { icon: FileText, title: "Tax Preparation", desc: "Strategic tax planning and filing for businesses and individuals to minimize liability." },
    { icon: PieChart, title: "Bookkeeping", desc: "Accurate, timely financial records ensuring you always know where your business stands." },
    { icon: TrendingUp, title: "CFO Advisory", desc: "Fractional CFO services to guide capital allocation, fundraising, and growth strategy." },
    { icon: Briefcase, title: "Payroll Services", desc: "Comprehensive payroll management, compliance, and benefits administration." },
    { icon: BadgeDollarSign, title: "Audit & Assurance", desc: "Thorough financial audits to ensure compliance and build stakeholder trust." },
    { icon: ShieldCheck, title: "Estate Planning", desc: "Protecting your wealth and legacy with structured financial planning." },
];

export default function Services() {
    return (
        <section id="services" className={`section-padding ${styles.services}`}>
            <div className="pattern-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Our Expertise</span>
                    <h2>Comprehensive Financial Solutions</h2>
                    <p>Tailored strategies designed to meet the unique needs of your business.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <s.icon size={26} />
                            </div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                            <a href="#" className={styles.learnMore}>Learn more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
