// =======================
//  TỪ VỰNG HSK1 — BÀI 1→15
// =======================

const vocabList = [

    // ==== SỐ ĐẾM ====
    {hanzi: "零", pinyin: "líng", mean: "0"},
    {hanzi: "一", pinyin: "yī", mean: "1"},
    {hanzi: "二", pinyin: "èr", mean: "2"},
    {hanzi: "三", pinyin: "sān", mean: "3"},
    {hanzi: "四", pinyin: "sì", mean: "4"},
    {hanzi: "五", pinyin: "wǔ", mean: "5"},
    {hanzi: "六", pinyin: "liù", mean: "6"},
    {hanzi: "七", pinyin: "qī", mean: "7"},
    {hanzi: "八", pinyin: "bā", mean: "8"},
    {hanzi: "九", pinyin: "jiǔ", mean: "9"},
    {hanzi: "十", pinyin: "shí", mean: "10"},
    {hanzi: "十一", pinyin: "shí yī", mean: "11"},
    {hanzi: "十二", pinyin: "shí èr", mean: "12"},
    {hanzi: "十三", pinyin: "shí sān", mean: "13"},
    {hanzi: "十四", pinyin: "shí sì", mean: "14"},
    {hanzi: "十五", pinyin: "shí wǔ", mean: "15"},

    {hanzi: "一百", pinyin: "yì bǎi", mean: "100"},
    {hanzi: "一千", pinyin: "yì qiān", mean: "1.000"},
    {hanzi: "一百万", pinyin: "yì bǎi wàn", mean: "1.000.000"},
    {hanzi: "十亿", pinyin: "shí yì", mean: "1.000.000.000"},

    // ==== BÀI 1 ====
    {hanzi: "你", pinyin: "nǐ", mean: "bạn"},
    {hanzi: "好", pinyin: "hǎo", mean: "tốt / khỏe"},
    {hanzi: "您", pinyin: "nín", mean: "ngài (kính ngữ)"},
    {hanzi: "你们", pinyin: "nǐmen", mean: "các bạn"},
    {hanzi: "对不起", pinyin: "duìbuqǐ", mean: "xin lỗi"},
    {hanzi: "没关系", pinyin: "méi guānxi", mean: "không sao"},

    // ==== BÀI 2 ====
    {hanzi: "谢谢", pinyin: "xièxie", mean: "cảm ơn"},
    {hanzi: "不", pinyin: "bù", mean: "không"},
    {hanzi: "不客气", pinyin: "bú kèqi", mean: "đừng khách sáo"},
    {hanzi: "再见", pinyin: "zàijiàn", mean: "tạm biệt"},

    // ==== BÀI 3 ====
    {hanzi: "叫", pinyin: "jiào", mean: "gọi là"},
    {hanzi: "什么", pinyin: "shénme", mean: "gì"},
    {hanzi: "名字", pinyin: "míngzi", mean: "tên"},
    {hanzi: "我", pinyin: "wǒ", mean: "tôi"},
    {hanzi: "是", pinyin: "shì", mean: "là"},
    {hanzi: "老师", pinyin: "lǎoshī", mean: "giáo viên"},
    {hanzi: "吗", pinyin: "ma", mean: "trợ từ nghi vấn"},
    {hanzi: "学生", pinyin: "xuésheng", mean: "học sinh"},
    {hanzi: "人", pinyin: "rén", mean: "người"},
    {hanzi: "中国", pinyin: "Zhōngguó", mean: "Trung Quốc"},
    {hanzi: "美国", pinyin: "Měiguó", mean: "Mỹ"},

    // ==== BÀI 4 ====
    {hanzi: "她", pinyin: "tā", mean: "cô ấy"},
    {hanzi: "谁", pinyin: "shéi", mean: "ai"},
    {hanzi: "的", pinyin: "de", mean: "của"},
    {hanzi: "汉语", pinyin: "Hànyǔ", mean: "tiếng Trung"},
    {hanzi: "哪", pinyin: "nǎ", mean: "nào"},
    {hanzi: "他", pinyin: "tā", mean: "anh ấy"},
    {hanzi: "同学", pinyin: "tóngxué", mean: "bạn học"},
    {hanzi: "朋友", pinyin: "péngyou", mean: "bạn bè"},

    // ==== BÀI 5 ====
    {hanzi: "家", pinyin: "jiā", mean: "nhà / gia đình"},
    {hanzi: "有", pinyin: "yǒu", mean: "có"},
    {hanzi: "口", pinyin: "kǒu", mean: "lượng từ (người trong nhà)"},
    {hanzi: "女儿", pinyin: "nǚ'ér", mean: "con gái"},
    {hanzi: "几", pinyin: "jǐ", mean: "mấy (<10)"},
    {hanzi: "岁", pinyin: "suì", mean: "tuổi"},
    {hanzi: "了", pinyin: "le", mean: "rồi"},
    {hanzi: "今年", pinyin: "jīnnián", mean: "năm nay"},
    {hanzi: "多", pinyin: "duō", mean: "bao nhiêu (>10)"},
    {hanzi: "大", pinyin: "dà", mean: "lớn"},

    // ==== BÀI 6 ====
    {hanzi: "会", pinyin: "huì", mean: "biết (do học)"},
    {hanzi: "说", pinyin: "shuō", mean: "nói"},
    {hanzi: "妈妈", pinyin: "māma", mean: "mẹ"},
    {hanzi: "菜", pinyin: "cài", mean: "món ăn"},
    {hanzi: "好吃", pinyin: "hǎochī", mean: "ngon"},
    {hanzi: "做", pinyin: "zuò", mean: "làm"},
    {hanzi: "写", pinyin: "xiě", mean: "viết"},
    {hanzi: "汉字", pinyin: "Hànzì", mean: "chữ Hán"},
    {hanzi: "字", pinyin: "zì", mean: "chữ"},
    {hanzi: "怎么", pinyin: "zěnme", mean: "như thế nào"},
    {hanzi: "读", pinyin: "dú", mean: "đọc"},

    // ==== BÀI 7 ====
    {hanzi: "请", pinyin: "qǐng", mean: "xin / mời"},
    {hanzi: "问", pinyin: "wèn", mean: "hỏi"},
    {hanzi: "今天", pinyin: "jīntiān", mean: "hôm nay"},
    {hanzi: "号", pinyin: "hào", mean: "ngày (nói)"},
    {hanzi: "月", pinyin: "yuè", mean: "tháng"},
    {hanzi: "星期", pinyin: "xīngqī", mean: "thứ / tuần"},
    {hanzi: "昨天", pinyin: "zuótiān", mean: "hôm qua"},
    {hanzi: "明天", pinyin: "míngtiān", mean: "ngày mai"},
    {hanzi: "去", pinyin: "qù", mean: "đi"},
    {hanzi: "学校", pinyin: "xuéxiào", mean: "trường học"},
    {hanzi: "看", pinyin: "kàn", mean: "xem / nhìn / đọc"},
    {hanzi: "书", pinyin: "shū", mean: "sách"},

    // ==== BÀI 8 ====
    {hanzi: "想", pinyin: "xiǎng", mean: "muốn"},
    {hanzi: "喝", pinyin: "hē", mean: "uống"},
    {hanzi: "茶", pinyin: "chá", mean: "trà"},
    {hanzi: "吃", pinyin: "chī", mean: "ăn"},
    {hanzi: "米饭", pinyin: "mǐfàn", mean: "cơm"},
    {hanzi: "下午", pinyin: "xiàwǔ", mean: "buổi chiều"},
    {hanzi: "商店", pinyin: "shāngdiàn", mean: "cửa hàng"},
    {hanzi: "买", pinyin: "mǎi", mean: "mua"},
    {hanzi: "个", pinyin: "gè", mean: "lượng từ"},
    {hanzi: "杯子", pinyin: "bēizi", mean: "cái cốc"},
    {hanzi: "这", pinyin: "zhè", mean: "này"},
    {hanzi: "多少", pinyin: "duōshao", mean: "bao nhiêu"},
    {hanzi: "钱", pinyin: "qián", mean: "tiền"},
    {hanzi: "块", pinyin: "kuài", mean: "đồng"},
    {hanzi: "那", pinyin: "nà", mean: "kia"},

    // ==== BÀI 9 ====
    {hanzi: "小", pinyin: "xiǎo", mean: "nhỏ"},
    {hanzi: "猫", pinyin: "māo", mean: "mèo"},
    {hanzi: "在", pinyin: "zài", mean: "ở"},
    {hanzi: "那儿", pinyin: "nàr", mean: "chỗ kia"},
    {hanzi: "狗", pinyin: "gǒu", mean: "chó"},
    {hanzi: "椅子", pinyin: "yǐzi", mean: "cái ghế"},
    {hanzi: "下面", pinyin: "xiàmian", mean: "bên dưới"},
    {hanzi: "哪儿", pinyin: "nǎr", mean: "ở đâu"},
    {hanzi: "工作", pinyin: "gōngzuò", mean: "làm việc"},
    {hanzi: "儿子", pinyin: "érzi", mean: "con trai"},
    {hanzi: "医院", pinyin: "yīyuàn", mean: "bệnh viện"},
    {hanzi: "医生", pinyin: "yīshēng", mean: "bác sĩ"},
    {hanzi: "爸爸", pinyin: "bàba", mean: "bố"},

    // ==== BÀI 10 ====
    {hanzi: "桌子", pinyin: "zhuōzi", mean: "cái bàn"},
    {hanzi: "上", pinyin: "shàng", mean: "trên"},
    {hanzi: "电脑", pinyin: "diànnǎo", mean: "máy tính"},
    {hanzi: "和", pinyin: "hé", mean: "và"},
    {hanzi: "本", pinyin: "běn", mean: "quyển"},
    {hanzi: "里", pinyin: "li", mean: "bên trong"},
    {hanzi: "前面", pinyin: "qiánmiàn", mean: "phía trước"},
    {hanzi: "后面", pinyin: "hòumiàn", mean: "phía sau"},
    {hanzi: "这儿", pinyin: "zhèr", mean: "ở đây"},
    {hanzi: "没有", pinyin: "méiyǒu", mean: "không có"},
    {hanzi: "能", pinyin: "néng", mean: "có thể"},
    {hanzi: "坐", pinyin: "zuò", mean: "ngồi"},

    // ==== BÀI 11 ====
    {hanzi: "现在", pinyin: "xiànzài", mean: "bây giờ"},
    {hanzi: "点", pinyin: "diǎn", mean: "giờ"},
    {hanzi: "分", pinyin: "fēn", mean: "phút"},
    {hanzi: "中午", pinyin: "zhōngwǔ", mean: "buổi trưa"},
    {hanzi: "吃饭", pinyin: "chīfàn", mean: "ăn cơm"},
    {hanzi: "时候", pinyin: "shíhou", mean: "lúc"},
    {hanzi: "回", pinyin: "huí", mean: "về"},
    {hanzi: "我们", pinyin: "wǒmen", mean: "chúng ta"},
    {hanzi: "电影", pinyin: "diànyǐng", mean: "phim"},
    {hanzi: "住", pinyin: "zhù", mean: "sống"},
    {hanzi: "前", pinyin: "qián", mean: "trước"},
    {hanzi: "北京", pinyin: "Běijīng", mean: "Bắc Kinh"},

    // ==== BÀI 12 ====
    {hanzi: "天气", pinyin: "tiānqì", mean: "thời tiết"},
    {hanzi: "怎么样", pinyin: "zěnmeyàng", mean: "thế nào"},
    {hanzi: "太", pinyin: "tài", mean: "quá"},
    {hanzi: "热", pinyin: "rè", mean: "nóng"},
    {hanzi: "冷", pinyin: "lěng", mean: "lạnh"},
    {hanzi: "下雨", pinyin: "xià yǔ", mean: "mưa"},
    {hanzi: "小姐", pinyin: "xiǎojiě", mean: "cô"},
    {hanzi: "来", pinyin: "lái", mean: "đến"},
    {hanzi: "身体", pinyin: "shēntǐ", mean: "sức khỏe"},
    {hanzi: "爱", pinyin: "ài", mean: "yêu"},
    {hanzi: "些", pinyin: "xiē", mean: "một vài"},
    {hanzi: "水果", pinyin: "shuǐguǒ", mean: "hoa quả"},

    // ==== BÀI 13 ====
    {hanzi: "喂", pinyin: "wéi / wèi", mean: "a lô"},
    {hanzi: "也", pinyin: "yě", mean: "cũng"},
    {hanzi: "学习", pinyin: "xuéxí", mean: "học"},
    {hanzi: "上午", pinyin: "shàngwǔ", mean: "buổi sáng"},
    {hanzi: "睡觉", pinyin: "shuìjiào", mean: "ngủ"},
    {hanzi: "电视", pinyin: "diànshì", mean: "tivi"},
    {hanzi: "喜欢", pinyin: "xǐhuan", mean: "thích"},
    {hanzi: "给", pinyin: "gěi", mean: "cho"},
    {hanzi: "打电话", pinyin: "dǎ diànhuà", mean: "gọi điện thoại"},
    {hanzi: "吧", pinyin: "ba", mean: "nhé / đi / thôi"},

    // ==== BÀI 14 ====
    {hanzi: "东西", pinyin: "dōngxi", mean: "đồ đạc"},
    {hanzi: "一点儿", pinyin: "yìdiǎnr", mean: "một chút"},
    {hanzi: "苹果", pinyin: "píngguǒ", mean: "táo"},
    {hanzi: "看见", pinyin: "kànjiàn", mean: "nhìn thấy"},
    {hanzi: "先生", pinyin: "xiānsheng", mean: "ông"},
    {hanzi: "开", pinyin: "kāi", mean: "mở / lái xe"},
    {hanzi: "车", pinyin: "chē", mean: "xe"},
    {hanzi: "回来", pinyin: "huílái", mean: "trở về"},
    {hanzi: "分钟", pinyin: "fēnzhōng", mean: "phút"},
    {hanzi: "后", pinyin: "hòu", mean: "sau"},
    {hanzi: "漂亮", pinyin: "piàoliang", mean: "đẹp"},
    {hanzi: "少", pinyin: "shǎo", mean: "ít"},
    {hanzi: "不少", pinyin: "bù shǎo", mean: "không ít"},
    {hanzi: "衣服", pinyin: "yīfu", mean: "quần áo"},
    {hanzi: "都", pinyin: "dōu", mean: "đều"},

    // ==== BÀI 15 ====
    {hanzi: "认识", pinyin: "rènshi", mean: "quen biết"},
    {hanzi: "年", pinyin: "nián", mean: "năm"},
    {hanzi: "大学", pinyin: "dàxué", mean: "đại học"},
    {hanzi: "饭店", pinyin: "fàndiàn", mean: "nhà hàng / khách sạn"},
    {hanzi: "出租车", pinyin: "chūzūchē", mean: "taxi"},
    {hanzi: "一起", pinyin: "yìqǐ", mean: "cùng nhau"},
    {hanzi: "高兴", pinyin: "gāoxìng", mean: "vui"},
    {hanzi: "听", pinyin: "tīng", mean: "nghe"},
    {hanzi: "飞机", pinyin: "fēijī", mean: "máy bay"},
];



