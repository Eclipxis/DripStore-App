import { useModals } from '@/ui/context/modals/context';
import * as S from './styled'
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSignIn } from '@/ui/queries/auth';
import { encryptPassword } from '@/utils/encrypt';

const SignInModal = () => {
  const { closeAll } = useModals((state) => state);
  const [userCode, setUserCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { signIn, isSuccess, session } = useSignIn();

  const handleLogin = async () => {
    if (!userCode || !password)
      return;

    const cryptoPassword = await encryptPassword(password);

    signIn({ code: userCode, password: cryptoPassword });
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!isSuccess)
      return;

    sessionStorage.setItem('session', JSON.stringify(session))

    closeAll();
  }, [isSuccess, closeAll, session])

  return (
    <S.Overlay onClick={closeAll}>
      <S.Container onClick={(evt) => { evt.stopPropagation() }}>
        <S.ReturnButton size={25} onClick={closeAll} />

        <S.Title>Login</S.Title>

        <S.WrapperTexts>
          <S.Description>
            Apenas funcionários podem <br />
            fazer login!
          </S.Description>
        </S.WrapperTexts>

        <S.WrapperInputs>
          <S.Input
            type="text"
            placeholder="Código de Usuário"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
          <S.PasswordWrapper>
            <S.Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.TogglePasswordButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </S.TogglePasswordButton>
          </S.PasswordWrapper>
          <S.LoginButton onClick={handleLogin}>
            Entrar
          </S.LoginButton>
        </S.WrapperInputs>
      </S.Container>
    </S.Overlay>
  );
}

export default SignInModal;