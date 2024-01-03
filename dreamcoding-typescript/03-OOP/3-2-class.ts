{
  /**
   * 객체지향적으로 커피기계 만들기
   */
  type CoffeeCup = {
    shots: number; // 사용된 에스프레소 샷의 개수
    hasMilk: boolean; // 우유 포함 여부
  };

  // CoffeeMaker 클래스 정의
  class CoffeeMaker {
    // 에스프레소 한 샷을 만들 때 필요한 커피 원두 양 (그램 단위)
    static BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    // 보유한 커피 원두 양 (초기값은 0)
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // CoffeeMaker 인스턴스를 생성하는 정적 메서드
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // makeCoffee 함수 정의
    makeCoffee(shots: number): CoffeeCup {
      // 충분한 원두가 없을 경우 에러 발생
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }
      // 사용된 원두 양만큼 보유한 원두 양 감소
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      // 만들어진 커피컵 반환
      return {
        shots: shots, // 사용된 에스프레소 샷의 개수
        hasMilk: false, // 우유는 포함되지 않음
      };
    }
  }

  // CoffeeMaker 클래스의 인스턴스 생성 (커피 원두 초기값: 32)
  const maker = new CoffeeMaker(32);

  // CoffeeMaker 클래스의 정적 메서드를 사용하여 인스턴스 생성
  CoffeeMaker.makeMachine(32);
}
