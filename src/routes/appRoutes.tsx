import { Navigate, Route, Routes } from "react-router-dom"
import PipboyLayout from '@/layout/PipboyLayout'
import StatPage from '@/pages/StatPage'
import InvPage from '@/pages/InvPage'
import DataPage from '@/pages/DataPage'
import MapPage from '@/pages/MapPage'
import RadioPage from '@/pages/RadioPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PipboyLayout />}>
                <Route index element={<Navigate to="/stat" replace />} />
                <Route path='stat' element={<StatPage />} />
                <Route path='inv' element={<InvPage />} />
                <Route path='data' element={<DataPage />} />
                <Route path='map' element={<MapPage />} />
                <Route path='radio' element={<RadioPage />} />
            </Route>
        </Routes>
    )
}
