{
  /**
   * Enum 💩
   * Enum 대신 Union Types 사용을 권장한다.
   */

  // 예제1
  enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter,
  }

  const season: Seasons = Seasons.Summer;
  console.log(season); // 1
  console.log(Seasons[season]); // Summer

  // 예제2
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
}
