const COURSE = [
	{
		id: "0",
		title: "Alustamine",
		description: "Esimesed sammud HTML-iga.",
		lessons: [
			{ id: "0.1", title: "Mis on HTML?", src: "old/loovtoo/chapters/0/0.1.html" },
			{ id: "0.2", title: "HTML-i ajalugu", src: "old/loovtoo/chapters/0/0.2.html" },
			{ id: "0.3", title: "HTML-i kasutus", src: "" },
			{ id: "0.4", title: "Tekstiredaktori valimine", src: "old/loovtoo/chapters/0/0.4.html" },
			{ id: "0.5", title: "Esimese HTML-faili loomine", src: "old/loovtoo/chapters/0/0.5.html" }
		]
	},
	{
		id: "1",
		title: "Pohielemendid",
		description: "Dokumendi ehitus ja peamised sildid.",
		lessons: [
			{ id: "1.1", title: "HTML dokumendi struktuur", src: "old/loovtoo/chapters/1/1.1.html" },
			{ id: "1.2", title: "Peamised HTML-sildid", src: "old/loovtoo/chapters/1/1.2.html" },
			{ id: "1.3", title: "Pealkirjad ja loigud", src: "old/loovtoo/chapters/1/1.3.html" },
			{ id: "1.4", title: "Lingid", src: "old/loovtoo/chapters/1/1.4.html" },
			{ id: "1.5", title: "Pildid", src: "old/loovtoo/chapters/1/1.5.html" },
			{ id: "1.6", title: "Div ja span", src: "old/loovtoo/chapters/1/1.6.html" },
			{ id: "1.7", title: "Atribuudid", src: "old/loovtoo/chapters/1/1.7.html" }
		]
	},
	{
		id: "2",
		title: "Vormindamine ja stiil",
		description: "Teksti kujundamine ja CSS pohialused.",
		lessons: [
			{ id: "2.1", title: "Teksti vormindamine", src: "old/loovtoo/chapters/2/2.1.html" },
			{ id: "2.2", title: "Kommentaarid", src: "old/loovtoo/chapters/2/2.2.html" },
			{ id: "2.3", title: "Varvid ja taustad", src: "old/loovtoo/chapters/2/2.3.html" },
			{ id: "2.4", title: "CSS-i kasutamine", src: "old/loovtoo/chapters/2/2.4.html" },
			{ id: "2.5", title: "Stiilid ja klassid", src: "old/loovtoo/chapters/2/2.5.html" }
		]
	},
	{
		id: "3",
		title: "Tabelid ja loendid",
		description: "Andmete esitamine tabelite ja loenditega.",
		lessons: [
			{ id: "3.1", title: "Tabelid", src: "old/loovtoo/chapters/3/3.1.html" },
			{ id: "3.2", title: "Loendid", src: "old/loovtoo/chapters/3/3.2.html" },
			{ id: "3.3", title: "Plokid ja inline-elemendid", src: "old/loovtoo/chapters/3/3.3.html" }
		]
	},
	{
		id: "4",
		title: "Vormid",
		description: "Sisendvaljad, nupud ja valideerimine.",
		lessons: [
			{ id: "4.1", title: "Vormide loomine", src: "old/loovtoo/chapters/4/4.1.html" },
			{ id: "4.2", title: "Sisendvaljad", src: "old/loovtoo/chapters/4/4.2.html" },
			{ id: "4.3", title: "Nupud", src: "old/loovtoo/chapters/4/4.3.html" },
			{ id: "4.4", title: "Vormide valideerimine", src: "old/loovtoo/chapters/4/4.4.html" }
		]
	},
	{
		id: "5",
		title: "Meedia",
		description: "Pilt, video ja audio HTML-is.",
		lessons: [
			{ id: "5.1", title: "Pildid", src: "old/loovtoo/chapters/5/5.1.html" },
			{ id: "5.2", title: "Videod", src: "old/loovtoo/chapters/5/5.2.html" },
			{ id: "5.3", title: "Audio", src: "old/loovtoo/chapters/5/5.3.html" }
		]
	},
	{
		id: "6",
		title: "Edasijoudnud teemad",
		description: "Semantika, SEO ja uued HTML5 voimalused.",
		lessons: [
			{ id: "6.1", title: "Iframe", src: "old/loovtoo/chapters/6/6.1.html" },
			{ id: "6.2", title: "Metaandmed", src: "old/loovtoo/chapters/6/6.2.html" },
			{ id: "6.3", title: "Semantika", src: "old/loovtoo/chapters/6/6.3.html" },
			{ id: "6.4", title: "SEO", src: "old/loovtoo/chapters/6/6.4.html" },
			{ id: "6.5", title: "HTML5 uued voimalused", src: "old/loovtoo/chapters/6/6.5.html" }
		]
	},
	{
		id: "7",
		title: "Praktilised naited ja ulesanded",
		description: "Praktilised harjutused ja kokkuvote.",
		lessons: [
			{ id: "7.1", title: "Praktilised ulesanded", src: "old/loovtoo/chapters/7/7.1.html" },
			{ id: "7.2", title: "KKK", src: "old/loovtoo/chapters/7/7.2.html" },
			{ id: "7.3", title: "Koik naited", src: "old/loovtoo/chapters/7/7.3.html" },
			{ id: "7.4", title: "Kokkuvote", src: "old/loovtoo/chapters/7/7.4.html" },
			{ id: "7.5", title: "Naidisfail allalaadimiseks", src: "old/loovtoo/chapters/7/7.5.html" }
		]
	}
];

