export enum ProfileType {
  ADM = 0,
  PROFESSIONAL = 10,
  CLIENT = 15
}

class Session {
  id!: string;
  name!: string;
  profileType!: ProfileType;
  token!: string;
  refreshToken!: string;
}

export default Session;