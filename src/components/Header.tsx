import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function Header() {
    return (
        <div className='h-10 mt-5 flex border-b-4 border-pipboy-light'>
            <Tabs defaultValue="account" className='w-full'>
                <TabsList className='justify-around gap-20 mx-20 w-full'>
                    <TabsTrigger value="home">STAT</TabsTrigger>
                    <TabsTrigger value="work">INV</TabsTrigger>
                    <TabsTrigger value="bio">DATA</TabsTrigger>
                    <TabsTrigger value="map">MAP</TabsTrigger>
                    <TabsTrigger value="radio">RADIO</TabsTrigger>
                </TabsList>

                <TabsContent value="home">Make changes to your account here.</TabsContent>
                <TabsContent value="work">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}