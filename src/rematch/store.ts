import { RootModel, models } from './models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import persist from '@rematch/persist';
import localforage from 'localforage';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

export const store = init<RootModel>({
	models,
	plugins: [
		persist({
			key: 'REMATCH_KEY',
			storage: Platform.OS === 'android' ? ExpoFileSystemStorage : Platform.OS === 'ios' ? AsyncStorage : localforage,
			blacklist: ['socket', 'networking', 'temp'],
			version: 1
		})
	]
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type IRootState = RematchRootState<RootModel>;

export const useRematchDispatch = <D extends {}, MD>(selector: (dispatch: D) => MD) => {
	const dispatch = useDispatch<D>();
	return selector(dispatch);
};
