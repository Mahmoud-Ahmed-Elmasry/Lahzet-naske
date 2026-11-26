
const translations = {
  ar: {
    heroEyebrow: "طريقك للمذاكرة بقى أسهل",
    heroLine1: "كل إجابة",
    heroLine2: "في لحظتها.",
    heroDescription: "اختار صفك، وصل لدرسك، وابحث عن إجابتك بسهولة. كل اللي تحتاجه للمذاكرة في مكان واحد.",
    startLearning: "ابدأ التعلم",
    heroNote: "خطوات بسيطة توصلك للمعلومة",
    ready: "جاهز للتعلم",
    answerReady: "إجابتك جاهزة",
    answerHint: "وصل للمعلومة في ثوانٍ",
    easyAccess: "وصول سهل",
    organized: "محتوى منظم",
    whyUs: "ليه لحظة نسخ؟",
    featuresTitle: "المذاكرة بشكل أبسط",
    featuresDescription: "كل حاجة متقسمة علشان توصل للي بتدور عليه بسرعة.",
    feature1Title: "سهولة الوصول",
    feature1Text: "وصل للفصل والدرس اللي محتاجه بخطوات بسيطة.",
    feature2Title: "تنظيم واضح",
    feature2Text: "المحتوى متقسم حسب الصف والمادة والفصل والدرس.",
    feature3Title: "تجربة مريحة",
    feature3Text: "تصميم بسيط يناسب الموبايل والكمبيوتر.",
    chooseGrade: "ابدأ من هنا",
    gradesTitle: "اختار صفك الدراسي",
    gradesDescription: "حدد الصف علشان نوصلك للمحتوى المناسب.",
    secondary: "المرحلة الثانوية",
    firstGrade: "أولى ثانوي",
    secondGrade: "تانية ثانوي",
    firstGradeDescription: "استكشف الفصول والدروس.",
    secondGradeDescription: "اختار المادة وابدأ التعلم.",
    footerText: "افهم، اتعلم، وانسخ إجابتك.",
    back: "رجوع",
    home: "الرئيسية",
    learningJourney: "رحلتك التعليمية",
    demoNotice: "المحتوى الظاهر حالياً تجريبي لتجربة التصميم والتنقل، وليس محتوى المنهج.",
    subjectsTitle: "اختار المادة",
    subjectsDescription: "حدد المادة اللي عايز تذاكرها.",
    chaptersTitle: "الفصول الدراسية",
    chaptersDescription: "اختار الفصل اللي عايز تبدأ منه.",
    lessonsTitle: "دروس الفصل",
    lessonsDescription: "اختار الدرس علشان تشوف الأسئلة والإجابات.",
    questionsTitle: "أسئلة الدرس",
    questionsDescription: "راجع الأسئلة والإجابات الخاصة بالدرس.",
    programming: "منصة البرمجة QUREO",
    finance: "الثقافة المالية",
    programmingDescription: "تصفح فصول ودروس البرمجة.",
    financeDescription: "تصفح فصول ودروس الثقافة المالية.",
    chapter: "فصل",
    lesson: "درس",
    open: "افتح المحتوى",
    showQuestions: "عرض الأسئلة",
    question: "السؤال",
    answer: "الإجابة",
    copy: "نسخ الإجابة",
    copied: "تم النسخ",
    empty: "لا يوجد محتوى حالياً. سيتم إضافته قريباً.",
    notFound: "المحتوى المطلوب غير موجود.",
    grade: "الصف",
    subject: "المادة",
    chapters: "الفصول",
    lessons: "الدروس"
  },

  en: {
    heroEyebrow: "Your study journey just got easier",
    heroLine1: "Every answer",
    heroLine2: "in its moment.",
    heroDescription: "Choose your grade, find your lesson, and search for answers easily. Everything you need in one place.",
    startLearning: "Start learning",
    heroNote: "Simple steps to the information you need",
    ready: "Ready to learn",
    answerReady: "Your answer is ready",
    answerHint: "Find information in seconds",
    easyAccess: "Easy access",
    organized: "Organized content",
    whyUs: "Why Lahzet Naskh?",
    featuresTitle: "A simpler way to study",
    featuresDescription: "Everything is organized to help you find what you need.",
    feature1Title: "Easy access",
    feature1Text: "Reach the chapter and lesson you need in simple steps.",
    feature2Title: "Clear organization",
    feature2Text: "Content is organized by grade, subject, chapter and lesson.",
    feature3Title: "Comfortable experience",
    feature3Text: "A simple design for mobile and desktop.",
    chooseGrade: "Start here",
    gradesTitle: "Choose your grade",
    gradesDescription: "Select your grade to find the right content.",
    secondary: "Secondary school",
    firstGrade: "First Secondary",
    secondGrade: "Second Secondary",
    firstGradeDescription: "Explore chapters and lessons.",
    secondGradeDescription: "Choose a subject and start learning.",
    footerText: "Understand, learn, and copy your answer.",
    back: "Back",
    home: "Home",
    learningJourney: "Your learning journey",
    demoNotice: "The displayed content is a design demo, not official curriculum content.",
    subjectsTitle: "Choose a subject",
    subjectsDescription: "Select the subject you want to study.",
    chaptersTitle: "Chapters",
    chaptersDescription: "Choose the chapter you want to start with.",
    lessonsTitle: "Chapter lessons",
    lessonsDescription: "Choose a lesson to view its questions and answers.",
    questionsTitle: "Lesson questions",
    questionsDescription: "Review the questions and answers for this lesson.",
    programming: "QUREO Programming",
    finance: "Financial Culture",
    programmingDescription: "Explore programming chapters and lessons.",
    financeDescription: "Explore financial culture chapters and lessons.",
    chapter: "Chapter",
    lesson: "Lesson",
    open: "Open content",
    showQuestions: "View questions",
    question: "Question",
    answer: "Answer",
    copy: "Copy answer",
    copied: "Copied",
    empty: "No content available yet. It will be added soon.",
    notFound: "The requested content was not found.",
    grade: "Grade",
    subject: "Subject",
    chapters: "Chapters",
    lessons: "Lessons"
  }
};

