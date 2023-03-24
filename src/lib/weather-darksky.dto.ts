export interface DarkSkyAPI {
    latitude:  number;
    longitude: number;
    timezone:  string;
    currently: Currently;
    hourly:    Hourly;
    daily:     Daily;
    flags:     Flags;
    offset:    number;
}

export interface Currently {
    time:                number;
    timeTxt:             string;
    summary:             string;
    icon:                string;
    newIcon:             string;
    temperature:         number;
    humidity:            number;
    windSpeed:           number;
}

export interface Daily {
    summary: string;
    icon:    string;
    newIcon: string;
    data:    Datum[];
}

export interface Datum {
    sunriseTime:                 number;
    sunsetTime:                  number;
    temperatureMin:              number;
    temperatureMax:              number;
}

export interface Flags {
    sources:           string[];
    "nearest-station": number;
    units:             string;
}

export interface Hourly {
    summary: string;
    icon:    string;
    newIcon: string;
    data:    Currently[];
}
