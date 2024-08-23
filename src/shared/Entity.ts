import {UniqueEntityID} from './UniqueEntityID';

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

export abstract class Entity<T> {
    protected readonly id: UniqueEntityID;
    protected readonly props: T;

    protected constructor(props: T, id?: UniqueEntityID) {
        this.id = id ? id : new UniqueEntityID();
        this.props = props;
    }

    public equals(object?: Entity<T>): boolean {
        if (object == null)
            return false;

        if (this === object)
            return true;


        if (!isEntity(object))
            return false;

        return this.id.equals(object.id);
    }
}