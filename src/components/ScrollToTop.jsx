import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClick = (event) => {
      const currentPath = window.location.pathname;
      const linkPath = event.target.getAttribute('href');

      if (currentPath === linkPath) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('li.small-text a');

    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Удаляем обработчики событий при размонтировании компонента
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