let currentLanguage = localStorage.getItem("ln-language") || "ar";
let currentTheme = localStorage.getItem("ln-theme") || "dark";

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return translations[currentLanguage][key] || key;
}

/* =========================
   THEME
========================= */

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;

  const icon = $("#themeIcon");

  if (icon) {
    icon.textContent = currentTheme === "dark" ? "☀" : "☾";
  }

  const metaTheme = document.querySelector('meta[name="theme-color"]');

  if (metaTheme) {
    metaTheme.content = currentTheme === "dark"
      ? "#101114"
      : "#f7f8fa";
  }

  localStorage.setItem("ln-theme", currentTheme);
}

/* =========================
   LANGUAGE
========================= */

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[currentLanguage][key]) {
      element.textContent = t(key);
    }
  });

  const languageButton = $("#languageBtn");

  if (languageButton) {
    languageButton.textContent =
      currentLanguage === "ar" ? "EN" : "AR";
  }

  if ($("#contentGrid")) {
    renderStudyPage();
  }

  localStorage.setItem("ln-language", currentLanguage);
}

/* =========================
   INITIALIZATION
========================= */

function initializeSettings() {
  $("#themeBtn")?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme();
  });

  $("#languageBtn")?.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    applyLanguage();
  });

  applyTheme();
  applyLanguage();

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

/* =========================
   URL HELPERS
========================= */

function getParams() {
  return new URLSearchParams(window.location.search);
}

function getGradeName(grade) {
  if (grade === "1") return t("firstGrade");
  if (grade === "2") return t("secondGrade");

  return "";
}

function getSubjectData(grade, subject) {
  if (grade === "1") {
    return window.STUDY_DATA?.[1] || null;
  }

  if (grade === "2") {
    return window.STUDY_DATA?.[2]?.[subject] || null;
  }

  return null;
}

function findChapter(data, chapterId) {
  return data?.chapters?.find(
    (chapter) => chapter.id === chapterId
  ) || null;
}

function findLesson(chapter, lessonId) {
  return chapter?.lessons?.find(
    (lesson) => lesson.id === lessonId
  ) || null;
}

/* =========================
   ELEMENT HELPERS
========================= */

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function setPageHeading(title, description) {
  const titleElement = $("#pageTitle");
  const descriptionElement = $("#pageDescription");

  if (titleElement) {
    titleElement.textContent = title;
  }

  if (descriptionElement) {
    descriptionElement.textContent = description;
  }
}

function createBreadcrumb(items) {
  const breadcrumb = $("#breadcrumb");

  if (!breadcrumb) return;

  breadcrumb.replaceChildren();

  items.forEach((item, index) => {
    if (index > 0) {
      breadcrumb.append(
        createElement("span", "breadcrumb-separator", "›")
      );
    }

    breadcrumb.append(
      createElement("span", "", item)
    );
  });
}

