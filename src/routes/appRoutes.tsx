import { Navigate, Route, Routes } from "react-router-dom"
import PipboyLayout from '@/layout/PipboyLayout'
import StatPage from '@/pages/StatPage'
import InvPage from '@/pages/InvPage'
import DataPage from '@/pages/DataPage'
import StatusView from '@/pages/stat/StatusView';
import DummySubPage from '@/components/DummySubPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PipboyLayout />}>
                <Route index element={<Navigate to="/stat/status" replace />} />

                {/* STAT Section */}
                <Route path='stat' element={<StatPage />}>
                    <Route index element={<Navigate to="status" replace />} />
                    <Route path="status" element={<StatusView />} />
                    <Route path="special" element={<DummySubPage title="S.P.E.C.I.A.L" />} />
                    <Route path="perks" element={<DummySubPage title="Habilidades" />} />
                    {/* Add other sub-tabs as needed */}
                </Route>

                <Route path='inv' element={<InvPage />} />

                {/* DATA Section */}
                <Route path='data' element={<DataPage />}>
                    <Route index element={<Navigate to="map" replace />} />
                    <Route path="map" element={<DummySubPage title="Mapamundi" />} />
                    <Route path="radio" element={<DummySubPage title="Radio" />} />
                </Route>

                <Route path='map' element={<Navigate to="/data/map" replace />} />
                <Route path='radio' element={<Navigate to="/data/radio" replace />} />
            </Route>
        </Routes>
    )
}
