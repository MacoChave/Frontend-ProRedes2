import axios from 'axios';
import IReporte from '../models/ireporte';
import { URI_REPORT } from './uri';

export const sendReport = (reporte: IReporte) => {
	return axios.post(`${URI_REPORT}`, reporte, {
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getReportes = () => {
	return axios.get(`${URI_REPORT}`, {
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getReporteByCarnet = (carnet: number) => {
	return axios.get(`${URI_REPORT}`, {
		params: { carnet: carnet },
		headers: { 'Content-Type': 'application/json' },
	});
};

export const getReporteById = (id: string) => {
	return axios.post(`${URI_REPORT}/reporte?id=${id}`, {
		headers: { 'Content-Type': 'application/json' },
	});
};
