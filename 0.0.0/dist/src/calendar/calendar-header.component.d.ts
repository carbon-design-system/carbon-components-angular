export declare class CalendarHeader {
    currentView: Date;
    header: any;
    monthCount: number;
    range(stop: number, start?: number, step?: number): number[];
    nextYear(): void;
    nextMonth(): void;
    previousYear(): void;
    previousMonth(): void;
    getYear(): number;
    getMonth(position?: number): string;
}
