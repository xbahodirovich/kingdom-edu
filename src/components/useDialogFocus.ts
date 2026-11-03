import { useEffect, type RefObject } from 'react';
export function useDialogFocus(ref: RefObject<HTMLDivElement | null>, open: boolean, close?: () => void) {
  useEffect(() => {
    if (!open || !ref.current) return;
    const previous = document.activeElement as HTMLElement | null;
    const root = ref.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => [...root.querySelectorAll<HTMLElement>('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),[tabindex="0"]')].filter(el => el.getClientRects().length);
    focusables()[0]?.focus();
    const keyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close?.(); }
      if (e.key === 'Tab') {
        const nodes = focusables(); const first = nodes[0]; const last = nodes[nodes.length - 1];
        if (!nodes.length) { e.preventDefault(); return; }
        if (e.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || !root.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', keyboard);
    return () => { document.removeEventListener('keydown', keyboard); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, [open, ref, close]);
}
