import {EventQueue} from "./EventQueue";

export class EventManager<T> {
    private eventQueue: EventQueue<T>;

    constructor() {
        this.eventQueue = new EventQueue<T>();
    }

    public pushEvent(event: MyEvent<T>): void {
        this.eventQueue.enqueue(event);
    }

    public processEvents(callback: (event: MyEvent<T>) => void): void {
        this.eventQueue.process(callback);
    }

    public clearEvents(): void {
        this.eventQueue.clear();
    }

    public hasEvents(): boolean {
        return this.eventQueue.isEmpty();
    }

    public eventCount(): number {
        return this.eventQueue.size();
    }
}