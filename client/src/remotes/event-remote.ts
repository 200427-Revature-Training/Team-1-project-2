import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';
import { User } from '../data-models/user-model';

export const getAllEvents = async () => {
    
    //const response = await internalAxios.get<ConcertEventModel[]>('/events');
    return internalAxios.get('/events');
    
    // return response.data;
}

// not tested
export const getAllUserEvents = async () => {
    const response = await internalAxios.get<ConcertEventModel[]>('/events/id');
    return response;
}

export const getEventById = async (eid:string) => {
    return internalAxios.get('/events/'+eid)
}

// working on it
export const addConcertEvent = async (concert:ConcertEventModel) => {
    const response = await internalAxios.get<ConcertEventModel[]>('/events/add');
    return response;
}