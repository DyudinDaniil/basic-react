import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPnael/NavPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

import './App.css';

function App() {

	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Сегодня провёл весь день за',
			date: new Date()
		},
		{
			title: 'Поход в годы',
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];

	return (
		<div className="app">
			<NavPanel>
				<Header/>

				<JournalAddButton/>
        
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>

					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</NavPanel>

			<Body>
        body
			</Body>
		</div>
	);

}

export default App;
