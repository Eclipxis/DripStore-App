/* eslint-disable @typescript-eslint/no-explicit-any */
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Session from "@/entities/session";

const SESSION_COOKIE = "session";

export default class SessionUtils {
  static saveSession(session: Session, ctx: any = null) {
    setCookie(ctx, SESSION_COOKIE, JSON.stringify(session), {
      maxAge: 60 * 60 * 24,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  static getSession(ctx: any = null): Session | null {
    const cookies = parseCookies(ctx);
    if (!cookies[SESSION_COOKIE]) return null;

    try {
      return JSON.parse(cookies[SESSION_COOKIE]) as Session;
    } catch {
      return null;
    }
  }

  static removeSession(ctx: any = null) {
    destroyCookie(ctx, SESSION_COOKIE, { path: "/" });
  }

  static isLogged(ctx: any = null): boolean {
    return !!this.getSession(ctx);
  }
}