import forge from 'node-forge';

export const encryptPassword = async (password: string): Promise<string> => {
  const pem = process.env.NEXT_PUBLIC_KEY_PEM;
  if (!pem) throw new Error('Variável PEM não encontrada');

  const publicKey = forge.pki.publicKeyFromPem(pem);

  const encryptedBytes = publicKey.encrypt(password, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return forge.util.encode64(encryptedBytes);
};