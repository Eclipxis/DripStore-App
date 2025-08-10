import Session from "@/entities/session";
import SessionUtils from "@/utils/session";

class BaseService {
  private session: Session = new Session();

  constructor () {
    const sessionObj = SessionUtils.getSession();

    if (!sessionObj)
      return;

    this.session.id = sessionObj.id;
    this.session.name = sessionObj.name;
    this.session.profileType = sessionObj.profileType;
    this.session.token = sessionObj.token;
    this.session.refreshToken = sessionObj.refreshToken;
  }

  get headers () {
    if (!this.session.token)
      throw new Error('Token de acesso não encontrado!');

    return { Authorization: `Bearer ${this.session.token}` }
  }

  protected isLogged(): boolean {
    if (!!this.session.id)
      return true;

    return false;
  }
}

export default BaseService;