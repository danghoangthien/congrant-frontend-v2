import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';


export const HomePage = (): JSX.Element => {
    const { t } = useTranslation();

    const renderPageTitle = (): JSX.Element => {
        return (
            <>
                <Helmet>
                    <title>{""}</title>
                    <meta name="description" content={"..."} />
                </Helmet>
            </>
        );
    };

    return (
        <>
            {renderPageTitle()}
            HOME PAGE
        </>
    );
};
