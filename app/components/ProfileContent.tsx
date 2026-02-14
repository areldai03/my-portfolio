import ProfileIcon from './ProfileIcon';
import { AchievementsList } from './AchievementsList';

const ProfileContent = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <section id="about" className="mb-20 scroll-mt-24">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                     <div className="flex-shrink-0">
                         <ProfileIcon />
                     </div>
                
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            About Me
                        </h2>
                        <p className="text-lg text-[var(--sub-text)] mb-6 leading-relaxed">
                            愛媛大学大学院 自然言語処理研究室<br/>
                            専門分野は自然言語処理，難しいテキストを意味を保持したまま平易に変換するテキスト平易化の研究をしています．
                            リサーチだけでなく，Web開発にも取り組んでいます．
                        </p>
                        
                        <div className="flex gap-4 justify-center md:justify-start">
                             <a href="https://github.com/areldai03" target="_blank" rel="noopener noreferrer" 
                                className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                                GitHub
                             </a>
                             <a href="mailto:maekawa@ai.cs.ehime-u.ac.jp" 
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-800">
                                Email
                             </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="publications" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 pb-2">
                    Publications & Achievements
                </h3>
                <AchievementsList />
            </section>
            
        </div>
    );
};

export default ProfileContent;
