export function Header() {
    return (
        <header className="bg-gray-900 text-white py-16 shadow-lg font-hachimaru">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold tracking-tight hover:text-blue-400 transition duration-300">
                    ぼくのぽーとふぉりお
                </h1>
                <nav className="space-x-6">
                    <a href="#about" className="text-xl font-medium hover:text-blue-400 transition duration-300">あばうと</a>
                    <a href="#projects" className="text-xl font-medium hover:text-blue-400 transition duration-300">わーくす</a>
                </nav>
            </div>
        </header>
    )
}