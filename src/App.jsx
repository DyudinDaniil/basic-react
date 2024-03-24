import { useState } from 'react';

import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPnael/NavPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

import styles from './App.module.css';

const INITIAL_DATA = [
	{
		id: 1,
		title: 'Подготовка к обновлению курсов',
		text: 'Сегодня провёл весь день за',
		date: new Date()
	},
	{
		id: 2,
		title: 'Поход в годы',
		text: 'Думал, что очень много времени',
		date: new Date()
	}
];

function App() {

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(item => item.id)) + 1,
			title: item.title,
			text: item.text,
			date: new Date(item.date)
		}]);
	};

	

	return (
		<div className={styles['app']}>
			<NavPanel>
				<Header/>

				<JournalAddButton/>
        
				<JournalList items={items}/>
			</NavPanel>

			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);

}

export default App;
