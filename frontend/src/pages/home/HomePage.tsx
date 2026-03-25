import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import HomeCountdownSection from "./components/HomeCountdownSection";
import SponsorOverviewSection from "./components/SponsorOverviewSection";
import SponsorDetailSection from "./components/SponsorDetailSection";
import MilestonesSection from "./components/MilestonesSection";
import "./HomePage.css";

const VenueMapSection = lazy(() => import("./components/VenueMapSection"));
const MAP_MODEL_CANDIDATES = [
    `${import.meta.env.BASE_URL}Map.glb`,
    `${import.meta.env.BASE_URL}Map`,
    "https://media.githubusercontent.com/media/PenguAKAuseless/public-web-JF/main/frontend/public/Map.glb",
];

const HomePage = () => {
    const [shouldRenderMap, setShouldRenderMap] = useState(false);
    const [mapModelUrl, setMapModelUrl] = useState(MAP_MODEL_CANDIDATES[0]);
    const [isMapModelResolved, setIsMapModelResolved] = useState(false);
    const mapTriggerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let cancelled = false;

        const resolveMapUrl = async () => {
            for (const candidate of MAP_MODEL_CANDIDATES) {
                try {
                    const response = await fetch(candidate, { method: "HEAD" });
                    if (!cancelled && (response.ok || response.status === 405)) {
                        setMapModelUrl(candidate);
                        setIsMapModelResolved(true);
                        return;
                    }
                } catch {
                    // Try next candidate URL.
                }
            }

            if (!cancelled) {
                setIsMapModelResolved(true);
            }
        };

        void resolveMapUrl();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (shouldRenderMap || !mapTriggerRef.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRenderMap(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "260px 0px" },
        );

        observer.observe(mapTriggerRef.current);

        return () => observer.disconnect();
    }, [shouldRenderMap]);

    return (
        <div className="home-page">
            <Navbar />
            <main className="home-page__main">
                <HomeCountdownSection />
                <SponsorOverviewSection />
                <SponsorDetailSection />
                <MilestonesSection />
                {shouldRenderMap ? (
                    <Suspense
                        fallback={
                            <section id="venue-map" className="home-page__map-placeholder">
                                <div className="home-page__map-placeholder-inner">
                                    <h2>Bản đồ 3D khu vực sự kiện</h2>
                                    <p>Đang tải bản đồ 3D...</p>
                                </div>
                            </section>
                        }
                    >
                        {isMapModelResolved ? (
                            <VenueMapSection modelUrl={mapModelUrl} />
                        ) : (
                            <section id="venue-map" className="home-page__map-placeholder">
                                <div className="home-page__map-placeholder-inner">
                                    <h2>Bản đồ 3D khu vực sự kiện</h2>
                                    <p>Đang kiểm tra nguồn mô hình 3D...</p>
                                </div>
                            </section>
                        )}
                    </Suspense>
                ) : (
                    <section id="venue-map" className="home-page__map-placeholder" ref={mapTriggerRef}>
                        <div className="home-page__map-placeholder-inner">
                            <h2>Bản đồ 3D khu vực sự kiện</h2>
                            <p>Bản đồ sẽ tải khi bạn cuộn gần đến phần này để tối ưu hiệu năng trang.</p>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
