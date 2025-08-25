import Session from "@/entities/session";
import SessionUtils from "@/utils/session";

class BaseService {
  get headers () {
    const session = this.getSession();

    if (!session?.token)
      throw new Error('Token de acesso não encontrado!');

    return { Authorization: `Bearer ${session.token}` }
  }

  private getSession(): Session | null {
    return SessionUtils.getSession();
  }
}

export default BaseService;