const OPENED_LESSONS_KEY = "loovtoo-opened-lessons";

function loadOpenedLessons() {
	return new Set(JSON.parse(localStorage.getItem(OPENED_LESSONS_KEY) || "[]"));
}

function saveOpenedLessons(set) {
	localStorage.setItem(OPENED_LESSONS_KEY, JSON.stringify([...set]));
}

function totalLessons() {
	return COURSE.reduce((sum, chapter) => sum + chapter.lessons.filter((lesson) => lesson.src).length, 0);
}

function chapterOpenedCount(chapter, openedLessons) {
	return chapter.lessons.filter((lesson) => lesson.src && openedLessons.has(lesson.id)).length;
}

function chapterTotalCount(chapter) {
	return chapter.lessons.filter((lesson) => lesson.src).length;
}

function updateTopProgress(openedLessons) {
	const opened = openedLessons.size;
	const total = totalLessons();
	const percent = total ? Math.round((opened / total) * 100) : 0;

	const openedEl = document.getElementById("globalOpened");
	const totalEl = document.getElementById("globalTotal");
	const fillEl = document.getElementById("globalFill");
	const meterEl = document.getElementById("globalMeter");

	if (!openedEl || !totalEl || !fillEl || !meterEl) {
		return;
	}

	openedEl.textContent = String(opened);
	totalEl.textContent = String(total);
	fillEl.style.width = `${percent}%`;
	meterEl.setAttribute("aria-valuenow", String(percent));
}

function chapterStatus(chapter, openedLessons) {
	const opened = chapterOpenedCount(chapter, openedLessons);
	const total = chapterTotalCount(chapter);

	if (!opened) {
		return { text: "Pole alustatud", cls: "status-not-started" };
	}
	if (opened >= total) {
		return { text: "Valmis", cls: "status-completed" };
	}
	return { text: "Pooleli", cls: "status-in-progress" };
}

