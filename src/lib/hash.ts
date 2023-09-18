import { randomBytes, pbkdf2Sync } from "crypto";

export const hash = async (data: string | Buffer) => {
  const salt = randomBytes(32).toString("hex");
  const hash = pbkdf2Sync(data, salt, 1000, 64, "sha512").toString("hex");
  return { salt, hash };
};

export const compare = async (
  data: string | Buffer,
  salt: string,
  hash: string
) => {
  const candidateHash = pbkdf2Sync(data, salt, 1000, 64, "sha512").toString(
    "hex"
  );
  return hash === candidateHash;
};
