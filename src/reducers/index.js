/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */

import { fromJS } from 'immutable';
import actionTypes from '../constants/action-types';

const {
    HANDLE_CLICK, 
    CHECK_NAME, 
    HANDLE_CHANGE, 
    HANDLE_LOGIN,
    HANDLE_END_GAME
} = actionTypes;

const initialState = {
	guess1: null,
	guess2: null,
};

const update = (state = fromJS(initialState), action = {}) => {
	switch (action.type) {
	case HANDLE_CLICK:
		let nextStateFlip = state;
		nextStateFlip.get('cards').forEach((el, i) => {
			if (el.get('id') === action.id) {
				nextStateFlip = state.setIn(['cards', i, 'flipped'], 'true');
			}

			return 0;
		});
		if (nextStateFlip.get('guess1') === null) {
			return nextStateFlip.set('guess1', action.genKey);
		}
		return nextStateFlip.set('guess2', action.genKey);

	case CHECK_NAME:
		let nextStateHide = state;
		nextStateHide.get('cards').forEach((el, i) => {
			nextStateHide = nextStateHide.setIn(['cards', i, 'flipped'], 'false');
			return 0;
		});
		return nextStateHide.set('guess1', null).set('guess2', null);

	case HANDLE_CHANGE:
		let nextStateMatched = state;
		if (nextStateMatched.get('guess1') === nextStateMatched.get('guess2') && nextStateMatched.get('guess1') !== null) {
			nextStateMatched.get('cards').map((el, i) => {
				if (el.get('genKey') === nextStateMatched.get('guess1') && el.get('solved') === 'false') {
					nextStateMatched = nextStateMatched.setIn(['cards', i, 'solved'], 'true');
				}

				return 0;
			});
		}

		return nextStateMatched;

	case HANDLE_LOGIN:
		const shuffled = Object.assign({}, initialState);

		for (let i = shuffled.cards.length - 1; i > 0; i -= 1) {
			if (i !== 4 && i !== 9 && i !== 16) {
				const j = Math.floor(Math.random() * (i + 1));
				if (j !== 4 && j !== 9 && j !== 16) {
					[shuffled.cards[i], shuffled.cards[j]] = [shuffled.cards[j], shuffled.cards[i]];
				}
			}
		}
		return fromJS(shuffled);

	default:
		return state;
	}
};

const initialStateRoute = 'signin';

const route = (state = initialStateRoute, action = {}) => {
	switch (action.type) {
	case HANDLE_END_GAME:
		return action.payload;
	default:
		return state;
	}
};

export default [update, route];