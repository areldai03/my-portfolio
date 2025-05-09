import ProfileIcon from './ProfileIcon';

const ProfileContent = () => {
    return (
        <div id="about" className="flex-1 p-4 md:p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">あばうとみ</h1>
            <p className="mb-4 text-gray-700">愛媛大学大学院M1の前川大輔です。テキスト生成に興味があります。<br />
                これからNLP関連の手法を実装していくます。</p>

            <h2 className="text-xl font-semibold mb-2">研究業績</h2>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>前川大輔, 梶原智之, 二宮崇. <br />
                    大規模言語モデルによる日本語テキスト平易化のためのパラレルコーパスフィルタリング<br />
                    NLP若手の会第19回シンポジウム (YANS), August 2024.</li>
                {/* その他の研究項目 */}
                <li>前川大輔, 梶原智之, 二宮崇.<br />
                大規模言語モデルによるテキスト平易化のための意味的類似性 と表層的非類似性に基づくパラレルコーパスフィルタリング<br />
                言語処理学会第31回年次大会, pp.3441-3445, March, 2025. <a href="https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q8-20.pdf">[PDF]</a>
                </li>
                <li>
                花房健太郎, 前川大輔, 梶原智之.<br />
                 大規模言語モデルによる書き手の情報を考慮した感情分析．<br />
                  情報処理学会第87回全国大会, March 2025. 

                </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">資格&業績</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>基本情報技術者試験 取得</li>
                <li>2023年度 成績優秀学生（1-2年次）</li>
                <li>2024年度 成績優秀学生（3年次）</li>
                {/* その他の実績項目 */}
            </ul>
        </div>
    );
};

const ProfileLayout = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 bg-gray gap-8">
            <ProfileIcon />
            <ProfileContent />
        </div>
    );
};

export default ProfileLayout;
