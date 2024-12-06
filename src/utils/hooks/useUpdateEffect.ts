import { useEffect, useRef, DependencyList } from 'react';

const useUpdateEffect = (effect: () => void, deps: DependencyList) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    return effect();
  }, deps);
};

export default useUpdateEffect;