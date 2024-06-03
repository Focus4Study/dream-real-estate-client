

const DetailsPage = () => {
    return (
        <div className="relative space-y-10">
            <img src="https://i.ibb.co/J7rrQ8r/2151004063.jpg" alt="" />
            <div className="space-y-10">
                <h1 className="text-7xl font-bold mb-20">Property Title</h1>
                <p>DETAILED DESCRIPTION   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, cumque dolor! Reiciendis voluptatibus, sapiente iure alias praesentium aut doloribus repellat sint voluptatem? Odio nostrum, cupiditate soluta quidem saepe porro sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatibus aliquid ullam voluptas commodi ratione ipsam autem delectus ut quibusdam? Adipisci, velit illum atque in dolore expedita ullam pariatur autem?
                    Architecto voluptatum fuga cum asperiores odio consequuntur est quis, illum qui nesciunt necessitatibus ullam, quos culpa aspernatur officiis natus placeat iste, error vel beatae ipsam! Facere officiis sint quasi debitis! Aliquam ex nihil, maiores cupiditate repellat tempore, praesentium nulla iure assumenda mollitia provident adipisci natus tempora quidem, velit totam asperiores eligendi rem voluptates earum? Veritatis, placeat animi. Distinctio, nobis tenetur.</p>
                <button className="btn btn-ghost block">Add To Wish list</button>
            </div>
            <div className="absolute top-[500px] right-10 w-fit space-y-5 text-center border p-8 rounded-lg  bg-slate-50">
                <div className="flex items-center gap-3 justify-center">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-20 rounded dark:bg-gray-500" />
                    <h3 className="text-2xl">Agent</h3>
                </div>
                <div className="divider"></div>
                <h4 className="text-2xl font-semibold">Property Location</h4>
                <h2 className="text-2xl font-bold">Price range</h2>
                <button className="btn btn-ghost text-2xl font-bold">Add a review</button>
            </div>
        </div>
    );
};

export default DetailsPage;