import cryptr from "../config/cryptr.js";

const operationalUtils = {
  hashData: (data: string) => {
    return cryptr.encrypt(data);
  },

  compareData: (data: string, hash: string) => {
    return cryptr.decrypt(hash) === data;
  },

  decryptHash: (hash: string) => {
    return cryptr.decrypt(hash);
  },
};

export default operationalUtils;
