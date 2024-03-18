import './NavPanel.css';

function NavPanel({ children }) {

	return (
		<div className="nav-panel">
			{children}
		</div>
	);

}

export default NavPanel;