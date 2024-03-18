import './JournalList.css';

function JournalList({ children }) {

	return (
		<ul className="journal-list">
			{children}
		</ul>
	);

}

export default JournalList;