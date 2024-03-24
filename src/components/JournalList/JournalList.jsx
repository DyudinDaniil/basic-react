import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

import styles from './JournalList.module.css';

function JournalList({ items }) {

	const sortItems = items.sort((a, b) =>{
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});

	const journailContent = items.length === 0 
		? <p>Записей нет</p> 
		: sortItems.map(item => (
			<CardButton key={item.id}>
				<JournalItem
					title={item.title}
					text={item.text}
					date={item.date}
				/>
			</CardButton>
		));

	return (
		<ul className={styles['journal-list']}>
			{journailContent}
		</ul>
	);

}

export default JournalList;