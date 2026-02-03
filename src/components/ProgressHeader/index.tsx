import CarIcon from "@/assets/icons/CarIcon";
import MapMarkerIcon from "@/assets/icons/MapMarkerIcon";

const ProgressHeader = () => {
    return (
        <div className="fixed left-0 w-full z-50" style={{ bottom: "62px" }}>
            <div className="relative flex justify-between items-center px-12 pb-[18px]">
                <div className="relative z-10">
                    <CarIcon
                        width={78}
                        height={56}
                        className="text-white md:text-white"
                    />
                </div>

                <div className="relative z-10">
                    <MapMarkerIcon width={45} height={57} className="text-primary" />
                </div>
            </div>

            <div className="relative h-1 w-full">
                <div className="absolute left-0 top-0 h-full w-full bg-primary md:hidden" />
                <div className="hidden md:block absolute left-0 top-0 h-full w-1/2 bg-white" />
                <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-primary" />
            </div>
        </div>
    );
};

export default ProgressHeader;
