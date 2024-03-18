import './CardButton.css';

function CardButton({ children, className }) {

	const btnStyle = 'card-btn' + (className ? ` ${className}` : '');
  
	return (
		<button className={btnStyle}>
			{children}
		</button>
	);

}

export default CardButton;