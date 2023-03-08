import { useRef, useEffect, useLayoutEffect } from "react";

export function useDynamicRefs<T>(initialVal: T[], length: number) {
  const ref = useRef<T[]>(initialVal);

  useEffect(() => {
    ref.current = ref.current.slice(0, length);
  }); 

  return ref;
}