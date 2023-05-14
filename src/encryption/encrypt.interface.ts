export interface Encrypt {
  hash(password: string): string;
  compare(password: string, encryptedPassword: string): boolean;
}
