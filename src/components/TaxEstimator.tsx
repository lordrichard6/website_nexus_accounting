"use client";
import React, { useState } from 'react';
import styles from './TaxEstimator.module.css';
import { Calculator, DollarSign, RefreshCw } from 'lucide-react';

export default function TaxEstimator() {
    const [income, setIncome] = useState<number>(100000);
    const [expenses, setExpenses] = useState<number>(30000);

    const profit = income - expenses;
    // Simplified logic for demo purposes
    const estimatedTax = profit > 0 ? profit * 0.25 : 0;
    const potentialSavings = estimatedTax * 0.30; // Claiming we can save 30%

    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <span className={styles.label}>Interactive Tool</span>
                        <h2>Estimate Your Tax Optimization Potential</h2>
                        <p className={styles.desc}>
                            See how much you could save with proper strategic planning. This simple calculator shows potential savings based on our average client results.
                        </p>
                        <div className={styles.benefits}>
                            <div className={styles.benefit}>
                                <strong>30%</strong> Average Reduction
                            </div>
                            <div className={styles.benefit}>
                                <strong>100%</strong> Compliance
                            </div>
                        </div>
                    </div>

                    <div className={styles.calculator}>
                        <div className={styles.header}>
                            <Calculator size={20} />
                            <span>Quick Estimator</span>
                        </div>

                        <div className={styles.inputs}>
                            <div className={styles.inputGroup}>
                                <label>Annual Revenue</label>
                                <div className={styles.inputWrapper}>
                                    <DollarSign size={16} className={styles.inputIcon} />
                                    <input
                                        type="number"
                                        value={income}
                                        onChange={(e) => setIncome(Number(e.target.value))}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Annual Expenses</label>
                                <div className={styles.inputWrapper}>
                                    <DollarSign size={16} className={styles.inputIcon} />
                                    <input
                                        type="number"
                                        value={expenses}
                                        onChange={(e) => setExpenses(Number(e.target.value))}
                                        className={styles.input}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.results}>
                            <div className={styles.resultRow}>
                                <span>Estimated Profit:</span>
                                <span className={styles.profitValue}>€{profit.toLocaleString()}</span>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.savingsBox}>
                                <span className={styles.savingsLabel}>Potential Tax Savings</span>
                                <span className={styles.savingsValue}>€{potentialSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                <span className={styles.savingsNote}>*Based on strategic planning implementation</span>
                            </div>
                        </div>

                        <button className={styles.actionBtn}>Get Detailed Analysis</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
