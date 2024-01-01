/**
 * 객체
 */
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '홍길동',
};

console.log(user.name); // 홍길동

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// config.apiKey = "hacked"; 💩
console.log(config.apiKey); // MY API KEY
