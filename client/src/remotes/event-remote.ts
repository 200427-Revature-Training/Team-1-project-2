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

export const getEventByUserId = async (uid:string)=>{
    return internalAxios.get('events/user/'+uid);
}

// working on it
export const addConcertEvent = async (concert:ConcertEventModel) => {
    console.log('adding event event remote')
    const concertEvent:EventInterface = {
        id: 0,
        name: concert.eName,
        date: concert.eDate.toISOString(),
        picture: 'this image',//concert.sourceImage,
        description: concert.description,
        song:'this song',
        place : {
            id:1,
            zipCode:44444,
            city: concert.city,
            state: concert.state,
            streetAddress:'your moms house',
        },
        bands:'team 1, team 2'//concert.eBandList
    }
    const response = await internalAxios.post<EventInterface[]>('/events', concertEvent);
    return response;
}

interface EventInterface
{
    id: number,
    name: string,
    date: string,
    picture: string,
    description: string,
    song: string,
    place: {
        id: number,
        zipCode: number,
        state: string,
        city: string,
        streetAddress: string
    },
    bands: string
}

