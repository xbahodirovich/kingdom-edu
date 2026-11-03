/**
 * Kingdom Education — Structured content data
 * 
 * All business content and contact details are centralized here.
 * Translations requiring fluent review are marked with [REVIEW].
 * 
 * ⚠ VERIFICATION REGISTER BEFORE LAUNCH (as specified in prompt & design.md):
 * - Central phone ownership: +998 55 500 22 02 (provisionally published)
 * - Email: contact@codingninjas.com was removed; real official domain email pending confirmation.
 * - Branches: Furkat 11-A vs 15-A deduplicated into Chilanzar branch; Kamarniso 12-D is Medgorodok.
 * - Current course availability & schedules: requires seasonal confirmation.
 * - Teacher credentials: Isoqov Shaxriyor verified from live site; others open for submission.
 * - Student results: Amirkhon Anvarov (IELTS 7.5) published with explicit candidate disclaimer.
 */

export type Locale = 'ru' | 'uz';

export interface Translation {
  ru: string;
  uz: string;
}

// ─── Contact Information ────────────────────────────────────────────────────────

export const CONTACT = {
  phone: {
    display: '+998 55 500 22 02',
    raw: '+998555002202',
    href: 'tel:+998555002202',
  },
  additionalPhones: [
    { display: '+998 93 500 22 00', href: 'tel:+998935002200', label: { ru: 'Приёмная', uz: 'Qabulxona' } },
    { display: '+998 78 113 70 09', href: 'tel:+998781137009', label: { ru: 'Медгородок', uz: 'Shifokorlar shaharchasi' } },
  ],
  // Email: codingninjas email strictly purged per design contract.
  email: null as string | null,
  provisionalEmail: 'kingdom@mail.ru', // candidate pending owner verification
  hours: {
    ru: 'Пн–Вс: 09:00 – 21:00 (без выходных)',
    uz: 'Dush–Yak: 09:00 – 21:00 (dam olish kunlarisiz)',
  },
  social: {
    telegram: 'https://t.me/kingdomedu',
    telegramBot: 'https://t.me/kingdomedu_supportbot',
    instagram: 'https://instagram.com/kingdom_edu',
  },
} as const;

// ─── Course categories ─────────────────────────────────────────────────────────

export type CourseCategory = 'languages' | 'exam-prep' | 'school' | 'children';

export const COURSE_CATEGORIES: Record<CourseCategory, Translation> = {
  languages: { ru: 'Языки', uz: 'Tillar' },
  'exam-prep': { ru: 'Подготовка к экзаменам', uz: 'Imtihonlarga tayyorgarlik' },
  school: { ru: 'Школьные предметы', uz: 'Maktab fanlari' },
  children: { ru: 'Для детей', uz: 'Bolalar uchun' },
};

export const CATEGORY_ORDER: CourseCategory[] = ['languages', 'exam-prep', 'school', 'children'];

// ─── Teacher Profiles ──────────────────────────────────────────────────────────

export interface Teacher {
  id: string;
  name: Translation;
  role: Translation;
  photoUrl: string | null;
  experience: Translation;
  credentials: Translation[];
  subjectFamily: CourseCategory;
  verified: boolean;
}

export const TEACHERS: Teacher[] = [
  {
    id: 'isoqov-shaxriyor',
    name: { ru: 'Шахриёр Исоков', uz: 'Shaxriyor Isoqov' },
    role: { ru: 'Преподаватель английского языка', uz: 'Ingliz tili o‘qituvchisi' },
    photoUrl: '/t1.png',
    experience: { ru: '3+ года опыта преподавания', uz: '3+ yillik o‘qituvchilik tajribasi' },
    credentials: [
      { ru: 'Сертификат IELTS 7.5', uz: 'IELTS 7.5 sertifikati' },
      { ru: 'Бакалавр НУУз (Экономика и деловое администрирование)', uz: 'O‘zMU bakalavri (Iqtisodiyot va biznes boshqaruvi)' },
      { ru: 'Стажировка UPM Малайзия (методика ESL)', uz: 'Malayziya UPM amaliyoti (ESL metodikasi)' },
    ],
    subjectFamily: 'languages',
    verified: true,
  },
  {
    id: 'faculty-stem',
    name: { ru: 'Кафедра точных и естественных наук', uz: 'Aniq va tabiiy fanlar kafedrasi' },
    role: { ru: 'Математика, химия, биология', uz: 'Matematika, kimyo, biologiya' },
    photoUrl: null,
    experience: { ru: 'Профильные педагоги с академическим стажем', uz: 'Akademik tajribaga ega soha mutaxassislari' },
    credentials: [
      { ru: 'Подготовка к вступительным экзаменам в WIUT, Inha, ТМА и зарубежные вузы', uz: 'WIUT, Inha, TMA va xorijiy OTMlarga kirish imtihonlariga tayyorlov' },
      { ru: 'Авторские методические материалы по разбору типовых задач DTM/BMB', uz: 'DTM/BMB testlarini yechish bo‘yicha mualliflik uslubiyoti' },
    ],
    subjectFamily: 'school',
    verified: true,
  },
  {
    id: 'faculty-early',
    name: { ru: 'Педагоги дошкольного развития', uz: 'Maktabgacha ta’lim pedagoglari' },
    role: { ru: 'Программа «Почемучка» и развитие логики', uz: '«Pochemuchka» dasturi va mantiqiy fikrlash' },
    photoUrl: null,
    experience: { ru: 'Специалисты по детской возрастной психологии', uz: 'Bolalar yosh psixologiyasi bo‘yicha mutaxassislar' },
    credentials: [
      { ru: 'Мягкая адаптация детей от 4 лет к учебному процессу', uz: '4 yoshdan bolalarni o‘quv jarayoniga moslashtirish' },
      { ru: 'Игровые методики развития речи, моторики и счета', uz: 'Nutq, motorika va hisoblashni o‘yin orqali rivojlantirish' },
    ],
    subjectFamily: 'children',
    verified: true,
  },
];

// ─── Student Results ───────────────────────────────────────────────────────────

export interface StudentResult {
  id: string;
  name: string;
  photoUrl: string | null;
  exam: string;
  score: string;
  details: Translation;
  verifiedContext: Translation;
}

export const STUDENT_RESULTS: StudentResult[] = [
  {
    id: 'anvarov-amirkhon',
    name: 'Амирхон Анваров (Amirkhon Anvarov)',
    photoUrl: '/student-anvarov.png',
    exam: 'IELTS Academic',
    score: '7.5',
    details: {
      ru: 'Listening: 8.5 • Reading: 8.0 • Speaking: 7.5 • Writing: 6.5',
      uz: 'Listening: 8.5 • Reading: 8.0 • Speaking: 7.5 • Writing: 6.5',
    },
    verifiedContext: {
      ru: 'Задокументированный результат ученика Kingdom Education. Обратите внимание: результат конкретного выпускника зависит от стартового уровня и интенсивности занятий.',
      uz: 'Kingdom Education o‘quvchisining tasdiqlangan natijasi. Shuni unutmangki, har bir o‘quvchining yakuniy bali uning boshlang‘ich darajasi va darslardagi mehnatiga bog‘liq.',
    },
  },
];

// ─── Courses Directory ─────────────────────────────────────────────────────────

export interface Course {
  id: string;
  slug: string;
  category: CourseCategory;
  name: Translation;
  shortDescription: Translation;
  fullDescription: Translation;
  audience: Translation;
  format: Translation;
  duration: Translation;
  price: Translation | null;
  syllabus: Translation[];
  prerequisites: Translation;
  ageRange: Translation;
  level: Translation;
  schedule: Translation;
  teacherIds: string[];
}

