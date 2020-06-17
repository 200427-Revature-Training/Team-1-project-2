import { Band } from "./band";

export class ConcertEventModel {
    eId:number;
    eName:string;
    eDate:Date;
    eLocation:string;
    eBandList:Band[];


    static from(obj: ConcertEventModelRow)
    {
        const concertEvent = new ConcertEventModel(obj.e_id, obj.e_name, obj.e_date, obj.e_location, obj.e_band_list);
        return concertEvent;
    }

    constructor(eId:number, eName:string, eDate:Date, eLocation:string, eBandList:Band[])
    {
        this.eId = eId;
        this.eName = eName;
        this.eDate = eDate;
        this.eLocation = eLocation;
        this.eBandList = eBandList;
    }
}

export interface ConcertEventModelRow{
    e_id:number;
    e_name:string;
    e_date:Date;
    e_location:string;
    e_band_list:Band[];
}
