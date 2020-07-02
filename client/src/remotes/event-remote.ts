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
export const addConcertEvent = async (concert:any) => {
    console.log('adding event event remote')
    const concertEvent:EventInterface = {
        name: concert.eName,
        date: concert.eDate.toISOString(),
        picture: concert.sourceImage,
        description: concert.description,
        song:concert.featuredSong,
        place : {
            id:concert.placeId,
            zipCode:concert.zipCode,
            city: concert.city,
            state: concert.state,
            streetAddress:concert.streetAddress,
        },
        bands:concert.eBandList
    }
    const response = await internalAxios.post<EventInterface[]>('/events', concertEvent);
    return response;
}

interface EventInterface
{
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

