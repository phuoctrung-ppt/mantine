import { useCallback, useEffect, useRef, useState } from 'react';

export function useHover<T extends HTMLElement = any>() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseleave', onMouseLeave);

      return () => {
        ref.current?.removeEventListener('mouseenter', onMouseEnter);
        ref.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return undefined;
  }, [ref.current]);

  return { ref, hovered };
}