// =======================
//   CÂU THOẠI HSK1
// =======================

const sentenceList = [

    // ==== BÀI 1 ====
    {hanzi: "你好！", pinyin: "Nǐ hǎo!", mean: "Xin chào!"},
    {hanzi: "您好！", pinyin: "Nín hǎo!", mean: "Chào ngài!"},
    {hanzi: "你们好！", pinyin: "Nǐmen hǎo!", mean: "Chào các bạn!"},
    {hanzi: "对不起！", pinyin: "Duìbuqǐ!", mean: "Xin lỗi!"},
    {hanzi: "没关系！", pinyin: "Méi guānxi!", mean: "Không sao!"},

    // ==== BÀI 2 ====
    {hanzi: "谢谢！", pinyin: "Xièxie!", mean: "Cảm ơn!"},
    {hanzi: "不谢！", pinyin: "Bú xiè!", mean: "Không có gì!"},
    {hanzi: "谢谢你！", pinyin: "Xièxie nǐ!", mean: "Cảm ơn bạn!"},
    {hanzi: "不客气！", pinyin: "Bú kèqi!", mean: "Đừng khách sáo!"},
    {hanzi: "再见！", pinyin: "Zàijiàn!", mean: "Tạm biệt!"},

    // ==== BÀI 3 ====
    {hanzi: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", mean: "Bạn tên là gì?"},
    {hanzi: "我叫李月。", pinyin: "Wǒ jiào Lǐ Yuè.", mean: "Tôi tên là Lý Nguyệt."},
    {hanzi: "你是老师吗？", pinyin: "Nǐ shì lǎoshī ma?", mean: "Bạn là giáo viên không?"},
    {hanzi: "我不是老师，我是学生。", pinyin: "Wǒ bú shì lǎoshī, wǒ shì xuésheng.", mean: "Tôi không phải giáo viên, tôi là học sinh."},
    {hanzi: "你是中国人吗？", pinyin: "Nǐ shì Zhōngguó rén ma?", mean: "Bạn là người Trung Quốc không?"},
    {hanzi: "我不是中国人，我是美国人。", pinyin: "Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.", mean: "Tôi không phải người Trung Quốc, tôi là người Mỹ."},

    // ==== BÀI 4 ====
    {hanzi: "她是我的汉语老师。", pinyin: "Tā shì wǒ de Hànyǔ lǎoshī.", mean: "Cô ấy là giáo viên tiếng Trung của tôi."},
    {hanzi: "他是谁？", pinyin: "Tā shì shéi?", mean: "Anh ấy là ai?"},
    {hanzi: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", mean: "Bạn là người nước nào?"},
    {hanzi: "他是我同学。", pinyin: "Tā shì wǒ tóngxué.", mean: "Cậu ấy là bạn học của tôi."},
    {hanzi: "她是你朋友吗？", pinyin: "Tā shì nǐ péngyou ma?", mean: "Cô ấy là bạn của bạn à?"},

    // ==== BÀI 5 ====
    {hanzi: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", mean: "Nhà bạn có mấy người?"},
    {hanzi: "我家有三口人。", pinyin: "Wǒ jiā yǒu sān kǒu rén.", mean: "Nhà tôi có 3 người."},
    {hanzi: "你女儿几岁了？", pinyin: "Nǐ nǚ'ér jǐ suì le?", mean: "Con gái bạn mấy tuổi rồi?"},
    {hanzi: "她今年四岁了。", pinyin: "Tā jīnnián sì suì le.", mean: "Năm nay cháu 4 tuổi rồi."},

    // ==== BÀI 6 ====
    {hanzi: "你会说汉语吗？", pinyin: "Nǐ huì shuō Hànyǔ ma?", mean: "Bạn biết nói tiếng Trung không?"},
    {hanzi: "我会说汉语。", pinyin: "Wǒ huì shuō Hànyǔ.", mean: "Tôi biết nói tiếng Trung."},
    {hanzi: "中国菜很好吃。", pinyin: "Zhōngguó cài hěn hǎochī.", mean: "Đồ ăn Trung Quốc rất ngon."},
    {hanzi: "这个字怎么读？", pinyin: "Zhège zì zěnme dú?", mean: "Chữ này đọc như thế nào?"},

    // ==== BÀI 7 ====
    {hanzi: "请问，今天几号？", pinyin: "Qǐngwèn, jīntiān jǐ hào?", mean: "Xin hỏi, hôm nay ngày mấy?"},
    {hanzi: "今天九月一号。", pinyin: "Jīntiān jiǔ yuè yī hào.", mean: "Hôm nay 1 tháng 9."},
    {hanzi: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", mean: "Hôm nay thứ mấy?"},
    {hanzi: "今天是星期三。", pinyin: "Jīntiān shì xīngqī sān.", mean: "Hôm nay thứ tư."},

    // ==== BÀI 8 ====
    {hanzi: "你想喝什么？", pinyin: "Nǐ xiǎng hē shénme?", mean: "Bạn muốn uống gì?"},
    {hanzi: "我想喝茶。", pinyin: "Wǒ xiǎng hē chá.", mean: "Tôi muốn uống trà."},
    {hanzi: "你想吃什么？", pinyin: "Nǐ xiǎng chī shénme?", mean: "Bạn muốn ăn gì?"},
    {hanzi: "这个杯子多少钱？", pinyin: "Zhège bēizi duōshao qián?", mean: "Cái cốc này bao nhiêu tiền?"},

    // ==== BÀI 9 ====
    {hanzi: "小猫在哪儿？", pinyin: "Xiǎomāo zài nǎr?", mean: "Con mèo nhỏ ở đâu?"},
    {hanzi: "小猫在那儿。", pinyin: "Xiǎomāo zài nàr.", mean: "Con mèo nhỏ ở kia."},
    {hanzi: "小狗在椅子下面。", pinyin: "Xiǎogǒu zài yǐzi xiàmian.", mean: "Con chó dưới ghế."},
    {hanzi: "你儿子在哪儿工作？", pinyin: "Nǐ érzi zài nǎr gōngzuò?", mean: "Con trai bạn làm việc ở đâu?"},
    {hanzi: "他在医院工作。", pinyin: "Tā zài yīyuàn gōngzuò.", mean: "Nó làm ở bệnh viện."},

    // ==== BÀI 10 ====
    {hanzi: "桌子上有什么？", pinyin: "Zhuōzi shang yǒu shénme?", mean: "Trên bàn có gì?"},
    {hanzi: "桌子上有电脑和书。", pinyin: "Zhuōzi shang yǒu diànnǎo hé shū.", mean: "Trên bàn có máy tính và sách."},
    {hanzi: "我能坐这儿吗？", pinyin: "Wǒ néng zuò zhèr ma?", mean: "Tôi ngồi đây được không?"},
    {hanzi: "请坐。", pinyin: "Qǐng zuò.", mean: "Mời ngồi."},

    // ==== BÀI 11 ====
    {hanzi: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", mean: "Bây giờ mấy giờ?"},
    {hanzi: "中午几点吃饭？", pinyin: "Zhōngwǔ jǐ diǎn chīfàn?", mean: "Trưa mấy giờ ăn?"},
    {hanzi: "我住在北京。", pinyin: "Wǒ zhù zài Běijīng.", mean: "Tôi sống ở Bắc Kinh."},

    // ==== BÀI 12 ====
    {hanzi: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", mean: "Thời tiết hôm nay thế nào?"},
    {hanzi: "太热了。", pinyin: "Tài rè le.", mean: "Nóng quá."},
    {hanzi: "今天天气很好，不冷不热。", pinyin: "Jīntiān tiānqì hěn hǎo, bù lěng bú rè.", mean: "Hôm nay rất đẹp, không nóng không lạnh."},

    // ==== BÀI 13 ====
    {hanzi: "喂，你在做什么呢？", pinyin: "Wéi, nǐ zài zuò shénme ne?", mean: "A lô, bạn đang làm gì?"},
    {hanzi: "我在看书呢。", pinyin: "Wǒ zài kàn shū ne.", mean: "Tôi đang đọc sách."},
    {hanzi: "我在睡觉呢。", pinyin: "Wǒ zài shuìjiào ne.", mean: "Tôi đang ngủ."},

    // ==== BÀI 14 ====
    {hanzi: "昨天上午你去哪儿了？", pinyin: "Zuótiān shàngwǔ nǐ qù nǎr le?", mean: "Sáng qua bạn đi đâu?"},
    {hanzi: "我去商店买东西了。", pinyin: "Wǒ qù shāngdiàn mǎi dōngxi le.", mean: "Tôi đi mua đồ."},
    {hanzi: "我买了一点儿苹果。", pinyin: "Wǒ mǎi le yìdiǎnr píngguǒ.", mean: "Tôi mua một ít táo."},

    // ==== BÀI 15 ====
    {hanzi: "你们是几点到的？", pinyin: "Nǐmen shì jǐ diǎn dào de?", mean: "Bạn đến lúc mấy giờ?"},
    {hanzi: "我们是三点半到的。", pinyin: "Wǒmen shì sān diǎn bàn dào de.", mean: "Chúng tôi đến lúc 3 rưỡi."},
    {hanzi: "你是怎么来的？", pinyin: "Nǐ shì zěnme lái de?", mean: "Bạn đến bằng cách nào?"},
    {hanzi: "我是坐飞机来的。", pinyin: "Wǒ shì zuò fēijī lái de.", mean: "Tôi đi máy bay đến."},
    {hanzi: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", mean: "Rất vui được quen bạn."}
];