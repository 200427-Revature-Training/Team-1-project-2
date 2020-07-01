import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';
import { User } from '../data-models/user-model';


export const getAllEvents = async () => {
    
    //const response = await internalAxios.get<ConcertEventModel[]>('/events');
    return internalAxios.get('/events');
    
    // return response.data;
}

export const getAllUserEvents = async () => {
    //const response = await internalAxios.get<ConcertEventModel[]>('/events/id');
    return ;
    //return response;
}

export const getEventById = async (eid:string) => {
    return internalAxios.get('/events/'+eid)
}

export const addConcertEvent = (concert:ConcertEventModel) => {
    console.log('adding a concert' + event1.length);
    event1.push(concert);// hack for now
    console.log('adding a concert' + event1.length);
    //const response = await internalAxios.get<ConcertEventModel[]>('/events/add');
    return event1;
    //return response;
}

const bandA:User[] = [{
    userId: 0,
    userName: "member1",
    userPassword: "",
    userFirstName:"name1",
    userLastName:"last1",
    userEmail:"me@Mail.com",
    userRollId:1 
},
{
    userId: 1,
    userName: "member1",
    userPassword: "",
    userFirstName:"name1",
    userLastName:"last1",
    userEmail:"me@Mail.com",
    userRollId:1 
}];


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
    eDate:new Date("2020-06-31T00:00"),
    city:"San Diego",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:2,
    eName:"Night Of the Living",
    eDate:new Date("2020-07-26T00:00"),
    city:"Fresno",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:3,
    eName:"Day Of The Dead",
    eDate:new Date("2020-08-26T00:00"),
    city:"Oakland",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:4,
    eName:"Road to Redemtion",
    eDate:new Date("2020-06-30T18:00"),
    city:"Las Angles",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:5,
    eName:"Boston Calling",
    eDate:new Date("2021-06-26T00:00"),
    city:"Boston",
    state:"Massachusetts",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
}]
/*
*/