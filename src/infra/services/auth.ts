import { injectable, inject } from "inversify";
import { IAuthService } from "./contracts/auth";
import Session from "@/entities/session";
import { IHttpClient } from "../http/contracts/http-client";
import BaseService from "./base";
import SignInDTO from "./dtos/signIn.dto";
import SessionDTO from "./dtos/session.dto";
import RefreshTokenDTO from "./dtos/refreshToken.dto";

@injectable()
class AuthService extends BaseService implements IAuthService {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_API_URI!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {
    super()
  }

  async signIn (code: string, password: string): Promise<Session> {
    const dto = await this.httpClient.post({
      url: `${this.BASE_URL}/auth/sign-in`,
      data: SignInDTO.toSignIn(code, password)
    });
    return SessionDTO.toSession(dto);
  }

  async refreshToken (accessToken: string, refreshToken: string): Promise<Session> {
    const dto = await this.httpClient.post({
      url: `${this.BASE_URL}/auth/refresh-token`,
      data: RefreshTokenDTO.toRefreshToken(accessToken, refreshToken)
    })
    return SessionDTO.toSession(dto);
  }
}

export default AuthService;