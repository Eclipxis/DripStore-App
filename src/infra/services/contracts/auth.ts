import Session from "@/entities/session";

export interface IAuthService {
  signIn: (code: string, password: string) => Promise<Session>
  refreshToken: (accessToken: string, refreshToken: string) => Promise<Session>
}