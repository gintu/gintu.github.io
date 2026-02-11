import Chips from '../chips/Chips';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    tools?: string[];
}

export default function Card({ title, description, tools }: CardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div>
                <div>
                    {tools?.map((tool, index) => (
                        <Chips key={index} content={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}
