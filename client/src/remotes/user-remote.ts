import { User } from '../data-models/user-model';
import { internalAxios } from './internal-axios';
import { ConcertEventModel } from '../data-models/event-model';


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
    return await internalAxios.get('/users/17');;
    //return response.data;
}
export const postUser = async (body:any)=>{
    return await internalAxios.post('/users',body);
}
export const getUserEvents = async () => {
    //const response = await internalAxios.get<ConcertEventModel[]>('/user/concerts');
    return event1;
 //   return response.data;
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

