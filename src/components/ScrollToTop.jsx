import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const handleLinkClick = (event) => {
      const { target } = event;
      if (target.tagName === 'A' && target.getAttribute('href') === pathname) {
        handleScrollToTop();
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
