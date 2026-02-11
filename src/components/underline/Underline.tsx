import styles from './Underline.module.css';

interface UnderlineProps {
    width: string;
}

export default function Underline({ width }: UnderlineProps) {
    return <div className={styles.underline} style={{ width }} />;
}
