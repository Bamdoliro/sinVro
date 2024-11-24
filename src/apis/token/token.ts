import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';

const authorization = async () => {
  const token = await Storage.getItem(TOKEN.ACCESS);

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default authorization;
