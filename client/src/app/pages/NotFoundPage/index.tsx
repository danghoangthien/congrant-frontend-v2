import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Wrapper, PageNotFoundLayout } from './NotFoundPage.style';
import NotFoundIcon from './assets/not_found_icon.svg';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  const renderPageTitle = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <title>{t(translations.pageNotFound.title)}</title>
          <meta name="description" content={t(translations.pageNotFound.content)} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <Wrapper>
        <PageNotFoundLayout>
          <img alt="not found" src={NotFoundIcon} className="notFound-img-1" />
          <div className="notFound-div-1">{t(translations.pageNotFound['page-not-found'])}</div>
          <div className="notFound-div-2">{t(translations.pageNotFound.intro)}</div>
          <Link to={process.env.PUBLIC_URL + '/'} className="notFound-div-3">
            {t(translations.pageNotFound['go-to-home-page'])}
          </Link>
        </PageNotFoundLayout>
      </Wrapper>
    </>
  );
};
