import { User } from '../data-models/user-model';
import { internalAxios } from './internal-axios';
import { ConcertEventModel } from '../data-models/event-model';
import { send } from 'process';


export const event1:ConcertEventModel[] = [{
    eId:0,
    eName:"Tour Of Destruction",
    eDate:new Date("2020-07-25T00:00"),
    city:"San Francisco",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:1,
    eName:"Road to Redemtion",
    eDate:new Date("2020-07-26T00:00"),
    city:"San Diego",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:2,
    eName:"Night Of the Living",
    eDate:new Date("2020-08-25T00:00"),
    city:"Fresno",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:3,
    eName:"Day Of The Dead",
    eDate:new Date("2021-07-25T00:00"),
    city:"Oakland",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:4,
    eName:"Road to Redemtion",
    eDate:new Date("2020-06-30T00:00"),
    city:"Las Angles",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:5,
    eName:"Road to Redemtion",
    eDate:new Date("2020-06-25T00:00"),
    city:"Las Angles",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
}]
export const getAllUsers = async () =>{
    return await internalAxios.get('/users');
}

export const getUser = async () => {
    return await internalAxios.get<User>('/users/3');;
    //return response.data;
}

export const getAllEvents = async () => {
    
    const response = await internalAxios.get<ConcertEventModel[]>('/events');
    console.log('get all events' + response.data);
    return response;
}

export const postUser = async (body:any)=>{
    return await internalAxios.post('/users',body);
}

export const getUserEvents = async () => {
    const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts');
   // return event1;
    return response.data;
}

//tell the server what concert to remove from my list
export const userRemoveEvent = async (payload:number) => {
    //const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts/remove');
    return event1;
 //   return response.data;
}

// tell the server what concert to add to my list
export const userAddEvent = async (payload:number) => {
   // const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts/add');
    return event1;
 //   return response.data;
}

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
        place: {
            id: number,
            zipCode: number,
            state: string,
            city: string,
            streetAddress: string
        }
}

export const login = async (payload:any) => {
    const response = await internalAxios.post<UserLoginInterface>('/users/login', payload);
    console.log(response.data);

    if (response.data)
    {
    const userRoleString = response.data.role.id.toString();
   // localStorage.setItem('accessToken', response.data.accessToken.accessToken)
    localStorage.setItem('userRole', userRoleString);
    localStorage.setItem('userId', response.data.id.toString());
    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('userCity', response.data.place.city);
    localStorage.setItem('userState', response.data.place.state);
    }
    return response;
}
