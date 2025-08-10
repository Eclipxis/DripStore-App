import Session, { ProfileType } from "@/entities/session";

class SessionDTO {
  id!: string;
  name!: string;
  profileType!: ProfileType;
  token!: string;
  refreshToken!: string;

  static toSession(dto: SessionDTO): Session {
    const session = new Session();

    session.id = dto.id;
    session.name = dto.name;
    session.profileType = dto.profileType;
    session.token = dto.token;
    session.refreshToken = dto.refreshToken;

    return session;
  }
}

export default SessionDTO;