import { ConcertEventModel } from "./event-modol";
import { User } from "./user-model";
import { stringify } from "querystring";

export class Band {
    id:number;
    name:string;
    members:User[];
    events:ConcertEventModel[];

    static from(obj: BandRow)
    {
        const band = new Band(obj.id, obj.name, obj.members, obj.events)

        return band;
    }

    constructor(    id:number, name:string, members:User[], events:ConcertEventModel[])
    {
        this.id = id,
        this.name = name,
        this.members = members,
        this.events = events
    }
}

export interface BandRow {
    id:number;
    name:string;
    members:User[];
    events:ConcertEventModel[];
}