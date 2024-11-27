export class EventQueue<T> {
    private events: MyEvent<T>[] = [];

    public enqueue(event: MyEvent<T>): void {
        this.events.push(event);
    }

    public dequeue(): MyEvent<T> | null {
        return this.events.shift() || null;
    }

    public process(callback: (event: MyEvent<T>) => void): void {
        const event = this.dequeue();
        if (event) {
            callback(event);
        }
    }

    public clear(): void {
        this.events = [];
    }

    public isEmpty(): boolean {
        return this.events.length === 0;
    }

    public size(): number {
        return this.events.length;
    }

}