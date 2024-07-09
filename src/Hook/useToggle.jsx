import { useState, useCallback } from 'react';

export default function useToogle(initialState = false) {
  const [toggle, setToggle] = useState(initialState);

  const onToggle = useCallback(() => setToggle((toggle) => !toggle), []);

  return [toggle, onToggle];
}
