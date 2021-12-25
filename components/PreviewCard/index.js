import React from "react";
import styles from "./style.module.scss";

const PreviewCard = () => {
    return (
        <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
                <picture>
                    <source srcSet="/img/image-header-mobile.jpg"
                            media="(max-width: 568px)"/>
                    <img className={styles.cardHeaderImage}
                         src={'/img/image-header-desktop.jpg'}
                         alt={''}
                    />
                </picture>
            </div>
            <div className={styles.cardBody}>
                <h1 className={styles.title}>
                    Get <strong>insights</strong> that help your business grow.
                </h1>
                <p className={styles.description}>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer
                    experience, and overall efficiency.
                </p>

                <div className={styles.statsContainer}>
                    <div className={styles.statsWrapper}>
                        <div className={styles.statsNumberText}>
                            10k+
                        </div>
                        <div className={styles.statsNameText}>
                            companies
                        </div>
                    </div>
                    <div className={styles.statsWrapper}>
                        <div className={styles.statsNumberText}>
                            314
                        </div>
                        <div className={styles.statsNameText}>
                            templates
                        </div>
                    </div>
                    <div className={styles.statsWrapper}>
                        <div className={styles.statsNumberText}>
                            12M+
                        </div>
                        <div className={styles.statsNameText}>
                            queries
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCard;
