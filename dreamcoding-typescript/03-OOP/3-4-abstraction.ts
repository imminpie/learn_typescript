{
  /**
   * 추상화 몸소 느껴보기
   */
  type CoffeeCup = {
    shots: number; // 사용된 에스프레소 샷의 개수
    hasMilk: boolean; // 우유 포함 여부
  };

  // CoffeeMaker 인터페이스 정의
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // CommercialCoffeeMaker 인터페이스 정의
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // CoffeeMaker 클래스 정의
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // 커피 원두를 보충하는 메서드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`😢 value for beans should be greater than 0`);
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log(`cleaning the machine...🧽`);
    }

    // 원두 갈기
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      // 충분한 원두가 없을 경우 에러 발생
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }
      // 사용된 원두 양만큼 보유한 원두 양 감소
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    // 커피 머신 예열
    private preheat(): void {
      console.log(`heating up...🔥`);
    }

    // 커피 추출
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕`);
      // 만들어진 커피컵 반환
      return {
        shots: shots, // 사용된 에스프레소 샷의 개수
        hasMilk: false, // 우유는 포함되지 않음
      };
    }

    // CoffeeMaker 인터페이스에서 정의한 makeCoffee 메서드 구현
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 생성자가 private 으로 선언되었기 때문에 외부에서 인스턴스를 직접 생성할 수 없다.
  // const maker = new CoffeeMaker(32);

  // CoffeeMaker 클래스의 인스턴스 생성 (커피 원두 초기값: 32)
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // 커피 원두를 추가로 보충하는 메서드 호출
  maker.fillCoffeeBeans(32);
  // makeCoffee 메서드를 호출하여 커피 생성
  maker.makeCoffee(2);

  // CoffeeMaker 인터페이스를 통해 CoffeeMachine 클래스의 인스턴스 생성
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.makeCoffee(2);
  // maker2.fillCoffeeBeans(32); 💩

  // CommercialCoffeeMaker 인터페이스를 통해 CoffeeMachine 클래스의 인스턴스 생성
  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  // 예제
  // AmateurUser 클래스 정의
  class AmateurUser {
    // 클래스 내에서 machine 변수를 사용하여
    // CoffeeMaker 인스턴스에 정의된 함수를 호출할 수 있다.
    private machine: CoffeeMaker;

    constructor(machine: CoffeeMaker) {
      this.machine = machine;
    }

    makeAmateurUserCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  // ProBarista 클래스 정의
  class ProBarista {
    // 클래스 내에서 machine 변수를 사용하여
    // CommercialCoffeeMaker 인스턴스에 정의된 함수를 호출할 수 있다.
    constructor(private machine: CommercialCoffeeMaker) {}
    makeProBaristaCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  // CoffeeMachine 클래스의 인스턴스 생성
  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);

  // AmateurUser 클래스의 인스턴스 생성 및 makeAmateurUserCoffee 메서드 호출
  const amateur = new AmateurUser(maker4);
  amateur.makeAmateurUserCoffee();

  // ProBarista 클래스의 인스턴스 생성 및 makeProBaristaCoffee 메서드 호출
  const pro = new ProBarista(maker4);
  pro.makeProBaristaCoffee();
}
