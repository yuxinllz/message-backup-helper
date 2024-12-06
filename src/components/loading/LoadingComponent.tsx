import React, { useEffect, useState } from 'react';
import './LoadingComponent'

interface LoadingComponentProps {
  loading: boolean | null | any; 
  wait?: number | null; 
  color?: string; 
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'; 
  dotColor?: string; 
  children?: React.ReactNode; 
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  loading = true,
  wait = null,
  color = 'inherit',
  position = 'relative',
  children = [],
}) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (wait && wait > 0) {
      timer = setTimeout(() => setHidden(false), wait);
    } else {
      setHidden(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [wait]);

  const isLoaded = !hidden && (
    Array.isArray(loading)
      ? loading.every((x) => x != null)
      : loading != null && loading !== false
  );

  return isLoaded ? (
    <>{children}</>
  ) : (
    <div
      className="loader"
      style={{
        color: color,
        position: position,
      }}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
