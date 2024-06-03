import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";

const Banner = () => {


    return (
        <div className='mx-auto'>
            <Flicking
                viewportTag="div"
                cameraTag="div"
                cameraClass=""
                renderOnSameKey={false}
                align="center"
                onMove={(e: MoveEvent) => { }}
                onWillChange={(e: WillChangeEvent) => { }}
                horizontal={true}
                circular={true}
            >
                <div>panel 0</div>
                <div>panel 1</div>
                <div>panel 2</div>
            </Flicking>
        </div>
    );
};

export default Banner;