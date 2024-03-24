import { useEffect, useState } from 'react';

import cn from 'classnames';

import Button from '../Button/Buttion';

import styles from './JournalForm.module.css';

const INITIAL_FORM_STATE = {
	title: true,
	text: true,
	date: true
};

function JournalForm({ onSubmit }) {

	const [formValidState, setFormValidState] = useState(INITIAL_FORM_STATE);

	useEffect(() => {
		let timerId;
		if (!formValidState.title || !formValidState.text || !formValidState.date) {
			timerId = setTimeout(() => {
				setFormValidState(INITIAL_FORM_STATE);
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [formValidState]);

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

			<input type="title" name="title" placeholder='Title' className={cn(styles['input-title'], {
				[styles['invalid']]: !formValidState.title
			})} />

			<div className={styles['input-wrap']}>
				<label htmlFor="date" className={styles['label']}>
					<img src='/public/calendar.svg' />
					<span>Дата</span>
				</label>

				<input type="date" name="date" id="date" className={cn(styles['input'], {
					[styles['invalid']]: !formValidState.date
				})} />
			</div>

			<div className={styles['input-wrap']}>
				<label htmlFor="tag" className={styles['label']}>
					<img src='/public/folder.svg' />
					<span>Метки</span>
				</label>
        
				<input type="text" name="tag" id="tag" placeholder="Tag" className={styles['input']}/>
			</div>

			<textarea name="text" id="" cols="30" rows="10" placeholder="Text" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.text
			})}></textarea>

			<Button text={'Сохранить'}/>

		</form>
	);

}

export default JournalForm;