import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';

const refreshAuthorization = async () => {
  const token = await Storage.getItem(TOKEN.REFRESH);

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default refreshAuthorization;
