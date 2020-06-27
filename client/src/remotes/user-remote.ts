import { User } from '../data-models/user-model';
import { internalAxios } from './internal-axios';
import { ConcertEventModel } from '../data-models/event-model';

const user1:User = {
    userId: 0,
    userName: "user 1",
    userPassword: "kd",
    userFirstName:"user",
    userLastName:"me",
    userEmail:"",
    userRollId:0
}

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

export const getUser = async () => {
    //const response = await internalAxios.get<User>('/user');
    return user1;
    //return response.data;
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

