export type Achievement = {
  id: string;
  title: string;
  authors?: string; // 論文などの場合
  conference?: string; // 学会名など
  date: string;
  url?: string; // PDFなどへのリンク
  category: 'international' | 'domestic' | 'award' | 'internaltion' | 'development' | 'certificate' | 'other';
};

export const achievements: Achievement[] = [
  // 国際会議
  {
    id: 'lrec2026-maekawa',
    title: 'Parallel Corpus Filtering Based on Semantic Similarity and Surface Dissimilarity for Japanese Text Simplification with LLMs',
    authors: 'Daisuke Maekawa, Tomoyuki Kajiwara, Takashi Ninomiya',
    conference: 'In Proceedings of the 15th International Conference on Language Resources and Evaluation (LREC 2026)',
    date: '2026',
    category: 'international',
  },
  {
    id: 'lrec2026-hanafusa',
    title: 'A Japanese Dataset for Aspect-based Sentiment Polarity and Emotion Intensity Estimation',
    authors: 'Kentaro Hanafusa, Kota Manabe, Yuki Meda, Daisuke Maekawa, Tomoyuki Kajiwara, Hideaki Hayashi, Yuta Nakashima, Hajime Nagahara',
    conference: 'In Proceedings of the 15th International Conference on Language Resources and Evaluation (LREC 2026)',
    date: '2026',
    category: 'international',
  },
  {
    id: 'lrec2026-toda',
    title: 'HOTATE: A Japanese Dialogue Corpus Annotated with Responses of Private Thoughts and Public Statements',
    authors: 'Yuko Toda, Daisuke Maekawa, Kota Manabe, Eito Yoneyama, Kanade Nonomura, Yuki Fujiwara, Tomoyuki Kajiwara',
    conference: 'In Proceedings of the 15th International Conference on Language Resources and Evaluation (LREC 2026)',
    date: '2026',
    category: 'international',
  },

  // 国内会議
  {
    id: 'nlp2026-maekawa',
    title: '日本語テキスト難易度の主観的かつ多層的なアノテーション',
    authors: '前川大輔, 大村和正, 樽本空宙, 石原祥太郎, 梶原智之',
    conference: '言語処理学会第31回年次大会',
    date: '2026-03',
    category: 'domestic',
  },
  {
    id: 'yans2025-maekawa',
    title: '単語・文・文書を統合的に扱う主観的な日本語難易度付きコーパスの構築に向けて',
    authors: '前川大輔, 大村 和正, 樽本 空宙, 石原 祥太郎, 梶原 智之',
    conference: 'NLP若手の会第20回シンポジウム (YANS2025)',
    date: '2025-09',
    category: 'domestic',
  },
  {
    id: 'yans2025-hanafusa',
    title: 'アスペクトベースの感情極性分類および感情強度推定のための日本語データセットの試作',
    authors: '花房 健太郎, 眞鍋 光汰, 前田 雄生, 前川 大輔, 梶原 智之, 早志 英朗, 中島 悠太, 長原 一',
    conference: 'NLP若手の会第20回シンポジウム（YANS2025）',
    date: '2025-09',
    category: 'domestic',
  },
  {
    id: 'yans2025-toda',
    title: '本音と建前の応答対からなる対話コーパスの構築に向けて',
    authors: '戸田裕子, 前川大輔, 梶原智之',
    conference: 'NLP若手の会第20回シンポジウム（YANS2025）',
    date: '2025-09',
    category: 'domestic',
  },
  {
    id: 'nlp2025',
    title: '大規模言語モデルによるテキスト平易化のための意味的類似性と表層的非類似性に基づくパラレルコーパスフィルタリング',
    authors: '前川大輔, 梶原智之, 二宮崇',
    conference: '言語処理学会第31回年次大会, pp.3441-3445',
    date: '2025-03',
    url: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q8-20.pdf',
    category: 'domestic',
  },
  {
    id: 'ipsj2025',
    title: '大規模言語モデルによる書き手の情報を考慮した感情分析',
    authors: '花房健太郎, 前川大輔, 梶原智之',
    conference: '情報処理学会第87回全国大会',
    date: '2025-03',
    category: 'domestic',
  },
  {
    id: 'yans2024',
    title: '大規模言語モデルによる日本語テキスト平易化のためのパラレルコーパスフィルタリング',
    authors: '前川大輔, 梶原智之, 二宮崇',
    conference: 'NLP若手の会第19回シンポジウム (YANS)',
    date: '2024-08',
    category: 'domestic',
  },

  // 受賞
  {
    id: 'yans2025-award',
    title: '奨励賞 (本音と建前の応答対からなる対話コーパスの構築に向けて)',
    conference: 'NLP若手の会第20回シンポジウム（YANS2025）',
    date: '2025-09',
    category: 'award',
  },
  {
    id: 'yans2025-hackathon-award',
    title: 'LLMの数学タスクのチューニングハッカソン 審査員特別賞',
    conference: 'NLP若手の会第20回シンポジウム(2025)',
    date: '2025',
    category: 'award',
  },
  {
    id: 'grade-3',
    title: '2024年度 成績優秀学生（3年次）',
    date: '2024',
    category: 'award',
  },
  {
    id: 'grade-1-2',
    title: '2023年度 成績優秀学生（1-2年次）',
    date: '2023',
    category: 'award',
  },

  // インターン
  {
    id: 'intern-future',
    title: 'Future 株式会社 サマーインターン2025 Engineer Camp',
    date: '2025-08-18 - 2025-09-11',
    category: 'internaltion',
  },
  {
    id: 'intern-nikkei',
    title: '日本経済新聞社 サマーインターン2025',
    date: '2025-08-11 - 2025-08-15',
    category: 'internaltion',
  },

  // 開発
  {
    id: 'dev-yans',
    title: 'アノテーションツール フロントエンド',
    date: '',
    conference: 'NLP若手の会第19回シンポジウム ハッカソン (YANS)',
    category: 'development',
  },

   // 資格
  {
    id: 'fe',
    title: '基本情報技術者試験 合格',
    date: '',
    category: 'certificate',
  },
];
