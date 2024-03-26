import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

import styles from './JournalList.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items }) {

	const { userId } = useContext(UserContext);

	const filterItems = items.filter(item => {
		return (item.userId === userId);
	});

	const sortItems = filterItems.sort((a, b) =>{
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