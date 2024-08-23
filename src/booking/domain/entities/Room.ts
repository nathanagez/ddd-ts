import {Entity} from "../../../shared/Entity";
import {RoomNumber} from "../valueObjects/RoomNumber";
import {UniqueEntityID} from "../../../shared/UniqueEntityID";

export interface RoomProps {
    roomNumber: RoomNumber
    booked: boolean;
}

export class Room extends Entity<RoomProps> {
    private constructor(room: RoomProps, id?: UniqueEntityID) {
        super(room, id);
    }

    public static create(room: RoomProps, id?: UniqueEntityID) {
        return new Room(room);
    }
}