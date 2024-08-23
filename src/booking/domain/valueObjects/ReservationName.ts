import {ValueObject} from "../../../shared/ValueObject";

export interface ReservationNameProps {
    value: string;
}

export class ReservationName extends ValueObject<ReservationNameProps> {
    private constructor(props: ReservationNameProps) {
        super(props);
    }

    get value() {
        return this.props.value;
    }

    public static create(name: string) {
        return new ReservationName({value: name})
    }
}