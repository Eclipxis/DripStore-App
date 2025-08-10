class RefreshTokenDTO {
  accessToken!: string;
  refreshToken!: string;

  static toRefreshToken(accessToken: string, refreshToken: string): RefreshTokenDTO {
    return {
      accessToken,
      refreshToken
    }
  }
}

export default RefreshTokenDTO;