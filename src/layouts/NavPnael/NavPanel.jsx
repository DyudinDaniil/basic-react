import styles from './NavPanel.module.css';

function NavPanel({ children }) {

	return (
		<div className={styles['nav-panel']}>
			{children}
		</div>
	);

}

export default NavPanel;