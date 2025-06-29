import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function LanguageSwitch() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const isSpanish = i18n.language === "es";

    function handleToggle() {
        i18n.changeLanguage(isSpanish ? "en" : "es");
    }

    return (
        <div className="w-full mx-auto grid grid-cols-[auto_1fr] items-center gap-4 font-vt323 text-2xl">
            <div className="min-w-[8ch] text-left">
                {t("lenguage")}
            </div>

            <div className="flex items-center justify-start gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img
                            src="/imgs/Argentina_CTR-removebg.png"
                            alt="Español"
                            className="h-14 w-14 object-contain"
                        />
                    </TooltipTrigger>
                    <TooltipContent>Español</TooltipContent>
                </Tooltip>

                <Switch checked={!isSpanish} onCheckedChange={handleToggle} />

                <Tooltip>
                    <TooltipTrigger asChild>
                        <img
                            src="/imgs/EEUU_CTR-removebg.png"
                            alt="English"
                            className="h-15 w-15 object-contain"
                        />
                    </TooltipTrigger>
                    <TooltipContent>English</TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
}
