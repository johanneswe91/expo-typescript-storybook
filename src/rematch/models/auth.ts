import { RootModel } from '.';
import { createModel } from '@rematch/core';

type IAuthState = {};

export const auth = createModel<RootModel>()({
	state: {},
	reducers: {},
	effects: (dispatch) => ({})
});
