import { useEffect, useState } from 'react';
import * as api from '../util/api';

export default function useUpdateCount({ result, type }) {
  const [count, setCount] = useState(null);
  const match = type === 'designer' ? 'designerCount' : 'devCount';

  const loadCount = async () => {
    try {
      return await api.loadData(match);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const updateCount = () => {
      loadCount().then((response) => {
        setCount(response);
        return api.updateData(`/${match}/${result}`, response[result] + 1);
      });
    };
    if (result) {
      updateCount();
    }
  }, []);

  return [count];
}
