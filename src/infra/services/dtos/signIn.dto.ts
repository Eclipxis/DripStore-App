class SignInDTO {
  code!: string;
  password!: string;

  static toSignIn(code: string, password: string): SignInDTO {
    return {
      code,
      password
    }
  }
}

export default SignInDTO;