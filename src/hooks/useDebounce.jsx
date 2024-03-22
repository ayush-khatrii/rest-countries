import { useEffect, useState } from "react";

export const useDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [val, delay]);

  return debounceVal;
};
