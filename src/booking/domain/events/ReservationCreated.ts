import {DomainEvent} from "../../../shared/DomainEvent";
import { UniqueEntityID } from "../../../shared/UniqueEntityID";

export class ReservationCreated implements DomainEvent {
    public dateTimeOccurred: Date;
    public reservationId: UniqueEntityID;

    constructor (reservationId: UniqueEntityID) {
        this.reservationId = reservationId;
    }

    public getAggregateId (): UniqueEntityID {
        return this.reservationId;
    }
}