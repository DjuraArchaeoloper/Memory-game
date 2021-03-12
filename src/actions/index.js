/* eslint-disable import/no-anonymous-default-export */

import actionTypes from '../constants/action-types';

const {
    HANDLE_CLICK, 
    CHECK_NAME, 
    HANDLE_CHANGE, 
    HANDLE_LOGIN,
    HANDLE_END_GAME,
} = actionTypes;

export default {
	handleClick: () => ({
		type: HANDLE_CLICK,
	}),

	checkName: () => ({
		type: CHECK_NAME,
	}),

	handleChange: () => ({
		type: HANDLE_CHANGE,
	}),

	handleLogin: () => ({
		type: HANDLE_LOGIN,
	}),

	handleEndGame: text => ({
		type: HANDLE_END_GAME,
		payload: text,
	}),
};