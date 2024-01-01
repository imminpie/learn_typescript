/**
 * Enum 💩
 * Enum 의 상수는 자동으로 인덱스 번호를 가진다.
 */

enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter,
}

const season: Seasons = Seasons.Summer;
console.log(season); // 1
console.log(Seasons[season]); // Summer

enum Days {
  Monday = 'Mon',
  Tuesday = 'Tue',
  Wednesday = 'Wed',
  Thursday = 'Thu',
  Friday = 'Fri',
  Saturday = 'Sat',
  Sunday = 'Sun',
}

const day: Days = Days.Monday;
console.log(day); // Mon
