import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import { Users, Award, Target, TrendingUp } from "lucide-react";

const values = [
    { icon: Users, title: "Client-Focused", desc: "Your financial success is our priority" },
    { icon: Award, title: "Expertise", desc: "Certified professionals with decades of experience" },
    { icon: Target, title: "Precision", desc: "Accurate, detailed, and compliant" },
    { icon: TrendingUp, title: "Growth-Oriented", desc: "Strategic advice for your future" },
];

export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="pattern-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
                <div className="container">
                    <h1>About Nexus Accounting</h1>
                    <p className={styles.subtitle}>
                        Trusted financial partners for over 25 years, delivering precision and peace of mind.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.story}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in 1999, Nexus Accounting has grown from a small local practice to a trusted
                            partner for hundreds of businesses and individuals across the region.
                        </p>
                        <p>
                            We combine traditional values of integrity and precision with modern technology and
                            innovative approaches to deliver exceptional accounting and tax services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-surface">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <div className={styles.valueIcon}><v.icon size={32} /></div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
