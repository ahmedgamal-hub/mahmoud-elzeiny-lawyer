(function () {
  'use strict';

  var A = 'حقوقك .. أولويتنا', B = 'خبرة .. ثقة .. لحقوقك', C = 'دعم قانوني حقيقي في كل خطوة';
  var Ae = 'Your rights .. our priority', Be = 'Experience .. Trust .. For your rights', Ce = 'Real legal support at every step';

  var translations = {
    ar: {
      'meta.title': 'مكتب محمود الزيني | محامٍ جنايات وأموال عامة',
      'meta.desc': 'مكتب محمود الزيني، محامٍ جنايات وأموال عامة. قضايا جنائية، أموال عامة، إيصالات أمانة وشيكات، قضايا الشركات والعقود، وأحوال شخصية. خبرة، ثقة، لحقوقك.',
      'brand.name': 'محمود الزيني',
      'brand.sub': 'محامٍ · جنايات وأموال عامة',
      'nav.home': 'الرئيسية', 'nav.files': 'تخصصاتنا', 'nav.path': 'مسار القضية', 'nav.pledge': 'مبادئنا', 'nav.contact': 'تواصل معنا', 'nav.cta': 'اتصل الآن',
      'lang.toggle': 'EN',
      'hero.badge': 'محامٍ · جنايات وأموال عامة',
      'hero.pre': 'مكتب',
      'hero.name': 'محمود الزيني',
      'hero.tag': B,
      'hero.lead': 'دعم قانوني حقيقي في كل خطوة، من أول استدعاء حتى آخر جلسة.',
      'hero.cta1': 'اتصل الآن', 'hero.cta2': 'واتساب',
      'hero.caseLabel': 'قضية رقم',
      'tk.a': A, 'tk.b': B, 'tk.c': C, 'tk.a2': A, 'tk.b2': B, 'tk.c2': C,
      'ug.tag': 'حالة عاجلة',
      'ug.title': 'تم استدعاؤك للتحقيق أو صدر ضدك أمر ضبط؟',
      'ug.text': 'الساعات الأولى هي الأهم في أي قضية جنائية. تواصل مع محاميك قبل أي إجراء أو أقوال.',
      'fl.tag': 'تخصصاتنا',
      'fl.title': 'ملفات نتولاها بخبرة وسرّية',
      'fl.lead': 'كل ملف له دراسة خاصة وخطة دفاع مستقلة، ولا يُفتح إلا بين موكّل ومحاميه.',
      'fl.no': 'ملف', 'fl.no2': 'ملف', 'fl.no3': 'ملف', 'fl.no4': 'ملف', 'fl.no5': 'ملف', 'fl.stamp': 'سري',
      'f1.title': 'القضايا الجنائية الشائكة',
      'f1.desc': 'دفاع في الجنايات والقضايا المعقدة أمام النيابة والمحاكم، من التحقيقات الأولى إلى الطعن على الأحكام.',
      'f2.title': 'قضايا الأموال العامة',
      'f2.desc': 'الدفاع في قضايا الاتهام المتعلقة بالمال العام والوظيفة العامة.',
      'f3.title': 'إيصالات الأمانة والشيكات',
      'f3.desc': 'الدفاع والمطالبة في قضايا التبديد وشيكات بدون رصيد.',
      'f4.title': 'قضايا الشركات والعقود',
      'f4.desc': 'صياغة ومراجعة العقود، وفض منازعات الشركات والشركاء.',
      'f5.title': 'الأحوال الشخصية',
      'f5.desc': 'قضايا الأسرة من زواج وطلاق ونفقة وحضانة ورؤية.',
      'cb.title': 'استشارات قانونية متخصصة',
      'cb.desc': 'قبل أن تتخذ أي خطوة، اعرف موقفك القانوني بوضوح.',
      'cb.cta': 'احجز استشارتك',
      'pt.tag': 'مسار القضية',
      'pt.title': 'كيف نمشي معك خطوة بخطوة',
      'pt.lead': 'وضوح في كل مرحلة، وأنت تعرف دائمًا أين وصلت قضيتك.',
      's1.title': 'نسمعك بالكامل', 's1.desc': 'نستمع للواقعة كاملة بسرية تامة ونراجع كل مستنداتك.',
      's2.title': 'ندرس الملف', 's2.desc': 'قراءة المحضر وأوراق القضية وتحديد نقاط القوة والثغرات.',
      's3.title': 'نبني الدفاع', 's3.desc': 'خطة دفاع مستقلة وحضور التحقيقات والجلسات ومتابعة كل إجراء.',
      's4.title': 'نتابع للنهاية', 's4.desc': 'متابعة الحكم والطعن عند الاقتضاء وتنفيذ ما يحمي حقك.',
      'pl1.w': 'خبرة', 'pl1.t': 'تعامل مع القضايا المعقدة بدراسة عميقة لكل تفصيلة.',
      'pl2.w': 'ثقة', 'pl2.t': 'سرية تامة وصراحة كاملة في تقدير موقفك القانوني.',
      'pl3.w': 'لحقوقك', 'pl3.t': 'حقوقك أولويتنا، ودعم قانوني حقيقي في كل خطوة.',
      'c.tag': 'للتواصل والاستفسار',
      'c.title': 'حقوقك أولويتنا، فاتصل بنا الآن',
      'c.lead': 'اشرح لنا موقفك في مكالمة أو رسالة، وسنحدد لك الخطوة التالية بوضوح.',
      'c.emailLabel': 'البريد الإلكتروني', 'c.phoneLabel': 'اتصل بنا', 'c.waLabel': 'واتساب', 'c.waText': 'ابدأ المحادثة الآن', 'c.addressLabel': 'العنوان',
      'c.address': 'امتداد شارع عباس العقاد، بجوار إنبي وكافيه المشربية وسوبر ماركت سفير، الحي السابع، مدينة نصر، القاهرة',
      'ds.tab': 'ملف جديد', 'ds.title': 'ابدأ ملفك اليوم', 'ds.text': B, 'ds.btn': 'تواصل الآن',
      'footer.name': 'مكتب محمود الزيني', 'footer.tag': 'محامٍ · جنايات وأموال عامة',
      'footer.rights': 'جميع الحقوق محفوظة', 'footer.owner': 'مكتب محمود الزيني للمحاماة', 'footer.credit': 'تصميم وتطوير: Markivo'
    },
    en: {
      'meta.title': 'Mahmoud El-Zeiny Law Office | Criminal & Public Funds Attorney',
      'meta.desc': 'Mahmoud El-Zeiny law office, criminal and public funds attorney. Criminal cases, public funds, trust receipts and cheques, corporate and contract cases, and personal status. Experience, trust, for your rights.',
      'brand.name': 'Mahmoud El-Zeiny',
      'brand.sub': 'Attorney · Criminal & Public Funds',
      'nav.home': 'Home', 'nav.files': 'Practice Areas', 'nav.path': 'Case Path', 'nav.pledge': 'Our Principles', 'nav.contact': 'Contact', 'nav.cta': 'Call Now',
      'lang.toggle': 'عربي',
      'hero.badge': 'Attorney · Criminal & Public Funds',
      'hero.pre': 'Law Office of',
      'hero.name': 'Mahmoud El-Zeiny',
      'hero.tag': Be,
      'hero.lead': 'Real legal support at every step, from the first summons to the final hearing.',
      'hero.cta1': 'Call Now', 'hero.cta2': 'WhatsApp',
      'hero.caseLabel': 'Case No.',
      'tk.a': Ae, 'tk.b': Be, 'tk.c': Ce, 'tk.a2': Ae, 'tk.b2': Be, 'tk.c2': Ce,
      'ug.tag': 'Urgent',
      'ug.title': 'Summoned for investigation or facing an arrest warrant?',
      'ug.text': 'The first hours matter most in any criminal case. Contact your lawyer before any procedure or statement.',
      'fl.tag': 'Practice Areas',
      'fl.title': 'Files we handle with expertise and confidentiality',
      'fl.lead': 'Every file gets its own study and independent defense plan, opened only between client and lawyer.',
      'fl.no': 'File', 'fl.no2': 'File', 'fl.no3': 'File', 'fl.no4': 'File', 'fl.no5': 'File', 'fl.stamp': 'CONFIDENTIAL',
      'f1.title': 'Complex Criminal Cases',
      'f1.desc': 'Defense in felonies and complex cases before the prosecution and the courts, from the first investigation to appeals.',
      'f2.title': 'Public Funds Cases',
      'f2.desc': 'Defense in accusations related to public money and public office.',
      'f3.title': 'Trust Receipts & Cheques',
      'f3.desc': 'Defense and claims in misappropriation and bounced cheque cases.',
      'f4.title': 'Corporate & Contract Cases',
      'f4.desc': 'Drafting and reviewing contracts, and resolving company and partner disputes.',
      'f5.title': 'Personal Status',
      'f5.desc': 'Family cases including marriage, divorce, alimony, custody, and visitation.',
      'cb.title': 'Specialized Legal Consultations',
      'cb.desc': 'Before you take any step, understand your legal position clearly.',
      'cb.cta': 'Book a Consultation',
      'pt.tag': 'Case Path',
      'pt.title': 'How we walk with you, step by step',
      'pt.lead': 'Clarity at every stage, so you always know where your case stands.',
      's1.title': 'We hear you fully', 's1.desc': 'We listen to the whole story in full confidence and review all your documents.',
      's2.title': 'We study the file', 's2.desc': 'Reading the report and case papers, identifying strengths and gaps.',
      's3.title': 'We build the defense', 's3.desc': 'An independent defense plan, attending investigations and hearings, following every procedure.',
      's4.title': 'We follow through', 's4.desc': 'Following the judgment, appealing where appropriate, and acting to protect your right.',
      'pl1.w': 'Experience', 'pl1.t': 'Handling complex cases with a deep study of every detail.',
      'pl2.w': 'Trust', 'pl2.t': 'Full confidentiality and complete frankness in assessing your legal position.',
      'pl3.w': 'Your Rights', 'pl3.t': 'Your rights are our priority, with real legal support at every step.',
      'c.tag': 'Contact & Inquiries',
      'c.title': 'Your rights are our priority, so call us now',
      'c.lead': 'Explain your situation in a call or a message, and we will define your next step clearly.',
      'c.emailLabel': 'Email', 'c.phoneLabel': 'Call Us', 'c.waLabel': 'WhatsApp', 'c.waText': 'Start the conversation now', 'c.addressLabel': 'Address',
      'c.address': 'Abbas El-Akkad Extension St., next to ENPPI, Al-Mashrabia Café and Safir Supermarket, 7th District, Nasr City, Cairo',
      'ds.tab': 'New File', 'ds.title': 'Open your file today', 'ds.text': Be, 'ds.btn': 'Contact Now',
      'footer.name': 'Mahmoud El-Zeiny Law Office', 'footer.tag': 'Attorney · Criminal & Public Funds',
      'footer.rights': 'All rights reserved', 'footer.owner': 'Mahmoud El-Zeiny Law Office', 'footer.credit': 'Designed & developed by Markivo'
    }
  };

  var STORAGE_KEY = 'zeiny-lang';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        var key = parts[1].trim();
        if (dict[key] !== undefined) el.setAttribute(parts[0].trim(), dict[key]);
      });
    });
    document.title = dict['meta.title'];
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLanguage(saved === 'en' || saved === 'ar' ? saved : 'ar');
    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.addEventListener('click', function () {
      applyLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
    });
  }

  function initSpotlight() {
    var hero = document.getElementById('hero');
    if (!hero || reduceMotion) return;
    hero.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  function initScroll() {
    var header = document.getElementById('siteHeader');
    var bar = document.getElementById('progress');
    var route = document.getElementById('route');
    var stages = route ? route.querySelectorAll('.stage') : [];
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY, vh = window.innerHeight;
      if (header) header.classList.toggle('scrolled', y > 20);
      if (bar) {
        var max = document.documentElement.scrollHeight - vh;
        bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
      }
      if (route) {
        var r = route.getBoundingClientRect();
        var trigger = vh * 0.7;
        var ratio = Math.max(0, Math.min(1, (trigger - r.top) / Math.max(1, r.height * 0.9 + 100)));
        route.style.setProperty('--p-num', ratio.toFixed(3));
        stages.forEach(function (st) {
          var d = st.querySelector('.stage-no').getBoundingClientRect();
          st.classList.toggle('active', d.top + d.height / 2 < trigger);
        });
      }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  function initMobileNav() {
    var burger = document.getElementById('burgerBtn');
    var nav = document.getElementById('mainNav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initActiveNav() {
    var sections = document.querySelectorAll('main section[id], main[id]');
    var links = document.querySelectorAll('.main-nav a');
    if (!sections.length || !links.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    var groups = ['.section-head', '.folder', '.consult-bar', '.stage', '.pl', '.urgent-inner', '.contact-item', '.dossier'];
    var targets = [];
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.setAttribute('data-reveal', '');
        el.style.transitionDelay = (Math.min(i, 5) * 100) + 'ms';
        targets.push(el);
      });
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('in-view');
        observer.unobserve(el);
        setTimeout(function () {
          el.removeAttribute('data-reveal');
          el.classList.remove('in-view');
          el.style.transitionDelay = '';
        }, 1500);
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initSpotlight();
    initScroll();
    initMobileNav();
    initActiveNav();
    initReveal();
    initYear();
  });
})();
