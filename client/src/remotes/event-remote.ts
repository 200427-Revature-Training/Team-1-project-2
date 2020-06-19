import { ConcertEventModel } from '../data-models/event-model';
import { internalAxios } from './internal-axios';
import { User } from '../data-models/user-model';


export const getAllReim = async () => {

    const response = await internalAxios.get<ConcertEventModel[]>('/events');
    return event1;
   
   // return response.data;
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
    userId: 0,
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
    eBandList:[]
},
{
    eId:1,
    eName:"Road to Redemtion",
    eDate:new Date(),
    city:"San Diego",
    state:"California",
    eBandList:[]
},
{
    eId:1,
    eName:"Night Of the Living",
    eDate:new Date(),
    city:"Fresno",
    state:"California",
    eBandList:[]
},
{
    eId:1,
    eName:"Day Of The Dead",
    eDate:new Date(),
    city:"Oakland",
    state:"California",
    eBandList:[]
},
{
    eId:1,
    eName:"Road to Redemtion",
    eDate:new Date(),
    city:"Las Angles",
    state:"California",
    eBandList:[]
}]
