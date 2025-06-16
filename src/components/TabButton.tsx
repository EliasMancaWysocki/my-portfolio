import { Button } from './ui/button';

type TabButtonProps = {
    title: string,
    navigateTo: () => void
};

export default function TabButton({ title, navigateTo }: TabButtonProps) {
    return (
        <Button
            variant="tab"
            onClick={navigateTo}
        >
            {title}
        </Button>
    )
}