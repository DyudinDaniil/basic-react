import { useState } from 'react';

import Button from '../Button/Buttion';

import './JournalForm.css';

function JournalForm() {

	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input type="title" name="title"/>
			<input type="date" name="date"/>
			<input type="text" name="tag" value={inputData} onChange={inputChange}/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text={'Сохранить'}/>
		</form>
	);

}

export default JournalForm;