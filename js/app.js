
(() => {
  "use strict";

  const STORAGE = {
    theme: "ln-theme",
    language: "ln-language"
  };

  const translations = {
    ar: {
      brand: "لحظة نسخ",
      heroBadge: "طريقك للمعلومة أسهل",
      heroTitle1: "كل إجابة تبدأ",
      heroTitle2: "بلحظة نسخ",
      heroDescription: "اختار صفك ومادتك، ووصل للأسئلة والإجابات اللي بتدور عليها بكل سهولة.",
      startLearning: "ابدأ التعلم",
      heroNote: "مذاكرتك بشكل أبسط وأسرع",
      chooseGrade: "ابدأ من هنا",
      gradesTitle: "اختار صفك الدراسي",
      gradesDescription: "حدد الصف الدراسي عشان نوصلك للمحتوى المناسب ليك.",
      firstGrade: "أولى ثانوي",
      firstGradeDescription: "استكشف الفصول والدروس والأسئلة.",
      secondGrade: "تانية ثانوي",
      secondGradeDescription: "اختار المادة اللي عايز تذاكرها.",
      exploreContent: "استكشف المحتوى",
      whyUs: "ليه لحظة نسخ؟",
      featuresTitle: "تجربة مذاكرة أبسط",
      featuresDescription: "كل اللي تحتاجه للوصول للمعلومة في مكان واحد.",
      feature1Title: "وصول سهل",
      feature1Description: "تنظيم المحتوى حسب الصف والمادة والفصل والدرس.",
      feature2Title: "إجابات واضحة",
      feature2Description: "اعرض السؤال والإجابة في مكان واحد بشكل منظم.",
      feature3Title: "نسخ بسهولة",
      feature3Description: "انسخ الإجابة بضغطة واحدة لما تكون الميزة متاحة.",
      footerCopyright: "© لحظة نسخ. جميع الحقوق محفوظة.",
      privacyLink: "سياسة الخصوصية",
      termsLink: "شروط الاستخدام",
      backHome: "العودة للرئيسية",
      legalLabel: "المعلومات القانونية",
      privacyTitle: "سياسة الخصوصية",
      privacyIntro: "نحترم خصوصيتك ونسعى لتوضيح طريقة استخدام الموقع.",
      privacySection1Title: "1. المعلومات التي نجمعها",
      privacySection1Text: "لا يطلب الموقع من الطالب إنشاء حساب لاستخدام صفحات المحتوى الأساسية. وقد تُجمع بعض البيانات التقنية الضرورية لتشغيل الموقع وتحسينه، وفق الأدوات التي يتم تفعيلها فعليًا.",
      privacySection2Title: "2. ملفات تعريف الارتباط",
      privacySection2Text: "قد يستخدم الموقع ملفات تعريف الارتباط أو تقنيات مشابهة لحفظ تفضيلات المستخدم، مثل اللغة والوضع اللوني. وإذا تمت إضافة أدوات تحليل أو إعلانات مستقبلًا، فسيتم توضيح استخدامها في هذه السياسة.",
      privacySection3Title: "3. الإعلانات والخدمات الخارجية",
      privacySection3Text: "قد يعرض الموقع إعلانات أو يستخدم خدمات خارجية مستقبلًا. وتخضع هذه الخدمات لسياسات الخصوصية الخاصة بمقدميها، وسيتم تحديث هذه الصفحة عند تفعيلها.",
      privacySection4Title: "4. حماية البيانات",
      privacySection4Text: "نعمل على اتخاذ إجراءات تقنية مناسبة للمساعدة في حماية الموقع والبيانات المرتبطة به، ولا يمكن ضمان أمان مطلق لأي خدمة عبر الإنترنت.",
      privacySection5Title: "5. خصوصية الطلاب",
      privacySection5Text: "الموقع موجه لأغراض تعليمية. لا تشارك بياناتك الشخصية أو كلمات المرور أو معلومات التواصل الخاصة بك في أي محتوى عام.",
      privacySection6Title: "6. التعديلات على السياسة",
      privacySection6Text: "قد نقوم بتحديث سياسة الخصوصية عند إضافة خصائص جديدة أو عند الحاجة. وسيتم نشر النسخة المحدثة على هذه الصفحة.",
      privacySection7Title: "7. التواصل معنا",
      privacySection7Text: "يمكنك التواصل معنا من خلال وسيلة التواصل الرسمية التي سنضيفها هنا عند تجهيزها.",
      termsTitle: "شروط الاستخدام",
      termsSection1Title: "استخدام المحتوى",
      termsSection1Text: "يُقدم المحتوى لأغراض تعليمية ومساعدة الطلاب على المذاكرة. ينبغي للطالب الرجوع إلى مصادره الدراسية الرسمية عند الحاجة.",
      termsSection2Title: "حقوق المحتوى",
      termsSection2Text: "يجب احترام حقوق الملكية الفكرية للكتب والمناهج والصور والمواد التابعة للغير. لا يجوز إعادة نشر محتوى محمي دون إذن أو أساس قانوني مناسب.",
      termsSection3Title: "تحديث المحتوى",
      termsSection3Text: "قد يتغير المحتوى أو يتم تصحيحه أو إزالته في أي وقت بهدف تحسين تجربة الاستخدام.",
      policyDraftNotice: "تنبيه: هذه صياغة أولية، ويجب تحديثها لتطابق طريقة تشغيل الموقع الفعلية قبل النشر.",
      studyLabel: "المحتوى الدراسي",
      subjectsTitle: "اختار المادة",
      subjectsDescription: "اختار المادة اللي عايز تبدأ فيها.",
      chaptersTitle: "الفصول الدراسية",
      chaptersDescription: "اختار الفصل اللي عايز تذاكره.",
      lessonsTitle: "دروس الفصل",
      lessonsDescription: "اختار الدرس اللي عايز تراجعه.",
      questionsTitle: "أسئلة الدرس",
      questionsDescription: "راجع الأسئلة والإجابات الخاصة بالدرس.",
      emptyTitle: "المحتوى قريبًا",
      emptyDescription: "لسه مفيش محتوى مضاف في القسم ده.",
      noQuestions: "لا توجد أسئلة مضافة لهذا الدرس حتى الآن.",
      questionLabel: "السؤال",
      answerLabel: "الإجابة",
      copyAnswer: "نسخ الإجابة",
      copied: "تم النسخ",
      copyFailed: "تعذر النسخ، حاول مرة تانية.",
      invalidPage: "الصفحة المطلوبة غير موجودة.",
      chapter: "الفصل",
      lesson: "الدرس",
      subject: "المادة",
      back: "رجوع",
      themeToLight: "تفعيل الوضع الفاتح",
      themeToDark: "تفعيل الوضع الداكن"
    },

    en: {
      brand: "Lahzet Naskh",
      heroBadge: "Your path to information made easier",
      heroTitle1: "Every answer starts",
      heroTitle2: "with Lahzet Naskh",
      heroDescription: "Choose your grade and subject to find the questions and answers you need.",
      startLearning: "Start Learning",
      heroNote: "A simpler and faster way to study",
      chooseGrade: "Start Here",
      gradesTitle: "Choose Your Grade",
      gradesDescription: "Select your grade to find the right learning content.",
      firstGrade: "First Secondary",
      firstGradeDescription: "Explore chapters, lessons, and questions.",
      secondGrade: "Second Secondary",
      secondGradeDescription: "Choose the subject you want to study.",
      exploreContent: "Explore Content",
      whyUs: "Why Lahzet Naskh?",
      featuresTitle: "A Simpler Study Experience",
      featuresDescription: "Everything you need to find information in one place.",
      feature1Title: "Easy Access",
      feature1Description: "Content organized by grade, subject, chapter, and lesson.",
      feature2Title: "Clear Answers",
      feature2Description: "View questions and answers together in an organized way.",
      feature3Title: "Easy Copying",
      feature3Description: "Copy an answer with one click whenever the feature is available.",
      footerCopyright: "© Lahzet Naskh. All rights reserved.",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Use",
      backHome: "Back to Home",
      legalLabel: "Legal Information",
      privacyTitle: "Privacy Policy",
      privacyIntro: "We respect your privacy and aim to explain how this website works.",
      privacySection1Title: "1. Information We Collect",
      privacySection1Text: "Students do not need to create an account to use the basic content pages. Some technical data may be collected to operate and improve the website, depending on the tools actually enabled.",
      privacySection2Title: "2. Cookies",
      privacySection2Text: "The website may use cookies or similar technologies to save user preferences, such as language and theme. If analytics or advertising tools are added in the future, their use will be explained in this policy.",
      privacySection3Title: "3. Advertising and Third-Party Services",
      privacySection3Text: "The website may display advertisements or use third-party services in the future. These services are governed by their providers' privacy policies, and this page will be updated when they are enabled.",
      privacySection4Title: "4. Data Protection",
      privacySection4Text: "We take appropriate technical measures to help protect the website and related data. However, no online service can guarantee absolute security.",
      privacySection5Title: "5. Student Privacy",
      privacySection5Text: "This website is intended for educational purposes. Do not share personal information, passwords, or contact details in public content.",
      privacySection6Title: "6. Policy Updates",
      privacySection6Text: "We may update this Privacy Policy when new features are added or when necessary. The updated version will be published on this page.",
      privacySection7Title: "7. Contact Us",
      privacySection7Text: "You can contact us through the official contact method that will be added here when available.",
      termsTitle: "Terms of Use",
      termsSection1Title: "Using the Content",
      termsSection1Text: "Content is provided for educational purposes and to help students study. Students should refer to their official study materials when needed.",
      termsSection2Title: "Content Rights",
      termsSection2Text: "Intellectual property rights for books, curricula, images, and third-party materials must be respected. Protected content must not be republished without permission or an appropriate legal basis.",
      termsSection3Title: "Content Updates",
      termsSection3Text: "Content may be changed, corrected, or removed at any time to improve the user experience.",
      policyDraftNotice: "Notice: This is an initial draft and must be updated to reflect the website's actual practices before publication.",
      studyLabel: "Study Content",
      subjectsTitle: "Choose a Subject",
      subjectsDescription: "Choose the subject you want to start with.",
      chaptersTitle: "Chapters",
      chaptersDescription: "Choose the chapter you want to study.",
      lessonsTitle: "Chapter Lessons",
      lessonsDescription: "Choose the lesson you want to review.",
      questionsTitle: "Lesson Questions",
      questionsDescription: "Review the questions and answers for this lesson.",
      emptyTitle: "Content Coming Soon",
      emptyDescription: "There is no content available in this section yet.",
      noQuestions: "No questions have been added to this lesson yet.",
      questionLabel: "Question",
      answerLabel: "Answer",
      copyAnswer: "Copy Answer",
      copied: "Copied",
      copyFailed: "Unable to copy. Please try again.",
      invalidPage: "The requested page could not be found.",
      chapter: "Chapter",
      lesson: "Lesson",
      subject: "Subject",
      back: "Back",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode"
    }
  };

  let currentLanguage = getSavedLanguage();
  let currentTheme = getSavedTheme();

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The site still works if localStorage is unavailable.
    }
  }

  function getSavedLanguage() {
    return safeGet(STORAGE.language) === "en" ? "en" : "ar";
  }

  function getSavedTheme() {
    // Dark is the default theme for first-time visitors.
    return safeGet(STORAGE.theme) === "light" ? "light" : "dark";
  }

  function t(key) {
    return translations[currentLanguage][key] || translations.ar[key] || key;
  }

  function getText(item, key) {
    if (!item) return "";

    if (currentLanguage === "en" && item[`${key}_en`]) {
      return item[`${key}_en`];
    }

    return item[key] || "";
  }

  function applyTheme() {
    document.documentElement.dataset.theme = currentTheme;

    const themeButton = document.getElementById("themeBtn");
    const themeIcon = document.getElementById("themeIcon");

    if (themeIcon) {
      themeIcon.textContent = currentTheme === "dark" ? "☀" : "☾";
    }

    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        currentTheme === "dark" ? t("themeToLight") : t("themeToDark")
      );
      themeButton.title = currentTheme === "dark" ? t("themeToLight") : t("themeToDark");
    }

    const themeColor = currentTheme === "dark" ? "#08090B" : "#FFFFFF";
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    if (themeMeta) {
      themeMeta.setAttribute("content", themeColor);
    }
  }

  function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translated = t(key);

      if (translated) {
        element.textContent = translated;
      }
    });

    const languageButton = document.getElementById("languageBtn");

    if (languageButton) {
      languageButton.textContent = currentLanguage === "ar" ? "EN" : "عربي";
      languageButton.setAttribute(
        "aria-label",
        currentLanguage === "ar" ? "Switch to English" : "التغيير إلى العربية"
      );
    }

    updatePageTitle();
    applyTheme();

    if (document.getElementById("contentGrid")) {
      renderStudyPage();
    }
  }

  function updatePageTitle() {
    const pageTitle = document.querySelector("title");

    if (!pageTitle) return;

    if (document.getElementById("contentGrid")) {
      pageTitle.textContent = `${t("studyLabel")} | ${t("brand")}`;
    } else if (document.getElementById("terms")) {
      pageTitle.textContent = `${t("privacyTitle")} | ${t("brand")}`;
    } else {
      pageTitle.textContent = `${t("brand")} | ${t("heroNote")}`;
    }
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    safeSet(STORAGE.theme, currentTheme);
    applyTheme();
  }

  function toggleLanguage() {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    safeSet(STORAGE.language, currentLanguage);
    applyLanguage();
  }

  function setupHeaderButtons() {
    document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);
    document.getElementById("languageBtn")?.addEventListener("click", toggleLanguage);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function getStudyParams() {
    const params = new URLSearchParams(window.location.search);

    return {
      view: params.get("view") || "chapters",
      grade: params.get("grade") || "1",
      subject: params.get("subject"),
      chapter: params.get("chapter"),
      lesson: params.get("lesson")
    };
  }

  function navigate(params) {
    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        query.set(key, value);
      }
    });

    window.location.href = `study.html?${query.toString()}`;
  }

  function setStudyHeading(eyebrow, title, description) {
    const eyebrowElement = document.getElementById("pageEyebrow");
    const titleElement = document.getElementById("pageTitle");
    const descriptionElement = document.getElementById("pageDescription");

    if (eyebrowElement) eyebrowElement.textContent = eyebrow;
    if (titleElement) titleElement.textContent = title;
    if (descriptionElement) descriptionElement.textContent = description;
  }

  function setBreadcrumb(items) {
    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return;

    breadcrumb.replaceChildren();

    items.forEach((item, index) => {
      if (index > 0) {
        breadcrumb.appendChild(createElement("span", "breadcrumb-separator", "/"));
      }

      if (item.href) {
        const link = createElement("a", "", item.label);
        link.href = item.href;
        breadcrumb.appendChild(link);
      } else {
        breadcrumb.appendChild(createElement("span", "breadcrumb-current", item.label));
      }
    });
  }

  function showEmptyState(title, description) {
    const grid = document.getElementById("contentGrid");
    const emptyState = document.getElementById("emptyState");

    if (grid) grid.replaceChildren();

    if (emptyState) {
      emptyState.hidden = false;

      const titleElement = document.getElementById("emptyTitle");
      const descriptionElement = document.getElementById("emptyDescription");

      if (titleElement) titleElement.textContent = title || t("emptyTitle");
      if (descriptionElement) descriptionElement.textContent = description || t("emptyDescription");
    }
  }

  function hideEmptyState() {
    const emptyState = document.getElementById("emptyState");
    if (emptyState) emptyState.hidden = true;
  }

  function createStudyCard(item, type, params) {
    const card = createElement("a", `content-card accent-${item.accent || "yellow"}`);
    const icon = createElement("span", "content-card-icon", getCardIcon(type));
    const body = createElement("span", "content-card-body");
    const title = createElement("strong", "content-card-title", getText(item, "title"));
    const description = createElement("span", "content-card-description", getText(item, "description"));
    const arrow = createElement("span", "content-card-arrow", "↗");

    body.append(title);

    if (getText(item, "description")) {
      body.append(description);
    }

    card.append(icon, body, arrow);

    const nextParams = { ...params };

    if (type === "subject") {
      nextParams.view = "chapters";
      nextParams.subject = item.id;
      delete nextParams.chapter;
      delete nextParams.lesson;
    }

    if (type === "chapter") {
      nextParams.view = "lessons";
      nextParams.chapter = item.id;
      delete nextParams.lesson;
    }

    if (type === "lesson") {
      nextParams.view = "questions";
      nextParams.lesson = item.id;
    }

    card.href = `study.html?${new URLSearchParams(nextParams).toString()}`;

    return card;
  }

  function getCardIcon(type) {
    const icons = {
      subject: "⌘",
      chapter: "▤",
      lesson: "✎"
    };

    return icons[type] || "✦";
  }

  function renderCards(items, type, params) {
    const grid = document.getElementById("contentGrid");
    if (!grid) return;

    grid.replaceChildren();

    if (!Array.isArray(items) || items.length === 0) {
      showEmptyState();
      return;
    }

    hideEmptyState();

    items.forEach((item) => {
      grid.appendChild(createStudyCard(item, type, params));
    });
  }

  function findById(items, id) {
    if (!Array.isArray(items)) return null;
    return items.find((item) => String(item.id) === String(id)) || null;
  }

  function renderQuestions(lesson) {
    const grid = document.getElementById("contentGrid");
    if (!grid) return;

    grid.replaceChildren();

    const questions = Array.isArray(lesson.questions) ? lesson.questions : [];

    if (questions.length === 0) {
      showEmptyState(t("emptyTitle"), t("noQuestions"));
      return;
    }

    hideEmptyState();

    questions.forEach((question, index) => {
      const card = createElement("article", "question-card");

      const questionNumber = createElement(
        "span",
        "question-number",
        `${t("questionLabel")} ${index + 1}`
      );

      const questionText = createElement(
        "h3",
        "question-text",
        getText(question, "question")
      );

      const answerLabel = createElement("span", "answer-label", t("answerLabel"));
      const answerText = createElement(
        "p",
        "answer-text",
        getText(question, "answer")
      );

      const copyButton = createElement("button", "copy-button", t("copyAnswer"));
      copyButton.type = "button";

      copyButton.addEventListener("click", async () => {
        const answer = getText(question, "answer");

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(answer);
          } else {
            const temporary = document.createElement("textarea");
            temporary.value = answer;
            temporary.style.position = "fixed";
            temporary.style.opacity = "0";
            document.body.appendChild(temporary);
            temporary.select();

            const copied = document.execCommand("copy");
            temporary.remove();

            if (!copied) throw new Error("Copy failed");
          }

          copyButton.textContent = t("copied");

          window.setTimeout(() => {
            copyButton.textContent = t("copyAnswer");
          }, 1500);
        } catch {
          copyButton.textContent = t("copyFailed");

          window.setTimeout(() => {
            copyButton.textContent = t("copyAnswer");
          }, 2000);
        }
      });

      card.append(
        questionNumber,
        questionText,
        answerLabel,
        answerText,
        copyButton
      );

      grid.appendChild(card);
    });
  }

  function renderStudyPage() {
    const grid = document.getElementById("contentGrid");
    if (!grid) return;

    const params = getStudyParams();
    const grade = window.STUDY_DATA?.[params.grade];

    if (!grade) {
      setStudyHeading(t("studyLabel"), t("invalidPage"), "");
      setBreadcrumb([{ label: t("backHome"), href: "index.html" }]);
      showEmptyState(t("invalidPage"), t("emptyDescription"));
      return;
    }

    const gradeTitle = getText(grade, "title");
    const homeCrumb = { label: t("backHome"), href: "index.html" };
    const gradeCrumb = {
      label: gradeTitle,
      href: `study.html?view=${params.grade === "1" ? "chapters" : "subjects"}&grade=${params.grade}`
    };

    if (params.view === "subjects" && params.grade === "2") {
      setStudyHeading(t("studyLabel"), t("subjectsTitle"), t("subjectsDescription"));
      setBreadcrumb([homeCrumb, { label: gradeTitle }]);
      renderCards(grade.subjects, "subject", {
        grade: params.grade
      });
      return;
    }

    if (params.view === "chapters") {
      let chapters = grade.chapters || [];
      let subject = null;

      if (params.grade === "2") {
        subject = findById(grade.subjects, params.subject);

        if (!subject) {
          navigate({ view: "subjects", grade: params.grade });
          return;
        }

        chapters = subject.chapters || [];
      }

      const title = t("chaptersTitle");
      const description = t("chaptersDescription");

      setStudyHeading(gradeTitle, title, description);

      const crumbs = [homeCrumb, gradeCrumb];

      if (subject) {
        crumbs.push({ label: getText(subject, "title") });
      }

      setBreadcrumb(crumbs);
      renderCards(chapters, "chapter", params);
      return;
    }

    if (params.view === "lessons") {
      const subject = params.subject
        ? findById(grade.subjects, params.subject)
        : null;

      const chapters = subject ? subject.chapters : grade.chapters;
      const chapter = findById(chapters, params.chapter);

      if (!chapter) {
        showEmptyState(t("invalidPage"), t("emptyDescription"));
        return;
      }

      setStudyHeading(
        t("chapter"),
        getText(chapter, "title"),
        t("lessonsDescription")
      );

      const crumbs = [homeCrumb, gradeCrumb];

      if (subject) crumbs.push({ label: getText(subject, "title") });

      crumbs.push({
        label: getText(chapter, "title"),
        href: `study.html?view=chapters&grade=${params.grade}${params.subject ? `&subject=${params.subject}` : ""}`
      });

      setBreadcrumb(crumbs);
      renderCards(chapter.lessons, "lesson", params);
      return;
    }

    if (params.view === "questions") {
      const subject = params.subject
        ? findById(grade.subjects, params.subject)
        : null;

      const chapters = subject ? subject.chapters : grade.chapters;
      const chapter = findById(chapters, params.chapter);
      const lesson = chapter ? findById(chapter.lessons, params.lesson) : null;

      if (!lesson) {
        showEmptyState(t("invalidPage"), t("emptyDescription"));
        return;
      }

      setStudyHeading(
        t("lesson"),
        getText(lesson, "title"),
        t("questionsDescription")
      );

      const crumbs = [homeCrumb, gradeCrumb];

      if (subject) crumbs.push({ label: getText(subject, "title") });

      if (chapter) {
        crumbs.push({
          label: getText(chapter, "title"),
          href: `study.html?view=lessons&grade=${params.grade}${params.subject ? `&subject=${params.subject}` : ""}&chapter=${params.chapter}`
        });
      }

      crumbs.push({ label: getText(lesson, "title") });

      setBreadcrumb(crumbs);
      renderQuestions(lesson);
      return;
    }

    if (params.grade === "2") {
      navigate({ view: "subjects", grade: params.grade });
    } else {
      navigate({ view: "chapters", grade: params.grade });
    }
  }

  function setupBackButton() {
    const backButton = document.getElementById("backBtn");
    if (!backButton) return;

    backButton.addEventListener("click", (event) => {
      event.preventDefault();

      const params = getStudyParams();

      if (params.view === "questions") {
        navigate({
          view: "lessons",
          grade: params.grade,
          subject: params.subject,
          chapter: params.chapter
        });
      } else if (params.view === "lessons") {
        navigate({
          view: "chapters",
          grade: params.grade,
          subject: params.subject
        });
      } else if (params.view === "chapters" && params.grade === "2") {
        navigate({ view: "subjects", grade: params.grade });
      } else {
        window.location.href = "index.html";
      }
    });
  }

  function init() {
    applyTheme();
    setupHeaderButtons();
    applyLanguage();

    if (document.getElementById("contentGrid")) {
      setupBackButton();
      renderStudyPage();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
