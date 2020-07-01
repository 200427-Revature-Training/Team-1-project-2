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
    const response = await internalAxios.post<ConcertEventModel[]>('/events');
    return response;
}

interface createEvent
{
    "id": 2,
    "name": "No Kid's ALLOWED!",
    "date": "2020-07-24T23:00:00.000+00:00",
    "picture": "https://i1.wp.com/nafme.org/wp-content/files/2014/12/kids-concert.jpg?ssl=1",
    "description": "Join team 1 in celebrating end of training",
    "place": {
        "id": 2,
        "zipCode": 33602,
        "state": "FL",
        "city": "Tampa",
        "streetAddress": "401 Channelside Dr"
    }
}

