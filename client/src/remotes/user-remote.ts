
import { internalAxios } from './internal-axios';
import { ConcertEventModel } from '../data-models/event-model';

export const getAllUsers = async () =>{
    return await internalAxios.get('/users');
}

export const getUser = async () => {
    const id = localStorage.getItem('userId');
    return await internalAxios.get<UserLoginInterface>('/users/'+id);;
}

export const getAllEvents = async () => {
    
    const response = await internalAxios.get<ConcertEventModel[]>('/events');
    console.log('get all events' + response.data);
    return response;
}

export const postUser = async (body:any)=>{
    return await internalAxios.post('/users',body);
}

// not tested
export const getUserEvents = async () => {
    const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts');
    return response.data;
}

export const update = async (user:any) =>{
    const response = await internalAxios.put('/users',user)
    return response;
}


//tell the server what concert to remove from my list
export const userRemoveEvent = async (payload:number) => {
    const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts/remove');
   // return event1;
   return response.data;
}

// tell the server what concert to add to my list
/*
export const userAddEvent = async (payload:number) => {
    const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts/add');

    return response.data;
}
*/
interface UserLoginInterface{
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        userName: string,
        password: string,
        picture: string
        bio: string,
        role: {
            id: number,
            role: string
        },
        band: any,
        song: string,
        state: string,
        city: string,
        genre:string
}

export const login = async (payload:any) => {
    const response = await internalAxios.post<UserLoginInterface>('/users/login', payload);
    
    if (response.data){
   // localStorage.setItem('accessToken', response.data.accessToken.accessToken)
    localStorage.setItem('userId', response.data.id.toString());
    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('userCity', response.data.city);
    localStorage.setItem('userState', response.data.state);
    localStorage.setItem('userRoleId', response.data.id.toString());
    }
    return response;
}
