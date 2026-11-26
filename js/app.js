"use strict";

(() => {
  const root = document.documentElement;

  const elements = {
    themeBtn: document.getElementById("themeBtn"),
    themeIcon: document.getElementById("themeIcon"),
    languageBtn: document.getElementById("languageBtn"),
    currentYear: document.getElementById("currentYear"),

    pageTitle: document.getElementById("pageTitle"),
    pageDescription: document.getElementById("pageDescription"),
    pageEyebrow: document.getElementById("pageEyebrow"),
    contentGrid: document.getElementById("contentGrid"),
    emptyState: document.getElementById("emptyState"),
    breadcrumb: document.getElementById("breadcrumb"),
    backBtn: document.getElementById("backBtn")
  };

  const translations = {
    ar: {
      start: "ابدأ التعلم",
      chooseGrade: "اختار صفك الدراسي",
      subjects: "اختار المادة",
      chapters: "الفصول الدراسية",
      lessons: "الدروس",
      questions: "الأسئلة والإجابات",
      back: "رجوع",
      home: "الرئيسية",
      emptyTitle: "المحتوى قيد التجهيز",
      emptyText: "هنضيف المحتوى هنا بعد مراجعته وتجهيزه.",
      view: "عرض المحتوى",
      noDescription: "اختار المحتوى اللي عايز تذاكره."
    },
    en: {
      start: "Start learning",
      chooseGrade: "Choose your grade",
      subjects: "Choose a subject",
      chapters: "Chapters",
      lessons: "Lessons",
      questions: "Questions and answers",
      back: "Back",
      home: "Home",
      emptyTitle: "Content is being prepared",
      emptyText: "Content will appear here after review.",
      view: "View content",
      noDescription: "Choose the content you want to study."
    }
  };

  let language = getSavedValue("ln-language", "ar");
  let theme = getSavedValue("ln-theme", "dark");

  function getSavedValue(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function saveValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // الموقع يظل يعمل حتى لو التخزين غير متاح.
    }
  }

  function t(key) {
    return translations[language][key] || key;
  }

  function applyTheme() {
    root.dataset.theme = theme;

    if (elements.themeIcon) {
      elements.themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }

    saveValue("ln-theme", theme);
  }

  function applyLanguage() {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";

    if (elements.languageBtn) {
      elements.languageBtn.textContent = language === "ar" ? "EN" : "عربي";
    }

    if (document.getElementById("contentGrid")) {
      renderStudyPage();
    }
  }

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

  function getParams() {
    return new URLSearchParams(window.location.search);
  }

  function makeStudyUrl(params) {
    return "study.html?" + params.toString();
  }

  function addBreadcrumb(items) {
    if (!elements.breadcrumb) return;

    elements.breadcrumb.replaceChildren();

    items.forEach((item, index) => {
      if (index > 0) {
        elements.breadcrumb.append(
          createElement("span", "breadcrumb-separator", "/")
        );
      }

      if (item.url) {
        const link = createElement("a", "", item.label);
        link.href = item.url;
        elements.breadcrumb.append(link);
      } else {
        const current = createElement("span", "breadcrumb-current", item.label);
        current.setAttribute("aria-current", "page");
        elements.breadcrumb.append(current);
      }
    });
  }

  function renderEmpty(title, description) {
    if (!elements.contentGrid || !elements.emptyState) return;

    elements.contentGrid.replaceChildren();
    elements.emptyState.hidden = false;

    const heading = elements.emptyState.querySelector("h2");
    const paragraph = elements.emptyState.querySelector("p");

    if (heading) heading.textContent = title || t("emptyTitle");
    if (paragraph) paragraph.textContent = description || t("emptyText");
  }

  function renderCards(items, createCard) {
    if (!elements.contentGrid) return;

    elements.contentGrid.replaceChildren();

    if (!Array.isArray(items) || items.length === 0) {
      renderEmpty();
      return;
    }

    if (elements.emptyState) {
      elements.emptyState.hidden = true;
    }

    const fragment = document.createDocumentFragment();

    items.forEach((item, index) => {
      fragment.append(createCard(item, index));
    });

    elements.contentGrid.append(fragment);
  }

  function createCard(item, index, url) {
    const card = createElement("a", "study-card accent-" + (item.accent || "yellow"));
    card.href = url;

    const number = createElement(
      "span",
      "card-number",
      String(index + 1).padStart(2, "0")
    );

    const icon = createElement("span", "study-card-icon", "✦");
    const title = createElement("h2", "", item.title || "");
    const description = createElement(
      "p",
      "",
      item.description || t("noDescription")
    );
    const link = createElement("span", "card-link", t("view") + " ←");

    card.append(number, icon, title, description, link);

    return card;
  }

  function renderStudyPage() {
    if (!elements.contentGrid) return;

    const params = getParams();
    const view = params.get("view") || "subjects";
    const grade = params.get("grade") || "1";
    const subjectId = params.get("subject");
    const chapterId = params.get("chapter");

    const gradeData = window.STUDY_DATA?.[grade];

    if (!gradeData) {
      setPage("غير موجود", "الرابط الذي فتحته غير صحيح.");
      renderEmpty();
      return;
    }

    const gradeLabel = gradeData.title;
    const gradeUrl = "study.html?view=" + (grade === "2" ? "subjects" : "chapters") +
      "&grade=" + encodeURIComponent(grade);

    const breadcrumbs = [
      { label: "الرئيسية", url: "index.html" },
      { label: gradeLabel, url: gradeUrl }
    ];

    if (view === "subjects" && grade === "2") {
      setPage(t("subjects"), "اختار المادة اللي عايز تذاكرها.");

      addBreadcrumb(breadcrumbs);

      renderCards(gradeData.subjects, (subject, index) => {
        const next = new URLSearchParams({
          view: "chapters",
          grade,
          subject: subject.id
        });

        return createCard(
          subject,
          index,
          makeStudyUrl(next)
        );
      });

      return;
    }

    if (view === "chapters") {
      let chapters = gradeData.chapters || [];
      let subject = null;

      if (grade === "2") {
        subject = gradeData.subjects.find(item => item.id === subjectId);

        if (!subject) {
          setPage("المادة غير موجودة", "ارجع واختار المادة من جديد.");
          renderEmpty();
          return;
        }

        chapters = subject.chapters || [];

        breadcrumbs.push({
          label: subject.title,
          url: makeStudyUrl(new URLSearchParams({
            view: "chapters",
            grade,
            subject: subject.id
          }))
        });
      }

      setPage(t("chapters"), "اختار الفصل اللي عايز تذاكره.");

      addBreadcrumb(breadcrumbs);

      renderCards(chapters, (chapter, index) => {
        const next = new URLSearchParams({
          view: "lessons",
          grade,
          chapter: chapter.id
        });

        if (subjectId) next.set("subject", subjectId);

        return createCard(chapter, index, makeStudyUrl(next));
      });

      return;
    }

    if (view === "lessons") {
      const chapters = getChapters(gradeData, subjectId);
      const chapter = chapters.find(item => item.id === chapterId);

      if (!chapter) {
        setPage("الفصل غير موجود", "ارجع واختار الفصل من جديد.");
        renderEmpty();
        return;
      }

      breadcrumbs.push({ label: chapter.title });

      setPage(t("lessons"), "اختار الدرس اللي عايز تراجعه.");

      addBreadcrumb(breadcrumbs);

      renderCards(chapter.lessons, (lesson, index) => {
        const next = new URLSearchParams({
          view: "questions",
          grade,
          chapter: chapter.id,
          lesson: lesson.id
        });

        if (subjectId) next.set("subject", subjectId);

        return createCard(lesson, index, makeStudyUrl(next));
      });

      return;
    }

    if (view === "questions") {
      const chapters = getChapters(gradeData, subjectId);
      const chapter = chapters.find(item => item.id === chapterId);
      const lessonId = params.get("lesson");
      const lesson = chapter?.lessons?.find(item => item.id === lessonId);

      if (!lesson) {
        setPage("الدرس غير موجود", "ارجع واختار الدرس من جديد.");
        renderEmpty();
        return;
      }

      breadcrumbs.push(
        { label: chapter.title },
        { label: lesson.title }
      );

      setPage(t("questions"), lesson.title);
      addBreadcrumb(breadcrumbs);
      renderQuestions(lesson.questions || []);
      return;
    }

    setPage("المحتوى غير موجود", "اختار الصف من الصفحة الرئيسية.");
    renderEmpty();
  }

  function getChapters(gradeData, subjectId) {
    if (subjectId) {
      const subject = gradeData.subjects?.find(item => item.id === subjectId);
      return subject?.chapters || [];
    }

    return gradeData.chapters || [];
  }

  function setPage(title, description) {
    if (elements.pageTitle) elements.pageTitle.textContent = title;
    if (elements.pageDescription) elements.pageDescription.textContent = description;
    if (elements.pageEyebrow) elements.pageEyebrow.textContent = "لحظة نسخ";
    document.title = title + " | لحظة نسخ";
  }

  function renderQuestions(questions) {
    if (!elements.contentGrid) return;

    if (!questions.length) {
      renderEmpty();
      return;
    }

    if (elements.emptyState) elements.emptyState.hidden = true;

    const fragment = document.createDocumentFragment();

    questions.forEach((item, index) => {
      const card = createElement("article", "question-card");
      const number = createElement("span", "question-number", "السؤال " + (index + 1));
      const question = createElement("h2", "", item.question || "");
      const answer = createElement("p", "answer-text", item.answer || "");
      const copyButton = createElement("button", "secondary-button copy-button", "نسخ الإجابة");

      copyButton.type = "button";
      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(item.answer || "");
          copyButton.textContent = "تم النسخ ✓";
        } catch {
          copyButton.textContent = "تعذر النسخ";
        }
      });

      card.append(number, question, answer, copyButton);
      fragment.append(card);
    });

    elements.contentGrid.append(fragment);
  }

  function setupBackButton() {
    if (!elements.backBtn) return;

    elements.backBtn.addEventListener("click", () => {
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }

  elements.themeBtn?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  elements.languageBtn?.addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    saveValue("ln-language", language);
    applyLanguage();
  });

  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  applyTheme();
  applyLanguage();
  setupBackButton();

  if (elements.contentGrid) {
    renderStudyPage();
  }
})();