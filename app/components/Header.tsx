export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-[var(--border)] py-4 transition-all">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Daisuke Maekawa
                </h1>
                <p className="text-[var(--sub-text)]">
                    Affiliation: 
                    <a 
                        href="https://sites.google.com/view/ehime-nlp/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline"
                    >
                        NLP Lab, Ehime University
                    </a>
                </p>
            </div>
            
            <nav className="mt-4 md:mt-0 flex gap-6 text-sm font-medium">
                <a href="#about" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">About</a>
                <a href="#publications" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Publications</a>
            </nav>
        </header>
    );
};
