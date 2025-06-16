import { Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function SettingsButton() {
    return (
        <div className='flex h-full mt-1 justify-center items-top border-b-2 border-pipboy-light'>
            <Popover>
                <PopoverTrigger asChild>
                <Button variant={"pipboy_dark"}>
                    <Settings />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='ml-1'>
                Prueba
            </PopoverContent>
            </Popover>
        </div>
    )
}