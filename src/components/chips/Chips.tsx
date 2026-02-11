import styles from './Chips.module.css';

interface ChipsProps {
    content: string;
}

export default function Chips({ content }: ChipsProps) {
    return (
        <div className={styles.chips}>
            <p>{content}</p>
        </div>
    );
}
