import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./services.module.css";
import { Calculator, FileText, TrendingUp, Building, Users, Shield } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "Tax Preparation & Planning",
        desc: "Individual and business tax returns, strategic tax planning, and compliance support.",
    },
    {
        icon: Calculator,
        title: "Bookkeeping & Payroll",
        desc: "Accurate bookkeeping, payroll processing, and financial record management.",
    },
    {
        icon: TrendingUp,
        title: "Financial Advisory",
        desc: "Business planning, forecasting, and strategic financial guidance.",
    },
    {
        icon: Building,
        title: "Audit & Assurance",
        desc: "Independent audits, reviews, and financial statement assurance services.",
    },
    {
        icon: Users,
        title: "Business Formation",
        desc: "Entity selection, incorporation, and startup financial structuring.",
    },
    {
        icon: Shield,
        title: "IRS Representation",
        desc: "Audit defense, appeals, and resolution of tax disputes.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="pattern-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
                <div className="container">
                    <h1>Our Services</h1>
                    <p className={styles.subtitle}>
                        Comprehensive accounting and financial solutions tailored to your needs.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((service, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.icon}><service.icon size={36} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
