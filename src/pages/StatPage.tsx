import { useTranslation } from 'react-i18next'

export default function StatPage() {
    const { t } = useTranslation();

    return (
        <div className="w-full mx-auto grid grid-cols-3 items-center gap-x-4">
            <div className="col-start-2 text-center space-y-2">
                {t("welcome", { returnObjects: true }).map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>

            <div className="col-start-3 flex justify-start">
                <img
                    src="/imgs/thumbs-up-green.png"
                    alt="👍"
                    className="h-100 w-auto"
                />
            </div>
        </div>
    )
}