{
  /**
   * 캡슐화 시켜보기
   */
  type CoffeeCup = {
    shots: number; // 사용된 에스프레소 샷의 개수
    hasMilk: boolean; // 우유 포함 여부
  };

  // CoffeeMaker 클래스 정의
  class CoffeeMaker {
    // 에스프레소 한 샷을 만들 때 필요한 커피 원두 양 (그램 단위)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 보유한 커피 원두 양 (초기값은 0)
    // private 으로 선언된 생성자는 일반적으로 외부에서 클래스의 인스턴스를 직접 생성하는 것을 막고,
    // 대신 클래스 내부에서만 인스턴스를 생성할 수 있도록 한다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // CoffeeMaker 인스턴스를 생성하는 정적 메서드
    // makeMachine 메서드를 통해 CoffeeMaker 클래스의 인스턴스를 생성하도록 한다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 커피 원두를 보충하는 메서드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`😢 value for beans should be greater than 0`);
      }
      this.coffeeBeans += beans;
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

  // 생성자가 private 으로 선언되었기 때문에 외부에서 인스턴스를 직접 생성할 수 없다.
  // const maker = new CoffeeMaker(32);

  // CoffeeMaker 클래스의 인스턴스 생성 (커피 원두 초기값: 32)
  const maker = CoffeeMaker.makeMachine(32);
  // 커피 원두를 추가로 보충하는 메서드 호출
  maker.fillCoffeeBeans(32);

  ///////////////////////////////////////////////////////

  // Getter 와 Setter 를 위한 예제
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');

  // Getter
  console.log(user.fullName); // Steve Jobs

  // setter
  user.age = 8;
  // Getter
  console.log(user.age); // 8
}
