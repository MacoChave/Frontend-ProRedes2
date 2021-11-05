import axios from 'axios';
import IAssistance from '../models/iassistance';
import { URI_ASSIST } from './uri';

export const sendAssistance = (assistance: IAssistance) => {
	return axios.post(`${URI_ASSIST}`, assistance, {
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getAssistance = () => {
	return axios.get(`${URI_ASSIST}`, {
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getAssistanceByCarnet = (carnet: number) => {
	return axios.get(`${URI_ASSIST}/alumno`, {
		params: { carnet: carnet },
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getAssistanceById = (id: string) => {
	return axios.get(`${URI_ASSIST}/evento`, {
		params: { id: id },
		headers: { 'Content-Type': 'application/json' },
	});
};
