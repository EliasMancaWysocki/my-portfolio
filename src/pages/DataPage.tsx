import { useTranslation } from 'react-i18next';

export default function DataPage() {

    const { t } = useTranslation();

    return (
        <div className='w-1/2 p-5'>
            
            <div className='flex'>
                <div className='w-[10ch]'>{t("name")} </div>
                <div>Elías Lautaro Manca Wysocki</div>
            </div>

            <div className='flex'>
                <div className='w-[10ch]'>{t("phone")} </div>
                <a 
                    href="https://wa.me/+543513976336" 
                    target="_blank"
                    className='hover:underline'
                >+54 351 3976336</a>
            </div>

            <div className='flex'>
                <div className='w-[10ch]'>{t("email")} </div>
                <a
                    href="mailto:eliasmanca20@gmail.com"
                    target='_blank'
                    className='hover:underline'
                >eliasmanca20@gmail.com</a>
            </div>
            
            <div className='flex'>
                <div className='w-[10ch]'>{t("github")} </div>
                <a
                    href='https://github.com/EliasMancaWysocki'
                    target='_blank'
                    className='hover:underline'
                >github.com/EliasMancaWysocki</a>
            </div>

        </div>
    )
}