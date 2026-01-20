import { useEffect } from 'react';

export const useKeyboardNav = (next, prev) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                next();
            }
            if (e.key === 'ArrowLeft') {
                prev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [next, prev]);
};