function renderHomePage() {
	const cardsEl = document.getElementById("chapterCards");
	const statsEl = document.getElementById("statsRow");
	if (!cardsEl || !statsEl) {
		return;
	}

	const openedLessons = loadOpenedLessons();
	updateTopProgress(openedLessons);

	const total = totalLessons();
	const opened = openedLessons.size;
	const completedChapters = COURSE.filter((chapter) => chapterOpenedCount(chapter, openedLessons) >= chapterTotalCount(chapter)).length;

	statsEl.innerHTML = [
		`<article class="stat-box"><div class="stat-label">Avatud tunnid</div><div class="stat-value">${opened}/${total}</div></article>`,
		`<article class="stat-box"><div class="stat-label">Peatukid valmis</div><div class="stat-value">${completedChapters}/${COURSE.length}</div></article>`,
		`<article class="stat-box"><div class="stat-label">Kokku peatukke</div><div class="stat-value">${COURSE.length}</div></article>`
	].join("");

	cardsEl.innerHTML = COURSE.map((chapter) => {
		const openedCount = chapterOpenedCount(chapter, openedLessons);
		const lessonTotal = chapterTotalCount(chapter);
		const status = chapterStatus(chapter, openedLessons);
		return `
			<article class="chapter-card">
				<h3>Peatukk ${chapter.id}: ${chapter.title}</h3>
				<p>${chapter.description}</p>
				<div class="chapter-meta">
					<span>${openedCount}/${lessonTotal} avatud</span>
					<span class="status-pill ${status.cls}">${status.text}</span>
				</div>
				<a class="open-link" href="chapter-${chapter.id}.html">Ava peatukk</a>
			</article>
		`;
	}).join("");
}

