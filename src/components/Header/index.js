import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_div}>
                <h4>Your Result</h4>
            </div>
            <text className={styles.Summary_text}>
                <h4>Summary</h4>
            </text>
        </header> 
    );
} 
 
export default Header;  