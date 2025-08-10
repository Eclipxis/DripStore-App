const pemToCryptoKey = (): Promise<CryptoKey> => {
  const pem = process.env.NEXT_PUBLIC_KEY_PEM;

  if (!pem)
    throw new Error('Variável PEM não encontrada');

  const pemContents = pem
    .replace("-----BEGIN PUBLIC KEY-----", "")
    .replace("-----END PUBLIC KEY-----", "")
    .replace(/\s+/g, "");

  const binaryDerString = atob(pemContents);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }

  return window.crypto.subtle.importKey(
    "spki",
    binaryDer.buffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
}

export const encryptPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const cryptoKey = await pemToCryptoKey();

  const encrypted = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    data
  );

  return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}