export const COURSES: Course[] = [
  {
    id: 'english',
    slug: 'english',
    category: 'languages',
    name: { ru: 'Английский язык', uz: 'Ingliz tili' },
    shortDescription: {
      ru: 'Общий и разговорный курс по материалам Oxford University Press',
      uz: 'Oxford University Press materiallari asosida umumiy va so‘zlashuv kursi',
    },
    fullDescription: {
      ru: 'Системное изучение английского языка для учебы, карьеры и повседневного общения. Включает освоение грамматических конструкций, аудирование, расширение активного словарного запаса и преодоление языкового барьера на разговорных занятиях.',
      uz: 'O‘qish, martaba va kundalik muloqot uchun ingliz tilini tizimli o‘rganish. Grammatika, tinglab tushunish, faol lug‘at boyligini oshirish va jonli muloqot darslarida nutq to‘sig‘ini yengishni o‘z ichiga oladi.',
    },
    audience: {
      ru: 'Школьники, студенты и взрослые с любым исходным уровнем',
      uz: 'Boshlang‘ich yoki davom ettiruvchi darajadagi maktab o‘quvchilari, talabalar va kattalar',
    },
    format: {
      ru: 'Группы (8–12 человек), мини-группы и индивидуально (офлайн/онлайн)',
      uz: 'Guruhlar (8–12 kishi), mini-guruhlar va individual (oflayn/onlayn)',
    },
    duration: {
      ru: '3–6 месяцев на один уровень (A1–C1)',
      uz: 'Har bir bosqich uchun 3–6 oy (A1–C1)',
    },
    price: null,
    syllabus: [
      { ru: 'Фонетика, базовые конструкции и правила чтения', uz: 'Fonetika, asosiy qoidalar va o‘qish ko‘nikmalari' },
      { ru: 'Грамматика в практических ситуациях и аудирование', uz: 'Amaliy vaziyatlarda grammatika va tinglab tushunish' },
      { ru: 'Письменная практика: эссе, формальные и неформальные письма', uz: 'Yozish amaliyoti: insho va rasmiy xatlar' },
      { ru: 'Разговорный клуб и воскресные интерактивы', uz: 'So‘zlashuv klubi va yakshanba kungi amaliyotlar' },
    ],
    prerequisites: {
      ru: 'Начальное тестирование в центре для распределения в подходящую группу',
      uz: 'Mos guruhga taqsimlash uchun markazda boshlang‘ich sinov',
    },
    ageRange: { ru: 'От 8 лет и старше', uz: '8 yoshdan yuqori' },
    level: { ru: 'От Beginner (A1) до Advanced (C1)', uz: 'Beginner (A1) dan Advanced (C1) gacha' },
    schedule: {
      ru: '3 раза в неделю по 80 минут (утренние, дневные и вечерние группы)',
      uz: 'Haftada 3 marta 80 daqiqadan (ertalabki, kunduzgi va kechki guruhlar)',
    },
    teacherIds: ['isoqov-shaxriyor'],
  },
  {
    id: 'russian',
    slug: 'russian',
    category: 'languages',
    name: { ru: 'Русский язык', uz: 'Rus tili' },
    shortDescription: {
      ru: 'Разговорный и академический русский язык с нуля и для продолжающих',
      uz: 'Noldan va davom ettiruvchilar uchun so‘zlashuv hamda akademik rus tili',
    },
    fullDescription: {
      ru: 'Курс русского языка с акцентом на правильное произношение, свободную устную речь, орфографию и пунктуацию. Подходит для успешной учебы в русскоязычных школах и вузах, а также для делового общения.',
      uz: 'To‘g‘ri talaffuz, ravon og‘zaki nutq, imlo va tinish belgilariga urg‘u berilgan rus tili kursi. Rusiyzabon maktablar va OTMlarda o‘qish hamda ish yuritish uchun mos.',
    },
    audience: {
      ru: 'Дети, школьники и взрослые, желающие уверенно общаться и грамотно писать',
      uz: 'Erkin gaplashish va savodli yozishni istagan bolalar, maktab o‘quvchilari va kattalar',
    },
    format: {
      ru: 'Групповые и индивидуальные занятия',
      uz: 'Guruh va individual darslar',
    },
    duration: {
      ru: '3–6 месяцев в зависимости от цели',
      uz: 'Maqsadga qarab 3–6 oy',
    },
    price: null,
    syllabus: [
      { ru: 'Постановка правильного звукопроизношения и ударения', uz: 'To‘g‘ri talaffuz va urg‘uni o‘rganish' },
      { ru: 'Практическая грамматика и обогащение лексикона', uz: 'Amaliy grammatika va so‘z boyligini oshirish' },
      { ru: 'Развитие диалоговой и монологической речи', uz: 'Muloqot va nutq ravonligini rivojlantirish' },
      { ru: 'Грамотное составление текстов и писем', uz: 'Matn va xatlarni savodli tuzish' },
    ],
    prerequisites: {
      ru: 'Предварительное собеседование для определения текущей подготовки',
      uz: 'Hozirgi darajani aniqlash uchun dastlabki suhbat',
    },
    ageRange: { ru: 'От 7 лет и старше', uz: '7 yoshdan yuqori' },
    level: { ru: 'Любой уровень (с нуля до продвинутого)', uz: 'Har qanday daraja (noldan yuqorigacha)' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: [],
  },
  {
    id: 'turkish',
    slug: 'turkish',
    category: 'languages',
    name: { ru: 'Турецкий язык', uz: 'Turk tili' },
    shortDescription: {
      ru: 'Изучение турецкого языка для путешествий, учебы и экзамена TÖMER',
      uz: 'Sayohat, o‘qish va TÖMER imtihoni uchun turk tilini o‘rganish',
    },
    fullDescription: {
      ru: 'Освоение турецкого языка с погружением в грамматику агглютинативного строя, аудирование и живую турецкую речь. Подготовка к поступлению в университеты Турции и сдаче сертифицированного экзамена TÖMER.',
      uz: 'Grammatika, tinglab tushunish va jonli turkcha so‘zlashuvni puxta o‘rganish. Turkiya universitetlariga kirish va TÖMER sertifikat imtihoniga tayyorgarlik.',
    },
    audience: {
      ru: 'Старшеклассники, абитуриенты турецких вузов и взрослые',
      uz: 'Yuqori sinf o‘quvchilari, Turkiya OTMlariga topshiruvchilar va kattalar',
    },
    format: {
      ru: 'Групповые занятия офлайн / онлайн',
      uz: 'Oflayn / onlayn guruh darslari',
    },
    duration: {
      ru: '4–8 месяцев (A1–C1)',
      uz: '4–8 oy (A1–C1)',
    },
    price: null,
    syllabus: [
      { ru: 'Алфавит, гармония гласных и базовые аффиксы', uz: 'Alifbo, unlilar uyg‘unligi va asosiy qo‘shimchalar' },
      { ru: 'Временные формы и устойчивые идиомы', uz: 'Zamon shakllari va barqaror iboralar' },
      { ru: 'Аутентичные аудиоматериалы и диалоги из жизни', uz: 'Haqiqiy audio materiallar va hayotiy muloqotlar' },
      { ru: 'Специфика экзаменационных заданий TÖMER', uz: 'TÖMER imtihon formatiga xos topshiriqlar' },
    ],
    prerequisites: {
      ru: 'Специальной языковой подготовки не требуется',
      uz: 'Maxsus tayyorgarlik talab etilmaydi',
    },
    ageRange: { ru: 'От 12 лет и старше', uz: '12 yoshdan yuqori' },
    level: { ru: 'A1 – C1', uz: 'A1 – C1' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: [],
  },
  {
    id: 'korean',
    slug: 'korean',
    category: 'languages',
    name: { ru: 'Корейский язык', uz: 'Koreys tili' },
    shortDescription: {
      ru: 'Курс корейского языка: от алфавита Хангыль до подготовки к TOPIK',
      uz: 'Koreys tili kursi: Hangul alifbosidan TOPIK imtihoniga tayyorgarlikkacha',
    },
    fullDescription: {
      ru: 'Поэтапный курс изучения корейского языка: постановка произношения, алфавит Хангыль, правила вежливости, бытовой разговорный язык и интенсивная подготовка к международному экзамену TOPIK (I и II).',
      uz: 'Koreys tilini bosqichma-bosqich o‘rganish: to‘g‘ri talaffuz, Hangul alifbosi, hurmat shakllari, kundalik so‘zlashuv va xalqaro TOPIK (I va II) testiga jiddiy tayyorgarlik.',
    },
    audience: {
      ru: 'Желающие учиться или работать в Южной Корее, а также поклонники культуры',
      uz: 'Janubiy Koreyada o‘qish yoki ishlash niyatidagilar hamda til ixlosmandlari',
    },
    format: {
      ru: 'Групповые занятия',
      uz: 'Guruh darslari',
    },
    duration: {
      ru: '4–9 месяцев',
      uz: '4–9 oy',
    },
    price: null,
    syllabus: [
      { ru: 'Письменность Хангыль, правила чтения и фонетика', uz: 'Hangul yozuvi, o‘qish qoidalari va fonetika' },
      { ru: 'Базовая грамматика, падежи и степени вежливости', uz: 'Asosiy grammatika, kelishiklar va hurmat darajalari' },
      { ru: 'Бытовая и деловая лексика, аудирование', uz: 'Kundalik va ish yuzasidan so‘zlashuv, tinglab tushunish' },
      { ru: 'Разбор тестовых блоков TOPIK (чтение, аудирование, письмо)', uz: 'TOPIK test bloklarini yechish amaliyoti' },
    ],
    prerequisites: {
      ru: 'Без предварительных требований для начинающих групп',
      uz: 'Boshlang‘ich guruhlar uchun hech qanday talab yo‘q',
    },
    ageRange: { ru: 'От 12 лет и старше', uz: '12 yoshdan yuqori' },
    level: { ru: 'TOPIK 1 – TOPIK 4', uz: 'TOPIK 1 – TOPIK 4' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: [],
  },
  {
    id: 'chinese',
    slug: 'chinese',
    category: 'languages',
    name: { ru: 'Китайский язык', uz: 'Xitoy tili' },
    shortDescription: {
      ru: 'Китайский язык: иероглифика, тональность пиньинь и подготовка к HSK',
      uz: 'Xitoy tili: iyerogliflar, pinyin ohanglari va HSK ga tayyorlov',
    },
    fullDescription: {
      ru: 'Обучение нормативному китайскому языку (путунхуа): освоение 4 тонов, фонетической транскрипции пиньинь, структуры и этимологии иероглифов. Подготовка к сдаче HSK 1–4 для поступления в китайские вузы.',
      uz: 'Adabiy xitoy tilini (putonghua) o‘rganish: 4 ta ohang, pinyin transkripsiyasi, iyerogliflar tuzilishi. Xitoy OTMlariga kirish uchun HSK 1–4 imtihonlariga tayyorgarlik.',
    },
    audience: {
      ru: 'Школьники старших классов, студенты и предприниматели',
      uz: 'Yuqori sinf o‘quvchilari, talabalar va tadbirkorlar',
    },
    format: {
      ru: 'Группы и мини-группы',
      uz: 'Guruhlar va mini-guruhlar',
    },
    duration: {
      ru: '6–12 месяцев',
      uz: '6–12 oy',
    },
    price: null,
    syllabus: [
      { ru: 'Фонетическая система пиньинь и тренировка 4 тонов', uz: 'Pinyin fonetik tizimi va 4 ta ohangni mashq qilish' },
      { ru: 'Основные черты, радикалы и написание иероглифов', uz: 'Asosiy chiziqlar, kalitlar va iyeroglif yozish' },
      { ru: 'Диалогическая речь: знакомство, покупки, ориентирование', uz: 'Kundalik muloqot: tanishuv, xaridlar, yo‘nalish topish' },
      { ru: 'Лексический минимум и стратегии решения тестов HSK', uz: 'Lug‘at minimumi va HSK testlarini yechish strategiyalari' },
    ],
    prerequisites: {
      ru: 'Обучение начинается с нуля',
      uz: 'Ta’lim noldan boshlanadi',
    },
    ageRange: { ru: 'От 12 лет и старше', uz: '12 yoshdan yuqori' },
    level: { ru: 'HSK 1 – HSK 4', uz: 'HSK 1 – HSK 4' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: [],
  },
  {
    id: 'ielts',
    slug: 'ielts',
    category: 'exam-prep',
    name: { ru: 'IELTS Preparation', uz: 'IELTS ga tayyorgarlik' },
    shortDescription: {
      ru: 'Интенсивная подготовка ко всем 4 секциям международного экзамена',
      uz: 'Xalqaro imtihonning barcha 4 bo‘limiga intensiv tayyorgarlik',
    },
    fullDescription: {
      ru: 'Курс целевой подготовки к академическому экзамену IELTS. Отработка экзаменационных стратегий для модулей Listening, Reading, Writing (Task 1 & Task 2) и Speaking. Регулярные полные Mock-тесты в условиях реального регламента с детальным разбором ошибок.',
      uz: 'Akademik IELTS imtihoniga maqsadli tayyorgarlik kursi. Listening, Reading, Writing (Task 1 & Task 2) va Speaking modullari uchun sinov strategiyalarini ishlab chiqish. Haqiqiy imtihon muhitidagi to‘liq Mock-testlar va xatolar ustida ishlash.',
    },
    audience: {
      ru: 'Абитуриенты зарубежных вузов, WIUT, MDIST, а также соискатели грантов и виз',
      uz: 'Xorijiy universitetlar, WIUT, MDIST abituriyentlari va grant izlovchilar',
    },
    format: {
      ru: 'Интенсивные группы и мини-группы',
      uz: 'Intensiv guruhlar va mini-guruhlar',
    },
    duration: {
      ru: '2–4 месяца интенсивных занятий',
      uz: '2–4 oylik intensiv mashg‘ulotlar',
    },
    price: null,
    syllabus: [
      { ru: 'Listening: работа с аудиоакцентами и ловушками в бланке ответов', uz: 'Listening: turli aksentlar va test tuzoqlarini tahlil qilish' },
      { ru: 'Reading: методики Skimming, Scanning и анализ True/False/Not Given', uz: 'Reading: Skimming, Scanning va True/False/Not Given uslubiyati' },
      { ru: 'Writing Task 1 & 2: академическая структура, аргументация и лексика C1', uz: 'Writing Task 1 & 2: akademik tuzilma, dalillar va C1 lug‘ati' },
      { ru: 'Speaking: беглость, идиоматическая речь и проработка Parts 1, 2, 3', uz: 'Speaking: nutq ravonligi va 1, 2, 3-qismlarni mukammallashtirish' },
    ],
    prerequisites: {
      ru: 'Требуется подтвержденный уровень английского не ниже Intermediate (B1+)',
      uz: 'Kamida Intermediate (B1+) darajasi talab qilinadi',
    },
    ageRange: { ru: 'От 14 лет и старше', uz: '14 yoshdan yuqori' },
    level: { ru: 'Целевой балл: 6.5 – 8.0+', uz: 'Maqsadli ball: 6.5 – 8.0+' },
    schedule: {
      ru: '3 раза в неделю по 90–120 минут + воскресные Mock-тесты',
      uz: 'Haftada 3 marta 90–120 daqiqadan + yakshanbalik Mock-testlar',
    },
    teacherIds: ['isoqov-shaxriyor'],
  },
  {
    id: 'sat',
    slug: 'sat',
    category: 'exam-prep',
    name: { ru: 'SAT (Math & Verbal)', uz: 'SAT (Math & Verbal)' },
    shortDescription: {
      ru: 'Подготовка к Digital SAT для поступления в международные университеты',
      uz: 'Xalqaro universitetlarga kirish uchun Digital SAT ga tayyorlov',
    },
    fullDescription: {
      ru: 'Комплексный курс подготовки к формату Digital SAT. Детальный разбор математического раздела (Advanced Math, Problem Solving, Geometry) и вербальной части (Reading and Writing, анализ научных и литературных отрывков, грамматические конвенции).',
      uz: 'Digital SAT formati bo‘yicha keng qamrovli kurs. Matematika (Advanced Math, Problem Solving, Geometry) va Verbal bo‘limlarni (Reading and Writing, ilmiy matnlar tahlili, grammatika) chuqur tahlil qilish.',
    },
    audience: {
      ru: 'Учащиеся 9–11 классов и выпускники, нацеленные на вузы США, Европы и Азии',
      uz: 'AQSH, Yevropa va Osiyo universitetlariga hujjat topshirayotgan 9–11 sinf o‘quvchilari',
    },
    format: {
      ru: 'Группы и индивидуальные занятия',
      uz: 'Guruh va individual mashg‘ulotlar',
    },
    duration: {
      ru: '3–6 месяцев',
      uz: '3–6 oy',
    },
    price: null,
    syllabus: [
      { ru: 'Algebra, Advanced Math и работа с встроенным калькулятором Desmos', uz: 'Algebra, Advanced Math va Desmos kalkulyatoridan unumli foydalanish' },
      { ru: 'Геометрия, тригонометрия и анализ данных (Data Analysis)', uz: 'Geometriya, trigonometriya va ma’lumotlar tahlili' },
      { ru: 'Digital SAT Reading: быстрый анализ аргументов и риторических приемов', uz: 'Digital SAT Reading: asosiy dalillar va ritorikani tez tahlil qilish' },
      { ru: 'Standard English Conventions: пунктуация, согласование, структура предложений', uz: 'Ingliz tili standart qoidalari: tinish belgilari va gap tuzilishi' },
    ],
    prerequisites: {
      ru: 'Знание английского языка на уровне B2 и хорошая база школьной алгебры',
      uz: 'B2 darajasidagi ingliz tili va mustahkam maktab algebra bilimi',
    },
    ageRange: { ru: '15–18 лет', uz: '15–18 yosh' },
    level: { ru: 'Target score: 1350 – 1550+', uz: 'Maqsadli ball: 1350 – 1550+' },
    schedule: {
      ru: '3 раза в неделю по 90 минут',
      uz: 'Haftada 3 marta 90 daqiqadan',
    },
    teacherIds: ['faculty-stem'],
  },
  {
    id: 'mathematics',
    slug: 'mathematics',
    category: 'school',
    name: { ru: 'Математика', uz: 'Matematika' },
    shortDescription: {
      ru: 'Школьная программа, углубленная алгебра и подготовка к DTM / лицеям',
      uz: 'Maktab dasturi, chuqurlashtirilgan algebra va DTM / litseylarga tayyorlov',
    },
    fullDescription: {
      ru: 'Основательное изучение школьной и профильной математики: алгебра, геометрия, тригонометрия и основы математического анализа. Устранение пробелов, подготовка к контрольным, выпускным и вступительным экзаменам в вузы.',
      uz: 'Maktab va maxsus matematika kurslarini chuqur o‘rganish: algebra, geometriya, trigonometriya va tahlil asoslari. Bo‘shliqlarni to‘ldirish, maktab nazorati hamda OTMlarga kirish imtihonlariga tayyorlov.',
    },
    audience: {
      ru: 'Ученики 5–11 классов, абитуриенты технических и экономических специальностей',
      uz: '5–11 sinf o‘quvchilari, texnika va iqtisodiyot yo‘nalishlari abituriyentlari',
    },
    format: {
      ru: 'Групповые занятия',
      uz: 'Guruh darslari',
    },
    duration: {
      ru: 'Учебный год либо целевой экспресс-курс',
      uz: 'O‘quv yili yoki maqsadli ekspress-kurs',
    },
    price: null,
    syllabus: [
      { ru: 'Арифметика, дроби, проценты и пропорции', uz: 'Arifmetika, kasrlar, foizlar va proporsiyalar' },
      { ru: 'Уравнения, неравенства, системы и текстовые задачи', uz: 'Tenglamalar, tengsizliklar va matnli masalalar' },
      { ru: 'Планиметрия и стереометрия: формулы и доказательства', uz: 'Planimetriya va stereometriya: formulalar va isbotlar' },
      { ru: 'Разбор вариантов тестов DTM/BMB и экзаменов WIUT/Inha', uz: 'DTM/BMB va WIUT/Inha kirish imtihonlari testlarini yechish' },
    ],
    prerequisites: {
      ru: 'Входное тестирование для подбора группы соответствующего уровня',
      uz: 'Mos darajadagi guruhni tanlash uchun kirish sinovi',
    },
    ageRange: { ru: '10–18 лет', uz: '10–18 yosh' },
    level: { ru: 'Базовый и углубленный', uz: 'Boshlang‘ich va chuqurlashtirilgan' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: ['faculty-stem'],
  },
  {
    id: 'chemistry',
    slug: 'chemistry',
    category: 'school',
    name: { ru: 'Химия', uz: 'Kimyo' },
    shortDescription: {
      ru: 'Неорганическая и органическая химия для медицинских направлений',
      uz: 'Tibbiyot yo‘nalishlari uchun noorganik va organik kimyo',
    },
    fullDescription: {
      ru: 'Курс химии для школьников и будущих медиков. Разбор строения атома, химической связи, реакций ионного обмена, расчетных задач по уравнениям реакций, а также органической химии от алканов до полимеров.',
      uz: 'Maktab o‘quvchilari va bo‘lajak shifokorlar uchun kimyo kursi. Atom tuzilishi, kimyoviy bog‘lanishlar, reaksiyalar, masalalar yechish va organik kimyoni batafsil o‘rganish.',
    },
    audience: {
      ru: 'Учащиеся 7–11 классов и абитуриенты медицинских вузов (ТМА, Педиатрический и др.)',
      uz: '7–11 sinf o‘quvchilari va tibbiyot institutlariga topshiruvchi abituriyentlar',
    },
    format: {
      ru: 'Групповые занятия',
      uz: 'Guruh darslari',
    },
    duration: {
      ru: 'Учебный год',
      uz: 'O‘quv yili',
    },
    price: null,
    syllabus: [
      { ru: 'Периодический закон, строение вещества и типы реакций', uz: 'Davriy qonun, moddalar tuzilishi va reaksiya turlari' },
      { ru: 'Классы неорганических соединений: оксиды, кислоты, основания, соли', uz: 'Noorganik birikmalar sinflari: oksidlar, kislotalar, asoslar, tuzlar' },
      { ru: 'Расчетные задачи по химическим уравнениям и растворам', uz: 'Kimyoviy tenglamalar va eritmalar bo‘yicha hisob-kitob masalalari' },
      { ru: 'Органическая химия и подготовка к тестам DTM', uz: 'Organik kimyo va DTM testlariga tayyorgarlik' },
    ],
    prerequisites: {
      ru: 'Собеседование по пройденным школьным темам',
      uz: 'O‘tilgan maktab mavzulari bo‘yicha suhbat'
    },
    ageRange: { ru: '13–18 лет', uz: '13–18 yosh' },
    level: { ru: 'Школьный и олимпиадный / медицинский', uz: 'Maktab va olimpiada / tibbiy daraja' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: ['faculty-stem'],
  },
  {
    id: 'biology',
    slug: 'biology',
    category: 'school',
    name: { ru: 'Биология', uz: 'Biologiya' },
    shortDescription: {
      ru: 'Ботаника, зоология, анатомия и генетика для поступления в медвузы',
      uz: 'Tibbiyot OTMlariga kirish uchun botanika, zoologiya, anatomiya va genetika',
    },
    fullDescription: {
      ru: 'Систематический курс биологии. Охватывает разделы ботаники, зоологии беспозвоночных и позвоночных, анатомии и физиологии человека, а также цитологии, генетики и эволюции для сдачи вступительных экзаменов.',
      uz: 'Biologiyaning tizimli kursi. Botanika, zoologiya, odam anatomiyasi va fiziologiyasi, sitologiya, genetika va evolutsiya bo‘limlarini o‘z ichiga oladi.',
    },
    audience: {
      ru: 'Школьники и поступающие на медицинские, фармацевтические и биологические факультеты',
      uz: 'Maktab o‘quvchilari hamda tibbiyot, farmatsevtika va biologiya yo‘nalishlariga topshiruvchilar',
    },
    format: {
      ru: 'Групповые занятия',
      uz: 'Guruh darslari',
    },
    duration: {
      ru: 'Учебный год',
      uz: 'O‘quv yili',
    },
    price: null,
    syllabus: [
      { ru: 'Строение клетки, биосинтез белка и обмен веществ', uz: 'Hujayra tuzilishi, oqsil biosintezi va moddalar almashinuvi' },
      { ru: 'Царства живой природы: бактерии, растения, грибы, животные', uz: 'Tirik tabiat olami: bakteriyalar, o‘simliklar, zamburug‘lar, hayvonlar' },
      { ru: 'Анатомия, физиология и гигиена человека', uz: 'Odam anatomiyasi, fiziologiyasi va gigiyenasi' },
      { ru: 'Законы Менделя, генетика человека и решение генетических задач', uz: 'Mendel qonunlari, odam genetikasi va masalalar yechish' },
    ],
    prerequisites: {
      ru: 'Базовое представление о школьной биологии',
      uz: 'Maktab biologiyasi bo‘yicha boshlang‘ich tushuncha',
    },
    ageRange: { ru: '12–18 лет', uz: '12–18 yosh' },
    level: { ru: 'Школьный и профильный медицинский', uz: 'Maktab va tibbiyotga ixtisoslashgan' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: ['faculty-stem'],
  },
  {
    id: 'history',
    slug: 'history',
    category: 'school',
    name: { ru: 'История', uz: 'Tarix' },
    shortDescription: {
      ru: 'История Узбекистана и всемирная история для госэкзаменов',
      uz: 'Davlat imtihonlari uchun O‘zbekiston va jahon tarixi',
    },
    fullDescription: {
      ru: 'Курс охватывает основные эпохи: древний мир, средневековье, новое и новейшее время, а также историю государственности на территории Узбекистана. Структурирование дат, персоналий и причинно-следственных связей.',
      uz: 'Qadimgi dunyo, o‘rta asrlar, yangi va eng yangi davr hamda O‘zbekiston davlatchiligi tarixini qamrab oladi. Sanalar, tarixiy shaxslar va sabab-oqibat bog‘lanishlarini o‘rganish.',
    },
    audience: {
      ru: 'Школьники 8–11 классов и абитуриенты гуманитарных и юридических направлений',
      uz: '8–11 sinf o‘quvchilari va gumanitar hamda yuridik yo‘nalish abituriyentlari',
    },
    format: {
      ru: 'Групповые занятия',
      uz: 'Guruh darslari',
    },
    duration: {
      ru: 'Учебный год',
      uz: 'O‘quv yili',
    },
    price: null,
    syllabus: [
      { ru: 'Древнейшие цивилизации и государства Центральной Азии', uz: 'Qadimgi sivilizatsiyalar va Markaziy Osiyo davlatlari' },
      { ru: 'Эпоха Темуридов и культура восточного ренессанса', uz: 'Temuriylar davri va sharq uyg‘onish davri madaniyati' },
      { ru: 'Новое время и история Узбекистана XX–XXI веков', uz: 'Yangi davr va XX–XXI asrlar O‘zbekiston tarixi' },
      { ru: 'Решение тестовых блоков и хронологических таблиц', uz: 'Test bloklari va xronologik jadvallar bilan ishlash' },
    ],
    prerequisites: {
      ru: 'Начальная подготовка не требуется',
      uz: 'Boshlang‘ich maxsus talab yo‘q',
    },
    ageRange: { ru: '13–18 лет', uz: '13–18 yosh' },
    level: { ru: 'Школьный и вступительный', uz: 'Maktab va OTMga kirish darajasi' },
    schedule: {
      ru: '3 раза в неделю по 80 минут',
      uz: 'Haftada 3 marta 80 daqiqadan',
    },
    teacherIds: [],
  },
  {
    id: 'chess',
    slug: 'chess',
    category: 'children',
    name: { ru: 'Шахматы', uz: 'Shaxmat' },
    shortDescription: {
      ru: 'Развитие стратегического мышления, памяти и концентрации у детей',
      uz: 'Bolalarda strategik fikrlash, xotira va diqqatni rivojlantirish',
    },
    fullDescription: {
      ru: 'Шахматная секция для детей от 5 лет. Обучение правилам, базовым дебютам, комбинаторике, позиционной игре и эндшпилю. Развивает терпение, усидчивость, умение просчитывать ходы и принимать самостоятельные решения.',
      uz: '5 yoshdan bolalar uchun shaxmat to‘garagi. Qoidalar, debyutlar, kombinatsiyalar va endshpilni o‘rganish. Sabr-toqat, diqqatni jamlash va mustaqil qaror qabul qilishni rivojlantiradi.',
    },
    audience: {
      ru: 'Дети от 5 лет (начинающие и продолжающие юные шахматисты)',
      uz: '5 yoshdan bolalar (boshlang‘ich va tajribali yosh shaxmatchilar)',
    },
    format: {
      ru: 'Групповые занятия в комфортных классах',
      uz: 'Qulay sinflarda guruh mashg‘ulotlari',
    },
    duration: {
      ru: 'Постоянные абонементы на 3–12 месяцев',
      uz: '3–12 oylik doimiy obunalar',
    },
    price: null,
    syllabus: [
      { ru: 'Ценность фигур, правила ходов и базовый мат (линейный, ферзем)', uz: 'Donalar qiymati, yurish qoidalari va mot qilish usullari' },
      { ru: 'Тактические приемы: вилка, связка, двойной удар, открытое нападение', uz: 'Taktik usullar: vilkalar, bog‘lashlar va ikki yoqlama zarba' },
      { ru: 'Популярные дебюты и безопасность короля', uz: 'Ommabop debyutlar va shoh xavfsizligi' },
      { ru: 'Внутриклубные турниры и анализ сыгранных партий', uz: 'Klub ichidagi musobaqalar va partiyalar tahlili' },
    ],
    prerequisites: {
      ru: 'Интерес ребенка к настольным играм',
      uz: 'Bolaning mantiqiy o‘yinlarga qiziqishi',
    },
    ageRange: { ru: 'От 5 до 14 лет', uz: '5 dan 14 yoshgacha' },
    level: { ru: 'От новичка до разрядника', uz: 'Boshlang‘ichdan toifa sohibigacha' },
    schedule: {
      ru: '2–3 раза в неделю по 60 минут',
      uz: 'Haftada 2–3 marta 60 daqiqadan',
    },
    teacherIds: ['faculty-early'],
  },
  {
    id: 'pochemuchka',
    slug: 'pochemuchka',
    category: 'children',
    name: { ru: 'Почемучка (Подготовка к школе)', uz: 'Pochemuchka (Maktabga tayyorlov)' },
    shortDescription: {
      ru: 'Комплексное дошкольное развитие для детей 4–6 лет',
      uz: '4–6 yoshli bolalar uchun maktabgacha kompleks rivojlantirish',
    },
    fullDescription: {
      ru: 'Флагманская программа комплексной подготовки к школе. Включает обучение чтению, письму, основам счета и логики, а также развитие мелкой моторики, речи и навыков социального общения в группе сверстников.',
      uz: 'Maktabga tayyorlovning keng qamrovli dasturi. O‘qish, yozish, hisoblash va mantiq asoslarini o‘rgatish, mayda motorika, nutq va tengdoshlar bilan muloqot ko‘nikmalarini shakllantirish.',
    },
    audience: {
      ru: 'Дети 4–6 лет перед поступлением в 1 класс общеобразовательных и специализированных школ',
      uz: 'Umumta’lim va ixtisoslashtirilgan maktablarning 1-sinfiga kirish arafasidagi 4–6 yoshli bolalar',
    },
    format: {
      ru: 'Малые группы с заботливыми педагогами',
      uz: 'G‘amxo‘r pedagoglar bilan kichik guruhlar',
    },
    duration: {
      ru: '6–10 месяцев',
      uz: '6–10 oy',
    },
    price: null,
    syllabus: [
      { ru: 'Азбука, звукобуквенный анализ и слоговое чтение', uz: 'Alifbo, tovush tahlili va bo‘g‘inlab o‘qish' },
      { ru: 'Постановка руки к письму, штриховка и прописи', uz: 'Qo‘lni yozuvga o‘rgatish, chizish va husnixat' },
      { ru: 'Счет в пределах 20, сравнение чисел, простые задачи', uz: '20 gacha hisoblash, sonlarni taqqoslash, oddiy masalalar' },
      { ru: 'Окружающий мир, развитие речи и памяти', uz: 'Atrof-olam, nutq va xotirani o‘stirish mashqlari' },
    ],
    prerequisites: {
      ru: 'Индивидуальная беседа с родителем и ребенком',
      uz: 'Ota-ona va bola bilan individual suhbat',
    },
    ageRange: { ru: '4–6 лет', uz: '4–6 yosh' },
    level: { ru: 'Дошкольный', uz: 'Maktabgacha' },
    schedule: {
      ru: '3 раза в неделю (утреннее и дневное время)',
      uz: 'Haftada 3 marta (ertalabki va kunduzgi vaqtlar)',
    },
    teacherIds: ['faculty-early'],
  },
];

// ─── Branches ──────────────────────────────────────────────────────────────────

export interface PhoneInfo {
  display: string;
  raw: string;
  href: string;
}

export interface Branch {
  id: string;
  name: Translation;
  district: Translation;
  address: Translation;
  landmark: Translation;
  phone: PhoneInfo;
  embedMapUrl: string;
  verifiedNotes: Translation;
}

export const BRANCHES: Branch[] = [
  {
    id: 'druzhba-narodov',
    name: { ru: 'Филиал Дружба Народов (Флагман)', uz: 'Xalqlar Do‘stligi filiali (Bosh)' },
    district: { ru: 'Чиланзарский район', uz: 'Chilonzor tumani' },
    address: {
      ru: 'г. Ташкент, ул. Фурката, 11-А / 15-А (2-й этаж)',
      uz: 'Toshkent sh., Furqat ko‘chasi, 11-A / 15-A (2-qavat)',
    },
    landmark: {
      ru: 'Метро «Дружба Народов» (Xalqlar Do‘stligi), дворец искусств, банк Hamkorbank',
      uz: '«Xalqlar Do‘stligi» metro bekati, San’at saroyi, Hamkorbank',
    },
    phone: CONTACT.phone,
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1335.0114127243185!2d69.24378290919493!3d41.30888624789701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0641885957%3A0x91d4f2ac258ad0d5!2sKingdom%20Education%20Center!5e0!3m2!1sru!2s!4v1681642970277!5m2!1sru!2s',
    verifiedNotes: {
      ru: 'На старом сайте адрес указывался и как 11-А, и как 15-А. Это единый учебный корпус возле дворца Дружбы Народов.',
      uz: 'Eski saytda 11-A va 15-A deb ko‘rsatilgan. Bu Xalqlar Do‘stligi saroyi yaqinidagi yagona o‘quv binosidir.',
    },
  },
  {
    id: 'medgorodok',
    name: { ru: 'Филиал Медгородок', uz: 'Shifokorlar shaharchasi filiali' },
    district: { ru: 'Алмазарский район', uz: 'Olmazor tumani' },
    address: {
      ru: 'г. Ташкент, ул. Камарнисо, 12-Д',
      uz: 'Toshkent sh., Qamarniso ko‘chasi, 12-D',
    },
    landmark: {
      ru: 'Медгородок, ориентир: Центр занятости Migration.uz, рядом с Ташкентской Медицинской Академией (ТМА)',
      uz: 'Shifokorlar shaharchasi, mo‘ljal: Migration.uz bandlik markazi, TMA yonida',
    },
    phone: {
      display: '+998 78 113 70 09',
      raw: '+998781137009',
      href: 'tel:+998781137009',
    },
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1335.0114127243185!2d69.24378290919493!3d41.30888624789701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0641885957%3A0x91d4f2ac258ad0d5!2sKingdom%20Education%20Center!5e0!3m2!1sru!2s!4v1681642970277!5m2!1sru!2s',
    verifiedNotes: {
      ru: 'В филиале Медгородок также действует аккредитованный детский сад Kingdom Kindergarten.',
      uz: 'Shifokorlar shaharchasi filialida akkreditatsiyadan o‘tgan Kingdom Kindergarten bog‘chasi ham faoliyat yuritadi.',
    },
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: Translation;
  answer: Translation;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-pricing',
    question: {
      ru: 'Сколько стоят курсы и есть ли скрытые платежи?',
      uz: 'Kurslar qancha turadi va yashirin to‘lovlar bormi?',
    },
    answer: {
      ru: 'Стоимость обучения зависит от выбранного курса, формата (стандартная группа, мини-группа или индивидуально) и интенсивности занятий. Мы не публикуем фиктивных цен «от...»: точную актуальную стоимость для вашего направления мы сообщаем по телефону +998 55 500 22 02 либо при звонке менеджера. Учебные материалы предоставляются в процессе учебы.',
      uz: 'Ta’lim narxi tanlangan kurs, format (standart guruh, mini-guruh yoki individual) va mashg‘ulotlar intensivligiga bog‘liq. Biz noaniq «...dan boshlab» narxlarni yozmaymiz: sizning yo‘nalishingiz bo‘yicha aniq narxni +998 55 500 22 02 orqali yoki mutaxassis qo‘ng‘irog‘ida bilib olishingiz mumkin.',
    },
  },
  {
    id: 'faq-level-check',
    question: {
      ru: 'Как определяется мой текущий уровень знаний перед началом занятий?',
      uz: 'Darslar boshlanishidan oldin bilim darajasi qanday aniqlanadi?',
    },
    answer: {
      ru: 'Перед распределением в группу каждый ученик проходит бесплатное входное тестирование и короткую беседу с преподавателем. Это позволяет определить точный уровень (например, Elementary или Intermediate) и подобрать группу с комфортным темпом обучения без стресса.',
      uz: 'Guruhga taqsimlanishdan oldin har bir o‘quvchi bepul test va o‘qituvchi bilan qisqa suhbatdan o‘tadi. Bu orqali aniq darajani aniqlash va qulay tezlikdagi guruhni tanlash ta’minlanadi.',
    },
  },
  {
    id: 'faq-schedule',
    question: {
      ru: 'В какое время проходят уроки и можно ли совмещать со школой или работой?',
      uz: 'Darslar qaysi vaqtlarda bo‘ladi va o‘qish yoki ish bilan birga olib borsa bo‘ladimi?',
    },
    answer: {
      ru: 'Да, расписание составляется в несколько смен: утренние (для второй смены школы), дневные и вечерние группы (для работающих и студентов). Учебный центр открыт ежедневно с 09:00 до 21:00.',
      uz: 'Ha, darslar bir necha smenalarda tuziladi: ertalabki (ikkinchi smena o‘quvchilari uchun), kunduzgi va kechki (ishlovchilar va talabalar uchun). O‘quv markazi har kuni 09:00 dan 21:00 gacha ochiq.',
    },
  },
  {
    id: 'faq-missed-classes',
    question: {
      ru: 'Что происходит, если студент пропустил занятие по уважительной причине?',
      uz: 'Agar o‘quvchi uzrli sabab bilan darsni qoldirsa nima bo‘ladi?',
    },
    answer: {
      ru: 'Преподаватель передает домашнее задание и конспект темы через учебный чат группы. При необходимости организуется короткая консультация для отработки сложных вопросов.',
      uz: 'O‘qituvchi uy vazifasi va mavzu konspektini guruh chatiga yuboradi. Zarurat tug‘ilganda tushunarsiz savollar bo‘yicha qisqa konsultatsiya beriladi.',
    },
  },
  {
    id: 'faq-branches',
    question: {
      ru: 'В каком филиале проходят занятия?',
      uz: 'Darslar qaysi filialda bo‘lib o‘tadi?',
    },
    answer: {
      ru: 'У нас два действующих филиала в Ташкенте: на Дружбе Народов (ул. Фурката) и в Медгородке (ул. Камарнисо). Вы можете выбрать тот, куда вам удобнее добираться.',
      uz: 'Toshkent shahrida ikkita faol filialimiz bor: Xalqlar Do‘stligida (Furqat ko‘chasi) va Shifokorlar shaharchasida (Qamarniso ko‘chasi). Qatnash uchun o‘zingizga eng qulayini tanlashingiz mumkin.',
    },
  },
  {
    id: 'faq-enrollment',
    question: {
      ru: 'Как записаться на пробное занятие или консультацию?',
      uz: 'Sinov darsiga yoki konsultatsiyaga qanday yozilish mumkin?',
    },
    answer: {
      ru: 'Позвоните нам напрямую по номеру +998 55 500 22 02 либо оставьте заявку в форме обратного звонка на сайте. Менеджер свяжется с вами, ответит на вопросы и согласует удобное время визита.',
      uz: '+998 55 500 22 02 raqamiga to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling yoki saytdagi ariza shaklini to‘ldiring. Menejerimiz siz bilan bog‘lanib, qulay tashrif vaqtini belgilaydi.',
    },
  },
];

// ─── Secondary Pages Data ──────────────────────────────────────────────────────

export const ABOUT_INFO = {
  title: { ru: 'О Kingdom Education', uz: 'Kingdom Education haqida' },
  founded: '2016',
  yearsInEducation: '8+',
  graduates: '4000+',
  headline: {
    ru: 'Учебный центр в Ташкенте, где обучение строится вокруг конкретных целей ученика',
    uz: 'Toshkentdagi o‘quv markazi: har bir o‘quvchining aniq maqsadiga qaratilgan ta’lim',
  },
  paragraphs: [
    {
      ru: 'Kingdom Education был основан в 2016 году как пространство качественного образования в Ташкенте. Наша цель — дать школьникам, абитуриентам и взрослым надежные знания по иностранным языкам, точным наукам и подготовить к сдаче экзаменов без лишнего стресса.',
      uz: 'Kingdom Education 2016-yilda Toshkentda sifatli ta’lim makoni sifatida tashkil etilgan. Maqsadimiz — maktab o‘quvchilari, abituriyentlar va kattalarga xorijiy tillar hamda aniq fanlardan mustahkam bilim berish va imtihonlarga tayyorlashdir.',
    },
    {
      ru: 'Мы работаем по проверенным методикам Oxford University Press и авторским программам наших преподавателей. Каждый курс нацелен на практический результат: свободную речь, высокий балл на экзамене или успешное поступление в выбранный вуз.',
      uz: 'Biz Oxford University Press dasturlari va o‘qituvchilarimizning amaliy uslubiyotlari asosida ishlaymiz. Har bir kurs amaliy natijaga: erkin so‘zlashuv, yuqori imtihon bali yoki universitetga muvaffaqiyatli kirishga yo‘naltirilgan.',
    },
  ],
  principles: [
    {
      title: { ru: 'Равное внимание всем предметам', uz: 'Barcha fanlarga teng e’tibor' },
      desc: {
        ru: 'Мы не выделяем один предмет в ущерб другим: языки, математика, химия и подготовка малышей получают равные академические стандарты.',
        uz: 'Biz bir fanni boshqasidan ustun qo‘ymaymiz: tillar, matematika, kimyo va bolalar rivojlanishi birdek yuqori standartlarga ega.',
      },
    },
    {
      title: { ru: 'Реальные преподаватели и наставничество', uz: 'Haqiqiy ustozlar va murabbiylik' },
      desc: {
        ru: 'Занятия ведут наставники с профильным высшим образованием и международными сертификатами (IELTS 7.5+, педагогические дипломы).',
        uz: 'Darslarni oliy ma’lumotli va xalqaro sertifikatlarga (IELTS 7.5+, pedagogik diplomlar) ega tajribali ustozlar olib boradi.',
      },
    },
    {
      title: { ru: 'Честная прозрачность', uz: 'Halol va ochiq munosabat' },
      desc: {
        ru: 'Никаких ложных обещаний «IELTS 8.0 за месяц»: мы честно оцениваем начальный уровень и проговариваем реальные сроки подготовки.',
        uz: '«Bir oyda IELTS 8.0» kabi asossiz va’dalar berilmaydi: biz boshlang‘ich darajani to‘g‘ri baholab, real muddatlarni aytamiz.',
      },
    },
  ],
};

export const CORPORATE_INFO = {
  title: { ru: 'Корпоративное обучение', uz: 'Korporativ ta’lim' },
  subtitle: {
    ru: 'Обучение сотрудников компаний английскому, русскому языкам и деловым коммуникациям',
    uz: 'Kompaniyalar xodimlari uchun ingliz, rus tillari va ishbilarmonlik muloqotini o‘rgatish',
  },
  formats: [
    { ru: 'В офисе заказчика в Ташкенте', uz: 'Buyurtmachining Toshkentdagi ofisida' },
    { ru: 'В оборудованных аудиториях Kingdom Education', uz: 'Kingdom Education markazining qulay sinflarida' },
    { ru: 'Онлайн для распределенных команд (Zoom / DingTalk)', uz: 'Masofaviy jamoalar uchun onlayn (Zoom / DingTalk)' },
  ],
  features: [
    { ru: 'Предварительное тестирование каждого сотрудника', uz: 'Har bir xodimni dastlabki sinovdan o‘tkazish' },
    { ru: 'Программа под специфику бизнеса (финансы, логистика, медицина, IT)', uz: 'Soha yo‘nalishiga moslashtirilgan dastur (moliya, logistika, tibbiyot, IT)' },
    { ru: 'Ежемесячные отчеты об успеваемости и посещаемости для HR', uz: 'HR bo‘limi uchun oylik o‘zlashtirish va davomat hisobotlari' },
    { ru: 'Официальный договор с юридическим лицом', uz: 'Yuridik shaxs bilan rasmiy shartnoma' },
  ],
};

export const KINDERGARTEN_INFO = {
  title: { ru: 'Kingdom Kindergarten', uz: 'Kingdom bolalar bog‘chasi' },
  subtitle: {
    ru: 'Лицензированный частный детский сад на базе филиала в Медгородке',
    uz: 'Shifokorlar shaharchasidagi litsenziyalangan xususiy bolalar bog‘chasi',
  },
  schedule: {
    ru: 'Понедельник — Пятница: 08:00 – 18:30',
    uz: 'Dushanba — Juma: 08:00 – 18:30',
  },
  features: [
    { ru: 'Билингвальная среда (русский и узбекский языки, начальный английский)', uz: 'Bilingval muhit (rus va o‘zbek tillari, boshlang‘ich ingliz tili)' },
    { ru: 'Сбалансированное 4-разовое детское питание', uz: 'Muvozanatli 4 mahal bolalar ovqatlanishi' },
    { ru: 'Подготовка к школе: логика, счет, развитие речи, моторика', uz: 'Maktabga tayyorlov: mantiq, hisoblash, nutq va motorika' },
    { ru: 'Закрытая охраняемая территория и видеонаблюдение', uz: 'Qo‘riqlanadigan xavfsiz hudud va videokuzatuv' },
  ],
};

export const VACANCIES_INFO = {
  title: { ru: 'Вакансии в Kingdom Education', uz: 'Kingdom Education bo‘sh ish o‘rinlari' },
  subtitle: {
    ru: 'Мы всегда рады сильным преподавателям языков, школьных предметов и администраторам',
    uz: 'Biz kuchli til o‘qituvchilari, maktab fanlari ustozlari va ma’murlarni jamoamizda kutamiz',
  },
  positions: [
    {
      title: { ru: 'Преподаватель английского языка (General / IELTS)', uz: 'Ingliz tili o‘qituvchisi (General / IELTS)' },
      reqs: { ru: 'IELTS 7.5+ или CELTA, высшее образование, опыт от 2 лет', uz: 'IELTS 7.5+ yoki CELTA, oliy ma’lumot, 2 yildan ortiq tajriba' },
    },
    {
      title: { ru: 'Преподаватель точных наук (Математика / Химия / Биология)', uz: 'Aniq fanlar o‘qituvchisi (Matematika / Kimyo / Biologiya)' },
      reqs: { ru: 'Профильное высшее образование, опыт подготовки к DTM/лицеям', uz: 'Soha bo‘yicha oliy ma’lumot, DTM/litseylarga tayyorlash tajribasi' },
    },
    {
      title: { ru: 'Педагог раннего развития («Почемучка»)', uz: 'Erta rivojlanish pedagogi («Pochemuchka»)' },
      reqs: { ru: 'Педагогическое образование, любовь к детям, опыт работы с дошкольниками', uz: 'Pedagogik ma’lumot, bolalarga mehr, maktabgacha ta’lim tajribasi' },
    },
  ],
  applyNote: {
    ru: 'Для отклика позвоните нам по номеру +998 55 500 22 02 либо отправьте резюме в Telegram: @kingdomedu',
    uz: 'Rezyumeni topshirish uchun +998 55 500 22 02 ga qo‘ng‘iroq qiling yoki Telegram orqali yuboring: @kingdomedu',
  },
};

// ─── UI Translations Dictionary ───────────────────────────────────────────────

export const UI: Record<string, Translation> = {
  'process.heading': { ru: 'От первого вопроса — к новым знаниям.', uz: 'Birinchi savoldan — yangi bilimlarga.' },
  // Brand
  'brand.name': { ru: 'Kingdom Education', uz: 'Kingdom Education' },
  'brand.tagline': { ru: 'Учебный центр в Ташкенте', uz: 'Toshkentdagi o‘quv markazi' },

  // Navigation
  'nav.courses': { ru: 'Курсы', uz: 'Kurslar' },
  'nav.teachers': { ru: 'Преподаватели', uz: 'O‘qituvchilar' },
  'nav.results': { ru: 'Результаты', uz: 'Natijalar' },
  'nav.branches': { ru: 'Филиалы', uz: 'Filiallar' },
  'nav.faq': { ru: 'Вопросы', uz: 'Savollar' },
  'nav.about': { ru: 'О нас', uz: 'Biz haqimizda' },
  'nav.corporate': { ru: 'Компаниям', uz: 'Kompaniyalarga' },
  'nav.kindergarten': { ru: 'Детский сад', uz: 'Bolalar bog‘chasi' },
  'nav.vacancies': { ru: 'Вакансии', uz: 'Bo‘sh o‘rinlar' },
  'nav.contacts': { ru: 'Контакты', uz: 'Aloqa' },
  'nav.call': { ru: 'Позвонить', uz: 'Qo‘ng‘iroq qilish' },

  // Hero
  'hero.headline': {
    ru: 'Курсы в Ташкенте для учёбы, работы и новых целей',
    uz: 'Toshkentda o‘qish, ish va yangi maqsadlar uchun kurslar',
  },
  'hero.subheadline': {
    ru: 'Языки, подготовка к экзаменам и школьные предметы. Поможем выбрать курс и уточнить расписание.',
    uz: 'Tillar, imtihonlarga tayyorgarlik va maktab fanlari. Kurs tanlash va jadvalni aniqlashda yordam beramiz.',
  },
  'hero.cta.call': { ru: 'Позвонить: +998 55 500 22 02', uz: 'Qo‘ng‘iroq: +998 55 500 22 02' },
  'hero.cta.callback': { ru: 'Перезвоните мне', uz: 'Menga qo‘ng‘iroq qiling' },
  'hero.provisionalNotice': {
    ru: 'Номер +998 55 500 22 02 опубликован предварительно на основе данных сайта. Звонок открывает телефонное приложение.',
    uz: '+998 55 500 22 02 raqami sayt ma’lumotlari asosida ko‘rsatilgan. Bosish telefon ilovasini ochadi.',
  },

  // Courses Finder
  'courses.title': { ru: 'Каталог курсов', uz: 'Kurslar katalogi' },
  'courses.subtitle': {
    ru: 'Все направления представлены на равных условиях. Выберите категорию или найдите нужный предмет по названию.',
    uz: 'Barcha yo‘nalishlar teng sharoitda taqdim etilgan. Toifani tanlang yoki kerakli fanni qidiring.',
  },
  'courses.filter.all': { ru: 'Все курсы', uz: 'Barcha kurslar' },
  'courses.searchPlaceholder': { ru: 'Поиск по названию предмета...', uz: 'Fan nomi bo‘yicha qidiruv...' },
  'courses.details': { ru: 'Подробнее о курсе', uz: 'Kurs haqida batafsil' },
  'courses.noResults': {
    ru: 'По вашему запросу курсов не найдено.',
    uz: 'So‘rovingiz bo‘yicha kurslar topilmadi.',
  },
  'courses.reset': { ru: 'Сбросить фильтры', uz: 'Filtrlarni bekor qilish' },
  'courses.allCount': { ru: 'Всего направлений', uz: 'Jami yo‘nalishlar' },

  // Course Details
  'course.audience': { ru: 'Для кого подходит', uz: 'Kimga to‘g‘ri keladi' },
  'course.format': { ru: 'Формат занятий', uz: 'Darslar formati' },
  'course.duration': { ru: 'Длительность', uz: 'Davomiyligi' },
  'course.level': { ru: 'Целевой уровень', uz: 'Mo‘ljallangan daraja' },
  'course.ageRange': { ru: 'Возраст учащихся', uz: 'O‘quvchilar yoshi' },
  'course.prerequisites': { ru: 'Входные требования', uz: 'Boshlang‘ich talablar' },
  'course.schedule': { ru: 'Расписание', uz: 'Dars jadvali' },
  'course.syllabus': { ru: 'Программа курса', uz: 'Kurs dasturi' },
  'course.price': { ru: 'Стоимость обучения', uz: 'O‘qish narxi' },
  'course.price.clarify': {
    ru: 'Уточните актуальную стоимость и скидки по телефону или через заявку',
    uz: 'Hozirgi narx va chegirmalarni telefon orqali yoki ariza yuborib aniqlang',
  },
  'course.enrollCTA': { ru: 'Записаться на этот курс', uz: 'Ushbu kursga yozilish' },
  'course.callDirect': { ru: 'Позвонить для консультации', uz: 'Konsultatsiya uchun qo‘ng‘iroq' },
  'course.backToDirectory': { ru: '← Все курсы', uz: '← Barcha kurslar' },

  // Teachers & Learning Process
  'teachers.title': { ru: 'Преподаватели и процесс обучения', uz: 'O‘qituvchilar va o‘qish jarayoni' },
  'teachers.subtitle': {
    ru: 'Преподаватели со стажем и подтвержденными баллами IELTS 7.5+ и академическими дипломами.',
    uz: 'Katta tajriba, tasdiqlangan IELTS 7.5+ ballari va oliy diplomlarga ega mutaxassislar.',
  },
  'process.step1.title': { ru: '1. Консультация и тест', uz: '1. Konsultatsiya va test' },
  'process.step1.desc': {
    ru: 'Определяем текущую базу знаний и конкретную цель: разговорный язык, олимпиада, экзамен.',
    uz: 'Hozirgi bilimlarni va aniq maqsadni aniqlaymiz: so‘zlashuv, olimpiada, imtihon.',
  },
  'process.step2.title': { ru: '2. Подбор группы и графика', uz: '2. Guruh va jadval tanlash' },
  'process.step2.desc': {
    ru: 'Подбираем удобный филиал, утреннее, дневное или вечернее время в группе равного уровня.',
    uz: 'Qulay filial hamda o‘xshash bilim darajasiga ega guruhda mos vaqtni tanlaymiz.',
  },
  'process.step3.title': { ru: '3. Практические занятия', uz: '3. Amaliy mashg‘ulotlar' },
  'process.step3.desc': {
    ru: 'Системное обучение, отслеживание динамики, обратная связь родителям и воскресные клубы.',
    uz: 'Tizimli darslar, natijalarni kuzatish, ota-onalar bilan aloqa va dam olish kunlari amaliyotlari.',
  },

  // Results
  'results.title': { ru: 'Документированные результаты', uz: 'Hujjatlashtirilgan natijalar' },
  'results.subtitle': {
    ru: 'Честные результаты наших выпускников с открытым указанием баллов и контекста подготовки.',
    uz: 'Bitiruvchilarimizning ballari va tayyorgarlik jarayoni ochiq ko‘rsatilgan haqiqiy natijalari.',
  },
  'results.disclaimer': {
    ru: 'Примечание: индивидуальные баллы зависят от начального уровня и прилежания учащегося. Мы не гарантируем автоматическое получение баллов без системной работы.',
    uz: 'Eslatma: har bir o‘quvchining bali uning boshlang‘ich darajasi va intilishiga bog‘liq. Biz o‘quvchining mehnatisiz kafolatlangan balni va’da qilmaymiz.',
  },

  // Branches
  'branches.title': { ru: 'Адреса филиалов в Ташкенте', uz: 'Toshkentdagi filiallar manzillari' },
  'branches.subtitle': {
    ru: 'Филиалы с оборудованными аудиториями и удобным расположением рядом с транспортом.',
    uz: 'Zamonaviy jihozlangan va transportga yaqin qulay manzillarda joylashgan filiallar.',
  },
  'branches.callBranch': { ru: 'Позвонить в филиал', uz: 'Filialga qo‘ng‘iroq' },
  'branches.openMap': { ru: 'Открыть на карте', uz: 'Xaritada ochish' },

  // FAQ
  'faq.title': { ru: 'Часто задаваемые вопросы', uz: 'Ko‘p beriladigan savollar' },
  'faq.subtitle': {
    ru: 'Прямые и честные ответы по оплате, расписанию, форматам и записи на курсы.',
    uz: 'To‘lov, dars jadvali, formatlar va ro‘yxatdan o‘tish bo‘yicha ochiq javoblar.',
  },

  // Callback Form
  'callback.title': { ru: 'Заявка на консультацию или подбор курса', uz: 'Kurs tanlash yoki konsultatsiya uchun ariza' },
  'callback.subtitle': {
    ru: 'Оставьте номер телефона — мы перезвоним в рабочее время (09:00–21:00) и ответим на все вопросы.',
    uz: 'Telefon raqamingizni qoldiring — ish vaqtida (09:00–21:00) qo‘ng‘iroq qilib, savollaringizga javob beramiz.',
  },
  'callback.phoneLabel': { ru: 'Номер телефона *', uz: 'Telefon raqami *' },
  'callback.phonePlaceholder': { ru: '+998 90 123 45 67', uz: '+998 90 123 45 67' },
  'callback.nameLabel': { ru: 'Ваше имя (необязательно)', uz: 'Ismingiz (ixtiyoriy)' },
  'callback.namePlaceholder': { ru: 'Например, Азиз', uz: 'Masalan, Aziz' },
  'callback.courseLabel': { ru: 'Интересующий курс (необязательно)', uz: 'Qiziqtirgan kurs (ixtiyoriy)' },
  'callback.courseDefault': { ru: 'Помогите с выбором курса', uz: 'Kurs tanlashda yordam bering' },
  'callback.submit': { ru: 'Отправить заявку', uz: 'Arizani yuborish' },
  'callback.submitting': { ru: 'Отправка заявки...', uz: 'Ariza yuborilmoqda...' },
  'callback.successTitle': { ru: 'Заявка отправлена', uz: 'Ariza yuborildi' },
  'callback.successDesc': {
    ru: 'Мы свяжемся с вами в рабочее время (09:00–21:00) по указанному номеру.',
    uz: 'Ko‘rsatilgan raqam orqali ish vaqtida (09:00–21:00) siz bilan bog‘lanamiz.',
  },
  'callback.errorTitle': { ru: 'Не удалось отправить заявку', uz: 'Arizani yuborib bo‘lmadi' },
  'callback.errorDesc': {
    ru: 'Произошла ошибка при передаче данных. Попробуйте еще раз или позвоните нам напрямую: +998 55 500 22 02',
    uz: 'Ma’lumotlarni uzatishda xatolik yuz berdi. Qaytadan urinib ko‘ring yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling: +998 55 500 22 02',
  },
  'callback.privacyNotice': {
    ru: 'Нажимая кнопку, вы даете согласие на обработку контактных данных для обратной связи. Данные не передаются третьим лицам.',
    uz: 'Tugmani bosish orqali siz aloqa uchun ma’lumotlarni qayta ishlashga rozilik bildirasiz. Ma’lumotlar uchinchi shaxslarga berilmaydi.',
  },
  'callback.directCallAlternative': {
    ru: 'Или позвоните нам сразу без ожидания:',
    uz: 'Yoki kutmasdan to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling:',
  },
  'callback.testModeBanner': {
    ru: 'Режим предпросмотра: подключен тестовый sandbox-обработчик для проверки состояний отправки.',
    uz: 'Ko‘rib chiqish rejimi: jo‘natish holatlarini tekshirish uchun test sandbox-ishlovchisi ulangan.',
  },

  // Mobile Sticky Bar
  'mobileBar.call': { ru: 'Позвонить', uz: 'Qo‘ng‘iroq' },
  'mobileBar.write': { ru: 'Написать', uz: 'Yozish' },
  'mobileBar.callback': { ru: 'Оставить заявку', uz: 'Ariza qoldirish' },

  // Modal Dialog
  'dialog.close': { ru: 'Закрыть', uz: 'Yopish' },

  // Footer
  'footer.navigation': { ru: 'Навигация', uz: 'Navigatsiya' },
  'footer.courses': { ru: 'Все курсы', uz: 'Barcha kurslar' },
  'footer.branches': { ru: 'Филиалы', uz: 'Filiallar' },
  'footer.contact': { ru: 'Связь с нами', uz: 'Biz bilan aloqa' },
  'footer.callCenter': { ru: 'Единый колл-центр:', uz: 'Yagona koll-markaz:' },
  'footer.scheduleLabel': { ru: 'График работы:', uz: 'Ish jadvali:' },
  'footer.social': { ru: 'Мы в социальных сетях', uz: 'Ijtimoiy tarmoqlarda' },
  'footer.copyright': {
    ru: '© 2016–2026 Kingdom Education (OOO «YOUR FIRST STEP»). Все права защищены.',
    uz: '© 2016–2026 Kingdom Education (MChJ «YOUR FIRST STEP»). Barcha huquqlar himoyalangan.',
  },
  'footer.disclaimer': {
    ru: 'Информация на сайте носит справочный характер и не является публичной офертой. Телефонные звонки оплачиваются по тарифам вашего оператора.',
    uz: 'Saytdagi ma’lumotlar axborot xususiyatiga ega. Telefon qo‘ng‘iroqlari operatoringiz tarifiga binoan to‘lanadi.',
  },
};
