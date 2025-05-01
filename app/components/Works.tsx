export const Works = () => {
    const works = [
        {
            title: "難易度推定モデル",
            description: "語彙長、頻度、埋め込みベースの難易度推定API",
            image: "images/lcp-api.png",
            url: "https://deepwiki.com/areldai03/lcp-api",
        },
        {
            title: "コマンド生成君",
            description: "自然文からUnixコマンドを生成する、RAGローカルコマンド補助CLIツール [wip]",
            image: "images/command-genie.png",
            url: "https://github.com/areldai03/CommandGenie",
        },
        {
            title: "work3",
            description: "wip",
            image: "images/dogma.png",
            url: "#",
        },
        {
            title: "work4",
            description: "wip",
            image: "images/dogtensi1.png",
            url: "#",
        },
        {
            title: "work5",
            description: "wip",
            image: "images/punk1dog.png",
            url: "#",
        },
        {
            title: "work6",
            description: "wip",
            image: "images/doggy.png",
            url: "#",
        },
    ];

    return (
        <div id="works" className="p-4 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">わーくす</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work, index) => (
                    <a
                        key={index}
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                    </a>
                ))}
            </div>
        </div>

    );
};
