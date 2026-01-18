import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function TermsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Services</h2>
                        <p>Nexus Accounting provides accounting, tax, and financial advisory services subject to separate engagement agreements.</p>

                        <h2>2. Professional Standards</h2>
                        <p>All services are provided in accordance with professional accounting standards and applicable regulations.</p>

                        <h2>3. Confidentiality</h2>
                        <p>We maintain strict confidentiality of all client information in accordance with professional ethics codes.</p>

                        <h2>4. Limitation of Liability</h2>
                        <p>Our liability is limited as specified in individual engagement letters and applicable law.</p>

                        <h2>5. Contact</h2>
                        <p>For questions, contact legal@nexusaccounting.com</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
