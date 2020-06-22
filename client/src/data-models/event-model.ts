import { Band } from "./band";

export class ConcertEventModel {
    eId:number;
    eName:string;
    eDate:Date;
    city:string;
    state:string;
    eBandList:Band[];
    sourceImage:string;


    static from(obj: ConcertEventModelRow)
    {
        const concertEvent = new ConcertEventModel(obj.e_id, obj.e_name, obj.e_date, obj.city, obj.state, obj.e_band_list, obj.source_image);
        return concertEvent;
    }

    constructor(eId:number, eName:string, eDate:Date, city:string, state:string, eBandList:Band[], sourceImage:string)
    {
        this.eId = eId;
        this.eName = eName;
        this.eDate = eDate;
        this.city = city;
        this.state = state;
        this.eBandList = eBandList;
        this.sourceImage = sourceImage;
    }
}

export interface ConcertEventModelRow{
    e_id:number;
    e_name:string;
    e_date:Date;
    city:string;
    state:string;
    e_band_list:Band[];
    source_image:string;
}
