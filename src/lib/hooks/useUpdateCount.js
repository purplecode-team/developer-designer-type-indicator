import { useEffect, useState } from 'react';

export default function useUpdateCount({ result, type, load, update }) {
  const [count, setCount] = useState(null);
  const match = type === 'designer' ? 'designerCount' : 'devCount';

  const loadCount = async () => {
    try {
      return await load(match);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const updateCount = () => {
      loadCount().then((response) => {
        setCount(response);
        return update(`/${match}/${result}`, response[result] + 1);
      });
    };
    if (result) {
      updateCount();
    }
  }, []);

  return [count];
}
