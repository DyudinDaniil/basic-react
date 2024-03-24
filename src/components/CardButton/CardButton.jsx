import cn from 'classnames';

import styles from './CardButton.module.css';

function CardButton({ children, className }) {

	const btnStyle = cn(styles['card-btn'], {
		[className] : className
	});
  
	return (
		<button className={btnStyle}>
			{children}
		</button>
	);

}

export default CardButton;