function renderChapterPage() {
	const chapterRoot = document.getElementById("chapterRoot");
	if (!chapterRoot) {
		return;
	}

	const chapterId = document.body.dataset.chapter;
	const chapter = COURSE.find((item) => item.id === chapterId);
	if (!chapter) {
		return;
	}

	const titleEl = document.getElementById("chapterTitle");
	const descEl = document.getElementById("chapterDescription");
	const lessonListEl = document.getElementById("lessonList");
	const chapterOpenedEl = document.getElementById("chapterOpened");
	const chapterTotalEl = document.getElementById("chapterTotal");
	const chapterFillEl = document.getElementById("chapterFill");
	const chapterMeterEl = document.getElementById("chapterMeter");
	const viewerTitleEl = document.getElementById("viewerTitle");
	const viewerMetaEl = document.getElementById("viewerMeta");
	const contentEl = document.getElementById("lessonContent");
	const clearButton = document.getElementById("clearChapter");

	titleEl.textContent = `Peatukk ${chapter.id}: ${chapter.title}`;
	descEl.textContent = chapter.description;

	const openedLessons = loadOpenedLessons();
	let activeLesson = null;

	function updateChapterProgress() {
		const openedCount = chapterOpenedCount(chapter, openedLessons);
		const lessonTotal = chapterTotalCount(chapter);
		const percent = lessonTotal ? Math.round((openedCount / lessonTotal) * 100) : 0;

		chapterOpenedEl.textContent = String(openedCount);
		chapterTotalEl.textContent = String(lessonTotal);
		chapterFillEl.style.width = `${percent}%`;
		chapterMeterEl.setAttribute("aria-valuenow", String(percent));

		Array.from(lessonListEl.querySelectorAll(".lesson-btn")).forEach((button) => {
			const lessonId = button.dataset.id;
			button.classList.toggle("opened", openedLessons.has(lessonId));
		});

		updateTopProgress(openedLessons);
	}

	function normalizeLinkedResources(container, lessonSrc) {
		const base = new URL(lessonSrc, window.location.href);
		container.querySelectorAll("[src]").forEach((node) => {
			const src = node.getAttribute("src");
			if (src && !src.startsWith("data:") && !src.startsWith("#")) {
				node.setAttribute("src", new URL(src, base).href);
			}
		});

		container.querySelectorAll("[href]").forEach((node) => {
			const href = node.getAttribute("href");
			if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
				node.setAttribute("href", new URL(href, base).href);
				node.setAttribute("target", "_blank");
				node.setAttribute("rel", "noopener noreferrer");
			}
		});

		container.querySelectorAll("[poster]").forEach((node) => {
			const poster = node.getAttribute("poster");
			if (poster) {
				node.setAttribute("poster", new URL(poster, base).href);
			}
		});
	}

	function extractLessonContent(html, lessonSrc) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");
		const host = document.createElement("article");
		host.className = "lesson-content";

		const source = doc.querySelector("main") || doc.querySelector("article") || doc.body;
		host.innerHTML = source ? source.innerHTML : "<p>Sisu ei leitud.</p>";

		host.querySelectorAll("script, style, link, meta, iframe").forEach((el) => el.remove());
		host.querySelectorAll("a[href$='index.html'], a[href$='../index.html'], a[href$='../../index.html']").forEach((el) => el.remove());

		normalizeLinkedResources(host, lessonSrc);
		return host;
	}

	async function openLesson(lesson, button) {
		if (!lesson.src) {
			return;
		}

		Array.from(lessonListEl.querySelectorAll(".lesson-btn")).forEach((item) => item.classList.remove("active"));
		button.classList.add("active");

		activeLesson = lesson;
		viewerTitleEl.textContent = `${lesson.id} - ${lesson.title}`;
		viewerMetaEl.textContent = "Sisu on kuvatud samal lehel ja kasutab selle lehe kujundust.";
		contentEl.innerHTML = "<p>Laen tunni sisu...</p>";

		try {
			const response = await fetch(lesson.src);
			if (!response.ok) {
				throw new Error("Faili laadimine ebaonnestus");
			}
			const html = await response.text();
			const content = extractLessonContent(html, lesson.src);
			contentEl.replaceChildren(content);
		} catch (error) {
			contentEl.innerHTML = "<p>Selle tunni sisu ei saanud laadida. Kontrolli faili asukohta old/ kaustas.</p>";
		}

		openedLessons.add(lesson.id);
		saveOpenedLessons(openedLessons);
		updateChapterProgress();
	}

	lessonListEl.innerHTML = chapter.lessons.map((lesson) => {
		const disabled = !lesson.src;
		const extraClass = disabled ? " lesson-missing" : "";
		const disabledAttr = disabled ? " disabled" : "";
		const label = disabled ? `${lesson.title} (fail puudub)` : lesson.title;
		return `
			<li>
				<button class="lesson-btn${extraClass}" data-id="${lesson.id}" data-title="${label}"${disabledAttr}>
					<span class="lesson-num">${lesson.id}</span>
					<span>${label}</span>
				</button>
			</li>
		`;
	}).join("");

	Array.from(lessonListEl.querySelectorAll(".lesson-btn:not(:disabled)")).forEach((button) => {
		const lesson = chapter.lessons.find((item) => item.id === button.dataset.id);
		button.addEventListener("click", () => openLesson(lesson, button));
	});

	clearButton.addEventListener("click", () => {
		chapter.lessons.filter((lesson) => lesson.src).forEach((lesson) => openedLessons.delete(lesson.id));
		saveOpenedLessons(openedLessons);
		if (activeLesson) {
			activeLesson = null;
			viewerTitleEl.textContent = "Vali tund vasakult";
			viewerMetaEl.textContent = "Ava tund nupust, et kuvada selle sisu.";
			contentEl.innerHTML = "<p class=\"viewer-empty\">Tunni sisu kuvatakse siia.</p>";
			Array.from(lessonListEl.querySelectorAll(".lesson-btn")).forEach((item) => item.classList.remove("active"));
		}
		updateChapterProgress();
	});

	const firstUnopened = chapter.lessons.find((lesson) => lesson.src && !openedLessons.has(lesson.id));
	const startLesson = firstUnopened || chapter.lessons.find((lesson) => lesson.src);
	if (startLesson) {
		const startButton = lessonListEl.querySelector(`.lesson-btn[data-id="${startLesson.id}"]`);
		openLesson(startLesson, startButton);
	}

	updateChapterProgress();
}

renderHomePage();
renderChapterPage();
