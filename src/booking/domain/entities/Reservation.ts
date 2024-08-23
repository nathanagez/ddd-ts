import {AggregateRoot} from "../../../shared/AggregateRoot";
import {ReservationName} from "../valueObjects/ReservationName";
import {Room} from "./Room";
import {ReservationDate} from "../valueObjects/ReservationDate";
import {UniqueEntityID} from "../../../shared/UniqueEntityID";
import {ReservationCreated} from "../events/ReservationCreated";

export interface ReservationProps {
    name: ReservationName;
    room: Room;
    reservationDate: ReservationDate;
}

export class Reservation extends AggregateRoot<ReservationProps> {
    private constructor(props: ReservationProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: ReservationProps, id?: UniqueEntityID) {
        const reservation = new Reservation(props)
        const isNewlyCreated = !!id === false;

        if (isNewlyCreated) {
            reservation.addDomainEvent(new ReservationCreated(reservation.id))
        }

        return reservation;
    }
}