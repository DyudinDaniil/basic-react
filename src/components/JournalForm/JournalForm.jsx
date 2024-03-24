import { useState } from 'react';

import cn from 'classnames';

import Button from '../Button/Buttion';

import styles from './JournalForm.module.css';

function JournalForm({ onSubmit }) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(oldState => ({...oldState, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(oldState => ({...oldState, title: true}));
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(oldState => ({...oldState, text: false}));
			isFormValid = false;
		} else {
			setFormValidState(oldState => ({...oldState, text: true}));
		}
		if (!formProps.date) {
			setFormValidState(oldState => ({...oldState, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(oldState => ({...oldState, date: true}));
		}
		if (!isFormValid) {
			return;
		}

		onSubmit(formProps);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>

			<input type="title" name="title" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.title
			})} />

			<input type="date" name="date" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.date
			})} />

			<input type="text" name="tag"/>

			<textarea name="text" id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.text
			})}></textarea>

			<Button text={'Сохранить'}/>

		</form>
	);

}

export default JournalForm;