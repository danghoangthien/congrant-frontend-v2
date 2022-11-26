import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import Draggable from 'app/components/DraggableItems';

const HomePage = () => {
  const { t } = useTranslation();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{''}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <Draggable />
    </>
  );
};

export { HomePage };

export default HomePage;
