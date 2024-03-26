// import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';

import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPnael/NavPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { UserContextProvidev } from './context/user.context';

import styles from './App.module.css';

function mapItems(items) {
	if (!items) {
		return [];
	}

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}


function App() {

	const [items, setItems] = useLocalStorage('data');

	const addItem = item => {
		setItems([...mapItems(items), {
			...item,
			id: Math.max(...items.map(item => item.id)) + 1,
			date: new Date(item.date)
		}]);
	};

	

	return (
		<UserContextProvidev>
			<div className={styles['app']}>
				<NavPanel>
					<Header/>

					<JournalAddButton/>
        
					<JournalList items={mapItems(items)}/>
				</NavPanel>

				<Body>
					<JournalForm onSubmit={addItem}/>
				</Body>
			</div>
		</UserContextProvidev>
	);

}

export default App;
