import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';
import { ENVIRONMENT_VARIABLES } from '../constants';

export const encryptData = (data: unknown): string => {
  if (!data) return data as string;

  let publicData;
  if (typeof data === 'object') {
    publicData = JSON.stringify(data);
  } else if (typeof data === 'number') {
    publicData = data.toString();
  } else {
    publicData = data as string;
  }

  const keyUint8 = naclUtil.decodeBase64(ENVIRONMENT_VARIABLES.SECRET_KEY);
  const encrypted = nacl.secretbox(naclUtil.decodeUTF8(publicData), new Uint8Array(24), keyUint8);
  return naclUtil.encodeBase64(encrypted);
};

export const decryptData = (encryptedData: string) => {
  const keyUint8 = naclUtil.decodeBase64(ENVIRONMENT_VARIABLES.SECRET_KEY);
  const decrypted = nacl.secretbox.open(naclUtil.decodeBase64(encryptedData), new Uint8Array(24), keyUint8);
  if (decrypted === null) {
    throw new Error('Decryption failed');
  }
  return naclUtil.encodeUTF8(decrypted);
};