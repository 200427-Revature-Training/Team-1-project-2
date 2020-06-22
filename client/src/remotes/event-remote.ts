import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';
import { User } from '../data-models/user-model';


export const getAllEvents = async () => {

    //const response = await internalAxios.get<ConcertEventModel[]>('/events');
    return event1;
   
   // return response.data;
}

export const getAllUserEvents = async () => {
    //const response = await internalAxios.get<ConcertEventModel[]>('/events/id');
    return event1;
    //return response;
}


export const addConcertEvent = async (concert:ConcertEventModel) => {
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



const event1:ConcertEventModel[] = [{
    eId:0,
    eName:"Tour Of Destruction",
    eDate:new Date(),
    city:"San Francisco",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:1,
    eName:"Road to Redemtion",
    eDate:new Date(),
    city:"San Diego",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:2,
    eName:"Night Of the Living",
    eDate:new Date(),
    city:"Fresno",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:3,
    eName:"Day Of The Dead",
    eDate:new Date(),
    city:"Oakland",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
},
{
    eId:4,
    eName:"Road to Redemtion",
    eDate:new Date(),
    city:"Las Angles",
    state:"California",
    eBandList:[],
    sourceImage: "https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg"
}]
