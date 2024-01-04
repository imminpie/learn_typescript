{
  /**
   * 강력한 Interface
   * 클래스 대신 Interface 를 통해서 의사소통을 한다.
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

  // 우유 거품기 인터페이스
  interface MilkFrother {
    // 주어진 커피컵에 대해 우유 거품을 만드는 메서드 정의
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  // 설탕 제조기 인터페이스
  interface SugarProvider {
    // 주어진 커피컵에 설탕을 추가하는 메서드 정의
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
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

  class ColdMilkSteamer implements MilkFrother {
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

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  class SugarMixer implements SugarProvider {
    // 설탕을 가져오기
    private getSugar(): boolean {
      console.log(`Getting some sugar from jar`);
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
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
    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkFrother = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // Machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkFrother, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
