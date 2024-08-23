import {Entity} from "./Entity";
import {DomainEvent} from "./DomainEvent";
import {DomainEvents} from "./DomainEvents";
import {UniqueEntityID} from "./UniqueEntityID";

export abstract class AggregateRoot<T> extends Entity<T> {
    public readonly domainEvents: DomainEvent[] = [];

    protected addDomainEvent(domainEvent: DomainEvent): void {
        this.domainEvents.push(domainEvent);
        DomainEvents.markAggregateForDispatch(this);
        this.logDomainEventAdded(domainEvent);
    }

    public clearEvents(): void {
        this.domainEvents.splice(0, this.domainEvents.length);
    }

    private logDomainEventAdded(domainEvent: DomainEvent): void {
        const thisClass = Reflect.getPrototypeOf(this);
        const domainEventClass = Reflect.getPrototypeOf(domainEvent);
        console.info(`[Domain Event Created]:`, thisClass.constructor.name, '==>', domainEventClass.constructor.name)
    }
}