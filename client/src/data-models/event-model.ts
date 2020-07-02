import { Band } from "./band";

export class ConcertEventModel {
    eId:number;
    eName:string;
    eDate:Date;
    city:string;
    state:string;
    eBandList:string;
    description:string;
    sourceImage:string;


    static from(obj: ConcertEventModelRow)
    {
        const concertEvent = new ConcertEventModel(obj.e_id, obj.e_name, obj.e_date, obj.city, obj.state, obj.e_band_list, obj.source_image, obj.description);
        return concertEvent;
    }

    constructor(eId:number, eName:string, eDate:Date, city:string, state:string, eBandList:string, sourceImage:string,description:string)
    {
        this.eId = eId;
        this.eName = eName;
        this.eDate = eDate;
        this.city = city;
        this.state = state;
        this.eBandList = eBandList;
        this.sourceImage = sourceImage;
        this.description = description;
    }
}

export interface ConcertEventModelRow{
    e_id:number;
    e_name:string;
    e_date:Date;
    city:string;
    state:string;
    e_band_list:string;
    source_image:string;
    description:string;
}
