import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';

const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
    },
  };
};

export default authorization;
