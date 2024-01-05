class NetworkClient {
  tryConnect(): void {
    throw new Error(`no network !!`);
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (error) {}
  }
}

const client = new NetworkClient();
const service = new UserService(client);
service.login();
