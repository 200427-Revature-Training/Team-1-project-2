import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';

export const getAllEvents = async () => {
    return internalAxios.get('/events');
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
export const getUsersByEvent = async (uid:number)=>{
    const response = await internalAxios.get('/users/eventsUsers/'+uid);
    return response.data;
}

export const addConcertEvent = async (concert:any) => {
    const concertEvent:EventInterface = {
        id:0,
        name: concert.eName,
        date: concert.eDate.toISOString(),
        picture: concert.sourceImage,
        description: concert.description,
        song:concert.featuredSong,
        city: concert.city,
        state: concert.state,
        bands:concert.eBandList
    }
    const response = await internalAxios.post<EventInterface[]>('/events', concertEvent);
    return response;
}

export const updateConcertEvent = async (concert:any) => {
    const concertEvent:EventInterface = {
        id:concert.id,
        name: concert.eName,
        date: concert.eDate,
        picture: concert.sourceImage,
        description: concert.description,
        song:concert.song,
        city: concert.city,
        state: concert.state,
        bands:concert.eBandList
    }
    const response = await internalAxios.put<EventInterface[]>('/events', concertEvent);
    return response;
}

interface EventInterface
{
    id:number,
    name: string,
    date: string,
    picture: string,
    description: string,
    song: string,
    state: string,
    city: string,
    bands: string
}

