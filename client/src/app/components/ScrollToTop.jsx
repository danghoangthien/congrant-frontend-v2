import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

const ScrollToTop = props => {
  const { url, ...rest } = useRouteMatch();
  // console.log('useRouteMatch url', url);
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
