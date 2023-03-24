export interface IconData {
  code: number;
  day: string;
  night: string;
  icon: number;
}

const iconMapped: { [k: string]: IconData } = {
  "1000": {
    code: 1000,
    day: "clear-day",
    night: "clear-night",
    icon: 113,
  },
  "1003": {
    code: 1003,
    day: "partly-cloudy-day",
    night: "partly-cloudy-night",
    icon: 116,
  },
  "1006": {
    code: 1006,
    day: "cloudy",
    night: "cloudy",
    icon: 119,
  },
  "1009": {
    code: 1009,
    day: "cloudy",
    night: "cloudy",
    icon: 122,
  },
  "1030": {
    code: 1030,
    day: "snow",
    night: "snow",
    icon: 143,
  },
  "1063": {
    code: 1063,
    day: "rain",
    night: "rain",
    icon: 176,
  },
  "1066": {
    code: 1066,
    day: "snow",
    night: "snow",
    icon: 179,
  },
  "1069": {
    code: 1069,
    day: "snow",
    night: "snow",
    icon: 182,
  },
  "1072": {
    code: 1072,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 185,
  },
  "1087": {
    code: 1087,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 200,
  },
  "1114": {
    code: 1114,
    day: "snow",
    night: "snow",
    icon: 227,
  },
  "1117": {
    code: 1117,
    day: "snow",
    night: "snow",
    icon: 230,
  },
  "1135": {
    code: 1135,
    day: "rain",
    night: "rain",
    icon: 248,
  },
  "1147": {
    code: 1147,
    day: "snow",
    night: "snow",
    icon: 260,
  },
  "1150": {
    code: 1150,
    day: "rain",
    night: "rain",
    icon: 263,
  },
  "1153": {
    code: 1153,
    day: "rain",
    night: "rain",
    icon: 266,
  },
  "1168": {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: 281,
  },
  "1171": {
    code: 1171,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 284,
  },
  "1180": {
    code: 1180,
    day: "rain",
    night: "rain",
    icon: 293,
  },
  "1183": {
    code: 1183,
    day: "rain",
    night: "rain",
    icon: 296,
  },
  "1186": {
    code: 1186,
    day: "rain",
    night: "rain",
    icon: 299,
  },
  "1189": {
    code: 1189,
    day: "rain",
    night: "rain",
    icon: 302,
  },
  "1192": {
    code: 1192,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 305,
  },
  "1195": {
    code: 1195,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 308,
  },
  "1198": {
    code: 1198,
    day: "rain",
    night: "rain",
    icon: 311,
  },
  "1201": {
    code: 1201,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 314,
  },
  "1204": {
    code: 1204,
    day: "snow",
    night: "snow",
    icon: 317,
  },
  "1207": {
    code: 1207,
    day: "snow",
    night: "snow",
    icon: 320,
  },
  "1210": {
    code: 1210,
    day: "snow",
    night: "snow",
    icon: 323,
  },
  "1213": {
    code: 1213,
    day: "snow",
    night: "snow",
    icon: 326,
  },
  "1216": {
    code: 1216,
    day: "snow",
    night: "snow",
    icon: 329,
  },
  "1219": {
    code: 1219,
    day: "snow",
    night: "snow",
    icon: 332,
  },
  "1222": {
    code: 1222,
    day: "snow",
    night: "snow",
    icon: 335,
  },
  "1225": {
    code: 1225,
    day: "snow",
    night: "snow",
    icon: 338,
  },
  "1237": {
    code: 1237,
    day: "snow",
    night: "snow",
    icon: 350,
  },
  "1240": {
    code: 1240,
    day: "rain",
    night: "rain",
    icon: 353,
  },
  "1243": {
    code: 1243,
    day: "rain",
    night: "rain",
    icon: 356,
  },
  "1246": {
    code: 1246,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 359,
  },
  "1249": {
    code: 1249,
    day: "snow",
    night: "snow",
    icon: 362,
  },
  "1252": {
    code: 1252,
    day: "snow",
    night: "snow",
    icon: 365,
  },
  "1255": {
    code: 1255,
    day: "snow",
    night: "snow",
    icon: 368,
  },
  "1258": {
    code: 1258,
    day: "snow",
    night: "snow",
    icon: 371,
  },
  "1261": {
    code: 1261,
    day: "snow",
    night: "snow",
    icon: 374,
  },
  "1264": {
    code: 1264,
    day: "Msnow",
    night: "Msnow",
    icon: 377,
  },
  "1273": {
    code: 1273,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 386,
  },
  "1276": {
    code: 1276,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 389,
  },
  "1279": {
    code: 1279,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 392,
  },
  "1282": {
    code: 1282,
    day: "thunderstorm",
    night: "thunderstorm",
    icon: 395,
  },
};

export function MappedDarkSkyIcon(
  iconCode: number,
  currentTimeUnix: number,
  sunriseTimeUnix: number,
  sunsetTimeUnix: number
): string {
    let selectedDayNight: 'day' | 'night' = 'day';
    if (currentTimeUnix < sunriseTimeUnix || currentTimeUnix > sunsetTimeUnix) {
        selectedDayNight = 'night';
    }

    let selectedIcon = iconMapped[`${iconCode}`];
    if (!selectedIcon) {
        selectedIcon = iconMapped['1000'];
    }

    return selectedIcon[selectedDayNight];
}
