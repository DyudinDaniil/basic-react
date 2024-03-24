import styles from './Header.module.css';

function Header() {

	return (
		<div className={styles['header']}>
			<img src="../../public/logo.svg" alt="logo" />
		</div>
	);

}

export default Header;