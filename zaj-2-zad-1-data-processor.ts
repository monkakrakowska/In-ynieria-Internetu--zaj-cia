export class DataProcessor<T> {
    private data: T[] = [];

    /**
     * Pozwala na dodawanie elementu do tablicy
     * @param item {T} Obiekt do dodania
     * @returns {void} Funkcja nic nie zwraca
     */

    addData(item: T): void {
        this.data.push(item);
    }

    processData(callback: (dataItem: T) => void) {
        this.data.forEach(callback);
    }

    filterData(callback: (dataItem: T) => boolean): T[] {
        return this.data.filter(callback);
    }
}