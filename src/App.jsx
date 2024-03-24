import { useEffect, useState } from 'react';

import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPnael/NavPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

import styles from './App.module.css';


function App() {

	const [items, setItems] = useState([]);

	useEffect(() =>{
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => (
				{
					...item,
					date: new Date(item.date)
				}
			)));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

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
