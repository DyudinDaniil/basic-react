import { useEffect, useReducer, useState } from 'react';
import cn from 'classnames';

import Button from '../Button/Buttion';

import styles from './JournalForm.module.css';

import { INITIAL_FORM_STATE, formReducer } from './JournalForm.state';



function JournalForm({ onSubmit }) {

	const [formState, dispathForm] = useReducer(formReducer, INITIAL_FORM_STATE);
	const { isValid, values, isFormReadyToSubmit } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerId = setTimeout(() => {
				dispathForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispathForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit]);

	const addJournalItem = (event) => {
		event.preventDefault();
		dispathForm({ type: 'SUBMIT' });
	};

	const onChange = (event) => {
		dispathForm({ type: 'FILL', payload: { [event.target.name]: event.target.value }});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>

			<input 
				type="title" 
				name="title" 
				placeholder="Title" 
				value={values.title} 
				onChange={onChange}
				className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})} />

			<div className={styles['input-wrap']}>
				<label htmlFor="date" className={styles['label']}>
					<img src='/public/calendar.svg' />
					<span>Дата</span>
				</label>

				<input 
					type="date" 
					name="date" 
					id="date" 
					value={values.date}  
					onChange={onChange}
					className={cn(styles['input'], {
						[styles['invalid']]: !isValid.date
					})} />
			</div>

			<div className={styles['input-wrap']}>
				<label htmlFor="tag" className={styles['label']}>
					<img src='/public/folder.svg' />
					<span>Метки</span>
				</label>
        
				<input 
					type="text" 
					name="tag" 
					id="tag" 
					placeholder="Tag"  
					onChange={onChange}
					value={values.tag} 
					className={styles['input']}/>
			</div>

			<textarea 
				name="text" 
				id="" 
				cols="30" 
				rows="10" 
				placeholder="Text"   
				onChange={onChange}
				value={values.text} 
				className={cn(styles['input'], {
					[styles['invalid']]: !isValid.text
				})}></textarea>

			<Button text={'Сохранить'}/>

		</form>
	);

}

export default JournalForm;