{
  /**
   * 절차지향적으로 커피기계 만들기
   */
  type CoffeeCup = {
    shots: number; // 사용된 에스프레소 샷의 개수
    hasMilk: boolean; // 우유 포함 여부
  };

  // 에스프레소 한 샷을 만들 때 필요한 커피 원두 양 (그램 단위)
  const BEANS_GRAM_PER_SHOT: number = 7;

  // 보유한 커피 원두 양 (초기값은 0)
  let coffeeBeans: number = 0;

  // makeCoffee 함수 정의
  function makeCoffee(shots: number): CoffeeCup {
    // 충분한 원두가 없을 경우 에러 발생
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error(`Not enough coffee beans!`);
    }
    // 사용된 원두 양만큼 보유한 원두 양 감소
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    // 만들어진 커피컵 반환
    return {
      shots: shots, // 사용된 에스프레소 샷의 개수
      hasMilk: false, // 우유는 포함되지 않음
    };
  }

  // 커피 원두 보충
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;

  // makeCoffee 함수를 사용하여 2샷의 에스프레소로 커피를 만들기
  const coffee = makeCoffee(2);
  console.log(coffee); // { shots: 2, hasMilk: false }
}
