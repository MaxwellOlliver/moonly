import { useEffect } from 'react';

interface Shortcut {
  readonly key: string;
  readonly alt?: boolean;
  readonly ctrl?: boolean;
  readonly shift?: boolean;
  readonly onTrigger: (e?: KeyboardEvent) => void;
}

export default function useShortcut(shortcuts: Shortcut[]): void {
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent): void {
      const triggered = shortcuts.find(
        (s) =>
          (s.key === e.key || s.key === e.code) &&
          !!s.alt === e.altKey &&
          !!s.shift === e.shiftKey &&
          !!s.ctrl === e.ctrlKey,
      );

      triggered?.onTrigger();
    }
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [shortcuts]);
}