function createCard({
  icon,
  number,
  title,
  description,
  action,
  url
}) {
  const card = document.createElement("a");

  card.className = "content-card";
  card.href = url;

  const top = createElement("div", "content-card-top");

  top.append(
    createElement("span", "content-card-icon", icon),
    createElement("span", "content-card-number", number)
  );

  card.append(top);
  card.append(createElement("h2", "", title));

  if (description) {
    card.append(createElement("p", "", description));
  }

  const bottom = createElement("div", "card-bottom");

  bottom.append(
    createElement("span", "", action),
    createElement(
      "span",
      "",
      currentLanguage === "ar" ? "←" : "→"
    )
  );

  card.append(bottom);

  return card;
}

function renderEmpty() {
  $("#contentGrid").replaceChildren(
    createElement("div", "empty-state", t("empty"))
  );
}

/* =========================
   SUBJECTS - SECONDARY 2
========================= */

function renderSubjects(grade) {
  setPageHeading(
    t("subjectsTitle"),
    t("subjectsDescription")
  );

  createBreadcrumb([
    getGradeName(grade),
    t("subjectsTitle")
  ]);

  const grid = $("#contentGrid");
  grid.replaceChildren();

  const subjects = [
    {
      id: "programming",
      icon: "</>",
      title: t("programming"),
      description: t("programmingDescription"),
      number: "01"
    },
    {
      id: "finance",
      icon: "◈",
      title: t("finance"),
      description: t("financeDescription"),
      number: "02"
    }
  ];

  subjects.forEach((subject) => {
    grid.append(
      createCard({
        icon: subject.icon,
        number: subject.number,
        title: subject.title,
        description: subject.description,
        action: t("open"),
        url: `study.html?view=chapters&grade=2&subject=${subject.id}`
      })
    );
  });
}

/* =========================
   CHAPTERS
========================= */

function renderChapters(grade, subject) {
  const data = getSubjectData(grade, subject);

  if (!data) {
    setPageHeading(t("notFound"), "");
    createBreadcrumb([t("notFound")]);
    renderEmpty();
    return;
  }

  setPageHeading(
    t("chaptersTitle"),
    t("chaptersDescription")
  );

  const breadcrumbItems = [
    getGradeName(grade)
  ];

  if (grade === "2") {
    breadcrumbItems.push(data.name);
  }

  breadcrumbItems.push(t("chaptersTitle"));

  createBreadcrumb(breadcrumbItems);

  const grid = $("#contentGrid");
  grid.replaceChildren();

  if (!data.chapters?.length) {
    renderEmpty();
    return;
  }

  data.chapters.forEach((chapter, index) => {
    grid.append(
      createCard({
        icon: "▤",
        number: String(index + 1).padStart(2, "0"),
        title: chapter.title,
        description: chapter.description || "",
        action: t("open"),
        url:
          `study.html?view=lessons&grade=${grade}` +
          `&subject=${subject || ""}&chapter=${encodeURIComponent(chapter.id)}`
      })
    );
  });
}

/* =========================
   LESSONS
========================= */

function renderLessons(grade, subject, chapterId) {
  const data = getSubjectData(grade, subject);
  const chapter = findChapter(data, chapterId);

  if (!chapter) {
    setPageHeading(t("notFound"), "");
    createBreadcrumb([t("notFound")]);
    renderEmpty();
    return;
  }

  setPageHeading(
    t("lessonsTitle"),
    t("lessonsDescription")
  );

  const breadcrumbItems = [
    getGradeName(grade)
  ];

  if (grade === "2") {
    breadcrumbItems.push(data.name);
  }

  breadcrumbItems.push(chapter.title, t("lessons"));

  createBreadcrumb(breadcrumbItems);

  const grid = $("#contentGrid");
  grid.replaceChildren();

  if (!chapter.lessons?.length) {
    renderEmpty();
    return;
  }

  chapter.lessons.forEach((lesson, index) => {
    grid.append(
      createCard({
        icon: "▣",
        number: String(index + 1).padStart(2, "0"),
        title: lesson.title,
        description: `${lesson.questions?.length || 0} ${t("question")}`,
        action: t("showQuestions"),
        url:
          `study.html?view=questions&grade=${grade}` +
          `&subject=${subject || ""}` +
          `&chapter=${encodeURIComponent(chapter.id)}` +
          `&lesson=${encodeURIComponent(lesson.id)}`
      })
    );
  });
}

/* =========================
   QUESTIONS
========================= */

