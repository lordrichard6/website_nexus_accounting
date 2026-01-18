import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./portal.module.css";
import { Lock, User } from "lucide-react";

export default function PortalPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="pattern-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
                <div className="container">
                    <div className={styles.loginCard}>
                        <div className={styles.header}>
                            <Lock size={48} className={styles.icon} />
                            <h1>Client Portal</h1>
                            <p>Access your financial documents and account information</p>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.field}>
                                <label htmlFor="email">
                                    <User size={18} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="password">
                                    <Lock size={18} /> Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Sign In
                            </button>

                            <div className={styles.links}>
                                <a href="#">Forgot password?</a>
                                <a href="#">Request access</a>
                            </div>
                        </form>

                        <div className={styles.note}>
                            <p><strong>Note:</strong> This is a demonstration portal. For actual client access, please contact your account manager.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
