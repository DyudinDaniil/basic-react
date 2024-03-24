export const INITIAL_FORM_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true
	},
	values: {
		title: '',
		text: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'CLEAR':
		return {...state, values: INITIAL_FORM_STATE.values};

	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_FORM_STATE.isValid };

	case 'SUBMIT': {
		const titleValidity = state.values.title?.trim().length;
		const textValidity = state.values.text?.trim().length;
		const dateValidity = state.values.date.length;

		return {
			...state,
			isValid: {
				title: titleValidity,
				textValidity: textValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}

	case 'FILL':
		return {...state, values: {...state.values, ...action.payload}};
	}
}