function renderQuestions(grade, subject, chapterId, lessonId) {
  const data = getSubjectData(grade, subject);
  const chapter = findChapter(data, chapterId);
  const lesson = findLesson(chapter, lessonId);

  if (!lesson) {
    setPageHeading(t("notFound"), "");
    createBreadcrumb([t("notFound")]);
    renderEmpty();
    return;
  }

  setPageHeading(
    lesson.title,
    t("questionsDescription")
  );

  const breadcrumbItems = [
    getGradeName(grade)
  ];

  if (grade === "2") {
    breadcrumbItems.push(data.name);
  }

  breadcrumbItems.push(chapter.title, lesson.title);

  createBreadcrumb(breadcrumbItems);

  const grid = $("#contentGrid");
  grid.replaceChildren();

  if (!lesson.questions?.length) {
    renderEmpty();
    return;
  }

  lesson.questions.forEach((item, index) => {
    const card = createElement(
      "article",
      "content-card question-card"
    );

    const top = createElement("div", "content-card-top");

    top.append(
      createElement("span", "content-card-icon", "؟"),
      createElement(
        "span",
        "content-card-number",
        `#${index + 1}`
      )
    );

    const questionTitle = createElement(
      "h2",
      "",
      item.question
    );

    const answerLabel = createElement(
      "p",
      "",
      t("answer")
    );

    const answer = createElement(
      "div",
      "question-answer",
      item.answer
    );

    const copyButton = createElement(
      "button",
      "copy-button",
      t("copy")
    );

    copyButton.type = "button";

    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item.answer);

        copyButton.textContent = t("copied");

        window.setTimeout(() => {
          copyButton.textContent = t("copy");
        }, 1500);

      } catch {
        copyButton.textContent =
          currentLanguage === "ar"
            ? "تعذر النسخ"
            : "Copy unavailable";
      }
    });

    card.append(
      top,
      questionTitle,
      answerLabel,
      answer,
      copyButton
    );

    grid.append(card);
  });
}

/* =========================
   MAIN ROUTER
========================= */

function renderStudyPage() {
  const params = getParams();

  const view = params.get("view");
  const grade = params.get("grade");
  const subject = params.get("subject");
  const chapter = params.get("chapter");
  const lesson = params.get("lesson");

  const validGrade =
    grade === "1" || grade === "2";

  const validSubject =
    grade === "2"
      ? subject === "programming" || subject === "finance"
      : !subject || subject === "";

  if (!validGrade || !validSubject) {
    setPageHeading(t("notFound"), "");
    createBreadcrumb([t("notFound")]);
    renderEmpty();
    return;
  }

  if (view === "subjects" && grade === "2") {
    renderSubjects(grade);

  } else if (view === "chapters") {
    renderChapters(grade, subject);

  } else if (view === "lessons" && chapter) {
    renderLessons(grade, subject, chapter);

  } else if (
    view === "questions" &&
    chapter &&
    lesson
  ) {
    renderQuestions(grade, subject, chapter, lesson);

  } else {
    setPageHeading(t("notFound"), "");
    createBreadcrumb([t("notFound")]);
    renderEmpty();
  }
}

/* =========================
   BACK BUTTON
========================= */

function getFallbackUrl() {
  const params = getParams();

  const view = params.get("view");
  const grade = params.get("grade");
  const subject = params.get("subject");
  const chapter = params.get("chapter");

  if (view === "questions") {
    return (
      `study.html?view=lessons&grade=${grade}` +
      `&subject=${subject || ""}` +
      `&chapter=${encodeURIComponent(chapter || "")}`
    );
  }

  if (view === "lessons") {
    return (
      `study.html?view=chapters&grade=${grade}` +
      `&subject=${subject || ""}`
    );
  }

  if (view === "chapters" && grade === "2") {
    return "study.html?view=subjects&grade=2";
  }

  return "index.html";
}

function initializeBackButton() {
  const backButton = $("#backBtn");

  if (!backButton) return;

  backButton.addEventListener("click", () => {
    const fallback = getFallbackUrl();
    const referrer = document.referrer;

    if (referrer) {
      try {
        const previousUrl = new URL(referrer);

        if (
          previousUrl.origin === window.location.origin &&
          previousUrl.pathname !== window.location.pathname
        ) {
          window.history.back();
          return;
        }

      } catch {
        // استخدم مسار الرجوع الاحتياطي
      }
    }

    window.location.href = fallback;
  });
}

/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeSettings();
  initializeBackButton();

  if ($("#contentGrid")) {
    renderStudyPage();
  }
});
