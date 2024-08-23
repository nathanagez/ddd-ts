import {ValueObject} from "../../../shared/ValueObject";

export interface RoomNumberProps {
    value: number;
}

export class RoomNumber extends ValueObject<RoomNumberProps> {
    private constructor(props: RoomNumberProps) {
        super(props);
    }

    get value() {
        return this.props.value;
    }

    public static create(name: number) {
        return new RoomNumber({value: name})
    }
}