import { useLocation, useNavigate } from 'react-router-dom';
import HeaderSeparator from './HeaderSeparator';
import TabButtonWrapper from './TabButtonWrapper';
import TabButton from './TabButton';
import SettingsButton from './SettingsButton';
const tabs = [
    { title: "STAT", path: "/stat" },
    { title: "INV", path: "/inv" },
    { title: "DATA", path: "/data" },
    { title: "MAP", path: "/map" },
    { title: "RADIO", path: "/radio" },
];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="h-15 flex justify-around items-end">
            <SettingsButton />
            <HeaderSeparator />
            {tabs.map(tab => {
                const isActive = location.pathname == tab.path;
                return (
                    <TabButtonWrapper
                        key={tab.title}
                        button={
                            <TabButton
                                title={tab.title}
                                navigateTo={() => navigate(tab.path)}
                            />
                        }
                        isActive={isActive}
                    />
                );
            }).flatMap((tabButton, i, arr) =>
                i < arr.length - 1
                    ? [tabButton, <HeaderSeparator key={`sep-${i}`} />]
                    : [tabButton, <HeaderSeparator key={`sep-last`} />]
            )}
        </div>
    );
}
