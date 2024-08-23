import {ValueObject} from "../../../shared/ValueObject";

export interface ReservationDateProps {
    from: Date;
    to: Date;
}

export class ReservationDate extends ValueObject<ReservationDateProps> {
    private constructor(props: ReservationDateProps) {
        super(props);
    }

    public create(from: Date, to: Date) {
        return new ReservationDate({from, to})
    }

    get from() {
        return this.props.from;
    }

    get to() {
        return this.props.to;
    }
}