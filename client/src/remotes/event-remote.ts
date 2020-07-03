import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';

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
    const response = await internalAxios.get('events/user/'+uid)
    return response.data;
}
export const addUserEvent = async (uid:number,eid:number)=>{
    return await internalAxios.post('/events/user',{'userID':uid,'eventID':eid});
}
export const removeUserEvent = async (uid:number,eid:number)=>{
    return await internalAxios.delete('/events/user?uid='+uid+'&eid='+eid);
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

