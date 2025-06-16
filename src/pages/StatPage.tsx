import { useTranslation } from 'react-i18next'

export default function StatPage() {
    const { t } = useTranslation();

    return(
        <div className='w-full flex justify-center items-center '>
            <div>
                {t('welcome')}
            </div>
            <img src='../../public/imgs/thumbs-up-green.png' className='h-100' />
        </div>
    )
}