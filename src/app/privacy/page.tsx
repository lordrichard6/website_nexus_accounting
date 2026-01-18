import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function PrivacyPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Information We Collect</h2>
                        <p>Nexus Accounting collects information you provide when using our services, including contact details and financial information necessary for accounting and tax services.</p>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information to provide accounting services, comply with legal obligations, and communicate with you about your account.</p>

                        <h2>3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your sensitive financial information.</p>

                        <h2>4. Your Rights</h2>
                        <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@nexusaccounting.com</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
