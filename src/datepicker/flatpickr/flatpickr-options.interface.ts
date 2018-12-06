export interface FlatpickrOptions {
    altFormat?: string;
    altInput?: boolean;
    altInputClass?: string;
    allowInput?: boolean;
    appendTo?: HTMLElement;
    clickOpens?: boolean;
    dateFormat?: string;
    defaultDate?: string | Date;
    disable?: Array<string | Date>;
    disableMobile?: boolean;
    enable?: Array<string | Date>;
    enableTime?: boolean;
    enableSeconds?: boolean;
    hourIncrement?: number;
    inline?: boolean;
    locale?: Object;
    maxDate?: string | Date;
    minDate?: string | Date;
    minuteIncrement?: number;
    mode?: string;
    nextArrow?: string;
    noCalendar?: boolean;
    onChange?: Function;
    onClose?: Function;
    onOpen?: Function;
    onReady?: Function;
    parseDate?: Function;
    prevArrow?: string;
    shorthandCurrentMonth?: boolean;
    static?: boolean;
    time_24hr?: boolean;
    utc?: boolean;
    weekNumbers?: boolean;
    wrap?: boolean;

    // Needed so we can acess options[key].
    [key:string]: any;
}
