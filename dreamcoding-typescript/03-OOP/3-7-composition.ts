{
  /**
   * 상속의 문제점
   * 상속의 깊이가 깊어질수록 서로의 관계가 복잡해진다.
   * => 상속 대신 구성을 사용한다.
   */

  type CoffeeCup = {
    shots: number; // 사용된 에스프레소 샷의 개수
    hasMilk?: boolean; // 우유 포함 여부
    hasSugar?: boolean; // 설탕 포함 여부
  };

  // CoffeeMaker 인터페이스 정의
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 싸구려 우유 거품기 클래스 정의
  class CheapMilkSteamer {
    // 우유를 스팀하기
    private steamMilk(): void {
      console.log(`Steaming some milk...🥛`);
    }

    // 우유를 추가하는 메서드
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기 클래스 정의
  class CandySugarMixer {
    // 설탕을 가져오기
    private getSugar(): boolean {
      console.log(`Getting some sugar from 🍭`);
      return true;
    }

    // 설탕을 추가하는 메서드
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 커피 머신 클래스 정의
  class CoffeeMachine implements CoffeeMaker {
    // 에스프레소 한 샷을 만들 때 필요한 커피 원두 양 (그램 단위)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 보유한 커피 원두 양 (초기값은 0)
    // private 으로 선언된 생성자는 일반적으로 외부에서 클래스의 인스턴스를 직접 생성하는 것을 막고,
    // 대신 클래스 내부에서만 인스턴스를 생성할 수 있도록 한다.
    // 일단 에러 때문에 public 으로 수정함, 보통은 private 으로 설정해줌
    public constructor(coffeeBeans: number) {
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

  // CafeLatteMachine 클래스 정의
  class CafeLatteMachine extends CoffeeMachine {
    // 생성자에서 우유 거품기를 받아옴
    constructor(beans: number, private milkFrother: CheapMilkSteamer) {
      // 자바스크립트에서 클래스가 다른 클래스를 상속할 때,
      // 자식 클래스의 생성자에서 반드시 부모 클래스의 생성자를 호출해야 한다.
      super(beans);
    }

    // 부모 클래스의 makeCoffee 를 재정의하여 우유 스팀 동작을 추가함
    makeCoffee(shots: number): CoffeeCup {
      // super 키워드를 사용해서 부모 클래스의 메서드를 호출함
      const coffee = super.makeCoffee(shots);
      // 우유 스팀 동작을 수행
      return this.milkFrother.makeMilk(coffee);
    }
  }

  // SweetCoffeeMaker 클래스 정의
  class SweetCoffeeMaker extends CoffeeMachine {
    // 생성자에서 설탕 제조기를 받아옴
    constructor(beans: number, private sugar: CandySugarMixer) {
      // 자바스크립트에서 클래스가 다른 클래스를 상속할 때,
      // 자식 클래스의 생성자에서 반드시 부모 클래스의 생성자를 호출해야 한다.
      super(beans);
    }

    // 부모 클래스의 makeCoffee 메서드를 재정의하여 설탕 추가 동작을 추가함
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(2);
      // 설탕 추가 동작을 수행
      return this.sugar.addSugar(coffee);
    }
  }

  // SweetCafeLatteMachine 클래스 정의
  class SweetCafeLatteMachine extends CoffeeMachine {
    // 생성자에서 우유 거품기와 설탕 제조기를 받아옴
    constructor(
      beans: number,
      private milkFrother: CheapMilkSteamer,
      private sugar: CandySugarMixer
    ) {
      // 자바스크립트에서 클래스가 다른 클래스를 상속할 때,
      // 자식 클래스의 생성자에서 반드시 부모 클래스의 생성자를 호출해야 한다.
      super(beans);
    }

    // 부모 클래스의 makeCoffee 메서드를 재정의하여 설탕 추가 동작을 추가함
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(2);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
    }
  }
}
