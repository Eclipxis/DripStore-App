import Session from "@/entities/session";

class SessionUtils {
  static getSession(): Session | null {
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return null;
    }

    const sessionString = sessionStorage.getItem('session');

    if (!sessionString)
      return null;

    const sessionObj = JSON.parse(sessionString) as Session;

    const session = new Session();

    session.id = sessionObj.id;
    session.name = sessionObj.name;
    session.profileType = sessionObj.profileType;
    session.token = sessionObj.token;
    session.refreshToken = sessionObj.refreshToken;

    return session;
  }
}

export default SessionUtils;