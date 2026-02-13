import styles from "./Divider.module.css";

export default function Divider({ style }: { style?: React.CSSProperties }) {
  return <div className={styles.divider} style={style}></div>;
}
