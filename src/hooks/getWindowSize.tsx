import { useLayoutEffect, useState} from 'react'

//ウィンドウの幅・高さを返す関数
const getWindowSize = (): number[] => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = (): void => {
        setSize([window.innerWidth, window.innerHeight]);
      };
  
      window.addEventListener('resize', updateSize);
      updateSize();
  
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };

export default getWindowSize