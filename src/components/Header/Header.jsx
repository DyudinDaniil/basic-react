import SelectUser from '../SelectUser/SelectUser';

import styles from './Header.module.css';

function Header() {

	return (
		<>
			<img src="../../public/logo.svg" alt="logo" />
			<SelectUser />
		</>
	);

}

export default Header;