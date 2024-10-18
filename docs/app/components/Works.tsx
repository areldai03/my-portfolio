export const Works = () => {
    const works = [
        {
            title: "work1",
            description: "wip",
            image: "images/dogar.png"
        },
        {
            title: "work2",
            description: "wip",
            image: "images/halldog.png"
        },
        {
            title: "work3",
            description: "wip",
            image: "images/dogma.png"
        },
        {
            title: "work4",
            description: "wip",
            image: "images/dogtensi1.png"
        },
        {
            title: "work5",
            description: "wip",
            image: "images/punk1dog.png"
        },
        {
            title: "work6",
            description: "wip",
            image: "images/doradog.png"
        },
    ];

    return (
        <div id="works" className="p-4 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">わーくす</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img 
                            src={work.image} 
                            alt={work.title} 
                            className="w-full object-contain object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                            <p className="text-gray-700">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
