import styles from './Contact.module.css';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <span className={styles.label}>Get in Touch</span>
                        <h2>Let's Discuss Your Financial Future</h2>
                        <p className={styles.desc}>
                            Visit our offices or schedule a virtual consultation. We're here to provide the clarity you need.
                        </p>

                        <div className={styles.methods}>
                            <div className={styles.method}>
                                <div className={styles.iconCircle}><Phone size={20} /></div>
                                <div>
                                    <strong>Call Us</strong>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className={styles.method}>
                                <div className={styles.iconCircle}><Mail size={20} /></div>
                                <div>
                                    <strong>Email</strong>
                                    <p>advisory@nexus-acct.com</p>
                                </div>
                            </div>
                            <div className={styles.method}>
                                <div className={styles.iconCircle}><MapPin size={20} /></div>
                                <div>
                                    <strong>Visit</strong>
                                    <p>100 Financial District, Suite 500</p>
                                </div>
                            </div>
                            <div className={styles.method}>
                                <div className={styles.iconCircle}><Clock size={20} /></div>
                                <div>
                                    <strong>Hours</strong>
                                    <p>Mon-Fri: 8am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <h3>Request Consultation</h3>
                        <div className={styles.grid}>
                            <input type="text" placeholder="First Name" className={styles.input} />
                            <input type="text" placeholder="Last Name" className={styles.input} />
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                        </div>
                        <select className={styles.select}>
                            <option>I am interested in...</option>
                            <option>Business Tax Planning</option>
                            <option>Bookkeeping & Payroll</option>
                            <option>Personal Finance</option>
                            <option>Audit Services</option>
                        </select>
                        <textarea placeholder="How can we help?" rows={4} className={styles.textarea}></textarea>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Send Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
