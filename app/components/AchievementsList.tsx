import React from 'react';
import { Achievement, achievements } from '../data/achievements';

export const AchievementsList = () => {
    
    // category によるフィルタリング
    // international: 国際会議
    // domestic: 国内会議 (researchも含む場合はここで調整)
    // award / certificate: 受賞・資格
    // internaltion: インターンシップ (Typo in type definition: internaltion -> internship 推奨だが型定義準拠)
    
    const domesticConf = achievements.filter(a => a.category === 'domestic');
    const internationalConf = achievements.filter(a => a.category === 'international');
    const awards = achievements.filter(a => ['award', 'certificate'].includes(a.category));
    const interns = achievements.filter(a => a.category === 'internaltion');
    
    return (
        <div className="space-y-12">
             {/* International Conferences */}
             <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                    International Conferences (国際会議)
                </h4>
                {internationalConf.length > 0 ? (
                    <ul className="space-y-6 ml-1 md:ml-4">
                        {internationalConf.map((item) => (
                            <li key={item.id} className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                                    <span className="text-sm font-mono text-gray-500 flex-shrink-0 w-12">{item.date}</span>
                                    <div>
                                        <h5 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent)] transition-colors">
                                            {item.title}
                                        </h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            {item.authors}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1 italic">
                                            {item.conference}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 italic ml-4">TBA</p>
                )}
            </div>

             {/* Domestic Conferences */}
             <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                    Domestic Conferences (国内会議)
                </h4>
                <ul className="space-y-6 ml-1 md:ml-4">
                    {domesticConf.map((item) => (
                        <li key={item.id} className="group">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                                <span className="text-sm font-mono text-gray-500 flex-shrink-0 w-16">{item.date}</span>
                                <div>
                                    <h5 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent)] transition-colors">
                                        {item.title}
                                    </h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {item.authors}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1 italic">
                                        {item.conference}
                                    </p>
                                    <div className="mt-2 flex gap-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {item.url && (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                                                📄 Paper
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Awards & Certificates */}
            <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                    Awards & Honors (受賞・表彰・資格)
                </h4>
                <ul className="space-y-3 ml-1 md:ml-4 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                    {awards.map((item) => (
                        <li key={item.id} className="text-sm">
                            <span className="font-bold text-gray-700 dark:text-gray-300 min-w-[40px] inline-block">{item.date || '----'}</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span>{item.title}</span>
                             {item.conference && <span className="text-gray-500 ml-1"> - {item.conference}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Internships */}
            {interns.length > 0 && (
                <div>
                     <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                        Internships (インターンシップ)
                    </h4>
                    <ul className="space-y-3 ml-1 md:ml-4 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                        {interns.map((item) => (
                            <li key={item.id} className="text-sm">
                                <span className="font-bold text-gray-700 dark:text-gray-300 block md:inline">{item.date}</span>
                                <span className="hidden md:inline mx-2 text-gray-400">|</span>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
