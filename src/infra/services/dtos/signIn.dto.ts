class SignInDTO {
  name!: string;
  password!: string;

  static toSignIn(code: string, password: string): SignInDTO {
    return {
      name: code,
      password
    }
  }
}

export default SignInDTO;