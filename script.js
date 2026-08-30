    let alumniData = [];
    const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbwqgtu08WwoL4Yfz7o1AOXOx7M2OaezESIUqxpmkaFSB-iRniPiuAd8MsaVkGfqr_U5/exec';
    /* Admin sign-in. Paste the OAuth Client ID from Google Cloud Console
       here, and store the same value in the Apps Script project with
       rdSetAdminClientId('...'). Left empty, the admin page falls back to
       the old behaviour. Nothing else on the site uses this. */
    const RD_ADMIN_CLIENT_ID = '849137353830-55alqovkjo713pr94v65k2ld8sidekq8.apps.googleusercontent.com';
    let RD_ADMIN_TOKEN = '';
    const ALUMNI_API_URL = API_BASE_URL + '?action=alumni';

    const staticEvents = [
      {
        eventId: 'STATIC-1', eventName: 'ক্যাম্পাসে বৃক্ষরোপণ কর্মসূচি ২০২৬', category: 'পরিবেশ ও সমাজকল্যাণ',
        eventDate: '2026-08-05', venue: 'ডুয়েট ক্যাম্পাস প্রাঙ্গণ, গাজীপুর',
        shortDescription: 'নতুন চান্স পাওয়া শিক্ষার্থীদের সঙ্গে ক্যাম্পাসে তিনটি গাছ লাগানো হয়।',
        fullDescription: 'জুলাই গণ-অভ্যুত্থান দিবস আর ডুয়েটের ২০২৫–২৬ শিক্ষাবর্ষের ভর্তি পরীক্ষার ফলাফল প্রকাশ উপলক্ষে নতুন চান্স পাওয়া শিক্ষার্থীদের সঙ্গে ক্যাম্পাসে বৃক্ষরোপণ করা হয়।\n\nযে তিনটি চারা লাগানো হয়েছে:\n১. নিম\n২. কদবেল\n৩. জাম্বুরা',
        driveFolder: 'Tree Plantation 2026',
        mainImage: 'Images/Tree Plantation/Tree Plantation 1.jpg',
        gallery: [
          {image: 'Images/Tree Plantation/Tree Plantation 1.jpg', caption: 'বৃক্ষরোপণ কর্মসূচি ২০২৬ — ১'},
          {image: 'Images/Tree Plantation/Tree Plantation 2.jpg', caption: 'বৃক্ষরোপণ কর্মসূচি ২০২৬ — ২'},
          {image: 'Images/Tree Plantation/Tree Plantation 3.jpg', caption: 'বৃক্ষরোপণ কর্মসূচি ২০২৬ — ৩'}
        ]
      },
      {
        eventId: 'STATIC-2', eventName: 'RANGDHANU Tour & Freshers\' Reception 2024', category: 'Tour',
        eventDate: '2024-12-15', venue: 'কুয়াকাটা সমুদ্র সৈকত, পটুয়াখালী',
        shortDescription: 'কুয়াকাটায় দুই দিনের বার্ষিক ট্যুর, সঙ্গে নবীনদের ফ্রেশার্স রিসেপশন।',
        fullDescription: 'রংধনু পরিবারের আয়োজনে কুয়াকাটায় বার্ষিক ট্যুর, সঙ্গে ২০২৪-এর নবীনদের ফ্রেশার্স রিসেপশন।\n\nযেখানে যেখানে যাওয়া হয়েছে:\n• Kuakata Sea Beach\n• Jhaubon\n• Shutki Palli\n• Fatrar Char\n• Gangamati Reserved Forest\n• Red Crab Island\n• Kuakata Well\n• Kuakata Buddhist Temple\n• Rakhain Community Village',
        driveFolder: 'Kuakata Tour 2024',
        mainImage: 'Images/Kuakata Tour/01.jpg',
        gallery: [
          {image: 'Images/Kuakata Tour/01.jpg'}, {image: 'Images/Kuakata Tour/IMG_8266.JPG'}, 
          {image: 'Images/Kuakata Tour/1734363039644.JPG'}, {image: 'Images/Kuakata Tour/IMG (13).JPG'},
          {image: 'Images/Kuakata Tour/IMG (30).JPG'}, {image: 'Images/Kuakata Tour/IMG (76).JPG'}, 
          {image: 'Images/Kuakata Tour/IMG (79).JPG'}, {image: 'Images/Kuakata Tour/IMG (84).JPG'}, 
          {image: 'Images/Kuakata Tour/IMG_0241.JPG'}, {image: 'Images/Kuakata Tour/IMG_8260.JPG'}
        ]
      },
      {
        eventId: 'STATIC-3', eventName: 'RANGDHANU Tour & Freshers\' Reception 2025', category: 'Tour',
        eventDate: '2025-12-19', venue: 'কক্সবাজার সমুদ্র সৈকত, কক্সবাজার',
        shortDescription: 'কক্সবাজারে দুই দিনের বার্ষিক ট্যুর, সঙ্গে নবীনদের ফ্রেশার্স রিসেপশন।',
        fullDescription: 'রংধনু পরিবারের আয়োজনে ১৯ ও ২০ ডিসেম্বর ২০২৫, কক্সবাজারে বার্ষিক ট্যুর, সঙ্গে নবীনদের ফ্রেশার্স রিসেপশন।\n\nযেখানে যেখানে যাওয়া হয়েছে:\n• কক্সবাজার সি বিচ\n• সুগন্ধা বিচ\n• হিমছড়ি ওয়াটারফল ও হিল\n• মেরিন ড্রাইভ রোড\n• ইনানী বিচ\n• হিমছড়ি ভিউ পয়েন্ট\n• কলাতলী বিচ\n• ফিশ মার্কেট',
        driveFolder: 'Cox Bazar Tour 2025',
        mainImage: 'Images/Cox Bazar/C 1.jpg',
        gallery: [
          {image: 'Images/Cox Bazar/C 1.jpg'}, {image: 'Images/Cox Bazar/DSC_2950.JPG'},
          {image: 'Images/Cox Bazar/DSC_2997.JPG'}, {image: 'Images/Cox Bazar/DSC_2756.JPG'}
        ]
      }
    ];

    /* Reunion 2024 album — ordered by how the day actually unfolded. */
    const RD_REUNION_PARTS = [{"n": 1, "icon": "flag", "bn": "উদ্বোধন ও বর্ণিল র‍্যালি", "en": "Opening Ceremony & Grand Rally"}, {"n": 2, "icon": "users", "bn": "ক্যাম্পাস আড্ডা, স্মৃতিস্তম্ভ ও মুক্তাঙ্গন", "en": "Campus Hangout & Outdoor Group Photos"}, {"n": 3, "icon": "book-open", "bn": "প্রকৌশলী কোচিং সেন্টার পরিদর্শন", "en": "PDACC Visit & Directors' Meetup"}, {"n": 4, "icon": "award", "bn": "অডিটোরিয়াম সেশন ও সংবর্ধনা", "en": "Auditorium Session & Award Ceremony"}, {"n": 5, "icon": "sparkles", "bn": "মঞ্চের স্মৃতি ও পরিসমাপ্তি", "en": "Stage Group Photos & Closing"}];
    const reunionPhotos = [{"id": 1, "part": 1, "file": "02.jpg", "caption": "উচ্ছ্বাসের রঙে রঙিন ক্যাম্পাস: বেলুন উড়িয়ে পুনর্মিলনী ২০২৪-এর আনুষ্ঠানিক উদ্বোধন।"}, {"id": 2, "part": 1, "file": "03.jpg", "caption": "শান্তি ও সম্প্রীতির বার্তা: নীল আকাশে শান্তির পায়রা উড়িয়ে উৎসবের সূচনা।"}, {"id": 3, "part": 1, "file": "04.jpg", "caption": "মিষ্টি স্মৃতির শুভক্ষণ: অতিথি ও অগ্রজদের সঙ্গে আনন্দঘন কেক কাটার মুহূর্ত।"}, {"id": 4, "part": 1, "file": "01.jpg", "caption": "স্মৃতির রাজপথে মেলবন্ধন: রংধনুর বর্ণিল পতাকাতলে প্রাণের গ্র্যান্ড র‍্যালি।"}, {"id": 5, "part": 1, "file": "DSC02128.JPG", "caption": "পদচারণায় মুখরিত প্রিয় ক্যাম্পাস: উল্লাসে ভরপুর গ্র্যান্ড র‍্যালির স্মারক মুহূর্ত।"}, {"id": 6, "part": 1, "file": "DSC02142.JPG", "caption": "রঙিন স্বপ্নের শুরু: উদ্বোধনী মঞ্চে নতুন অধ্যায় ও উৎসবের বাঁধভাঙা আমেজ।"}, {"id": 7, "part": 2, "file": "05.jpg", "caption": "ভালোবাসা ও শ্রদ্ধার মেলবন্ধন: ক্যাম্পাসের প্রিয় প্রাঙ্গণে সম্মানিত শিক্ষক ও অতিথিবৃন্দ।"}, {"id": 8, "part": 2, "file": "06.jpg", "caption": "ঐতিহ্যের স্মারকস্তম্ভে Rangdhanu Family: শিকড়ের টানে প্রবীণ-নবীনদের মিলনমেলা।"}, {"id": 9, "part": 2, "file": "24.jpg", "caption": "শহীদ মিনারের সান্নিধ্যে একাত্মতা: Rangdhanu Familyের গর্বিত সদস্যদের উপস্থিতি।"}, {"id": 10, "part": 2, "file": "25.jpg", "caption": "সবুজ প্রাঙ্গণে মহোৎসব: সুবর্ণ দিনে পুরো Rangdhanu Familyের ঐতিহাসিক মহামিলন।"}, {"id": 11, "part": 2, "file": "07.jpg", "caption": "সবুজ চত্বরে প্রাণের স্পন্দন: একই পরিচয়ে এক সুতোয় বাঁধা Rangdhanu Family।"}, {"id": 12, "part": 2, "file": "10.jpg", "caption": "একতাই আমাদের শক্তি: প্রিয় ক্যাম্পাসের মাঠে ভালোবাসার মানববলয়।"}, {"id": 13, "part": 2, "file": "11.jpg", "caption": "ছায়াবীথি তলে হাসিমুখ: ফেলে আসা সোনালী দিনগুলোর খোঁজে একদল স্বপ্নবাজ।"}, {"id": 14, "part": 2, "file": "12.jpg", "caption": "বন্ধুর কাঁধে বন্ধুর হাত: বহু বছর পরও অমলিন সেই পুরোনো বন্ধুত্ব ও ভ্রাতৃত্ব।"}, {"id": 15, "part": 2, "file": "DSC02197.JPG", "caption": "অক্ষরে অক্ষরে প্রাণের আবেগ: RANGDHANU টাইপোগ্রাফির সামনে বর্ণিল স্মৃতিকথা।"}, {"id": 16, "part": 2, "file": "DSC01817.JPG", "caption": "ইভেন্ট কর্নারে স্মৃতি ধরে রাখা: পুনর্মিলনীর স্মারক ব্যানারের সামনে প্রাণবন্ত ফ্রেম।"}, {"id": 17, "part": 2, "file": "DSC01989.JPG", "caption": "মাঠজুড়ে স্মৃতির উল্লাস: উৎসবের বিকেলে বন্ধুদের বাঁধভাঙা আনন্দ।"}, {"id": 18, "part": 2, "file": "DSC01889.JPG", "caption": "ডিজিটাল স্মৃতির ফ্রেমে আনন্দ: ৩৬০° ভিডিও বুথে বন্ধুদের উচ্ছ্বসিত সময়।"}, {"id": 19, "part": 2, "file": "DSC01891.JPG", "caption": "উৎসবের প্রতিটি কোণে আনন্দ: ফটোবুথ কর্নারে তারুণ্যের প্রাণবন্ত মুহূর্ত।"}, {"id": 20, "part": 3, "file": "19.jpg", "caption": "শিকড়ের কাছে ফেরা: প্রকৌশলী কোচিং সেন্টার ভবনের সামনে পরিচালকদের দলগত স্মৃতিচিত্র।"}, {"id": 21, "part": 3, "file": "13.jpg", "caption": "স্মৃতির অলিন্দে পিডিএসিসি: প্রকৌশলী কোচিং সেন্টার প্রাঙ্গণে পরিচালকদের সৌজন্য সাক্ষাৎ ও আড্ডা।"}, {"id": 22, "part": 3, "file": "15.jpg", "caption": "কর্মজীবনের গল্পে পুরোনো আড্ডা: পিডিএসিসি শাখায় পরিচালকদের প্রাণের মিলনমেলা।"}, {"id": 23, "part": 3, "file": "17.jpg", "caption": "কৃতজ্ঞতার স্মারক: পিডিএসিসি কার্যালয়ে অবদান ও পথচলার স্বীকৃতি সম্মাননা।"}, {"id": 24, "part": 3, "file": "18.jpg", "caption": "ঐতিহ্যের ধারাবাহিকতা: পিডিএসিসি প্রাঙ্গণে পারস্পরিক শুভেচ্ছা ও ক্রেস্ট প্রদান।"}, {"id": 25, "part": 4, "file": "08.jpg", "caption": "মিলনায়তনে স্মৃতির সুর: অডিটোরিয়ামে পুনর্মিলনীর মূল অধিবেশন ও স্মৃতিচারণ।"}, {"id": 26, "part": 4, "file": "09.jpg", "caption": "মঞ্চজুড়ে শ্রদ্ধা ও অভিজ্ঞতা: সম্মানিত অতিথিদের উপস্থিতিতে মূল আনুষ্ঠানিকতা।"}, {"id": 27, "part": 4, "file": "21.jpg", "caption": "শ্রদ্ধা ও ভালোবাসার নিবেদন: আমন্ত্রিত অতিথিকে ফুলেল শুভেচ্ছায় উষ্ণ অভ্যর্থনা।"}, {"id": 28, "part": 4, "file": "22.jpg", "caption": "গুণিজন সম্মাননা: দিকনির্দেশনামূলক অবদানের জন্য অতিথিদের হাতে সম্মাননা স্মারক অর্পণ।"}, {"id": 29, "part": 4, "file": "23.jpg", "caption": "সর্বোচ্চ শ্রদ্ধাঞ্জলি: প্রধান অতিথি মাননীয় ভিসি স্যারের হাতে বিশেষ সম্মাননা স্মারক প্রদান।"}, {"id": 30, "part": 5, "file": "20.jpg", "caption": "সজ্জিত মঞ্চে স্মৃতির বাঁধন: আলো-ঝলমলে অডিটোরিয়ামে আনন্দঘন গ্রুপ ফটো।"}, {"id": 31, "part": 5, "file": "DSC03350.JPG", "caption": "ফুলেল মঞ্চে চিরসবুজ স্মৃতি: পুনর্মিলনী ২০২৪-এর আনুষ্ঠানিক পরিসমাপ্তির স্মৃতিচিত্র।"}];

    function escapeHtml(value) { return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;'); }
    
    function normalizeAlumniImage(value) {
      const raw = String(value ?? '').trim();
      if (!raw) return '';
      if (/^https?:\/\//i.test(raw) && !/drive\.google\.com/i.test(raw)) return raw;
      const match = raw.match(/(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:[^#]*&)?id=|thumbnail\?id=))([a-zA-Z0-9_-]+)/i) || raw.match(/\/(?:d|file\/d)\/([a-zA-Z0-9_-]+)/i) || raw.match(/[?&]id=([a-zA-Z0-9_-]+)/i);
      if (match && match[1]) return 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(match[1]) + '&sz=w500';
      if (/^[a-zA-Z0-9_-]{15,}$/.test(raw)) return 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(raw) + '&sz=w500';
      return raw;
    }
    
    function initialsFor(name) { return String(name || '').split(' ').filter(n => n && !n.includes('.')).map(n => n[0]).slice(0, 2).join('').toUpperCase() || 'DU'; }
    
    /* A photo lands after the card that holds it -- Drive is a separate request.
       The image therefore starts transparent and is faded in once it is here.
       An error counts as arrival too: a broken photo must show its alt text and
       its grey box, never an invisible hole. */
    function rdPhotoReady(el) { if (el) el.classList.add('rd-photo-ready'); }

    /* innerHTML can hand back an image that a warm browser cache already has,
       and a load event that fired before this code ran never reaches us.  The
       sweep after every render catches exactly those. */
    function rdPhotoSweep(root) {
      const scope = root || document;
      scope.querySelectorAll('img.rd-photo-in:not(.rd-photo-ready)').forEach(img => {
        if (img.complete) rdPhotoReady(img);
      });
    }

    function alumniAvatarMarkup(a, sz = 'w-12 h-12', tx = 'text-base', rd = 'rounded-2xl') {
      const img = normalizeAlumniImage(a.image);
      if (!img) return `<div class="${sz} ${rd} bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-600 ${tx} shadow-sm">${escapeHtml(initialsFor(a.name))}</div>`;
      return `<div class="${sz} ${rd} overflow-hidden flex items-center justify-center shadow-sm relative bg-slate-100"><img src="${escapeHtml(img)}" alt="${escapeHtml(a.name || '')}" loading="lazy" decoding="async" onload="rdPhotoReady(this)" onerror="rdPhotoReady(this)" class="w-full h-full object-cover rd-photo-in"></div>`;
    }

    /* ---------- Sub-pages: what used to be popups are now real pages ----------
       parent    = which main nav item stays highlighted, and where "back" lands by default
       needsData = the page is filled in at runtime, so a direct link / refresh must
                   bounce to the parent instead of showing an empty page.            */
    const RD_SUBPAGES = {
      'notice':       { parent: 'home',   needsData: true  },
      'event-new':    { parent: 'events', needsData: false },
      'event-detail': { parent: 'events', needsData: true  },
      'my-info':      { parent: 'alumni', needsData: false },
      'profile':      { parent: 'alumni', needsData: true  },
      'member-signin': { parent: 'alumni', needsData: false },
      /* Its own section, and needsData is false on purpose: the row comes
         from the server on the page's own request, so a reload lands here
         instead of bouncing the member out to the directory. */
      'my-profile':   { parent: 'my-profile', needsData: false },
      'photo':        { parent: 'home',   needsData: true  },
      'notice-file':  { parent: 'noticeboard', needsData: true  },
      'committee-new': { parent: 'committee', needsData: false },
      'ec-message':   { parent: 'committee', needsData: true  },
      'pdacc-updates': { parent: 'prokoushali', needsData: true  }
    };
    const rdSubReturn = {};
    const rdSubFrom = {};
    let rdCurrentPageId = 'home';

    function openSubPage(pageId, backTo) {
      const parent = (RD_SUBPAGES[pageId] || {}).parent || 'home';
      const from = rdCurrentPageId !== pageId ? rdCurrentPageId : '';
      let back = backTo || from || parent;
      /* A section that is its own parent -- My Profile -- would otherwise send
         Back to the page it is already on. */
      if (back === pageId) back = parent === pageId ? 'home' : parent;
      rdSubReturn[pageId] = back;
      rdSubFrom[pageId] = from;   // the page sitting just behind us in history
      switchPage(pageId);
    }

    function goBackFromSubPage(pageId) {
      let back = rdSubReturn[pageId] || (RD_SUBPAGES[pageId] || {}).parent || 'home';
      if (back === pageId) back = 'home';
      // Only step through real history when the entry behind us IS where we want to land,
      // otherwise the URL bar and the visible page would disagree.
      if (rdSubFrom[pageId] === back && history.state && history.state.page === pageId && history.length > 1) {
        history.back();
        return;
      }
      switchPage(back);
    }

    function switchPage(pageId, updateUrl = true) {
      document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
      const tgt = document.getElementById(`page-${pageId}`);
      if (tgt) tgt.classList.add('active');
      rdCurrentPageId = pageId;
      const navId = (RD_SUBPAGES[pageId] || {}).parent || pageId;
      document.querySelectorAll('.nav-btn, .mobile-nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === navId));
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.classList.contains('hidden')) { menu.classList.add('hidden'); syncMobileMenuButton(); }
      if (updateUrl) history.pushState({page: pageId}, '', window.location.pathname + (pageId==='home'?'':`#${pageId}`));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try {
        if (pageId === 'events') loadPublicEvents();
        /* The directory is a whole page of its own; fetching it during boot
           only slowed down the home screen, which never shows it. */
        if (pageId === 'alumni') loadPublicAlumni();
        if (pageId === 'noticeboard') loadNoticeBoard();
        if (pageId === 'committee') loadExecutiveCommittee();
        /* The PDACC page shows the Director's message, so it needs the
           same feed the Committee page uses. */
        if (pageId === 'prokoushali') {
          loadExecutiveCommittee();
          renderPdaccSlides();
          pdaccHeroStartCycle();
          loadPdacc();
          loadPdaccStats();
        }
        if (pageId === 'pdacc-updates') loadPdacc();
        if (pageId === 'admin') adminEnterPage();
      } catch (err) { console.error('page loader failed:', err); }
    }

    function getPageFromLocation(allowSubPages = true) {
      const page = window.location.hash.replace('#','').trim();
      if (!page || !document.getElementById(`page-${page}`)) return 'home';
      const sub = RD_SUBPAGES[page];
      if (!allowSubPages && sub && sub.needsData) return sub.parent;
      return page;
    }
    window.addEventListener('popstate', () => switchPage(getPageFromLocation(), false));
    window.addEventListener('hashchange', () => switchPage(getPageFromLocation(), false));


    /* ================= GOOGLE DRIVE IMAGE LAYER =========================
       Every picture on the site can live in Google Drive now. Drive_Images.gs
       returns { folders: { home:[...], reunion:[...], site:[...] } } and each
       image carries { name, base, caption, url, fallbackUrl }.

       rdImageUrl('Images/Reunion Photo/02.jpg') looks the file up by its base
       name and returns the Drive URL when it exists — otherwise the local path
       keeps working, so the site never goes blank while Drive is being set up. */
    const RD_DRIVE_API = API_BASE_URL + '?action=driveimages';
    const RD_DRIVE = { ready: false, folders: {}, groups: {}, byBase: {}, trailer: null, error: '' };

    function rdBase(path) {
      let n = String(path || '').split('/').pop();
      const dot = n.lastIndexOf('.');
      if (dot > 0) n = n.slice(0, dot);
      return n.trim().toLowerCase();
    }

    /* Local path in, best available URL out. */
    function rdImageUrl(localPath) {
      const hit = RD_DRIVE.byBase[rdBase(localPath)];
      return hit ? hit.url : localPath;
    }

    /* A Drive photo that is not a listed site image (a member's uploaded
       photo, an event cover, the trailer poster): retry it once on the
       drive.google.com thumbnail host before giving up. That host answers for
       files lh3 refuses, so an image no longer silently disappears. */
    /* The last step of either fallback: put the local stand-in in place
       once, and only hide the picture when even that is missing. The
       stand-in is always a plain relative path -- rdImageUrl() would hand
       back the Drive link that has just failed, and the two would go on
       calling each other. */
    function rdImgGiveUp(img, standIn) {
      if (!img) return;
      const local = String(standIn || '').trim();
      /* Images/ ফোল্ডারটা repo-তে নেই -- ওই সব ছবি শুধু Drive থেকেই আসে।
         তাই Drive ব্যর্থ হলে Images/... পথে আরেকবার চেষ্টা করা মানে নিশ্চিত
         একটা 404, প্রতি ছবিতে একটা বাড়তি request। ওটা বাদ দিয়ে সোজা লুকিয়ে
         দেওয়া হয়। (কখনো Images/ ফোল্ডার repo-তে যোগ করলে এই শর্তটা তুলে দিন।) */
      const deadLocal = /^Images\//i.test(local);
      if (local && !deadLocal && !img.dataset.rdStood) {
        img.dataset.rdStood = '1';
        if (img.removeAttribute) img.removeAttribute('data-rd-img');
        const frame = img.parentElement;
        if (frame && frame.classList && frame.classList.contains &&
            frame.classList.contains('rd-news-thumb')) {
          frame.classList.add('is-logo');
        }
        img.src = local;
        return;
      }
      img.style.display = 'none';
    }

    function rdPhotoFallback(img, standIn) {
      if (!img || img.dataset.rdTried) { rdImgGiveUp(img, standIn); return; }
      img.dataset.rdTried = '1';
      const m = /(?:lh3\.googleusercontent\.com\/d\/|[?&]id=|\/d\/)([A-Za-z0-9_-]{20,})/.exec(img.src || '');
      if (!m) { rdImgGiveUp(img, standIn); return; }
      img.src = 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w1200';
    }

    /* Falls back to the drive.google.com thumbnail host, then to the local file. */
    function rdImgFallback(img, localPath) {
      if (!img || img.dataset.rdTried) { rdImgGiveUp(img, localPath); return; }
      img.dataset.rdTried = '1';
      const hit = RD_DRIVE.byBase[rdBase(img.getAttribute('data-rd-img') || localPath || img.src)];
      if (hit && hit.fallbackUrl) { img.src = hit.fallbackUrl; return; }
      rdImgGiveUp(img, localPath);
    }

    /* Named wrappers, so a news card's markup needs no nested quotes. */
    function rdNewsFallback(img) { rdPhotoFallback(img, 'logo.png'); }
    function rdNewsLogoFallback(img) { rdImgFallback(img, 'logo.png'); }

    /* The PDACC page's own two pictures and its one outward link. */
    const RD_PDACC_LOGO = 'pdacc-logo.png';
    const RD_RANGDHANU_LOGO = 'logo.png';
    const RD_PDACC_FB = 'https://www.facebook.com/pdaccduet';

    /* The crest, in three steps that can never call each other in a circle:
       the Drive thumbnail host, then the crest that ships with the site, then
       the Rangdhanu logo. The step is counted on the element itself, so the
       chain always ends. */
    function rdPdLogoFallback(img) {
      if (!img) return;
      const step = +(img.dataset.rdPdStep || 0);
      img.dataset.rdPdStep = String(step + 1);
      const now = String(img.src || '');
      if (step === 0) {
        const m = /(?:lh3\.googleusercontent\.com\/d\/|[?&]id=|\/d\/)([A-Za-z0-9_-]{20,})/.exec(now);
        if (m) { img.src = 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w1200'; return; }
      }
      const frame = img.parentElement;
      if (frame && frame.classList && frame.classList.contains &&
          frame.classList.contains('rd-news-thumb')) frame.classList.add('is-logo');
      if (img.removeAttribute) img.removeAttribute('data-rd-img');
      if (step <= 1 && now.indexOf(RD_PDACC_LOGO) === -1) { img.src = RD_PDACC_LOGO; return; }
      if (step <= 2 && now.indexOf(RD_RANGDHANU_LOGO) === -1) { img.src = RD_RANGDHANU_LOGO; return; }
      img.style.display = 'none';
    }

    /* Same chain, named for the update cards so their markup stays quote-free. */
    function rdPdCardFallback(img) { rdPdLogoFallback(img); }

    /* ---------- The home slideshow feed --------------------------------
       The Slideshow sheet leads only when it holds rows. An empty sheet, a
       refused call or no network at all leaves RD_SL.slides empty, and
       rdCoverList() then falls back to the Drive folder and after that to the
       pictures bundled with the site -- exactly what happened before this feed
       existed. So pasting the backend file changes nothing on the home page
       until an admin actually adds a slide. */
    /* The two photos that ship with the site.  They are the poster layers in
       the markup above and the fallback for the first slide below, so the name
       is written once here and nowhere else. */
    const RD_COVER_FIRST = 'slide-home.jpg';
    const RD_PDACC_FIRST = 'slide-pdacc.jpg';

    const RD_SLIDE_API = API_BASE_URL + '?action=slideshow';
    const RD_SL = { ready: false, slides: [], pdacc: [], error: '' };

    async function loadHomeSlides() {
      try {
        const res = await fetch(RD_SLIDE_API + '&_=' + Date.now(), { cache: 'no-store' });
        const j = await res.json();
        RD_SL.slides = (j && Array.isArray(j.slides)) ? j.slides.filter(s => s && s.url) : [];
        /* One request carries both bars: `slides` stays the home one and
           `places` names each of them, so an older reply still works. */
        const places = (j && j.places) || {};
        RD_SL.pdacc = Array.isArray(places.pdacc) ? places.pdacc.filter(s => s && s.url) : [];
        if (!RD_SL.slides.length && Array.isArray(places.home)) {
          RD_SL.slides = places.home.filter(s => s && s.url);
        }
      } catch (err) {
        /* Not something a visitor should ever be told about. */
        RD_SL.error = String(err && err.message ? err.message : err);
        RD_SL.slides = [];
        RD_SL.pdacc = [];
        console.warn('[rd] slideshow feed unavailable:', RD_SL.error);
      }
      RD_SL.ready = true;
      renderCoverSlides();
      renderPdaccSlides();
    }

    /* ---- the last good answer is remembered for this browser tab ---------
       Apps Script takes a moment to answer even when its own cache is warm,
       and a reload throws everything the page knew away -- which is why the
       pictures and the text arrive late. So each public feed keeps its last
       answer in sessionStorage: the page paints from that copy at once, then
       the fresh answer quietly replaces it (stale-while-revalidate).

       Only things every visitor can already read go in here -- never an
       admin list, never a token. It is sessionStorage, not localStorage, so
       it dies with the tab and a new visit still starts from the server. */
    const RD_FEED_TTL = 10 * 60 * 1000;

    function rdFeedRecall(key) {
      try {
        const raw = sessionStorage.getItem('rd_feed_' + key);
        if (!raw) return null;
        const box = JSON.parse(raw);
        if (!box || !box.at || Date.now() - box.at > RD_FEED_TTL) return null;
        return box.data || null;
      } catch (e) { return null; }
    }

    function rdFeedRemember(key, data) {
      try {
        sessionStorage.setItem('rd_feed_' + key,
          JSON.stringify({ at: Date.now(), data: data }));
      } catch (e) { /* private mode, or the quota is full: no harm done */ }
    }

    /* An admin has just changed something, so the remembered copy in this
       tab is out of date and must go -- otherwise the admin reloads and
       sees the old list staring back. */
    function rdFeedForget(key) {
      try { sessionStorage.removeItem('rd_feed_' + key); } catch (e) {}
    }

    async function loadDriveImages() {
      /* Paint from the remembered listing first, so the pictures are there
         before the network has said anything. */
      const warm = rdFeedRecall('drive');
      if (warm && !RD_DRIVE.ready) { rdDriveAdopt(warm); RD_DRIVE.ready = true; applyDriveImages(); }
      try {
        const res = await fetch(RD_DRIVE_API + '&_=' + Date.now(), { cache: 'no-store' });
        const j = await res.json();
        if (!j || j.success !== true) throw new Error(j && j.message ? j.message : 'Drive listing failed.');
        rdDriveAdopt(j);
        rdFeedRemember('drive', { folders: j.folders || {}, groups: j.groups || {}, trailer: j.trailer || null });
      } catch (err) {
        /* No Drive yet, or offline: the local files stay in use. Not an error
           the visitor should ever see. */
        RD_DRIVE.error = String(err && err.message ? err.message : err);
        if (!warm) { RD_DRIVE.groups = {}; RD_DRIVE.trailer = null; }
        console.warn('[rd] drive images unavailable:', RD_DRIVE.error);
      }
      RD_DRIVE.ready = true;
      applyDriveImages();
    }

    /* Fold one listing -- fresh or remembered -- into RD_DRIVE. */
    function rdDriveAdopt(j) {
      RD_DRIVE.folders = j.folders || {};
      RD_DRIVE.groups = j.groups || {};
      RD_DRIVE.trailer = j.trailer || null;
      RD_DRIVE.byBase = {};
      Object.keys(RD_DRIVE.folders).forEach(k => {
        (RD_DRIVE.folders[k] || []).forEach(im => {
          im.folder = k;
          if (im && im.base && !RD_DRIVE.byBase[im.base]) RD_DRIVE.byBase[im.base] = im;
        });
      });
      /* Sub-folder images are looked up by base name too, so an existing
         data-rd-img="Images/Reunion Photo/02.jpg" finds Drive's 02.jpg even
         when it now sits inside an album sub-folder. */
      Object.keys(RD_DRIVE.groups).forEach(k => {
        (RD_DRIVE.groups[k] || []).forEach(g => {
          (g.images || []).forEach(im => {
            im.folder = k; im.group = g.name;
            if (im && im.base && !RD_DRIVE.byBase[im.base]) RD_DRIVE.byBase[im.base] = im;
          });
        });
      });
    }

    /* Swap every element carrying data-rd-img="Images/..." for its Drive copy. */
    function applyDriveImages() {
      document.querySelectorAll('[data-rd-img]').forEach(img => {
        const local = img.getAttribute('data-rd-img');
        const url = rdImageUrl(local);
        if (url !== img.getAttribute('src')) img.setAttribute('src', url);
      });
      renderCoverSlides();
      renderReunionTrailer();
      applyStaticEventCovers();
      /* the album is 31 images; re-render so it picks the Drive copies up */
      if (typeof renderReunionPhotos === 'function') renderReunionPhotos();
    }

    /* One Drive sub-folder = one album. Matched by folder name, case and
       surrounding spaces ignored, so "Kuakata Tour 2024" and
       "kuakata tour 2024 " both work. */
    function rdDriveGroup(folderKey, name) {
      const want = String(name || '').trim().toLowerCase();
      if (!want) return null;
      const list = (RD_DRIVE.groups && RD_DRIVE.groups[folderKey]) || [];
      for (let i = 0; i < list.length; i++) {
        const g = list[i];
        if (String(g && g.name || '').trim().toLowerCase() === want) {
          return (g.images && g.images.length) ? g : null;
        }
      }
      return null;
    }

    /* An event whose Drive folder exists gets its cover and its whole captioned
       gallery from Drive; otherwise the local Images/... list is used as-is. */
    function rdEventFromDrive(e) {
      if (!e || !e.driveFolder) return e;
      const g = rdDriveGroup('events', e.driveFolder);
      if (!g) return e;
      const local = e.gallery || [];
      const out = Object.assign({}, e);
      out.mainImage = g.images[0].url;
      out.gallery = g.images.map((im, i) => ({
        image: im.url,
        caption: im.caption || (local[i] && local[i].caption) || ''
      }));
      return out;
    }

    /* The three long-standing event cards are hand-written HTML, so their
       covers are refreshed here once the manifest arrives. */
    function applyStaticEventCovers() {
      staticEvents.forEach((e, i) => {
        const img = document.getElementById('static-event-cover-' + i);
        if (!img) return;
        const url = rdEventFromDrive(e).mainImage;
        if (url && url !== img.getAttribute('src')) img.setAttribute('src', url);
      });
    }

    /* ================= REUNION TRAILER (Google Drive) ===================
       Two states, one card.  At rest it is a thumbnail beside a short
       description -- about 240 px tall instead of the 650 px a full-width 16:9
       stage used to take for a video most visitors never start.  Pressing play
       turns the same card into that big stage; "smaller" brings it back.

       The whole block stays hidden unless Drive_Images.gs reports a video, and
       the Drive player is still only inserted after a click, so the reunion
       page never pays for an iframe nobody asked for. */
    let RD_TRAILER_OPEN = false;

    /* The words beside the thumbnail.  Apps Script can override any of them
       (t.title / t.subtitle / t.description); these are what shows otherwise,
       so the space freed up by shrinking the video is never left blank. */
    const RD_TRAILER_TEXT = {
      title: 'পুনর্মিলনী ২০২৪ — ট্রেলার',
      meta: '০১ মার্চ ২০২৪ • ডুয়েট ক্যাম্পাস',
      desc: 'উদ্বোধনী র‍্যালি থেকে মঞ্চের শেষ মুহূর্ত — পুনর্মিলনীর পুরো দিনটা এক ঝলকে। ক্যাম্পাসের আড্ডা, অডিটোরিয়ামের সংবর্ধনা আর পুরো Rangdhanu Family-র একসাথে দাঁড়ানোর মুহূর্তগুলো রয়েছে এই ছোট ভিডিওতে।'
    };

    function renderReunionTrailer(expanded) {
      const box = document.getElementById('reunion-trailer');
      if (!box) return;
      const t = RD_DRIVE.trailer;
      if (!t || !t.ready || !t.fileId) {
        RD_TRAILER_OPEN = false;
        box.classList.add('hidden');
        box.innerHTML = '';
        return;
      }
      /* Called with no argument by the Drive loader: keep whatever state the
         visitor is already in, so a background refresh cannot stop the video. */
      if (expanded === undefined) expanded = RD_TRAILER_OPEN;
      RD_TRAILER_OPEN = !!expanded;

      const title = t.title || RD_TRAILER_TEXT.title;
      const sub = t.subtitle || RD_TRAILER_TEXT.meta;
      const desc = t.description || RD_TRAILER_TEXT.desc;
      box.classList.remove('hidden');
      box.innerHTML = RD_TRAILER_OPEN
        ? rdTrailerBig(t, title, sub)
        : rdTrailerCard(t, title, sub, desc);
      if (window.lucide) lucide.createIcons();
    }

    /* Resting state: picture on the left, words on the right. On a phone the
       grid collapses, so the thumbnail sits above the description. */
    function rdTrailerCard(t, title, sub, desc) {
      return `
        <div class="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          <div class="grid md:grid-cols-[minmax(0,42%)_1fr]">
            <button type="button" onclick="rdPlayTrailer()" aria-label="ট্রেলার চালু করুন"
              class="group relative block w-full overflow-hidden bg-slate-950 aspect-video">
              <img src="${escapeHtml(t.poster || '')}" alt="${escapeHtml(title)}" loading="lazy" decoding="async"
                onerror="rdPhotoFallback(this)"
                class="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105">
              <span class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10"></span>
              <span class="absolute inset-0 flex items-center justify-center">
                <span class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <i class="w-7 h-7" data-lucide="play"></i>
                </span>
              </span>
              <span class="absolute left-3 bottom-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/70 border border-white/15 text-white text-[11px] font-bold tracking-wide">
                <i class="w-3 h-3" data-lucide="clapperboard"></i> ভিডিও
              </span>
            </button>
            <div class="p-5 sm:p-6 flex flex-col gap-3 min-w-0">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="p-2 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md shrink-0"><i class="w-4 h-4" data-lucide="clapperboard"></i></div>
                <div class="min-w-0">
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 truncate">${escapeHtml(title)}</h3>
                  <span class="text-xs text-slate-500 font-medium">${escapeHtml(sub)}</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">${escapeHtml(desc)}</p>
              <div class="mt-auto flex flex-wrap items-center gap-2 pt-1">
                <button type="button" onclick="rdPlayTrailer()"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors min-h-[44px]">
                  <i class="w-4 h-4" data-lucide="play"></i> এখানেই দেখুন
                </button>
                <a href="${escapeHtml(t.openUrl || '#')}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold transition-colors min-h-[44px]">
                  <i class="w-3.5 h-3.5" data-lucide="external-link"></i> Drive-এ দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>`;
    }

    /* Watching state: the full-width 16:9 stage this block used to be all the
       time.  #trailer-stage is filled in by rdPlayTrailer(). */
    function rdTrailerBig(t, title, sub) {
      return `
        <div class="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          <div class="flex flex-wrap items-center gap-3 px-5 sm:px-7 py-4 border-b border-slate-100">
            <div class="p-2.5 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md shrink-0"><i class="w-5 h-5" data-lucide="clapperboard"></i></div>
            <div class="min-w-0">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 truncate">${escapeHtml(title)}</h3>
              <span class="text-xs text-slate-500 font-medium">${escapeHtml(sub)}</span>
            </div>
            <div class="ml-auto flex items-center gap-2">
              <a href="${escapeHtml(t.openUrl || '#')}" target="_blank" rel="noopener"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold transition-colors min-h-[44px]">
                <i class="w-3.5 h-3.5" data-lucide="external-link"></i> Drive-এ দেখুন
              </a>
              <button type="button" onclick="rdCloseTrailer()"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors min-h-[44px]">
                <i class="w-3.5 h-3.5" data-lucide="minimize-2"></i> ছোট করুন
              </button>
            </div>
          </div>
          <div id="trailer-stage" class="relative w-full bg-slate-950" style="padding-bottom:56.25%;"></div>
        </div>`;
    }

    function rdPlayTrailer() {
      const t = RD_DRIVE.trailer;
      if (!t || !t.ready) return;
      renderReunionTrailer(true);
      const stage = document.getElementById('trailer-stage');
      if (!stage) return;
      stage.innerHTML = `<iframe src="${escapeHtml(t.embedUrl)}" title="${escapeHtml(t.title || 'Reunion trailer')}"
        class="absolute inset-0 w-full h-full" frameborder="0" allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen loading="lazy"></iframe>`;
    }

    function rdCloseTrailer() { renderReunionTrailer(false); }

    /* ================= COVER SLIDESHOW ==================================
       Was completely broken: the arrows and the dots called setCoverSlide(),
       nextCoverSlide() and prevCoverSlide(), none of which existed, so the
       cover never moved and every click threw a ReferenceError. */
    const RD_HOME_SLIDES = [
      { file: 'IMG_2388.JPG', alt: 'রংধনুর ঐক্য ও ভ্রাতৃত্ব', badge: 'RANGDHANU • DUET', title: 'রংপুরের শিক্ষার্থীদের নিজেদের সংগঠন' },
      { file: 'IMG_1971.JPG', alt: 'Rangdhanu Familyের সঙ্গে পথচলা', badge: 'COMMUNITY', title: 'একটি পরিবার, বহু প্রজন্মের বন্ধন' },
      { file: 'IMG_1917.JPG', alt: 'উত্তরবঙ্গের প্রকৌশলীদের মেলবন্ধন', badge: 'ALUMNI', title: 'বর্তমান থেকে প্রাক্তন, সম্পর্কের সেতুবন্ধন' },
      { file: 'DSC02142.JPG', alt: 'ডুয়েট ক্যাম্পাসের স্মৃতি', badge: 'MEMORIES', title: 'ডুয়েট ক্যাম্পাসে আমাদের সোনালী মুহূর্ত' },
      { file: 'DSC02197.JPG', alt: 'Rangdhanu Familyের ঐক্য', badge: 'UNITY', title: 'যেখানেই থাকি, বন্ধন থাকে অটুট' },
      { file: 'DSC02128.JPG', alt: 'Rangdhanu Familyের আড্ডা', badge: 'CAMPUS LIFE', title: 'ক্যাম্পাস জীবনের বাইরে, একটি বড় পরিবার' },
      { file: 'DSC02178.JPG', alt: 'Rangdhanu Familyের বন্ধন', badge: 'RANGDHANU FAMILY', title: 'বিপদে-আনন্দে একসঙ্গে' },
      { file: 'IMG_5210.JPG', alt: 'রংধনুর আয়োজন', badge: 'ACTIVITIES', title: 'শিক্ষা, সংস্কৃতি, ক্রীড়া ও সামাজিক কার্যক্রম' },
      { file: '817A4451 (1).JPG', alt: 'ডুয়েটিয়ানদের মিলনমেলা', badge: 'NETWORK', title: 'রংপুর থেকে ডুয়েট, সবাই এক জায়গায়' },
      { file: 'IMG (84).JPG', alt: 'রংধনু ডুয়েটের স্মরণীয় মুহূর্ত', badge: 'OUR STORY', title: 'যেথায় থাকুক যে যেখানে, রংধনু আছে মনে প্রাণে' }
    ];
    const RD_SLIDE_MS = 6500;

    /* ---------- the bundled first frame is a slide of its own ----------
       slide-home.jpg / slide-pdacc.jpg ship with the site, so they paint almost
       immediately -- while the Drive photo behind them takes a second or two.

       They used to be a temporary stand-in for slide 0: the Drive URL was
       parked in RD_COVER_HELD / RD_PDACC_HELD and written into the very same
       image element once the bar had moved on.  The bundled photo therefore left the
       rotation after the first lap and only came back on a reload -- exactly
       what the owner reported.  Now it is simply prepended as its own
       permanent slide, so it opens the bar *and* stays in the loop, and no URL
       has to be parked or swapped anywhere. */
    /* The first step of the visit waits a little longer than the rest, so the
       bundled frame is genuinely seen and the Drive photos behind it are all
       in by the time the bar moves.  Every later step uses RD_SLIDE_MS. */
    const RD_FIRST_SLIDE_MS = 7000;
    let rdCoverStepped = false, rdPdStepped = false;
    const RD_BOOT_AT = Date.now();

    function rdFirstFrameSlide(src, pool) {
      return {
        src: src, local: src,
        alt: (pool && (pool.alt || pool.title)) || 'RANGDHANU DUET', badge: (pool && pool.badge) || '',
        title: (pool && pool.title) || ''
      };
    }

    /* Put the bundled frame in front of whatever Drive gave us -- unless Drive
       already handed back that same file, which would show it twice. */
    function rdWithFirstFrame(list, src, pool) {
      const rest = (list || []).filter(s => s && s.src !== src);
      return [rdFirstFrameSlide(src, pool)].concat(rest);
    }
    let rdSlides = [], rdSlideIdx = 0, rdSlideTimer = null;

    /* Drive photos may be named `03 - বাংলা শিরোনাম.jpg`; the part after " - "
       becomes the headline. Unnamed ones borrow our own captions in turn. */
    /* A logo dropped into the Home folder must not become a slide. */
    function rdIsLogoName(name) {
      return /logo|brand|monogram/i.test(String(name || ''));
    }

    function rdCoverList() {
      /* Order of preference: the Slideshow sheet, then the Drive folder,
         then the pictures that ship with the site. */
      const sheet = (RD_SL.slides || []).filter(s => s && s.url);
      if (sheet.length) {
        return rdWithFirstFrame(sheet.map((s, i) => {
          const pool = RD_HOME_SLIDES[i % RD_HOME_SLIDES.length];
          return {
            src: s.url,
            local: s.fallbackUrl || (i === 0 ? RD_COVER_FIRST : ''),
            alt: s.caption || pool.alt,
            badge: s.badge || pool.badge,
            title: s.caption || ''
          };
        }), RD_COVER_FIRST, RD_HOME_SLIDES[0]);
      }
      const drive = (RD_DRIVE.folders.home || []).filter(im => !rdIsLogoName(im.name));
      if (!drive.length) {
        /* Drive-এ কিছু না থাকলে আগে Images/Home/-এর দশটা ছবি চাওয়া হতো, কিন্তু
           সেই ফোল্ডার repo-তে নেই -- দশটা 404, আর শেষে ফাঁকা bar। এখন সাইটের
           সঙ্গেই থাকা একটা ছবি দেখানো হয়, PDACC bar যেভাবে করে। */
        return [{
          src: RD_COVER_FIRST, local: RD_COVER_FIRST,
          alt: RD_HOME_SLIDES[0].alt, badge: RD_HOME_SLIDES[0].badge, title: RD_HOME_SLIDES[0].title
        }];
      }
      return rdWithFirstFrame(drive.map((im, i) => {
        const pool = RD_HOME_SLIDES[i % RD_HOME_SLIDES.length];
        return {
          src: im.url,
          local: im.fallbackUrl || (i === 0 ? RD_COVER_FIRST : ''),
          alt: im.caption || pool.alt,
          badge: pool.badge,
          title: im.caption || pool.title
        };
      }), RD_COVER_FIRST, RD_HOME_SLIDES[0]);
    }

    /* ---------------------------------------------------------------
       The welcome block over the slideshow.

       Two wordings -- English and Bengali -- take turns, and the entrance
       animation runs again on every turn (the class is dropped, a reflow is
       forced, then the class goes back on; without the reflow the browser
       never restarts the keyframes). The slideshow underneath keeps its own
       timer, so the pictures and the words are independent.
       --------------------------------------------------------------- */
    const RD_HERO_COPY = [
      { kicker: 'Welcome to',
        title:  'RANGDHANU FAMILY',
        sub:    'Students Welfare Association of Greater Rangpur',
        cta:    'About RANGDHANU' },
      { kicker: 'Welcome to',
        title:  'রংধনু পরিবার',
        sub:    'বৃহত্তর রংপুর বিভাগীয় ছাত্রকল্যাণ সংগঠন',
        cta:    'রংধনু সম্পর্কে' }
    ];
    let rdHeroIdx = 0;
    let rdHeroTimer = null;

    function rdHeroRender() {
      const box = document.getElementById('rd-hero-copy');
      if (!box) return;
      const v = RD_HERO_COPY[rdHeroIdx % RD_HERO_COPY.length];
      box.classList.remove('rd-hero-anim');
      void box.offsetWidth;                       /* forces the reflow */
      box.innerHTML =
        '<p class="text-white/80 text-[9px] sm:text-[11px] font-extrabold uppercase" style="letter-spacing:.34em">' +
          escapeHtml(v.kicker) + '</p>' +
        '<h2 class="text-white font-extrabold tracking-tight leading-[1.08] mt-2 text-[1.45rem] sm:text-4xl md:text-5xl">' +
          escapeHtml(v.title) + '</h2>' +
        '<p class="text-white/90 font-semibold mt-2.5 max-w-2xl leading-snug text-[10px] sm:text-sm md:text-base">' +
          escapeHtml(v.sub) + '</p>' +
        '<button type="button" onclick="goHomeSection(\'about-rangdhanu\')" class="pointer-events-auto mt-3 sm:mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-slate-900 text-[10px] sm:text-xs font-extrabold shadow-lg">' +
          escapeHtml(v.cta) + ' <i class="w-3.5 h-3.5" data-lucide="arrow-down"></i></button>';
      box.classList.add('rd-hero-anim');
      if (window.lucide) lucide.createIcons();
    }

    function rdHeroStartCycle() {
      if (!document.getElementById('rd-hero-copy')) return;
      rdHeroRender();
      if (rdHeroTimer) clearInterval(rdHeroTimer);
      rdHeroTimer = setInterval(function () {
        rdHeroIdx = (rdHeroIdx + 1) % RD_HERO_COPY.length;
        rdHeroRender();
      }, 5200);
    }

    /* The two "About RANGDHANU" buttons on the home page. The description is
       already further down the same page, so the button only scrolls to it --
       nothing opens, nothing is duplicated. Pressed from another page it
       switches to home first, and waits for switchPage()'s own scroll-to-top
       to settle before scrolling down, or the two would fight each other. */
    function goHomeSection(sectionId) {
      const go = function () {
        const box = document.getElementById(sectionId);
        if (!box || !box.scrollIntoView) return;
        try { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        catch (e) { box.scrollIntoView(); }
      };
      if (rdCurrentPageId !== 'home') { switchPage('home'); setTimeout(go, 320); }
      else go();
    }

    function renderCoverSlides() {
      const wrap = document.getElementById('cover-slides');
      const dots = document.getElementById('cover-dots');
      if (!wrap) return;
      rdSlides = rdCoverList();
      const skel = document.getElementById('cover-skeleton');
      if (skel) skel.remove();

      wrap.innerHTML = rdSlides.map((s, i) => `
        <div class="cover-slide absolute inset-0 transition-all duration-1000 ease-out ${i === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'}">
          <img alt="${escapeHtml(s.alt || '')}" data-rd-img="${escapeHtml(s.local || s.src)}"
            src="${escapeHtml(s.src)}" ${i === 0 ? '' : 'loading="lazy" '}decoding="async"
            onerror="rdImgFallback(this, '${escapeHtml(s.local || '')}')"
            class="slide-img w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
          <div class="rd-cap absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-7 z-30">
            <span class="rd-cap-badge inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold">${escapeHtml(s.badge || 'RANGDHANU • DUET')}</span>
            <span class="rd-cap-line"></span>
            <h2 class="rd-cap-title text-[11px] sm:text-sm md:text-base font-bold text-white/95 mt-2 leading-snug max-w-2xl">${escapeHtml(s.title || '')}</h2>
          </div>
        </div>`).join('');

      if (dots) {
        dots.innerHTML = rdSlides.map((s, i) => `
          <span class="cover-indicator ${i === 0 ? 'w-6 bg-white' : 'w-1.5 bg-white/45'} h-1.5 rounded-full transition-all duration-300 cursor-pointer"
            role="button" tabindex="0" aria-label="Slide ${i + 1}" onclick="setCoverSlide(${i})"></span>`).join('');
        dots.style.display = rdSlides.length > 1 ? '' : 'none';
      }
      rdSlideIdx = 0;
      startCoverAutoplay();
    }

    function setCoverSlide(i) {
      const items = document.querySelectorAll('#cover-slides .cover-slide');
      if (!items.length) return;
      rdSlideIdx = ((i % items.length) + items.length) % items.length;
      items.forEach((el, n) => {
        const on = n === rdSlideIdx;
        el.classList.toggle('opacity-100', on);
        el.classList.toggle('scale-100', on);
        el.classList.toggle('z-10', on);
        el.classList.toggle('opacity-0', !on);
        el.classList.toggle('scale-105', !on);
        el.classList.toggle('pointer-events-none', !on);
        el.classList.toggle('z-0', !on);
      });
      /* The headline is written on the picture, so its own little entrance
         runs again whenever the picture underneath it changes. */
      rdCapReplay(items[rdSlideIdx]);
      document.querySelectorAll('#cover-dots .cover-indicator').forEach((d, n) => {
        const on = n === rdSlideIdx;
        d.classList.toggle('w-6', on);
        d.classList.toggle('bg-white', on);
        d.classList.toggle('w-1.5', !on);
        d.classList.toggle('bg-white/45', !on);
        d.setAttribute('aria-current', on ? 'true' : 'false');
      });
      startCoverAutoplay();
    }
    function nextCoverSlide() { setCoverSlide(rdSlideIdx + 1); }
    function prevCoverSlide() { setCoverSlide(rdSlideIdx - 1); }

    function startCoverAutoplay() {
      if (rdSlideTimer) { clearTimeout(rdSlideTimer); clearInterval(rdSlideTimer); }
      rdSlideTimer = null;
      if (rdSlides.length < 2) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      /* A chain of one-shot timers, not one repeating interval: that is what
         lets the opening picture keep the bar longer than the others. */
      const wait = (!rdCoverStepped && rdSlideIdx === 0) ? RD_FIRST_SLIDE_MS : RD_SLIDE_MS;
      rdSlideTimer = setTimeout(function () {
        rdSlideTimer = null;
        rdCoverStepped = true;
        const items = document.querySelectorAll('#cover-slides .cover-slide');
        if (!items.length) return;
        /* setCoverSlide() arms the next step itself, so the chain continues. */
        setCoverSlide((rdSlideIdx + 1) % items.length);
      }, wait);
    }

    /* ---------------------------------------------------------------
       The PDACC bar. The same shape as the home one but with its own
       state, so neither bar can stop the other one's timer.
       --------------------------------------------------------------- */
    const RD_PDACC_SLIDES = [
      { badge: 'PDACC', title: 'ডুয়েট ভর্তির প্রস্তুতি, অভিজ্ঞ ডুয়েটিয়ানদের হাতে' },
      { badge: 'ADMISSION', title: 'স্টাডি ম্যাটেরিয়াল আর নিয়মিত মডেল টেস্ট' },
      { badge: 'GUIDELINE', title: 'যার যেখানে আটকায়, সেখানেই সাহায্য' },
      { badge: 'RESULT', title: 'গত বছর ৯০ জন ভর্তির সুযোগ পেয়েছে' }
    ];
    let rdPdSlides = [], rdPdIdx = 0, rdPdTimer = null;

    /* Two wordings take turns on the bar: the English full form and the
       Bengali one. */
    const RD_PD_HERO_COPY = [
      { kicker: 'Welcome to',
        title:  'PDACC',
        sub:    'Prokaushali DUET Admission Coaching Centre',
        sub2:   'প্রকৌশলী ডুয়েট এডমিশন কোচিং সেন্টার' },
      { kicker: 'স্বাগতম',
        title:  'প্রকৌশলী ডুয়েট এডমিশন কোচিং সেন্টার',
        sub:    'Prokaushali DUET Admission Coaching Centre',
        sub2:   'রংধনুর একটি অঙ্গ সংগঠন' }
    ];
    let rdPdHeroIdx = 0, rdPdHeroTimer = null;

    /* A caption's entrance runs again on demand. The class has to come off,
       a reflow has to be forced, and only then can it go back on -- without
       the reflow the browser never restarts the keyframes. */
    function rdCapReplay(slide) {
      if (!slide || !slide.querySelectorAll) return;
      const names = ['rd-cap-badge', 'rd-cap-line', 'rd-cap-title'];
      const parts = slide.querySelectorAll('.rd-cap-badge, .rd-cap-line, .rd-cap-title') || [];
      for (let i = 0; i < parts.length; i++) {
        const el = parts[i];
        if (!el || !el.classList || !el.classList.contains) continue;
        const mine = names.filter(n => el.classList.contains(n));
        mine.forEach(n => el.classList.remove(n));
        void el.offsetWidth;
        mine.forEach(n => el.classList.add(n));
      }
    }

    /* The PDACC bar is the RANGDHANU PDACC folder on Drive and nothing else.
       It never borrows a home picture -- the two bars are separate on purpose.
       An empty folder shows the crest, so the bar is still not a black box. */
    function pdaccCoverList() {
      const sheet = (RD_SL.pdacc || []).filter(s => s && s.url);
      if (sheet.length) {
        return rdWithFirstFrame(sheet.map((s, i) => {
          const pool = RD_PDACC_SLIDES[i % RD_PDACC_SLIDES.length];
          return {
            src: s.url,
            local: s.fallbackUrl || RD_PDACC_FIRST,
            alt: s.caption || pool.title,
            badge: s.badge || pool.badge,
            title: s.caption || ''
          };
        }), RD_PDACC_FIRST, RD_PDACC_SLIDES[0]);
      }
      /* `crest: true` only means "there is no Drive picture"; renderPdaccSlides()
         draws the poster and the caption for it, no image element at all. */
      return [{
        src: RD_PDACC_FIRST, local: RD_PDACC_FIRST, crest: true,
        alt: 'Prokaushali DUET Admission Coaching Centre', badge: 'PDACC',
        title: 'প্রকৌশলী ডুয়েট এডমিশন কোচিং সেন্টার'
      }];
    }

    /* The empty state: the crest on the dark panel, with the same caption
       parts as a real slide so the page still looks finished. */
    function pdaccCrestSlide(s) {
      /* Nothing to show from Drive yet.  This used to draw pdacc-logo.png as a
         white plaque in the middle of the bar; the logo is no longer wanted on
         the hero, so the bar is simply the bundled slide-pdacc.jpg poster
         underneath, with the dark wash a real slide has -- white lettering is
         not readable on a bare photograph -- and the same caption.  The crest
         still sits in the PDACC nav bar above and on the update cards. */
      return '<div class="pdacc-slide absolute inset-0 opacity-100 scale-100 z-10">' +
        '<div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>' +
        '<div class="rd-cap absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-7 z-30">' +
          '<span class="rd-cap-badge inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold">' +
            escapeHtml(s.badge || 'PDACC') + '</span>' +
          '<span class="rd-cap-line"></span>' +
          '<h2 class="rd-cap-title text-[11px] sm:text-sm md:text-base font-bold text-white/95 mt-2 leading-snug max-w-2xl">' +
            escapeHtml(s.title || '') + '</h2>' +
        '</div></div>';
    }

    function renderPdaccSlides() {
      const wrap = document.getElementById('pdacc-slides');
      const dots = document.getElementById('pdacc-dots');
      if (!wrap) return;
      rdPdSlides = pdaccCoverList();
      const skel = document.getElementById('pdacc-skeleton');
      if (skel) skel.remove();

      if (rdPdSlides.length === 1 && rdPdSlides[0].crest) {
        wrap.innerHTML = pdaccCrestSlide(rdPdSlides[0]);
        if (dots) { dots.innerHTML = ''; dots.style.display = 'none'; }
        rdPdIdx = 0;
        if (rdPdTimer) clearInterval(rdPdTimer);
        if (window.lucide) lucide.createIcons();
        return;
      }

      wrap.innerHTML = rdPdSlides.map((s, i) => `
        <div class="pdacc-slide absolute inset-0 transition-all duration-1000 ease-out ${i === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'}">
          <img alt="${escapeHtml(s.alt || '')}" data-rd-img="${escapeHtml(s.local || s.src)}"
            src="${escapeHtml(s.src)}" ${i === 0 ? '' : 'loading="lazy" '}decoding="async"
            onerror="rdImgFallback(this, '${escapeHtml(s.local || '')}')"
            class="slide-img w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
          <div class="rd-cap absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-7 z-30">
            <span class="rd-cap-badge inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold">${escapeHtml(s.badge || 'PDACC')}</span>
            <span class="rd-cap-line"></span>
            <h2 class="rd-cap-title text-[11px] sm:text-sm md:text-base font-bold text-white/95 mt-2 leading-snug max-w-2xl">${escapeHtml(s.title || '')}</h2>
          </div>
        </div>`).join('');

      if (dots) {
        dots.innerHTML = rdPdSlides.map((s, i) => `
          <span class="pdacc-indicator ${i === 0 ? 'w-6 bg-white' : 'w-1.5 bg-white/45'} h-1.5 rounded-full transition-all duration-300 cursor-pointer"
            role="button" tabindex="0" aria-label="PDACC slide ${i + 1}" onclick="setPdaccSlide(${i})"></span>`).join('');
        dots.style.display = rdPdSlides.length > 1 ? '' : 'none';
      }
      rdPdIdx = 0;
      startPdaccAutoplay();
    }

    function setPdaccSlide(i) {
      const items = document.querySelectorAll('#pdacc-slides .pdacc-slide');
      if (!items.length) return;
      rdPdIdx = ((i % items.length) + items.length) % items.length;
      items.forEach((el, n) => {
        const on = n === rdPdIdx;
        el.classList.toggle('opacity-100', on);
        el.classList.toggle('scale-100', on);
        el.classList.toggle('z-10', on);
        el.classList.toggle('opacity-0', !on);
        el.classList.toggle('scale-105', !on);
        el.classList.toggle('pointer-events-none', !on);
        el.classList.toggle('z-0', !on);
      });
      rdCapReplay(items[rdPdIdx]);
      document.querySelectorAll('#pdacc-dots .pdacc-indicator').forEach((d, n) => {
        const on = n === rdPdIdx;
        d.classList.toggle('w-6', on);
        d.classList.toggle('bg-white', on);
        d.classList.toggle('w-1.5', !on);
        d.classList.toggle('bg-white/45', !on);
        d.setAttribute('aria-current', on ? 'true' : 'false');
      });
      startPdaccAutoplay();
    }
    function nextPdaccSlide() { setPdaccSlide(rdPdIdx + 1); }
    function prevPdaccSlide() { setPdaccSlide(rdPdIdx - 1); }

    function startPdaccAutoplay() {
      if (rdPdTimer) { clearTimeout(rdPdTimer); clearInterval(rdPdTimer); }
      rdPdTimer = null;
      if (rdPdSlides.length < 2) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const wait = (!rdPdStepped && rdPdIdx === 0) ? RD_FIRST_SLIDE_MS : RD_SLIDE_MS;
      rdPdTimer = setTimeout(function () {
        rdPdTimer = null;
        rdPdStepped = true;
        const items = document.querySelectorAll('#pdacc-slides .pdacc-slide');
        if (!items.length) return;
        setPdaccSlide((rdPdIdx + 1) % items.length);
      }, wait);
    }

    function pdaccHeroRender() {
      const box = document.getElementById('pdacc-hero-copy');
      if (!box) return;
      const v = RD_PD_HERO_COPY[rdPdHeroIdx % RD_PD_HERO_COPY.length];
      box.classList.remove('rd-pd-anim');
      void box.offsetWidth;                       /* forces the reflow */
      box.innerHTML =
        '<p class="text-white/80 text-[9px] sm:text-[11px] font-extrabold uppercase" style="letter-spacing:.34em">' +
          escapeHtml(v.kicker) + '</p>' +
        '<h2 class="text-white font-extrabold tracking-tight leading-[1.08] mt-2 ' +
          (String(v.title).length <= 12 ? 'text-[1.35rem] sm:text-4xl md:text-5xl'
                                       : 'text-[1.05rem] sm:text-2xl md:text-3xl') + '">' +
          escapeHtml(v.title) + '</h2>' +
        '<p class="text-white/90 font-semibold mt-2.5 max-w-2xl leading-snug text-[10px] sm:text-sm md:text-base">' +
          escapeHtml(v.sub) + '</p>' +
        '<p class="text-white/70 font-bold mt-1.5 max-w-2xl leading-snug text-[10px] sm:text-xs md:text-sm">' +
          escapeHtml(v.sub2) + '</p>' +
        '<div class="mt-3 sm:mt-4 flex flex-wrap items-center gap-2">' +
          '<button type="button" onclick="pdaccForAdmission()" class="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-slate-900 text-[10px] sm:text-xs font-extrabold shadow-lg">' +
            'For admission <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></button>' +
          '<button type="button" onclick="pdaccAbout()" class="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold">' +
            'About <i class="w-3.5 h-3.5" data-lucide="arrow-down"></i></button>' +
        '</div>';
      box.classList.add('rd-pd-anim');
      if (window.lucide) lucide.createIcons();
    }

    function pdaccHeroStartCycle() {
      if (!document.getElementById('pdacc-hero-copy')) return;
      pdaccHeroRender();
      if (rdPdHeroTimer) clearInterval(rdPdHeroTimer);
      rdPdHeroTimer = setInterval(function () {
        rdPdHeroIdx = (rdPdHeroIdx + 1) % RD_PD_HERO_COPY.length;
        pdaccHeroRender();
      }, 5200);
    }

    /* About: the real description is already on this page, so the button
       scrolls to it. Nothing is duplicated and no panel opens. */
    /* ---------- PDACC: A Proven Journey ----------------------------------
       The heading, the figure and the caption used to be typed straight into
       index.html, so a new admission season meant a code change. They are read
       from the PDACC Stats sheet now. The markup keeps last season's wording,
       which is what stays on screen if the fetch fails -- the block never
       blanks out. */
    let RD_PDSTATS = null;

    async function fetchPdaccStats(force) {
      if (RD_PDSTATS && !force) return RD_PDSTATS;
      const r = await apiGet('pdaccstats');
      RD_PDSTATS = r.stats || {};
      return RD_PDSTATS;
    }

    function applyPdaccStats(d) {
      const put = function (id, v) {
        const el = document.getElementById(id);
        if (el && String(v == null ? '' : v).trim()) el.textContent = String(v).trim();
      };
      put('pd-journey-kicker', d.kicker);
      put('pd-journey-title', d.title);
      put('pd-journey-figure', d.figure);
      put('pd-journey-unit', d.unit);
      put('pd-journey-note', d.note);
    }

    async function loadPdaccStats() {
      if (!document.getElementById('pd-journey-figure')) return;
      try { applyPdaccStats(await fetchPdaccStats()); }
      catch (err) { console.warn('[rd] pdaccstats:', err); }
    }

    function pdaccAbout() {
      const box = document.getElementById('pdacc-about');
      if (!box || !box.scrollIntoView) return;
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* For admission: straight to the newest Director's own message. Until a
       PDACC committee is published there is no Director to open, so the
       button shows the description instead of doing nothing. */
    function pdaccForAdmission() {
      const found = (typeof ecLatestDirector === 'function') ? ecLatestDirector() : null;
      const id = found && found.member ? String(found.member.entryId || '').trim() : '';
      if (id) { openEcMessage(id, 'prokoushali'); return; }
      pdaccAbout();
    }

    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();
      const startPage = getPageFromLocation(false);
      history.replaceState({page: startPage}, '', window.location.pathname + (startPage==='home'?'':`#${startPage}`));
      switchPage(startPage, false);
      /* The head script's stop-gap rule has done its job; drop it so it cannot
         override an ordinary page change later on. */
      var boot = document.getElementById('rd-boot-page');
      if (boot && boot.parentNode) boot.parentNode.removeChild(boot);
      renderCoverSlides();
      rdHeroStartCycle();
      renderPdaccSlides();
      pdaccHeroStartCycle();
      loadDriveImages();
      loadHomeSlides();
      renderReunionPhotos();
      ecFillFormCommittees();
      rdFillSeriesSelects();
      rdAddrInitAll();
      rdMemberRestore();
      loadExecutiveCommittee();
      renderCgpa();
      /* loadPublicAlumni() and loadPublicEvents() used to run here.  The home
         page renders neither feed, so those were two Apps Script round trips
         -- each with a 302 hop -- taken before the first screen was done.
         switchPage() now fetches each one as its page is opened. */
    });

    /* The album model: Drive sub-folders win, the built-in list is the
       fallback. Every photo ends up as { part, file, local, caption, src }. */
    let RD_REUNION_VIEW = { parts: [], photos: [] };

    function rdReunionModel() {
      const groups = (RD_DRIVE.groups && RD_DRIVE.groups.reunion) || [];
      if (groups.length) {
        const parts = [], photos = [];
        groups.forEach((g, gi) => {
          const known = RD_REUNION_PARTS.filter(p => p.n === g.order)[0] || RD_REUNION_PARTS[gi] || {};
          parts.push({
            n: gi + 1,
            icon: known.icon || 'image',
            bn: g.title || known.bn || ('পর্ব ' + (gi + 1)),
            en: known.en || ''
          });
          (g.images || []).forEach(im => {
            const local = reunionPhotos[photos.length];
            photos.push({
              id: photos.length + 1, part: gi + 1, file: im.name, local: '',
              caption: im.caption || (local && local.caption) || '',
              src: im.url, fallbackUrl: im.fallbackUrl || ''
            });
          });
        });
        if (photos.length) return { parts: parts, photos: photos };
      }
      return {
        parts: RD_REUNION_PARTS,
        photos: reunionPhotos.map(p => ({
          id: p.id, part: p.part, file: p.file,
          local: 'Images/Reunion Photo/' + p.file, caption: p.caption,
          src: rdImageUrl('Images/Reunion Photo/' + p.file), fallbackUrl: ''
        }))
      };
    }

    /* REUNION ALBUM RENDERER — grouped into the chapters of the day.
       The caption sits on the card, not in a hover overlay: phones have no hover,
       so on mobile the captions used to be invisible. */
    function reunionCardHtml(photo, idx) {
      const cap = escapeHtml(photo.caption);
      const no = (photo.id < 10 ? '0' : '') + photo.id;
      return `
        <figure role="button" tabindex="0" aria-label="ছবি ${no} — ${cap}"
          onclick="openLightbox(${idx})"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(${idx});}"
          class="photo-card group bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 cursor-pointer flex flex-col">
          <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img src="${escapeHtml(photo.src)}" data-rd-img="${escapeHtml(photo.local || photo.file)}" alt="${cap}" loading="lazy" decoding="async"
              onerror="rdImgFallback(this, '${escapeHtml(photo.local || '')}')"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-slate-950/70 text-white text-[10px] font-mono font-bold tracking-wider">${no}</span>
            <span class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="w-11 h-11 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg"><i data-lucide="maximize-2" class="w-5 h-5"></i></span>
            </span>
          </div>
          <figcaption class="p-3.5 flex-1">
            <p class="text-[13px] leading-relaxed font-semibold text-slate-700 line-clamp-3">${cap}</p>
          </figcaption>
        </figure>`;
    }

    function renderReunionPhotos() {
      const container = document.getElementById("reunion-photo-grid");
      if (!container) return;
      RD_REUNION_VIEW = rdReunionModel();
      const all = RD_REUNION_VIEW.photos;
      let html = '';
      RD_REUNION_VIEW.parts.forEach(part => {
        const shots = all.filter(p => p.part === part.n);
        if (!shots.length) return;
        html += `
        <section class="mb-12 last:mb-0">
          <div class="flex items-center gap-3.5 mb-5">
            <span class="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md"><i data-lucide="${part.icon}" class="w-5 h-5"></i></span>
            <div class="min-w-0">
              <h3 class="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">${escapeHtml(part.bn)}</h3>
              <p class="text-[11px] sm:text-xs text-slate-500 font-semibold">${escapeHtml(part.en)} • ${bnNum(shots.length)} টি ছবি</p>
            </div>
            <span class="ml-auto shrink-0 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wide">পর্ব ${bnNum(part.n)}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            ${shots.map(p => reunionCardHtml(p, all.indexOf(p))).join('')}
          </div>
        </section>`;
      });
      container.innerHTML = html;
      lucide.createIcons();
    }

    /* LIGHTBOX LOGIC FOR BOTH STATIC AND DYNAMIC EVENTS */
    let lightboxItems = [], currentLightboxIdx = 0;
    
    function showLightboxItem(index) {
      if (!lightboxItems.length) return;
      currentLightboxIdx = (index + lightboxItems.length) % lightboxItems.length;
      const img = document.getElementById("lightbox-img"), cap = document.getElementById("lightbox-caption"), ctr = document.getElementById("lightbox-counter");
      if (!img) return;
      img.src = lightboxItems[currentLightboxIdx].src;
      cap.innerText = lightboxItems[currentLightboxIdx].caption || "";
      if (ctr) ctr.textContent = (currentLightboxIdx + 1) + ' / ' + lightboxItems.length;
      // Already on the viewer while paging through photos? Don't stack history entries.
      if (rdCurrentPageId !== 'photo') openSubPage('photo');
      lucide.createIcons();
    }
    
    function openLightbox(index) {
      if (!RD_REUNION_VIEW.photos.length) RD_REUNION_VIEW = rdReunionModel();
      lightboxItems = RD_REUNION_VIEW.photos.map(photo => ({
        src: photo.src,
        caption: photo.caption ? `${photo.caption} (${photo.file})` : photo.file
      }));
      showLightboxItem(index);
    }
    
    function openCustomLightbox(src, caption) {
      const containers = [document.getElementById("dynamic-event-content"), document.getElementById("page-events"), document.getElementById("page-reunion")];
      let items = [];
      for(let c of containers) {
        if(c && c.innerHTML.includes(src)) {
          const nodes = [...c.querySelectorAll('[onclick^="openCustomLightbox("]')];
          items = nodes.map(n => {
            const match = (n.getAttribute("onclick") || "").match(/^openCustomLightbox\(\s*(['"])(.*?)\1\s*,\s*(['"])(.*?)\3\s*\)$/);
            return match ? { src: match[2], caption: match[4] } : null;
          }).filter(Boolean);
          break;
        }
      }
      if (!items.length) items = [{ src, caption }];
      lightboxItems = items;
      showLightboxItem(items.findIndex(i => i.src === src) >= 0 ? items.findIndex(i => i.src === src) : 0);
    }
    
    function closeLightbox() { goBackFromSubPage('photo'); }
    function nextLightboxPhoto() { showLightboxItem(currentLightboxIdx + 1); }
    function prevLightboxPhoto() { showLightboxItem(currentLightboxIdx - 1); }
    
    async function downloadLightboxPhoto() {
      const img = document.getElementById("lightbox-img");
      if(!img || !img.src) return;
      try {
        const res = await fetch(img.src);
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `RANGDHANU_Photo_${Date.now()}.jpg`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } catch(e) {
        window.open(img.src, '_blank');
      }
    }

    /* ALUMNI API & RENDER */
    /* One shape for the remembered rows and the fresh ones, so a warm list and
       a just-fetched list can never drift apart. */
    function rdAlumniShape(rows) {
      return (Array.isArray(rows) ? rows : []).map((m, i) => ({
          id: m['Member ID'] || (i + 1), memberId: String(m['Member ID']||'').trim(), name: String(m['Full Name (English)']||'').trim(),
          phone: String(m['Mobile Number']||'').trim(), wa: String(m['WhatsApp Number']||m['Mobile Number']||'').trim(),
          email: String(m['Email']||'').trim(), address: String(m['Permanent Address']||'').trim(),
          blood: String(m['Blood Group']||'').trim(), dept: String(m['Department']||'').trim(),
          series: String(m['Series']||'').trim(), batch: String(m['Batch']||'').trim(),
          emp_type: String(m['Employment Type']||'').trim(), org: String(m['Current Organization / Company']||'').trim(),
          desig: String(m['Current Designation']||'').trim(), loc: String(m['Work Location (Division / Country)']||'').trim(),
          former_pos: String(m['Former Position at Rangdhanu / PDACC']||'').trim(), image: String(m['Passport Size Image']||'').trim(),
          cover: String(m['Cover Photo']||'').trim(),
          status: String(m['viewStatus']||'').trim()
      }));
    }

    async function loadPublicAlumni() {
      /* A reload used to show an empty directory while the sheet was read.  The
         last answer of this tab is drawn first instead, then quietly replaced
         when the fresh one lands. */
      const warm = rdFeedRecall('alumni');
      if (warm && !alumniData.length) {
        alumniData = rdAlumniShape(warm);
        populateAlumniSeriesFilter();
        renderAlumni(alumniData);
      }
      try {
        const res = await fetch(ALUMNI_API_URL + '&_=' + Date.now(), { cache: 'no-store' });
        const data = await res.json();
        const rows = Array.isArray(data.data) ? data.data : [];
        alumniData = rdAlumniShape(rows);
        rdFeedRemember('alumni', rows);
        populateAlumniSeriesFilter();
        renderAlumni(alumniData);
      } catch (e) {
        /* A failed refresh must not wipe a directory that is already on screen. */
        console.warn('[rd] alumni list unavailable:', e && e.message ? e.message : e);
        if (!alumniData.length) console.error(e);
      }
    }
    
    function populateAlumniSeriesFilter(){
        const s = document.getElementById('alumni-filter-series');
        if(!s) return;
        const v = [...new Set(alumniData.map(a => String(a.series||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
        s.innerHTML='<option value="ALL">All Series</option>'+v.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');
    }

    /* Bengali numerals — the rest of the site writes numbers this way. */
    function bnNum(n) { return String(n).replace(/[0-9]/g, d => '\u09E6\u09E7\u09E8\u09E9\u09EA\u09EB\u09EC\u09ED\u09EE\u09EF'[+d]); }

    function alumniStatusLabel(status, iconClass) {
      const isAlum = status === 'Alumni';
      return `<i data-lucide="${isAlum ? 'graduation-cap' : 'backpack'}" class="${iconClass}"></i> ${isAlum ? 'Alumni' : 'Running Member'}`;
    }

    /* ---------- MEMBER LIST PAGING --------------------------------------
       18 per page = the 3-column desktop grid x 6 rows, so a page is always a
       full block with no ragged tail. */
    const RD_ALUMNI_PER_PAGE = 18;
    let rdAlumniList = [], rdAlumniPage = 1;

    function renderAlumniCard(a) {
      return `
        <div class="alumni-card bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between group">
          <div class="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none"></div>
          <div>
              <div class="flex items-center gap-3">
                <div class="shrink-0 group-hover:scale-105 transition-transform duration-300">
                  ${alumniAvatarMarkup(a, 'w-14 h-14')}
                </div>
                <div class="min-w-0">
                  <h3 class="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">${escapeHtml(a.name)}</h3>
                  <p class="text-xs text-slate-500 font-mono font-medium">${escapeHtml(a.dept)} • Series '${escapeHtml(a.series)}</p>
                  ${a.status ? `<span class="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${a.status === 'Alumni' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">${alumniStatusLabel(a.status, 'w-3 h-3')}</span>` : ''}
                </div>
              </div>
              <div class="mt-4 text-sm text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p class="flex items-start gap-2"><i data-lucide="briefcase" class="w-4 h-4 text-blue-500 shrink-0 mt-0.5"></i> <span class="line-clamp-1 font-semibold">${escapeHtml(a.desig || 'Engineer')}</span></p>
                <p class="flex items-start gap-2"><i data-lucide="building-2" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i> <span class="line-clamp-1">${escapeHtml(a.org || 'Organization')}</span></p>
              </div>
          </div>
          <div class="mt-5 pt-3 border-t border-slate-100">
              <button onclick="openAlumniModal('${escapeHtml(String(a.id))}')" class="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-700 hover:text-white text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <i data-lucide="user" class="w-4 h-4"></i> Full profile
              </button>
          </div>
        </div>
      `;
    }

    function renderAlumni(data) {
      rdAlumniList = Array.isArray(data) ? data : [];
      rdAlumniPage = 1;                       /* any filter change restarts at 1 */
      renderAlumniPage();
    }

    function alumniPageCount() {
      return Math.max(1, Math.ceil(rdAlumniList.length / RD_ALUMNI_PER_PAGE));
    }

    function gotoAlumniPage(p) {
      const last = alumniPageCount();
      rdAlumniPage = Math.min(Math.max(1, Number(p) || 1), last);
      renderAlumniPage();
      const grid = document.getElementById("alumni-grid");
      if (grid) { try { grid.scrollIntoView({behavior:'smooth', block:'start'}); } catch(e) { grid.scrollIntoView(); } }
    }

    function renderAlumniPage() {
      const total = alumniData.length, shown = rdAlumniList.length;
      const last = alumniPageCount();
      if (rdAlumniPage > last) rdAlumniPage = last;
      const from = (rdAlumniPage - 1) * RD_ALUMNI_PER_PAGE;
      const slice = rdAlumniList.slice(from, from + RD_ALUMNI_PER_PAGE);

      let label = shown === total
        ? `${total} member${total === 1 ? '' : 's'} listed`
        : `Showing ${shown} of ${total} members`;
      if (last > 1 && shown) {
        label += ` • Page ${rdAlumniPage} of ${last} (${from + 1}–${from + slice.length})`;
      }
      const countEl = document.getElementById("alumni-count-text");
      if (countEl) countEl.innerText = label;

      const grid = document.getElementById("alumni-grid");
      if (grid) {
        grid.innerHTML = slice.length
          ? slice.map(renderAlumniCard).join('')
          : `<div class="sm:col-span-2 lg:col-span-3 py-14 text-center text-slate-500">
               <i data-lucide="users-round" class="w-9 h-9 mx-auto mb-3 text-slate-300"></i>
               <p class="font-semibold">No member matches these filters.</p>
             </div>`;
      }
      renderAlumniPager(last);
      rdPhotoSweep(grid);
      lucide.createIcons();
    }

    /* 1 2 3 … next — with ellipses so a long list never overflows on a phone. */
    function alumniPageNumbers(cur, last) {
      if (last <= 7) return Array.from({length: last}, (_, i) => i + 1);
      const out = [1];
      let a = Math.max(2, cur - 1), b = Math.min(last - 1, cur + 1);
      if (cur <= 3) { a = 2; b = 4; }
      if (cur >= last - 2) { a = last - 3; b = last - 1; }
      if (a > 2) out.push('...');
      for (let i = a; i <= b; i++) out.push(i);
      if (b < last - 1) out.push('...');
      out.push(last);
      return out;
    }

    function renderAlumniPager(last) {
      const pager = document.getElementById("alumni-pager");
      if (!pager) return;
      if (last <= 1) { pager.innerHTML = ''; return; }
      const cur = rdAlumniPage;
      const btn = (inner, page, extra, disabled, aria) =>
        `<button type="button" class="alumni-page-btn ${extra || ''}" ${disabled ? 'disabled' : ''}
           ${disabled ? '' : `onclick="gotoAlumniPage(${page})"`}
           ${aria ? `aria-label="${aria}"` : ''} ${page === cur ? 'aria-current="page"' : ''}>${inner}</button>`;
      let html = btn('<i data-lucide="chevron-left" class="w-4 h-4"></i><span class="hidden sm:inline">Previous</span>',
                     cur - 1, 'alumni-page-edge', cur === 1, 'Previous page');
      alumniPageNumbers(cur, last).forEach(p => {
        html += p === '...'
          ? '<span class="px-1.5 text-slate-400 font-bold select-none">…</span>'
          : btn(String(p), p, p === cur ? 'is-current' : '', false, 'Page ' + p);
      });
      html += btn('<span class="hidden sm:inline">Next</span><i data-lucide="chevron-right" class="w-4 h-4"></i>',
                  cur + 1, 'alumni-page-edge', cur === last, 'Next page');
      pager.innerHTML = html;
    }
    
    /* ================= MEMBER SIGN IN ==================================
       No second login system: this is the same Google ID token the admin gate
       uses, verified by the same server helper. The only difference is the
       parameter name -- a member token travels as `memberToken`, so it can
       never be mistaken for an admin one.

       The token lives in localStorage, and a second key remembers that the
       member meant to stay signed in. Sign out is the only thing that clears
       either one -- a refresh, a new tab and a closed browser all keep the
       member where they were. Google's own token is good for about an hour, so
       when it runs out the browser asks Google for a fresh one without showing
       anything; only a revoked account falls through to the sign in page. */
    const RD_MEMBER_KEY = 'rd_member_token';
    const RD_MEMBER_KEEP = 'rd_member_keep';
    let RD_MEMBER = { token: '', email: '', me: null, contacts: null, busy: false };

    function rdMemberParams() { return RD_MEMBER.token ? { memberToken: RD_MEMBER.token } : {}; }
    function rdMemberSignedIn() { return !!(RD_MEMBER.token && RD_MEMBER.me); }

    function rdMemberRemember(token) {
      RD_MEMBER.token = token || '';
      try {
        if (token) {
          localStorage.setItem(RD_MEMBER_KEY, token);
          localStorage.setItem(RD_MEMBER_KEEP, '1');
        } else {
          localStorage.removeItem(RD_MEMBER_KEY);
          localStorage.removeItem(RD_MEMBER_KEEP);
        }
        /* Whatever an older build of the site left behind goes with it. */
        sessionStorage.removeItem(RD_MEMBER_KEY);
      } catch (err) { /* private mode: the token still works for this page */ }
    }

    function rdMemberWantsIn() {
      try { return localStorage.getItem(RD_MEMBER_KEEP) === '1'; } catch (err) { return false; }
    }

    /* Read the expiry out of the token itself. Sending a token Google has
       already retired only buys a failed round trip. */
    function rdTokenLive(token) {
      try {
        const body = JSON.parse(atob(String(token).split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        return !body.exp || (body.exp * 1000) - Date.now() > 60000;
      } catch (err) { return true; }
    }

    /* One line under the header instead of a page of its own. */
    function rdFlash(msg) {
      const box = document.getElementById('rd-flash');
      const txt = document.getElementById('rd-flash-text');
      if (!box || !txt) return;
      txt.textContent = msg;
      box.classList.remove('hidden');
      /* The line sits in the page flow, under the header. A member who was
         scrolled down would never see it, so the top of the page is brought
         back -- the same thing every page change already does. */
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
      clearTimeout(rdFlash.timer);
      rdFlash.timer = setTimeout(function () { box.classList.add('hidden'); }, 4000);
    }

    function rdMemberMsg(id, text, kind) {
      const box = document.getElementById(id);
      if (!box) return;
      if (!text) { box.classList.add('hidden'); box.textContent = ''; return; }
      box.classList.remove('hidden');
      box.textContent = text;
      box.className = 'text-sm font-bold mt-3 ' +
        (kind === 'ok' ? 'text-emerald-700' : kind === 'wait' ? 'text-slate-500' : 'text-red-600');
    }

    /* Google's button owns one global callback, and the admin gate uses the same
       one. So whichever page is on screen re-initialises it for itself; without
       that, opening the member page would have pointed the admin button at the
       member handler. */
    let rdGsiOwner = '';

    function rdDrawMemberGsiButton() {
      const box = document.getElementById('member-gsi-btn');
      if (!box) return false;
      if (!rdGsiReady()) { box.classList.add('hidden'); return false; }
      box.classList.remove('hidden');
      try {
        google.accounts.id.initialize({
          client_id: RD_ADMIN_CLIENT_ID,
          callback: memberGoogleCredential,
          auto_select: false,
          cancel_on_tap_outside: true
        });
        google.accounts.id.renderButton(box, {
          theme: 'outline', size: 'large', shape: 'pill',
          text: 'signin_with', width: 260
        });
        rdGsiOwner = 'member';
        rdGsiDrawn = false;
        return true;
      } catch (err) {
        box.classList.add('hidden');
        return false;
      }
    }

    function memberGoogleCredential(resp) {
      const token = (resp && resp.credential) || '';
      if (!token) { rdMemberMsg('member-signin-msg', 'Google sign in did not finish.'); return; }
      rdMemberRemember(token);
      memberVerify(false);
    }

    async function memberVerify(quiet) {
      if (!RD_MEMBER.token || RD_MEMBER.busy) return;
      RD_MEMBER.busy = true;
      if (!quiet) rdMemberMsg('member-signin-msg', 'Checking...', 'wait');
      try {
        const r = await apiGet('membersignin', rdMemberParams());
        if (r && r.status === 'NO_MATCH') {
          RD_MEMBER.me = null;
          RD_MEMBER.email = r.email || '';
          if (!quiet) {
            rdMemberMsg('member-signin-msg',
              (r.email || 'This email') + ' is not on our list. Enter your Member ID below to match it once.');
          }
          return;
        }
        await memberSignedIn(r, quiet);
      } catch (err) {
        RD_MEMBER.me = null;
        /* The stored token stays. A dropped connection or a sleeping Apps
           Script deployment is not the member asking to be signed out, and
           wiping it here was what made a refresh look like a logout. */
        if (!quiet) rdMemberMsg('member-signin-msg', friendlyError(err).msg);
        rdMemberPaintSignInLinks();
      } finally {
        RD_MEMBER.busy = false;
      }
    }

    async function memberSignedIn(r, quiet) {
      RD_MEMBER.me = (r && r.member) || null;
      RD_MEMBER.email = (r && r.email) || '';
      await memberLoadContacts();
      if (quiet) { rdMemberPaintSignInLinks(); return; }
      rdMemberMsg('member-signin-msg', 'You are signed in.', 'ok');
      rdMemberPaintSignInLinks();
      /* No page of its own for this. A member who signs in is taken to the
         thing they signed in for -- the profile they were reading, or their own
         page -- and the confirmation is the one line under the header. */
      if (RD_MEMBER.lastProfileId) openAlumniModal(RD_MEMBER.lastProfileId);
      else if (rdCurrentPageId === 'member-signin') openMyProfile('home');
      rdFlash('Signed in successfully');
    }

    /* The contact sheet arrives once per sign-in and is kept in memory only --
       never in sessionStorage, so a signed-out tab cannot be read back. */
    async function memberLoadContacts() {
      RD_MEMBER.contacts = null;
      if (!RD_MEMBER.token) return;
      try {
        const r = await apiGet('membercontacts', rdMemberParams());
        RD_MEMBER.contacts = (r && r.contacts) || {};
      } catch (err) {
        RD_MEMBER.contacts = null;
      }
    }

    function memberContact(memberId) {
      if (!RD_MEMBER.contacts || !memberId) return null;
      return RD_MEMBER.contacts[String(memberId)] || null;
    }

    function memberSignOut() {
      rdMemberRemember('');
      RD_MEMBER.me = null;
      RD_MEMBER.email = '';
      RD_MEMBER.contacts = null;
      try { if (rdGsiReady()) google.accounts.id.disableAutoSelect(); } catch (err) { /* nothing to undo */ }
      rdMemberPaintSignInLinks();
      rdFlash('Signed out');
      if (rdCurrentPageId === 'my-profile') switchPage('alumni');
      if (RD_MEMBER.lastProfileId && rdCurrentPageId === 'profile') openAlumniModal(RD_MEMBER.lastProfileId);
    }

    /* ---------- the email did not match: six-digit code ------------------ */

    async function memberLinkStart() {
      if (!RD_MEMBER.token) {
        rdMemberMsg('member-link-msg', 'Sign in with the Google button above first.');
        return;
      }
      const id = (document.getElementById('member-link-id') || {}).value || '';
      if (!id.trim()) { rdMemberMsg('member-link-msg', 'Enter your Member ID.'); return; }
      rdMemberMsg('member-link-msg', 'Sending the code...', 'wait');
      try {
        const r = await apiPost('memberlinkstart', Object.assign({ memberId: id.trim() }, rdMemberParams()));
        if (r && r.status !== 'OK') throw new Error(r.message || 'The code could not be sent.');
        const box = document.getElementById('member-code-box');
        if (box) box.classList.remove('hidden');
        rdMemberMsg('member-link-msg', 'Code sent to ' + (r.sentTo || 'your email'), 'ok');
      } catch (err) {
        rdMemberMsg('member-link-msg', friendlyError(err).msg);
      }
    }

    async function memberLinkVerify() {
      const id = ((document.getElementById('member-link-id') || {}).value || '').trim();
      const code = ((document.getElementById('member-link-code') || {}).value || '').trim();
      if (!code) { rdMemberMsg('member-link-msg', 'Enter the code from your email.'); return; }
      rdMemberMsg('member-link-msg', 'Matching...', 'wait');
      try {
        const r = await apiPost('memberlinkverify',
                                Object.assign({ memberId: id, code: code }, rdMemberParams()));
        if (r && r.status !== 'OK') throw new Error(r.message || 'The code did not match.');
        rdMemberMsg('member-link-msg', 'Matched. From now on Google alone will sign you in.', 'ok');
        await memberSignedIn(r, false);
      } catch (err) {
        rdMemberMsg('member-link-msg', friendlyError(err).msg);
      }
    }

    /* Signed-in state shows up in three places: the nav item flips between
       Sign In and My Profile, the alumni page gets a sign-in / sign-out line,
       and the profile card unlocks. */
    function rdMemberNavPaint() {
      const on = rdMemberSignedIn();
      const t = document.getElementById('nav-member-text');
      if (t) t.textContent = on ? 'My Profile' : 'Sign In';
      const item = document.getElementById('mobile-member-item');
      if (item) item.textContent = on ? 'My Profile' : 'Sign In';
      const btn = document.getElementById('mobile-member-btn');
      if (btn) btn.setAttribute('aria-label', on ? 'My Profile' : 'Member sign in');
      const icon = document.getElementById('mobile-member-icon');
      if (icon) {
        icon.outerHTML = '<i id="mobile-member-icon" class="w-6 h-6" data-lucide="' +
                         (on ? 'circle-user-round' : 'log-in') + '"></i>';
      }
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    /* One nav item for both states. Signed out it opens the sign-in page, signed
       in it opens the member's own profile, so nothing extra sits in the header. */
    function rdMemberNavClick() {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        syncMobileMenuButton();
      }
      if (rdMemberSignedIn()) rdMemberMyProfile();
      else openMemberSignIn(rdCurrentPageId);
    }

    /* My Profile is the member's own page now, not a read-only card. A PENDING
       member reaches it too: the server answers from the member's own row, and
       that row exists long before the public feed carries it. */
    function rdMemberMyProfile() {
      if (!rdMemberSignedIn()) { openMemberSignIn(rdCurrentPageId); return; }
      openMyProfile(rdCurrentPageId);
    }

    /* ================= MY PROFILE ======================================
       Every edit sits on this one page, so a signed in member never needs the
       old "Update your information" walk -- Member ID, mobile, a code in the
       mail -- to fix a phone number. It is a real page, not a modal.

       Who can see what is decided field by field, and the choice is honoured on
       the server: an "Only me" field is never sent to another member's browser,
       so there is nothing in the page to uncover. */
    let RD_MYP = { me: null, busy: false };

    const RD_MYP_FIELDS = [
      ['myp-mobile', 'Mobile Number'],
      ['myp-whatsapp', 'WhatsApp Number'],
      ['myp-email', 'Email'],
      ['myp-blood', 'Blood Group'],
      ['myp-employment', 'Employment Type'],
      ['myp-organization', 'Current Organization / Company'],
      ['myp-designation', 'Current Designation'],
      ['myp-former', 'Former Position at Rangdhanu / PDACC']
    ];

    function rdMypSet(id, value) {
      const el = document.getElementById(id);
      if (el) el.value = value == null ? '' : String(value);
    }

    /* The drawn cover, in one place. Both the member's own page and the page
       another member reads use this same markup, so the band can never say two
       different things on the two pages. */
    function rdProudCoverMarkup() {
      return '<div class="rd-proud">' +
        '<span class="rd-proud-1">Proud</span>' +
        '<span class="rd-proud-2">Member<i data-lucide="crown" class="rd-proud-crown"></i></span>' +
        '<span class="rd-proud-tag">একটি পরিবার, বহু প্রজন্মের বন্ধন</span>' +
        '</div>';
    }

    /* The default cover is drawn by the stylesheet, so a member who never
       uploads one still has a finished looking page. */
    function rdMypCover(url) {
      const box = document.getElementById('myp-cover');
      if (!box) return;
      const src = normalizeAlumniImage(url);
      const art = box.querySelector('.rd-proud');
      if (src) {
        box.classList.add('rd-cover-photo');
        box.style.backgroundImage = 'url("' + src + '")';
        if (art) art.remove();
      } else {
        box.classList.remove('rd-cover-photo');
        box.style.backgroundImage = '';
        /* The drawing is put in from here rather than sitting in the markup, so
           the Cover button beside it is never thrown away and the page source
           stays in one language. */
        if (!art) {
          box.insertAdjacentHTML('afterbegin', rdProudCoverMarkup());
          if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        }
      }
    }

    /* A Drive link straight out of the sheet is not a picture the browser can
       draw, which is why the directory has always passed it through
       normalizeAlumniImage first. The profile pages now do the same -- that one
       missing call is why a photo showed in the directory and not here. */
    function rdMypFace(url) {
      const img = document.getElementById('myp-photo');
      if (!img) return;
      img.onerror = function () { this.onerror = null; this.src = 'logo.png'; };
      img.src = normalizeAlumniImage(url) || 'logo.png';
    }

    function rdMypStatus(status) {
      const s = String(status || '').toUpperCase();
      if (s === 'PENDING') {
        return '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">' +
               '<i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending</span>' +
               '<p class="text-xs text-slate-500 mt-2 leading-relaxed">Your application is with the Association. You can keep your information up to date while you wait.</p>';
      }
      if (s === 'APPROVED') {
        return '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">' +
               '<i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Approved member</span>';
      }
      return s ? '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold">' +
                 escapeHtml(s) + '</span>' : '';
    }

    function rdMypLocked(m) {
      const box = document.getElementById('myp-locked');
      if (!box) return;
      const cell = (label, value) =>
        '<div class="p-3 bg-slate-50 rounded-xl border border-slate-100">' +
        '<p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">' + label + '</p>' +
        '<p class="font-bold text-slate-900 break-words">' + escapeHtml(value || 'N/A') + '</p></div>';
      box.innerHTML = cell('Member ID', m['Member ID']) +
                      cell('Department', m['Department']) +
                      cell('Series', m['Series']) +
                      cell('Batch', m['Batch']);
    }

    function rdMypPaint(m) {
      if (!m) return;
      const name = document.getElementById('myp-name');
      if (name) name.textContent = m['Full Name (English)'] || 'My Profile';
      const sub = document.getElementById('myp-sub');
      if (sub) sub.textContent = [m['Member ID'], m['Department'], m['Series']].filter(Boolean).join('  |  ');
      const st = document.getElementById('myp-status');
      if (st) st.innerHTML = rdMypStatus(m['Status']);

      rdMypFace(m['Passport Size Image']);
      rdMypCover(m['Cover Photo']);
      rdMypLocked(m);

      RD_MYP_FIELDS.forEach(([id, header]) => rdMypSet(id, m[header]));

      /* Own picker names, so the registration form's three pickers keep their
         own state and neither page can overwrite the other. */
      rdAddrInit('mypPermanent', m['Permanent Address'] || '');
      rdAddrInit('mypPresent', m['Present Address'] || '');
      rdAddrInit('mypWork', m['Work Location (Division / Country)'] || '');

      const vis = m.visibility || {};
      document.querySelectorAll('[data-myp-vis]').forEach(sel => {
        const field = sel.getAttribute('data-myp-vis');
        sel.value = String(vis[field] || 'MEMBER').toUpperCase() === 'ONLY_ME' ? 'ONLY_ME' : 'MEMBER';
      });

      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    async function openMyProfile(backTo) {
      if (!rdMemberSignedIn()) { openMemberSignIn(rdCurrentPageId); return; }
      openSubPage('my-profile', backTo || rdCurrentPageId);
      rdMemberMsg('myp-msg', '');
      rdMemberMsg('myp-photo-msg', '');
      /* The sign in answer already carries the row, so the page is filled in
         before the second call returns and nobody watches an empty form. */
      rdMypPaint(RD_MEMBER.me);
      try {
        const r = await apiGet('memberprofile', rdMemberParams());
        if (r && r.member) { RD_MYP.me = r.member; rdMypPaint(r.member); }
      } catch (err) {
        rdMemberMsg('myp-msg', friendlyError(err).msg);
      }
    }

    async function rdMypSave(e) {
      e.preventDefault();
      if (RD_MYP.busy) return false;
      const form = e.target, btn = document.getElementById('myp-save-btn');
      const fd = new FormData(form);

      const mobile = String(fd.get('mobile') || '').trim();
      clearFieldErrors(form);
      if (!mobile || !isValidBdMobile(mobile)) {
        setFieldError(form, 'mobile', 'Mobile ' + RD_MOBILE_RULE, true);
        return false;
      }
      const wa = String(fd.get('whatsapp') || '').trim();
      if (wa && !isValidBdMobile(wa)) {
        setFieldError(form, 'whatsapp', 'WhatsApp ' + RD_MOBILE_RULE, true);
        return false;
      }

      const visibility = {};
      document.querySelectorAll('[data-myp-vis]').forEach(sel => {
        visibility[sel.getAttribute('data-myp-vis')] = sel.value;
      });

      const payload = {
        mobile: mobile,
        whatsapp: wa,
        email: String(fd.get('email') || '').trim(),
        permanentAddress: String(fd.get('permanentAddress') || '').trim(),
        presentAddress: String(fd.get('presentAddress') || '').trim(),
        blood: String(fd.get('blood') || '').trim(),
        employmentType: String(fd.get('employmentType') || '').trim(),
        organization: String(fd.get('organization') || '').trim(),
        designation: String(fd.get('designation') || '').trim(),
        workLocation: String(fd.get('workLocation') || '').trim(),
        formerPosition: String(fd.get('formerPosition') || '').trim(),
        visibility: visibility
      };

      RD_MYP.busy = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Saving...'; }
      rdMemberMsg('myp-msg', 'Saving...', 'wait');
      try {
        const r = await apiPost('membersaveprofile', Object.assign({}, payload, rdMemberParams()));
        if (r && r.member) { RD_MYP.me = r.member; RD_MEMBER.me = r.member; rdMypPaint(r.member); }
        /* The directory answer is cached for ten minutes, so it is dropped here
           -- otherwise the member would keep seeing the old line on the alumni
           page and think the save had failed. */
        rdFeedForget('alumni');
        RD_MEMBER.contacts = null;
        rdMemberMsg('myp-msg', 'Saved.', 'ok');
        showToast('Your profile is up to date.', 'success', 'Saved');
      } catch (err) {
        rdMemberMsg('myp-msg', friendlyError(err).msg);
      } finally {
        RD_MYP.busy = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Save changes'; }
      }
      return false;
    }

    /* Both pictures take the same road. The file is compressed in the browser
       first, so a phone camera photo never turns into a size error. */
    async function rdMypPhoto(input, kind) {
      const file = input && input.files && input.files[0];
      if (input) input.value = '';
      if (!file) return;
      const cover = kind === 'cover';
      rdMemberMsg('myp-photo-msg', cover ? 'Uploading the cover...' : 'Uploading the photo...', 'wait');
      try {
        const payload = await filePayload(file, cover ? 1600 : 1200);
        const r = await apiPost('membersavephoto',
                                Object.assign({ kind: cover ? 'cover' : 'photo', file: payload }, rdMemberParams()));
        const url = (r && r.url) || '';
        if (cover) rdMypCover(url); else rdMypFace(url);
        const header = cover ? 'Cover Photo' : 'Passport Size Image';
        if (RD_MYP.me) RD_MYP.me[header] = url;
        if (RD_MEMBER.me) RD_MEMBER.me[header] = url;
        rdFeedForget('alumni');
        rdMemberMsg('myp-photo-msg', cover ? 'The cover is saved.' : 'The photo is saved.', 'ok');
      } catch (err) {
        rdMemberMsg('myp-photo-msg', friendlyError(err).msg);
      }
    }

    function rdMemberPaintSignInLinks() {
      rdMemberNavPaint();
      const box = document.getElementById('alumni-member-bar');
      if (!box) return;
      box.innerHTML = rdMemberSignedIn()
        ? '<span class="inline-flex items-center gap-1.5 text-emerald-700 font-bold"><i data-lucide="badge-check" class="w-4 h-4"></i> ' +
          escapeHtml(RD_MEMBER.email) + '</span>' +
          '<button type="button" onclick="memberSignOut()" class="ml-2 underline font-bold text-slate-500 hover:text-slate-900">Sign out</button>'
        : '<button type="button" onclick="openMemberSignIn(\'alumni\')" class="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900"><i data-lucide="lock" class="w-4 h-4"></i> Sign in to see contact details</button>';
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    /* A refresh must not sign anybody out, so the token is read back and checked
       once -- quietly, because nobody pressed anything.

       Three things happen here in order: the token from an older build of the
       site is moved out of sessionStorage, a token Google has already retired is
       replaced without anything appearing on screen, and a member who reloaded
       straight onto My Profile gets that page filled in rather than being sent
       to the directory. */
    function rdMemberRestore() {
      let token = '';
      try {
        token = localStorage.getItem(RD_MEMBER_KEY) || '';
        if (!token) {
          const old = sessionStorage.getItem(RD_MEMBER_KEY) || '';
          if (old) { rdMemberRemember(old); token = old; }
        }
      } catch (err) { token = ''; }

      rdMemberPaintSignInLinks();

      if (!token || !rdTokenLive(token)) {
        /* Nothing usable in hand. If the member never signed out, Google is
           asked for a fresh token in the background. */
        if (rdMemberWantsIn()) rdMemberSilentRenew();
        else rdMemberLandedSignedOut();
        return;
      }
      RD_MEMBER.token = token;
      memberVerify(true).then(function () {
        if (rdMemberSignedIn()) rdMemberLandedSignedIn();
        else if (rdMemberWantsIn()) rdMemberSilentRenew();
        else rdMemberLandedSignedOut();
      });
    }

    /* Google hands back a new ID token for an account that is already chosen,
       with no button and no prompt, as long as the member has not revoked the
       site. Nothing is drawn for this -- it either works or the member is asked
       to sign in the ordinary way. */
    function rdMemberSilentRenew(tries) {
      tries = tries || 0;
      if (!rdGsiReady()) {
        if (tries < 6) { setTimeout(function () { rdMemberSilentRenew(tries + 1); }, 500); return; }
        rdMemberLandedSignedOut();
        return;
      }
      try {
        google.accounts.id.initialize({
          client_id: RD_ADMIN_CLIENT_ID,
          callback: function (resp) {
            const t = (resp && resp.credential) || '';
            if (!t) { rdMemberLandedSignedOut(); return; }
            rdMemberRemember(t);
            memberVerify(true).then(function () {
              if (rdMemberSignedIn()) rdMemberLandedSignedIn();
              else rdMemberLandedSignedOut();
            });
          },
          auto_select: true,
          cancel_on_tap_outside: true
        });
        rdGsiOwner = 'member';
        google.accounts.id.prompt(function (note) {
          if (note && note.isNotDisplayed && note.isNotDisplayed()) rdMemberLandedSignedOut();
          else if (note && note.isSkippedMoment && note.isSkippedMoment()) rdMemberLandedSignedOut();
        });
      } catch (err) {
        rdMemberLandedSignedOut();
      }
    }

    /* Where a reload leaves the member, once we know whether they are in. */
    function rdMemberLandedSignedIn() {
      if (rdCurrentPageId === 'my-profile') openMyProfile('home');
    }

    function rdMemberLandedSignedOut() {
      rdMemberPaintSignInLinks();
      if (rdCurrentPageId === 'my-profile') openMemberSignIn('home');
    }

    function openMemberSignIn(backTo) {
      openSubPage('member-signin', backTo || rdCurrentPageId);
      rdMemberMsg('member-signin-msg', '');
      rdMemberMsg('member-link-msg', '');
      if (!rdDrawMemberGsiButton()) setTimeout(rdDrawMemberGsiButton, 700);
    }

    function openAlumniModal(id) {
        const a = alumniData.find(x => String(x.id) === String(id)); 
        if(a) openAlumniProfileModal(a); 
    }

    /* One card per private field, and one locked card in place of all of them.
       The values are not hidden with CSS -- a signed-out browser never receives
       them, so there is nothing in the page to reveal. */
    function rdMemberPrivateRows(a) {

      const c = memberContact(a.memberId);

      if (!c) {
        return '<div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">' +
          '<div class="w-10 h-10 mx-auto rounded-full bg-white text-blue-700 flex items-center justify-center border border-blue-200"><i data-lucide="lock" class="w-5 h-5"></i></div>' +
          '<p class="text-sm font-extrabold text-slate-900 mt-2.5">Mobile, WhatsApp, email and address</p>' +
          '<p class="text-xs text-slate-600 mt-1 leading-relaxed">Shown to signed in members only.</p>' +
          '<button type="button" onclick="openMemberSignIn(\'profile\')" class="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"><i data-lucide="shield-check" class="w-4 h-4"></i> Member Sign In</button>' +
          '</div>';
      }

      const flat = (label, value) =>
        '<div class="p-3 bg-slate-50 rounded-xl border border-slate-100">' +
        '<p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">' + label + '</p>' +
        '<p class="font-bold text-slate-900 break-all">' + escapeHtml(value || 'N/A') + '</p></div>';

      const withBtn = (label, value, href, cls, icon) =>
        '<div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center gap-3">' +
        '<div class="min-w-0"><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">' + label + '</p>' +
        '<p class="font-bold text-slate-900 font-mono text-base truncate">' + escapeHtml(value || 'N/A') + '</p></div>' +
        (value ? '<a href="' + href + '" target="_blank" rel="noopener" class="w-10 h-10 shrink-0 rounded-full ' + cls +
                 ' flex items-center justify-center transition"><i data-lucide="' + icon + '" class="w-4 h-4"></i></a>' : '') +
        '</div>';

      const phone = c['Mobile Number'] || '';
      const wa = c['WhatsApp Number'] || phone;

      return flat('Email', c['Email']) +
             flat('Permanent Address', c['Permanent Address']) +
             flat('Present Address', c['Present Address']) +
             withBtn('Mobile Number', phone, 'tel:' + String(phone).replace(/[^0-9+]/g, ''),
                     'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white', 'phone') +
             withBtn('WhatsApp Number', wa, 'https://wa.me/' + String(wa).replace(/[^0-9]/g, ''),
                     'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white', 'message-circle');
    }

    /* One card per fact, the same shapes as My Profile. A signed in member
       therefore reads another member's page in the layout they already know,
       and the only difference between the two pages is that this one has no
       Save button. */
    function rdProfileCell(label, value, extra) {
      return '<div class="p-3 bg-slate-50 rounded-xl border border-slate-100">' +
        '<p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">' + label + '</p>' +
        '<p class="font-bold ' + (extra || 'text-slate-900') + ' break-words">' +
        escapeHtml(value || 'N/A') + '</p></div>';
    }

    function rdProfileSection(title, inner) {
      if (!inner) return '';
      return '<div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        '<p class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">' + title + '</p>' +
        '<div class="mt-3 space-y-3">' + inner + '</div></div>';
    }

    function openAlumniProfileModal(a) {
      RD_MEMBER.lastProfileId = a.id;
      const mc = document.getElementById("profile-content");
      const cover = normalizeAlumniImage(a.cover);
      const sub = [a.dept, a.series ? "Series '" + a.series : '', a.batch ? 'Batch ' + a.batch : '']
                    .filter(Boolean).join('  |  ');

      const head = `
        <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div class="rd-cover h-32 sm:h-44 relative${cover ? ' rd-cover-photo' : ''}"${cover ? ` style="background-image:url(&quot;${escapeHtml(cover)}&quot;)"` : ''}>
            ${cover ? '' : rdProudCoverMarkup()}
          </div>
          <div class="px-5 pb-5 -mt-12">
            ${alumniAvatarMarkup(a, 'w-24 h-24 rounded-2xl border-4 border-white shadow-lg bg-white', 'text-2xl')}
            <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mt-3">${escapeHtml(a.name)}</h2>
            ${sub ? `<p class="text-sm text-slate-500 font-bold">${escapeHtml(sub)}</p>` : ''}
            <div class="mt-2 flex flex-wrap items-center gap-2">
              ${a.memberId ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold font-mono tracking-wide">Member ID: ${escapeHtml(a.memberId)}</span>` : ''}
              ${a.status ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${a.status === 'Alumni' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">${alumniStatusLabel(a.status, 'w-3.5 h-3.5')}</span>` : ''}
            </div>
          </div>
        </div>`;

      const idCard = rdProfileSection('Rangdhanu Identity',
        `<div class="grid grid-cols-2 gap-3">
           ${rdProfileCell('Department', a.dept)}
           ${rdProfileCell('Series', a.series)}
           ${rdProfileCell('Batch', a.batch)}
           <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
             <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Blood Group</p>
             <p class="font-black text-rose-600 text-lg">${escapeHtml(a.blood)}</p>
           </div>
         </div>` +
        (a.former_pos
          ? `<div class="p-3 bg-amber-50 rounded-xl border border-amber-100"><p class="text-[10px] text-amber-600 font-bold uppercase tracking-wider mb-1">${escapeHtml(rdPositionCardLabel(a.status))}</p><p class="font-bold text-amber-900 break-words">${escapeHtml(a.former_pos)}</p></div>`
          : ''));

      /* An empty job draws nothing at all -- a member who has not filled the
         work fields in should not read four boxes saying N/A. */
      const work = rdProfileSection('Work',
        `${String(a.desig || '').trim() ? `<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div class="w-10 h-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><i data-lucide="briefcase" class="w-5 h-5"></i></div>
            <div class="min-w-0"><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Designation</p><p class="font-extrabold text-slate-900 break-words">${escapeHtml(a.desig)}</p></div>
         </div>` : ''}
         ${String(a.org || '').trim() ? `<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div class="w-10 h-10 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><i data-lucide="building-2" class="w-5 h-5"></i></div>
            <div class="min-w-0"><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Organization</p><p class="font-bold text-slate-900 break-words">${escapeHtml(a.org)}</p></div>
         </div>` : ''}
         <div class="grid grid-cols-2 gap-3">
           ${String(a.emp_type || '').trim() ? rdProfileCell('Employment Type', a.emp_type) : ''}
           <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
             <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
             <p class="font-bold text-slate-900 break-words">${escapeHtml(a.loc)}</p>
           </div>
         </div>`);

      const contact = rdProfileSection('Contact', rdMemberPrivateRows(a));

      mc.innerHTML = head + idCard + work + contact;
      openSubPage('profile', 'alumni');
      lucide.createIcons();
      /* A picture the browser already has fires its load event before this
         markup exists, so the sweep is what makes it appear. Without it the
         photo stayed transparent on this page while the directory showed it. */
      rdPhotoSweep(mc);
    }
    function closeAlumniModal() { goBackFromSubPage('profile'); }
    
    let alumniViewFilter = 'ALL';

    /* ---------- from the directory to the committee page -----------------
       The directory answers "who is in Rangdhanu"; the committee page answers
       "who runs it". They were two clicks apart through the menu, so each
       view now offers the committee that belongs to it: the Running Member
       view points at the Rangdhanu Executive Committee, the Alumni view at
       the Alumni Association committee. Same page, preselected -- not a copy
       of it, so there is only ever one committee list to keep right. */
    function rdViewCommittee(name) {
      RD_EC.committee = name;
      RD_EC.session = '';
      switchPage('committee');
      renderExecutiveCommittee();
      lucide.createIcons();
    }
    function alumniViewExecutiveCommittee() { rdViewCommittee(RD_EC_COMMITTEES[0].name); }
    function alumniViewAlumniCommittee() { rdViewCommittee(RD_EC_COMMITTEES[1].name); }

    /* Which of the two shortcuts is on screen follows the view being read.
       On "Everyone" both are offered, because both lists are on screen. */
    function rdSyncAlumniCommitteeLinks(v) {
      const pair = [['alumni-btn-ec', v === 'ALL' || v === 'Running Member'],
                    ['alumni-btn-ac', v === 'ALL' || v === 'Alumni']];
      pair.forEach(([id, show]) => {
        const b = document.getElementById(id);
        if (b) b.classList.toggle('hidden', !show);
      });
    }

    function setAlumniViewFilter(v) {
      alumniViewFilter = v;
      document.querySelectorAll('.alumni-view-tab-btn').forEach(b => {
        const active = b.dataset.view === v;
        b.classList.toggle('bg-blue-600', active); b.classList.toggle('text-white', active); b.classList.toggle('border-blue-600', active);
        b.classList.toggle('bg-white', !active); b.classList.toggle('text-slate-600', !active); b.classList.toggle('border-slate-200', !active);
      });
      rdSyncAlumniCommitteeLinks(v);
      filterAlumni();
    }
    function filterAlumni() {
      const q = document.getElementById("alumni-search-input").value.toLowerCase().trim(), dept = document.getElementById("alumni-filter-dept").value,
            series = document.getElementById("alumni-filter-series").value, blood = document.getElementById("alumni-filter-blood").value;
      renderAlumni(alumniData.filter(a => 
        (!q || a.name.toLowerCase().includes(q) || a.org.toLowerCase().includes(q) || a.address.toLowerCase().includes(q) || a.loc.toLowerCase().includes(q)) &&
        (dept === "ALL" || a.dept === dept) && (series === "ALL" || a.series === series) && (blood === "ALL" || a.blood === blood) &&
        (alumniViewFilter === "ALL" || a.status === alumniViewFilter)
      ));
    }
    function resetAlumniFilters() { document.getElementById("alumni-search-input").value=""; document.getElementById("alumni-filter-dept").value="ALL"; document.getElementById("alumni-filter-series").value="ALL"; document.getElementById("alumni-filter-blood").value="ALL"; setAlumniViewFilter('ALL'); }

    /* EVENT API & UPLOAD */
    function openEventSubmitModal(){ openSubPage('event-new', 'events'); }
    function closeEventSubmitModal(){ goBackFromSubPage('event-new'); }
    function closeDynamicEventModal(){ goBackFromSubPage('event-detail'); }
    function fileToBase64(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result.split(',')[1]||''); r.onerror=rej; r.readAsDataURL(file);}); }

    /* ---------- Automatic image compression, done in the browser ----------
       Phone photos are routinely 6-12MB and the server refuses anything over 5MB.
       We redraw the picture on a canvas at a capped longest edge (aspect ratio is
       never changed, and small images are never upscaled), then step the JPEG
       quality down until it comfortably fits. Anything we cannot decode is passed
       through untouched rather than lost. */
    const RD_IMG_MAX_EDGE = 1600;                    // default longest side, in px
    const RD_IMG_SKIP_UNDER = 600 * 1024;            // already small (e.g. a logo)? leave it alone
    const RD_IMG_TARGET_BYTES = 3 * 1024 * 1024;     // base64 adds ~33%, so keep headroom under 5MB
    const RD_IMG_QUALITY_STEPS = [0.86, 0.78, 0.70, 0.60, 0.50];
    const RD_IMG_HARD_LIMIT = 5 * 1024 * 1024;       // must match MAX_PHOTO_BYTES in Code.gs

    function rdLoadImage(file) {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('image decode failed')); };
        img.src = url;
      });
    }

    function rdCanvasToBlob(canvas, quality) {
      return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', quality));
    }

    async function compressImage(file, maxEdge) {
      maxEdge = maxEdge || RD_IMG_MAX_EDGE;
      if (!file || !/^image\//i.test(file.type || '')) return file;
      if (/svg|gif/i.test(file.type || '')) return file;          // animation / vector: never rasterise
      if (file.size && file.size <= RD_IMG_SKIP_UNDER) return file; // keeps small PNG logos as-is

      let img;
      try { img = await rdLoadImage(file); } catch (e) { return file; }
      const w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
      if (!w || !h) return file;

      const scale = Math.min(1, maxEdge / Math.max(w, h));        // never enlarge
      const tw = Math.max(1, Math.round(w * scale));
      const th = Math.max(1, Math.round(h * scale));

      const canvas = document.createElement('canvas');
      canvas.width = tw; canvas.height = th;
      const ctx = canvas.getContext('2d');
      if (!ctx) return file;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.fillStyle = '#ffffff';                                  // transparency -> white, not black
      ctx.fillRect(0, 0, tw, th);
      ctx.drawImage(img, 0, 0, tw, th);

      let out = null;
      for (let i = 0; i < RD_IMG_QUALITY_STEPS.length; i++) {
        const blob = await rdCanvasToBlob(canvas, RD_IMG_QUALITY_STEPS[i]);
        if (!blob) break;
        out = blob;
        if (blob.size <= RD_IMG_TARGET_BYTES) break;
      }
      if (!out) return file;
      if (file.size && out.size >= file.size) return file;        // compression didn't help

      const name = String(file.name || 'photo').replace(/\.[^.]+$/, '') + '.jpg';
      try { return new File([out], name, { type: 'image/jpeg' }); }
      catch (e) { out.name = name; return out; }                  // older Safari has no File constructor
    }

    async function filePayload(file, maxEdge){
      if (!file) return null;
      const f = await compressImage(file, maxEdge);
      const base64 = await fileToBase64(f);
      if (base64.length * 0.75 > RD_IMG_HARD_LIMIT) {
        throw new Error('The file is still larger than 5MB. Please choose a slightly smaller image or file.');
      }
      return { fileName: f.name || file.name, mimeType: f.type || file.type || 'application/octet-stream', base64: base64 };
    }
    
    async function apiPost(action, payload={}){
      const r=await fetch(API_BASE_URL,{method:'POST', body:JSON.stringify({action,...rdAuthParams(),...payload})});
      let j;
      try{ j = JSON.parse(await r.text()); } catch(e) { throw new Error('Server returned invalid response.'); }
      /* Without this check a failed write used to fall through into the caller's
         SUCCESS branch — the reason a rejected registration said "submitted". */
      if (j && j.success === false) throw new Error(j.message || 'Request failed.');
      return j;
    }
    

    /* ---------- FIELD-LEVEL VALIDATION ---------------------------------- */
    const RD_MOBILE_RULE = 'Please enter a valid mobile number. Example: 017xxxxxxxx (Bangladesh) / +9715xxxxxxx (abroad)';
    /* Mobile numbers. Many of our alumni live abroad, so a number is NOT required
       to start with 01 any more. A Bangladeshi number is still normalised to the
       local 01xxxxxxxxx shape (so duplicate-matching against the sheet keeps
       working), and anything else is accepted as an international number. */
    function normalizeBdMobile(value) {
      let v = String(value == null ? '' : value).trim().replace(/[\s\-().]/g, '');
      if (/^00\d{7,}$/.test(v)) v = '+' + v.slice(2);          // 00880… -> +880…
      if (/^\+?8801\d{9}$/.test(v)) return v.replace(/^\+?880/, '0');
      if (/^1[3-9]\d{8}$/.test(v)) return '0' + v;             // 17xxxxxxxx -> 017xxxxxxxx
      return v;
    }
    /* Valid = a local BD number, OR a +countrycode number, OR a plain foreign
       number. A number that looks Bangladeshi but is malformed (01 + wrong
       length/prefix) is still rejected, because that is a typo, not an expat. */
    function isValidBdMobile(value) {
      const v = normalizeBdMobile(value);
      if (/^01[3-9]\d{8}$/.test(v)) return true;
      if (/^\+\d{8,15}$/.test(v)) return true;
      if (/^0?\d{7,14}$/.test(v) && !/^01/.test(v)) return true;
      return false;
    }

    function fieldBox(form, name) {
      if (!form) return null;
      return form.querySelector('[name="' + name + '"]') || document.getElementById(name);
    }
    function clearFieldErrors(form) {
      if (!form) return;
      form.querySelectorAll('.form-input.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.field-error.show').forEach(el => { el.classList.remove('show'); el.textContent = ''; });
    }
    function setFieldError(form, name, msg, focus) {
      const box = fieldBox(form, name);
      if (!box) return false;
      box.classList.add('is-invalid');
      box.setAttribute('aria-invalid', 'true');
      let slot = box.parentElement && box.parentElement.querySelector('.field-error');
      if (!slot && box.parentElement) {
        slot = document.createElement('p');
        slot.className = 'field-error';
        box.parentElement.appendChild(slot);
      }
      if (slot) { slot.textContent = msg; slot.classList.add('show'); }
      /* Typing in the box clears the mark straight away — no re-submit needed. */
      if (!box.dataset.rdClearBound) {
        box.dataset.rdClearBound = '1';
        box.addEventListener('input', () => {
          box.classList.remove('is-invalid');
          box.removeAttribute('aria-invalid');
          const sl = box.parentElement && box.parentElement.querySelector('.field-error');
          if (sl) { sl.classList.remove('show'); sl.textContent = ''; }
        });
      }
      if (focus) { try { box.focus({preventScroll:true}); box.scrollIntoView({block:'center', behavior:'smooth'}); } catch(e) { box.focus(); } }
      return true;
    }

    /* ---------- SERVER MESSAGE SANITIZER -------------------------------- */
    /* Members must never read spreadsheet internals. Each rule can also name the
       form field it belongs to, so the message lands on the box, not in a page. */
    const RD_ERROR_RULES = [
      { re: /WhatsApp Number must be a valid/i, field: 'whatsapp',
        msg: 'That WhatsApp number is not valid. Example: 017xxxxxxxx (Bangladesh) / +9715xxxxxxx (abroad)' },
      { re: /^(?!.*whatsapp).*valid 11-digit Bangladesh number/i, field: 'mobile',
        msg: 'That mobile number is not valid. Example: 017xxxxxxxx (Bangladesh) / +9715xxxxxxx (abroad)' },
      { re: /valid email/i, field: 'email', msg: 'That email address is not valid. Please check it and try again.' },
      /* The duplicate path: the Status column only allows PENDING/APPROVED/REJECTED,
         so writing DUPLICATE used to make the whole row fail. Backend patch fixes
         the sheet; this keeps the member's message human either way. */
      { re: /data validation|PENDING, APPROVED, REJECTED/i, duplicate: true,
        msg: 'You are already on our list, so the application has been sent for another admin check. You will be emailed once the review is done.' },
      { re: /already (a )?member|already exists|duplicate/i, duplicate: true,
        msg: 'You are already on our list. The application has been sent for an admin check.' },
      /* Three separate doors, three separate cures. All three used to fall
         through to the generic "server is having trouble" line because they
         happen to contain the word permission, which cost an evening of
         hunting deployments and sharing lists. */
      { re: /does not have admin permission|Admin account is not active|Unauthorized admin access/i,
        msg: 'This Google account is not set up as an admin yet. Ask the main admin to add it to the '
           + 'Admins sheet with a Role chosen from the list and Status set to ACTIVE.' },
      /* The web app runs as the person using it, so an admin whose Google
         account was never shared on the data sheet gets Google's own refusal
         back. That used to land on the generic "server is having trouble"
         line, which sent us hunting the deployment instead of the sharing
         list. Name it, because the cure is one click in the Sheet. */
      { re: /do not have permission|permission to access|Requested entity was not found|openById/i,
        msg: 'This Google account is on the admin list but has not been given access to the data sheet. '
           + 'Ask the main admin to share the Rangdhanu spreadsheet and Drive folders with this account as an Editor.' },
      { re: /exception|permission|quota|timed? ?out|service|invalid response|failed to fetch|networkerror/i,
        msg: 'The server is having trouble and could not save this right now. Please try again in a little while.' },
      /* A function the backend does not have yet: the paste-in file is
         missing, not the network. Saying so saves an hour of guessing. */
      { re: /is not defined|Script function not found|not a function/i,
        msg: 'One part of the backend has not been pasted into Apps Script yet. '
           + 'Open the Apps Script project, add the missing .gs file, then deploy a new version.' },
      { re: /cell [A-Z]+\d+|spreadsheet|getRange|setValues/i,
        msg: 'A technical problem stopped us from saving this. The admin has been notified — please try again shortly.' }
    ];

    function friendlyError(raw) {
      const text = String(raw && raw.message ? raw.message : (raw == null ? '' : raw));
      if (!text) return { msg: 'Something went wrong. Please try again.', raw: text };
      for (const rule of RD_ERROR_RULES) {
        if (rule.re.test(text)) {
          if (text !== rule.msg) console.warn('[rd] server said:', text);
          return { msg: rule.msg, field: rule.field, duplicate: !!rule.duplicate, raw: text };
        }
      }
      /* Anything with English technical noise in it is not shown verbatim. */
      if (/[{}<>]|\bError\b|\bat [A-Za-z_$]+\(/.test(text)) {
        console.warn('[rd] server said:', text);
        return { msg: 'The request could not be completed. Please try again in a little while.', raw: text };
      }
      return { msg: text, raw: text };
    }

    /* Single place every catch block can call. */
    function reportError(err, form) {
      const info = friendlyError(err);
      if (form && info.field && setFieldError(form, info.field, info.msg, true)) return info;
      showToast(info.msg, info.duplicate ? 'info' : 'error',
                info.duplicate ? 'Already on record' : undefined);
      return info;
    }

    /* The admin token rides along only when one exists; every public call
       is byte-for-byte what it was before. */
    function rdAuthParams() { return RD_ADMIN_TOKEN ? { adminToken: RD_ADMIN_TOKEN } : {}; }
    async function apiGet(action, params={}){ const q=new URLSearchParams({action,...params,...rdAuthParams(),_:Date.now()}); const r=await fetch(API_BASE_URL+'?'+q.toString()); const j=await r.json(); if(!j.success) throw new Error(j.message); return j; }

    /* ================= EXECUTIVE COMMITTEE =============================
       Three committees, and inside each one a tab per session. The session
       list is never written down here -- it arrives from the backend, which
       derives it from the APPROVED rows, so a brand new session shows up
       without anyone touching this file. */
    const RD_EC_COMMITTEES = [
      { name: 'Rangdhanu Executive Committee',
        bn: 'Rangdhanu Executive', icon: 'shield-check',
        positions: ['President', 'General Secretary', 'Senior Vice President', 'Vice President', 'Others'] },
      { name: 'DUET RANGDHANU Alumni Association Executive Committee',
        bn: 'Rangdhanu Alumni Committee', icon: 'users',
        positions: ['President', 'General Secretary', 'Senior Vice President', 'Vice President', 'Others'] },
      { name: 'Prokoushali DUET Admission Coaching Centre Executive Committee',
        bn: 'PDACC Executive', icon: 'building-2',
        positions: ['Director', 'Assistant Director', 'Senior Finance Director', 'Senior Residential Director', 'Others'] }
    ];

    let RD_EC = { state: 'idle', data: [], committee: '', session: '', error: '' };

    function ecCommitteeMeta(name) {
      return RD_EC_COMMITTEES.find(c => c.name === name) ||
             { name: name, bn: name, icon: 'shield-check', positions: [] };
    }

    function ecFindCommittee(name) {
      return RD_EC.data.find(c => c.committee === name) || null;
    }

    async function loadExecutiveCommittee(force) {
      if (RD_EC.state === 'loading') return;
      if (RD_EC.state === 'ready' && !force) { renderExecutiveCommittee(); return; }
      const warm = rdFeedRecall('committee');
      if (warm && !RD_EC.data.length) {
        /* Something real on screen beats a spinner, so the remembered committee
           is adopted before the request goes out. */
        RD_EC.data = warm;
        RD_EC.state = 'ready';
      } else {
        RD_EC.state = 'loading';
      }
      RD_EC.error = '';
      renderExecutiveCommittee();
      try {
        const res = await apiGet('executivecommittee');
        RD_EC.data = Array.isArray(res.data) ? res.data : [];
        rdFeedRemember('committee', RD_EC.data);
        RD_EC.state = 'ready';
        /* Land on the first committee that actually has members. */
        if (!ecFindCommittee(RD_EC.committee)) {
          const first = RD_EC.data.find(c => c.count > 0) || RD_EC.data[0];
          RD_EC.committee = first ? first.committee : '';
          RD_EC.session = '';
        }
      } catch (err) {
        if (RD_EC.data.length) {
          RD_EC.state = 'ready';
          console.warn('[rd] committee refresh failed:', err && err.message ? err.message : err);
        } else {
          RD_EC.state = 'error';
          RD_EC.error = friendlyError(err).msg;
        }
      }
      renderExecutiveCommittee();
      renderHomeLeaderMessages();
      renderPdaccDirector();
    }

    function selectEcCommittee(name) {
      RD_EC.committee = name;
      RD_EC.session = '';
      renderExecutiveCommittee();
    }

    function selectEcSession(session) {
      RD_EC.session = session;
      renderExecutiveCommittee();
    }

    function ecStateBox(kind, text) {
      const box = document.getElementById('ec-state');
      if (!box) return;
      if (!kind) { box.classList.add('hidden'); box.innerHTML = ''; return; }
      box.classList.remove('hidden');
      if (kind === 'loading') {
        box.innerHTML = '<div class="rounded-3xl border border-slate-200 bg-white py-12 text-center text-sm font-bold text-slate-500 flex items-center justify-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin text-blue-600"></i> Loading committee members...</div>';
      } else if (kind === 'error') {
        box.innerHTML = '<div class="rounded-3xl border border-rose-200 bg-rose-50 py-10 px-6 text-center"><i data-lucide="triangle-alert" class="w-8 h-8 text-rose-600 mx-auto"></i>' +
          '<p class="mt-3 text-sm font-bold text-rose-800">' + escapeHtml(text) + '</p>' +
          '<button type="button" onclick="loadExecutiveCommittee(true)" class="mt-5 px-5 py-2.5 rounded-xl bg-white border border-rose-200 text-rose-700 text-xs font-bold cursor-pointer">Try again</button></div>';
      } else {
        box.innerHTML = '<div class="rounded-3xl border border-slate-200 bg-white py-12 px-6 text-center"><i data-lucide="users" class="w-8 h-8 text-slate-300 mx-auto"></i>' +
          '<p class="mt-3 text-sm font-bold text-slate-600">' + escapeHtml(text) + '</p></div>';
      }
      lucide.createIcons();
    }

    function ecInitials(name) {
      const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return '?';
      return (parts[0].slice(0, 1) + (parts.length > 1 ? parts[parts.length - 1].slice(0, 1) : '')).toUpperCase();
    }

    /* ---------- Series list that rolls forward on its own -------------
       Hardcoded 97..25 lists went stale every January. Both forms now get
       their options from here, so the newest series appears by itself. */
    function rdSeriesList() {
      const end = new Date().getFullYear();
      const out = [];
      for (let y = 1997; y <= end; y++) out.push(String(y).slice(-2));
      return out;
    }

    function rdFillSeriesSelects() {
      const opts = '<option value="">Select Series</option>' +
        rdSeriesList().map(s => '<option value="' + s + '">' + s + '</option>').join('');
      document.querySelectorAll('select[data-rd-series]').forEach(sel => {
        const keep = sel.value;
        sel.innerHTML = opts;
        if (keep) sel.value = keep;
      });
    }

    /* ---------- One position field, two labels ------------------------
       The sheet keeps a single column. Whether that text reads as a
       current role or a former one is a question of who is looking at it,
       not of where it is stored, so nothing is copied or migrated when a
       series turns into Alumni in December. Only the label moves. */
    const RD_POSITION_LABEL_NOW  = 'Position / Role at Rangdhanu / PDACC';
    const RD_POSITION_LABEL_PAST = 'Former Position at Rangdhanu / PDACC';

    function rdIsAlumniStatus(status) {
      return /alumni/i.test(String(status || ''));
    }

    function rdPositionLabel(status) {
      return rdIsAlumniStatus(status) ? RD_POSITION_LABEL_PAST : RD_POSITION_LABEL_NOW;
    }

    /* The profile card prints its labels in small uppercase letters, where the
       full form wording wraps onto three lines and stops being readable. The
       card therefore gets the short pair. Same rule, same source of truth —
       only the length differs, so the two can never disagree about status. */
    const RD_POSITION_CARD_NOW  = 'Position / Role';
    const RD_POSITION_CARD_PAST = 'Former Position';

    function rdPositionCardLabel(status) {
      return rdIsAlumniStatus(status) ? RD_POSITION_CARD_PAST : RD_POSITION_CARD_NOW;
    }

    /* The newest series the server already counts as Alumni. Read off the
       public directory, which carries viewStatus per row, so the cutoff is
       never duplicated here and cannot drift from the backend. Returns ''
       while the directory has not been read yet. */
    function rdAlumniCutoffSeries() {
      const order = rdSeriesList();
      let rows = (alumniData || []).map(a => ({ series: a.series, status: a.status }));
      /* The join page does not fetch the directory, so fall back to whatever
         this tab already remembered. No extra round trip is taken for a label,
         and the raw rows are read as they are: only two of their columns are
         needed here, so nothing is re-shaped. */
      if (!rows.length) {
        const warm = rdFeedRecall('alumni');
        if (Array.isArray(warm)) {
          rows = warm.map(m => ({ series: String(m['Series'] || '').trim(),
                                  status: String(m['viewStatus'] || '').trim() }));
        }
      }
      let best = -1;
      rows.forEach(a => {
        if (!rdIsAlumniStatus(a.status)) return;
        const i = order.indexOf(String(a.series || '').trim());
        if (i > best) best = i;
      });
      return best === -1 ? '' : order[best];
    }

    /* Called when the applicant picks a Series on the membership form. */
    function rdSyncPositionLabel() {
      const label = document.getElementById('member-position-label');
      if (!label) return;
      const form = document.getElementById('member-registration-form');
      const sel = form && form.querySelector('select[name="series"]');
      const cutoff = rdAlumniCutoffSeries();
      const order = rdSeriesList();
      const mine = sel ? String(sel.value || '').trim() : '';
      /* Unknown cutoff or no series chosen keeps the neutral wording. */
      const past = !!(mine && cutoff &&
        order.indexOf(mine) !== -1 && order.indexOf(mine) <= order.indexOf(cutoff));
      label.textContent = past ? RD_POSITION_LABEL_PAST : RD_POSITION_LABEL_NOW;
    }

    /* ---------- The session must be written in full: 2025-2026 --------
       2025-26 is rejected on purpose: one single spelling keeps the sheet
       sortable and the sessions groupable. How long a term may run depends
       on the committee: the Alumni Association often sits for three or four
       years, so 2024-2027 is right there; the Rangdhanu and PDACC
       committees are one-year terms, where 2024-2027 is a typo. */
    function rdSessionSpan(committee) {
      return /alumni/i.test(String(committee || '')) ? 4 : 1;
    }

    function rdSessionError(v, committee) {
      const s = String(v || '').trim();
      if (!/^\d{4}-\d{4}$/.test(s)) return 'Please write the session in full, like 2025-2026.';
      const a = +s.slice(0, 4), b = +s.slice(5);
      const span = rdSessionSpan(committee);
      if (b <= a) return 'The second year must follow the first, like 2025-2026.';
      if (b - a > span) {
        return span === 1
          ? 'This committee runs for one year, so the session must read like 2025-2026.'
          : 'A session may span up to four years, like 2024-2027.';
      }
      if (a < 1997 || a > new Date().getFullYear() + 2) return 'Please check the session year.';
      return '';
    }

    /* ---------- Long messages are shown short, with "See more" ---------
       A President's or Director's message can run for many paragraphs. The
       card shows the opening lines and keeps the rest one click away, in
       place -- no modal, nothing to navigate away from. Both copies sit in
       the DOM already, so expanding costs no re-escaping and no re-render. */
    let RD_CLAMP_SEQ = 0;

    function rdClampBlock(text, limit, cls) {
      const full = String(text || '').trim();
      if (!full) return '';
      if (full.length <= limit) return '<p class="' + cls + '">' + escapeHtml(full) + '</p>';
      /* Cut on a space so a word is never sliced in half, then drop any
         punctuation left dangling before the ellipsis. */
      let cut = full.slice(0, limit);
      const sp = cut.lastIndexOf(' ');
      if (sp > limit * 0.6) cut = cut.slice(0, sp);
      cut = cut.replace(/[\s,;:.\u0964\u2014-]+$/, '');
      const id = 'rd-clamp-' + (++RD_CLAMP_SEQ);
      return '<div id="' + id + '">' +
        '<p class="' + cls + '">' +
          '<span data-rd-short>' + escapeHtml(cut) + '\u2026</span>' +
          '<span data-rd-full class="hidden">' + escapeHtml(full) + '</span>' +
        '</p>' +
        '<button type="button" onclick="rdClampToggle(\'' + id + '\')" ' +
          'class="mt-3 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 ' +
          'hover:bg-blue-600 hover:text-white border border-blue-100 text-blue-700 ' +
          'text-xs font-extrabold cursor-pointer transition">' +
          '<span data-rd-label>See more</span>' +
          '<span data-rd-icon><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i></span>' +
        '</button>' +
      '</div>';
    }

    function rdClampToggle(id) {
      const box = document.getElementById(id);
      if (!box) return;
      const short = box.querySelector('[data-rd-short]');
      const full = box.querySelector('[data-rd-full]');
      const label = box.querySelector('[data-rd-label]');
      const icon = box.querySelector('[data-rd-icon]');
      if (!short || !full) return;
      const next = short.classList.contains('hidden') ? false : true;
      short.classList.toggle('hidden', next);
      full.classList.toggle('hidden', !next);
      if (label) label.textContent = next ? 'See less' : 'See more';
      if (icon) icon.innerHTML = '<i data-lucide="chevron-' + (next ? 'up' : 'down') +
        '" class="w-3.5 h-3.5"></i>';
      lucide.createIcons();
    }

    /* ---------- Leaders (President / General Secretary) ---------- */
    function ecIsLeader(m) {
      /* ecIsDirector covers PDACC, whose top post is Director, not President. */
      return m.positionRank === 1 || m.positionRank === 2 ||
             (typeof ecIsDirector === 'function' && ecIsDirector(m));
    }

    function ecPhotoBlock(m, cls) {
      const photo = String(m.photo || '').trim();
      return '<div class="' + cls + ' shrink-0 rounded-2xl bg-blue-50 border border-blue-100 ' +
        'text-blue-700 font-extrabold flex items-center justify-center overflow-hidden relative">' +
        '<span class="ec-initials text-xl">' + escapeHtml(ecInitials(m.fullName)) + '</span>' +
        (photo
          ? '<span class="absolute inset-0"><img src="' + escapeHtml(photo) + '" alt="' +
            escapeHtml(m.fullName) + '" loading="lazy" class="w-full h-full object-cover" ' +
            'onerror="rdPhotoFallback(this)"/></span>'
          : '') +
      '</div>';
    }

    function ecLeaderCard(m, sessionLabel, showFull) {
      const msg = String(m.message || '').trim();
      return '' +
      '<article class="rd-tile bg-white rounded-[28px] border border-blue-100 shadow-card ' +
        'overflow-hidden flex flex-col">' +
        '<div class="p-6 sm:p-8 flex items-start gap-5">' +
          ecPhotoBlock(m, 'w-24 h-24 sm:w-28 sm:h-28') +
          '<div class="min-w-0">' +
            '<span class="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-600 text-white ' +
              'text-[11px] font-extrabold">' + escapeHtml(m.position) + '</span>' +
            '<h3 class="text-xl sm:text-2xl font-extrabold text-slate-950 mt-2.5 leading-snug ' +
              'break-words">' + escapeHtml(m.fullName) + '</h3>' +
            '<p class="text-xs font-bold text-slate-500 mt-1.5">' + escapeHtml(m.department) +
              ' • Series ' + escapeHtml(m.series) +
              (sessionLabel ? ' • Session ' + escapeHtml(sessionLabel) : '') + '</p>' +
          '</div>' +
        '</div>' +
        (msg
          ? '<div class="px-6 sm:px-8 pb-6 sm:pb-8"><i data-lucide="quote" ' +
            'class="w-6 h-6 text-blue-300"></i><div class="mt-2">' +
            (showFull
              ? '<p class="text-sm sm:text-[15px] text-slate-700 leading-8 ' +
                'whitespace-pre-line">' + escapeHtml(msg) + '</p>'
              : rdClampBlock(msg, 320, 'text-sm sm:text-[15px] text-slate-700 ' +
                                       'leading-8 whitespace-pre-line')) +
            '</div></div>'
          : '') +
        '<div class="mt-auto border-t border-slate-100 grid grid-cols-2 divide-x ' +
          'divide-slate-100 text-xs font-bold">' +
          '<button type="button" onclick="copyToClipboard(\'' + escapeHtml(m.mobile) + '\')" ' +
            'class="py-3.5 flex items-center justify-center gap-1.5 text-slate-600 ' +
            'hover:bg-slate-50 cursor-pointer"><i data-lucide="phone" ' +
            'class="w-3.5 h-3.5 text-blue-600"></i> Mobile</button>' +
          '<a href="mailto:' + escapeHtml(m.email) + '" class="py-3.5 flex items-center ' +
            'justify-center gap-1.5 text-slate-600 hover:bg-slate-50"><i data-lucide="mail" ' +
            'class="w-3.5 h-3.5 text-blue-600"></i> Email</a>' +
        '</div>' +
      '</article>';
    }

    /* ---------- "View message" opens a real page, never a modal ---------- */
    function ecLookupMember(entryId) {
      const id = String(entryId || '');
      for (const c of (RD_EC.data || [])) {
        for (const s of (c.sessions || [])) {
          const hit = (s.members || []).find(m => String(m.entryId) === id);
          if (hit) return { member: hit, committee: c.committee, session: s.session };
        }
      }
      return null;
    }

    /* backTo lets another page borrow this one: the PDACC bar sends the
       visitor to the Director's message, and back returns to PDACC. */
    function openEcMessage(entryId, backTo) {
      const found = ecLookupMember(entryId);
      const box = document.getElementById('ec-message-body');
      if (!box) return;
      if (!found) {
        box.innerHTML = '<div class="rounded-3xl border border-slate-200 bg-white p-8 ' +
          'text-center text-sm font-bold text-slate-500">This message is no longer available.</div>';
      } else {
        const m = found.member;
        box.innerHTML = '<p class="text-[11px] font-extrabold uppercase text-blue-700 ' +
          'tracking-widest mb-3">' + escapeHtml(found.committee) + '</p>' +
          ecLeaderCard(m, found.session, true);
      }
      openSubPage('ec-message', backTo || 'committee');
      lucide.createIcons();
    }

    /* ---------- Home: the newest President message of each committee -----
       No separate input anywhere: the moment a newer session is approved,
       its President replaces the one shown here. */
    function ecLatestPresident(committeeName) {
      const c = (RD_EC.data || []).find(x => x.committee === committeeName);
      if (!c) return null;
      for (const s of (c.sessions || [])) {
        const p = (s.members || []).find(m => m.positionRank === 1 &&
                                              String(m.message || '').trim());
        if (p) return { member: p, session: s.session, committee: c.committee };
      }
      return null;
    }

    /* The kicker over a message is the committee's own name with the words
       "Executive Committee" taken off the end: the section heading already
       says these are the Presidents of our Executive Committees, so the full
       formal string only made the label long enough to wrap
       ("DUET RANGDHANU Alumni Association Executive Committee"). */
    function ecShortCommittee(name) {
      return String(name || '').replace(/\s*Executive\s+Committee\s*$/i, '').trim();
    }

    /* ---------- the President deck ---------------------------------------
       Both messages used to sit side by side, so the home page opened with two
       walls of text. One at a time now: the deck turns itself over every
       RD_LEADER_MS, a finger can drag it sideways, and a dot jumps straight to
       a message. Same shape as the cover bar -- a chain of one-shot timers,
       its own state, and nothing at all when there is only one message. */
    const RD_LEADER_MS = 4000;
    let rdLeaderSlides = 0, rdLeaderIdx = 0, rdLeaderTimer = null, rdLeaderSwipeOn = false;

    function setLeaderSlide(i) {
      const track = document.getElementById('home-leader-msgs');
      if (!track || rdLeaderSlides < 1) return;
      rdLeaderIdx = ((i % rdLeaderSlides) + rdLeaderSlides) % rdLeaderSlides;
      if (track.style) track.style.transform = 'translateX(-' + (rdLeaderIdx * 100) + '%)';
      const dots = document.getElementById('home-leader-dots');
      const all = (dots && dots.querySelectorAll) ? dots.querySelectorAll('.leader-dot') : [];
      for (let n = 0; n < all.length; n++) {
        const on = n === rdLeaderIdx;
        all[n].classList.toggle('on', on);
        all[n].setAttribute('aria-current', on ? 'true' : 'false');
      }
      startLeaderAutoplay();
    }
    function nextLeaderSlide() { setLeaderSlide(rdLeaderIdx + 1); }
    function prevLeaderSlide() { setLeaderSlide(rdLeaderIdx - 1); }

    function startLeaderAutoplay() {
      if (rdLeaderTimer) { clearTimeout(rdLeaderTimer); rdLeaderTimer = null; }
      if (rdLeaderSlides < 2) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      rdLeaderTimer = setTimeout(function () {
        rdLeaderTimer = null;
        setLeaderSlide(rdLeaderIdx + 1);
      }, RD_LEADER_MS);
    }

    /* Bound once, on the viewport rather than the track, so a re-render does
       not stack a second set of handlers. A drag that is more vertical than
       horizontal is a scroll, not a swipe, and is left alone. */
    function rdLeaderBindSwipe() {
      const deck = document.getElementById('home-leader-deck');
      if (!deck || rdLeaderSwipeOn || !deck.addEventListener) return;
      rdLeaderSwipeOn = true;
      let x0 = null, y0 = null;
      const start = function (e) {
        const t = (e.touches && e.touches[0]) || e;
        x0 = t.clientX; y0 = t.clientY;
      };
      const end = function (e) {
        if (x0 === null) return;
        const t = (e.changedTouches && e.changedTouches[0]) || e;
        const dx = t.clientX - x0, dy = t.clientY - y0;
        x0 = null;
        if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) nextLeaderSlide(); else prevLeaderSlide();
      };
      deck.addEventListener('touchstart', start, { passive: true });
      deck.addEventListener('touchend', end, { passive: true });
      deck.addEventListener('mousedown', start);
      deck.addEventListener('mouseup', end);
    }

    function renderHomeLeaderMessages() {
      const box = document.getElementById('home-leader-msgs');
      const sec = document.getElementById('home-leadership');
      if (!box || !sec) return;
      const dots = document.getElementById('home-leader-dots');
      /* Seniority sets the order, so the Alumni Association President opens the
         deck and the Rangdhanu President follows. */
      const wanted = ['DUET RANGDHANU Alumni Association Executive Committee',
                      'Rangdhanu Executive Committee'];
      const cards = wanted.map(ecLatestPresident).filter(Boolean);
      rdLeaderSlides = cards.length;
      rdLeaderIdx = 0;
      if (!cards.length) {
        sec.classList.add('hidden');
        box.innerHTML = '';
        if (dots) dots.innerHTML = '';
        return;
      }
      sec.classList.remove('hidden');
      box.innerHTML = cards.map(x =>
        '<div class="leader-slide"><p class="text-[11px] font-extrabold uppercase text-blue-700 ' +
        'tracking-widest mb-2.5">' + escapeHtml(ecShortCommittee(x.committee)) + '</p>' +
        ecLeaderCard(x.member, x.session) + '</div>').join('');
      if (dots) {
        /* One message needs no dots, and no way to move off it. */
        dots.innerHTML = cards.length < 2 ? '' : cards.map((x, i) =>
          '<button type="button" class="leader-dot' + (i === 0 ? ' on' : '') +
          '" aria-current="' + (i === 0 ? 'true' : 'false') +
          '" aria-label="' + escapeHtml(ecShortCommittee(x.committee)) +
          '" onclick="setLeaderSlide(' + i + ')"></button>').join('');
      }
      if (box.style) box.style.transform = 'translateX(0%)';
      rdLeaderBindSwipe();
      startLeaderAutoplay();
      lucide.createIcons();
    }

    /* ---------- PDACC page: the newest Director, plus a door into that
       committee's own page ------------------------------------------------
       Nothing is typed twice: the Director card is the same card the
       Committee page draws, read from the newest APPROVED PDACC session. */
    const RD_PDACC_COMMITTEE = 'Prokoushali DUET Admission Coaching Centre Executive Committee';

    /* The backend ranks president / secretary / vice president and gives
       everything else rank 4 -- a PDACC Director included. Rather than wait
       on a redeploy, the title itself is read here. 'Assistant Director',
       'Senior Finance Director' and the like are deliberately excluded. */
    function ecIsDirector(m) {
      const p = String(m && m.position || '').toLowerCase().replace(/\s+/g, ' ').trim();
      if (p.indexOf('director') === -1) return false;
      return !/(assistant|asst\.?|joint|deputy|senior|additional|vice)/.test(p);
    }

    function pdaccLastSession() {
      const c = ecFindCommittee(RD_PDACC_COMMITTEE);
      return c && c.sessions && c.sessions.length ? c.sessions[0].session : '';
    }

    function ecLatestDirector() {
      const c = ecFindCommittee(RD_PDACC_COMMITTEE);
      if (!c) return null;
      const isTop = m => m.positionRank === 1 || ecIsDirector(m);
      for (const s of (c.sessions || [])) {
        const d = (s.members || []).find(m => isTop(m) && String(m.message || '').trim());
        if (d) return { member: d, session: s.session };
      }
      /* No message written yet -- still worth showing who the Director is. */
      for (const s of (c.sessions || [])) {
        const d = (s.members || []).find(isTop);
        if (d) return { member: d, session: s.session };
      }
      return null;
    }

    function renderPdaccDirector() {
      renderPdaccContacts();
      const sec = document.getElementById('pdacc-leadership');
      const card = document.getElementById('pdacc-director-card');
      const label = document.getElementById('pdacc-committee-btn-label');
      if (!sec || !card) return;
      const found = ecLatestDirector();
      const session = pdaccLastSession();
      if (!found && !session) { sec.classList.add('hidden'); card.innerHTML = ''; return; }
      sec.classList.remove('hidden');
      card.innerHTML = found ? ecLeaderCard(found.member, found.session) : '';
      if (label) label.textContent = session
        ? 'View ' + session + ' committee'
        : 'View last session committee';
      lucide.createIcons();
    }

    /* The Senior Residential Director of the newest PDACC session only --
       seat booking is this session's business, not a past one's. */
    function ecSeniorResidentialDirector() {
      const c = ecFindCommittee(RD_PDACC_COMMITTEE);
      if (!c || !c.sessions || !c.sessions.length) return null;
      const s = c.sessions[0];
      const m = (s.members || []).find(x => {
        const p = String(x && x.position || '').toLowerCase().replace(/\s+/g, ' ').trim();
        return p.indexOf('director') !== -1 && /(senior|sr\.?)/.test(p) && p.indexOf('resident') !== -1;
      });
      return m ? { member: m, session: s.session } : null;
    }

    /* Facebook is always there. A phone number and a seat-booking profile only
       appear once the committee sheet actually carries them -- a dead tel:
       link or a profile page with nobody on it is worse than no button. */
    function renderPdaccContacts() {
      const box = document.getElementById('pdacc-contacts');
      if (!box) return;
      const parts = [];
      parts.push(
        '<a href="' + RD_PDACC_FB + '" target="_blank" rel="noopener" class="rd-pd-contact is-fb">' +
          '<i data-lucide="facebook" class="w-5 h-5 shrink-0"></i>' +
          '<span><strong>Facebook page</strong><em>facebook.com/pdaccduet</em></span>' +
          '<i data-lucide="external-link" class="w-4 h-4 shrink-0 ml-auto opacity-70"></i>' +
        '</a>');
      const dir = ecLatestDirector();
      const phone = dir ? String(dir.member.mobile || '').trim() : '';
      if (phone) {
        parts.push(
          '<a href="tel:' + escapeHtml(phone.replace(/[^0-9+]/g, '')) + '" class="rd-pd-contact">' +
            '<i data-lucide="phone-call" class="w-5 h-5 shrink-0 text-emerald-600"></i>' +
            '<span><strong>Call</strong><em>' + escapeHtml(phone) + '</em></span>' +
          '</a>');
      }
      const res = ecSeniorResidentialDirector();
      if (res) {
        parts.push(
          '<button type="button" onclick="openEcMessage(\'' +
            escapeHtml(String(res.member.entryId || '')) + '\', \'prokoushali\')" class="rd-pd-contact">' +
            '<i data-lucide="bed-double" class="w-5 h-5 shrink-0 text-indigo-600"></i>' +
            '<span><strong>For seat booking</strong><em>' + escapeHtml(res.member.fullName || '') + '</em></span>' +
            '<i data-lucide="chevron-right" class="w-4 h-4 shrink-0 ml-auto opacity-70"></i>' +
          '</button>');
      }
      box.innerHTML = parts.join('');
    }

    function pdaccViewLastCommittee() {
      RD_EC.committee = RD_PDACC_COMMITTEE;
      RD_EC.session = pdaccLastSession();
      switchPage('committee');
      renderExecutiveCommittee();
      lucide.createIcons();
    }

    function ecMemberCard(m) {
      const lead = m.positionRank === 1 || m.positionRank === 2;
      const photo = String(m.photo || '').trim();
      /* No photo (or a Drive link that 404s) falls back to the initials tile,
         so a card is never left with an empty hole in it. */
      const avatar = photo
        ? '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(m.fullName) + '" loading="lazy" class="w-full h-full object-cover" onerror="rdPhotoFallback(this)"/>'
        : '';
      return '' +
      '<article class="bg-white rounded-3xl border ' + (lead ? 'border-blue-200' : 'border-slate-200') + ' shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">' +
        '<div class="p-6 flex items-start gap-4">' +
          '<div class="w-20 h-20 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 font-extrabold text-xl flex items-center justify-center overflow-hidden relative">' +
            '<span class="ec-initials">' + escapeHtml(ecInitials(m.fullName)) + '</span>' +
            (photo ? '<span class="absolute inset-0">' + avatar + '</span>' : '') +
          '</div>' +
          '<div class="min-w-0">' +
            '<h4 class="font-extrabold text-base text-slate-900 leading-snug break-words">' + escapeHtml(m.fullName) + '</h4>' +
            '<p class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-extrabold ' +
              (lead ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700') + '">' + escapeHtml(m.position) + '</p>' +
            '<p class="text-xs text-slate-500 mt-2 font-medium">' + escapeHtml(m.department) + ' \u2022 Series ' + escapeHtml(m.series) + '</p>' +
            /* Alumni Association entries may carry a job; the rest never do,
               so the line simply is not drawn when both boxes were left blank. */
            (String(m.designation || '').trim() || String(m.organization || '').trim()
              ? '<p class="text-xs text-slate-600 mt-1.5 font-semibold break-words">' +
                [m.designation, m.organization].map(x => String(x || '').trim()).filter(Boolean)
                  .map(escapeHtml).join(' \u2022 ') + '</p>'
              : '') +
          '</div>' +
        '</div>' +
        (lead && String(m.message || '').trim()
          ? '<div class="mx-6 mb-5 rounded-2xl bg-blue-50/70 border border-blue-100 px-4 py-3"><i data-lucide="quote" class="w-3.5 h-3.5 text-blue-500"></i>' + rdClampBlock(m.message, 200, 'mt-1 text-xs text-slate-700 leading-relaxed whitespace-pre-line') + '</div>'
          : '') +
        (String(m.message || '').trim() && !ecIsLeader(m)
          ? '<div class="px-6 mb-5"><button type="button" onclick="openEcMessage(\'' + escapeHtml(m.entryId) + '\')" class="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-100 text-blue-700 text-xs font-extrabold cursor-pointer"><i data-lucide="message-square-quote" class="w-3.5 h-3.5"></i> View message</button></div>'
          : '') +
        '<div class="mt-auto border-t border-slate-100 grid grid-cols-2 divide-x divide-slate-100 text-xs font-bold">' +
          '<button type="button" onclick="copyToClipboard(\'' + escapeHtml(m.mobile) + '\')" class="py-3.5 flex items-center justify-center gap-1.5 text-slate-600 hover:bg-slate-50 cursor-pointer"><i data-lucide="phone" class="w-3.5 h-3.5 text-blue-600"></i> Mobile</button>' +
          '<a href="mailto:' + escapeHtml(m.email) + '" class="py-3.5 flex items-center justify-center gap-1.5 text-slate-600 hover:bg-slate-50"><i data-lucide="mail" class="w-3.5 h-3.5 text-blue-600"></i> Email</a>' +
        '</div>' +
      '</article>';
    }

    function renderExecutiveCommittee() {
      const tabs = document.getElementById('ec-committee-tabs');
      const sessBox = document.getElementById('ec-session-tabs');
      const grid = document.getElementById('ec-grid');
      if (!tabs || !sessBox || !grid) return;

      /* The three committee buttons exist whatever the data says, so the page
         never looks broken while the first request is still in flight. */
      tabs.innerHTML = RD_EC_COMMITTEES.map(c => {
        const found = ecFindCommittee(c.name);
        const on = RD_EC.committee === c.name;
        return '<button type="button" onclick="selectEcCommittee(\'' + c.name.replace(/'/g, "\\'") + '\')" ' +
          'class="text-left px-5 py-4 rounded-2xl border transition cursor-pointer ' +
          (on ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300') + '">' +
          '<span class="flex items-center gap-2 text-sm font-extrabold"><i data-lucide="' + c.icon + '" class="w-4 h-4"></i> ' + escapeHtml(c.bn) + '</span>' +
          '<span class="block mt-1 text-[11px] font-bold ' + (on ? 'text-blue-100' : 'text-slate-400') + '">' +
            (found ? found.count + (found.count === 1 ? ' member' : ' members') : 'No data') + '</span>' +
        '</button>';
      }).join('');

      const committee = ecFindCommittee(RD_EC.committee);
      const sessions = committee ? committee.sessions : [];

      if (sessions.length && !sessions.some(s => s.session === RD_EC.session)) {
        RD_EC.session = sessions[0].session;      // newest session, backend order
      }

      sessBox.innerHTML = sessions.map(s => {
        const on = s.session === RD_EC.session;
        return '<button type="button" onclick="selectEcSession(\'' + String(s.session).replace(/'/g, "\\'") + '\')" ' +
          'class="px-4 py-2.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ' +
          (on ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400') + '">' +
          escapeHtml(s.session) + ' <span class="' + (on ? 'text-slate-300' : 'text-slate-400') + '">(' + s.count + ')</span></button>';
      }).join('');

      const active = sessions.find(s => s.session === RD_EC.session);
      const members = active ? active.members : [];

      if (RD_EC.state === 'loading') { grid.innerHTML = ''; ecStateBox('loading'); return; }
      if (RD_EC.state === 'error') { grid.innerHTML = ''; ecStateBox('error', RD_EC.error); return; }
      if (!members.length) {
        grid.innerHTML = '';
        ecStateBox('empty', 'No approved members have been added for this committee yet.');
        return;
      }

      ecStateBox('');
      const leadBox = document.getElementById('ec-leaders');
      const memHead = document.getElementById('ec-members-head');
      const leaders = members.filter(ecIsLeader);
      const rest = members.filter(m => !ecIsLeader(m));
      if (leadBox) {
        /* .map(ecLeaderCard) handed the array index in as sessionLabel,
           so the second leader read "Session 1". Pass the real one. */
        leadBox.innerHTML = leaders.map(m => ecLeaderCard(m, RD_EC.session)).join('');
        /* items-start, exactly like the home grid: opening "See more" on
           one message must not stretch the card sitting next to it. */
        leadBox.className = 'grid gap-6 items-start max-w-6xl mx-auto mb-10' +
          (leaders.length > 1 ? ' lg:grid-cols-2' : '');
      }
      if (memHead) memHead.classList.toggle('hidden', !rest.length);
      grid.innerHTML = rest.map(ecMemberCard).join('');
      lucide.createIcons();
    }

    async function submitExecutiveCommitteeForm(e) {
      e.preventDefault();
      const form = e.target;
      const btn = document.getElementById('ec-submit-btn');
      const fd = new FormData(form);
      clearFieldErrors(form);

      const position = ecResolvePosition(fd);
      if (!position) {
        setFieldError(form, String(fd.get('position') || '') === 'Others' ? 'positionOther' : 'position',
                      'Please write the position.', true);
        return;
      }

      const session = String(fd.get('session') || '').trim();
      /* The allowed span depends on which committee was picked. */
      const sessErr = rdSessionError(session, fd.get('committee'));
      if (sessErr) { setFieldError(form, 'session', sessErr, true); return; }

      const mobile = String(fd.get('mobile') || '').trim();
      if (!isValidBdMobile(mobile)) {
        setFieldError(form, 'mobile', 'Please enter a valid mobile number.', true);
        return;
      }
      const file = form.querySelector('[name="photo"]').files[0];

      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Submitting...</span>';
      lucide.createIcons();

      try {
        const photo = file ? await filePayload(file, 900) : null;
        await apiPost('submitexecutivecommittee', { data: {
          committee: fd.get('committee'), session: session,
          position: position, fullName: fd.get('fullName'),
          department: fd.get('department'), series: fd.get('series'),
          mobile: mobile, email: String(fd.get('email') || '').trim(),
          designation: ecWantsProfession(fd.get('committee')) ? String(fd.get('designation') || '').trim() : '',
          organization: ecWantsProfession(fd.get('committee')) ? String(fd.get('organization') || '').trim() : '',
          message: fd.get('message') || '', photo: photo
        }});
        form.reset();
        ecFillFormCommittees();
        showToast('Your information has been submitted. It will appear on the Committee page once an admin approves it.',
                  'success', 'Submitted', { backTo: 'committee' });
      } catch (err) {
        reportError(err, form);
      } finally {
        btn.disabled = false;
        btn.innerHTML = original;
        lucide.createIcons();
      }
    }

    function ecFillFormCommittees() {
      const sel = document.getElementById('ec-form-committee');
      if (!sel) return;
      sel.innerHTML = '<option value="">Select committee</option>' +
        RD_EC_COMMITTEES.map(c => '<option value="' + escapeHtml(c.name) + '">' + escapeHtml(c.name) + '</option>').join('');
      ecFillFormPositions();
    }

    /* PDACC is run by Directors and Rangdhanu by a President and a Secretary,
       so the position list belongs to the committee, not to the page. */
    function ecFillFormPositions() {
      const csel = document.getElementById('ec-form-committee');
      const psel = document.getElementById('ec-form-position');
      if (!csel || !psel) return;
      const list = csel.value ? ecCommitteeMeta(csel.value).positions || [] : [];
      psel.innerHTML = list.length
        ? '<option value="">Select position</option>' +
          list.map(p => '<option value="' + escapeHtml(p) + '">' + escapeHtml(p) + '</option>').join('')
        : '<option value="">Select the committee first</option>';
      psel.value = '';
      ecSyncAlumniExtra();
      ecPositionChanged();
    }

    /* Designation and Organization are asked of the Alumni Association only.
       They stay optional: a graduate between jobs must still be able to submit,
       so the two boxes are never given `required`, and they are emptied when a
       different committee is chosen so a stale answer cannot travel along. */
    function ecWantsProfession(committee) {
      return String(committee || '').trim() === RD_EC_COMMITTEES[1].name;
    }

    function ecSyncAlumniExtra() {
      const csel = document.getElementById('ec-form-committee');
      const wrap = document.getElementById('ec-alumni-extra-wrap');
      if (!csel || !wrap) return;
      const on = ecWantsProfession(csel.value);
      wrap.classList.toggle('hidden', !on);
      if (!on) wrap.querySelectorAll('input').forEach(i => { i.value = ''; });
    }

    /* "Others" is the escape hatch -- it swaps in a free-text box, and that
       box is only required while it is visible. */
    function ecPositionChanged() {
      const psel = document.getElementById('ec-form-position');
      const wrap = document.getElementById('ec-position-other-wrap');
      const other = document.getElementById('ec-form-position-other');
      if (!psel || !wrap || !other) return;
      const on = psel.value === 'Others';
      wrap.classList.toggle('hidden', !on);
      if (on) { other.required = true; }
      else { other.required = false; other.value = ''; }
    }

    /* What actually gets stored: the picked position, or what they typed. */
    function ecResolvePosition(fd) {
      const picked = String(fd.get('position') || '').trim();
      if (picked !== 'Others') return picked;
      return String(fd.get('positionOther') || '').trim();
    }


    /* ================= CGPA CALCULATOR ================================
       DUET's scale, in one place. Everything else is derived from it. */
    const RD_GRADES = [
      { code: 'A+', point: 4.00, marks: '80% and above' },
      { code: 'A',  point: 3.75, marks: '75% - 79%' },
      { code: 'A-', point: 3.50, marks: '70% - 74%' },
      { code: 'B+', point: 3.25, marks: '65% - 69%' },
      { code: 'B',  point: 3.00, marks: '60% - 64%' },
      { code: 'B-', point: 2.75, marks: '55% - 59%' },
      { code: 'C+', point: 2.50, marks: '50% - 54%' },
      { code: 'C',  point: 2.25, marks: '45% - 49%' },
      { code: 'D',  point: 2.00, marks: '40% - 44%' },
      { code: 'F',  point: 0.00, marks: 'Below 40%' }
    ];

    const RD_CGPA_SEMESTERS = 8;
    let RD_CGPA = [];

    function cgpaInit() {
      RD_CGPA = [];
      for (let i = 0; i < RD_CGPA_SEMESTERS; i++) RD_CGPA.push([{ credit: '', grade: '' }]);
    }

    function cgpaAddRow(s) { RD_CGPA[s].push({ credit: '', grade: '' }); renderCgpa(); }

    function cgpaRemoveRow(s, r) {
      if (RD_CGPA[s].length <= 1) { RD_CGPA[s][0] = { credit: '', grade: '' }; }
      else { RD_CGPA[s].splice(r, 1); }
      renderCgpa();
    }

    function cgpaSet(s, r, key, value) {
      if (!RD_CGPA[s] || !RD_CGPA[s][r]) return;
      RD_CGPA[s][r][key] = value;
      cgpaUpdateTotals();
    }

    function resetCgpa() { cgpaInit(); renderCgpa(); }

    /* One semester: credits x points / credits. Rows without both values are
       simply not counted, so a half-filled form still gives a real number. */
    function cgpaSemester(s) {
      let credits = 0, points = 0;
      (RD_CGPA[s] || []).forEach(row => {
        const c = parseFloat(row.credit);
        const g = row.grade === '' ? NaN : parseFloat(row.grade);
        if (!isFinite(c) || c <= 0 || !isFinite(g)) return;
        credits += c;
        points += c * g;
      });
      return { credits: credits, points: points, gpa: credits > 0 ? points / credits : 0 };
    }

    function cgpaOverall() {
      let credits = 0, points = 0;
      for (let s = 0; s < RD_CGPA_SEMESTERS; s++) {
        const r = cgpaSemester(s);
        credits += r.credits;
        points += r.points;
      }
      return { credits: credits, cgpa: credits > 0 ? points / credits : 0 };
    }

    /* "A+ (4.00)" -- the em dash that used to sit between the two looked, on a
       narrow phone, like a minus sign in front of the point value. */
    function cgpaGradeOptions() {
      return '<option value="">Grade</option>' + RD_GRADES.map(g =>
        '<option value="' + g.point.toFixed(2) + '">' + g.code + ' (' + g.point.toFixed(2) + ')</option>').join('');
    }

    function cgpaRowHtml(s, r, row) {
      return '' +
      '<div class="grid grid-cols-12 gap-2 items-center">' +
        '<div class="col-span-5 sm:col-span-4">' +
          '<input type="number" min="0" step="0.5" inputmode="decimal" value="' + escapeHtml(row.credit) + '" ' +
            'oninput="cgpaSet(' + s + ',' + r + ',\'credit\',this.value)" ' +
            'class="form-input" placeholder="Credit"/>' +
        '</div>' +
        '<div class="col-span-6 sm:col-span-7">' +
          '<select onchange="cgpaSet(' + s + ',' + r + ',\'grade\',this.value)" class="form-input">' +
            cgpaGradeOptions().replace('value="' + escapeHtml(row.grade) + '"',
                                       'value="' + escapeHtml(row.grade) + '" selected') +
          '</select>' +
        '</div>' +
        '<div class="col-span-1 flex justify-end">' +
          '<button type="button" aria-label="Remove this course" onclick="cgpaRemoveRow(' + s + ',' + r + ')" ' +
            'class="w-11 h-11 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center cursor-pointer">' +
            '<i data-lucide="x" class="w-4 h-4"></i></button>' +
        '</div>' +
      '</div>';
    }

    function renderCgpa() {
      const box = document.getElementById('cgpa-semesters');
      if (!box) return;
      if (!RD_CGPA.length) cgpaInit();

      box.innerHTML = RD_CGPA.map((rows, s) =>
        '<div class="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">' +
          '<div class="flex items-center justify-between gap-3 mb-4">' +
            '<p class="text-sm font-extrabold text-slate-800">Semester ' + (s + 1) + '</p>' +
            '<p class="text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg" id="cgpa-gpa-' + s + '">GPA 0.00</p>' +
          '</div>' +
          '<div class="space-y-2.5">' + rows.map((row, r) => cgpaRowHtml(s, r, row)).join('') + '</div>' +
          '<button type="button" onclick="cgpaAddRow(' + s + ')" class="mt-4 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-700 text-xs font-bold hover:bg-blue-50 cursor-pointer">' +
            '<i data-lucide="plus" class="w-3.5 h-3.5"></i> Add course</button>' +
        '</div>').join('');

      const scale = document.getElementById('cgpa-scale');
      if (scale) {
        scale.innerHTML = RD_GRADES.map(g =>
          '<div class="flex items-center justify-between gap-3 border-b border-slate-100 pb-1.5 last:border-0">' +
            '<span class="font-extrabold text-slate-800">' + g.code + '</span>' +
            '<span>' + g.marks + '</span>' +
            '<span class="font-mono font-bold text-blue-700">' + g.point.toFixed(2) + '</span>' +
          '</div>').join('');
      }

      lucide.createIcons();
      cgpaUpdateTotals();
    }

    /* Only the numbers change here, never the inputs -- otherwise the caret
       would jump out of the box the moment a credit is typed. */
    function cgpaUpdateTotals() {
      for (let s = 0; s < RD_CGPA_SEMESTERS; s++) {
        const cell = document.getElementById('cgpa-gpa-' + s);
        if (!cell) continue;
        const r = cgpaSemester(s);
        cell.textContent = 'GPA ' + r.gpa.toFixed(2) + (r.credits ? ' \u2022 ' + r.credits + ' credits' : '');
      }
      const all = cgpaOverall();
      const total = document.getElementById('cgpa-total');
      const note = document.getElementById('cgpa-total-note');
      if (total) total.textContent = all.cgpa.toFixed(2);
      if (note) {
        note.textContent = all.credits
          ? all.credits + ' credits counted (out of 4.00)'
          : 'No courses added yet';
      }
    }


    /* ---------- Sponsors: as many as the event actually had ---------- */
    const RD_SPONSOR_MAX = 10;
    let rdSponsorSeq = 0;

    function sponsorRowNodes() {
      const box = document.getElementById('sponsor-rows');
      return box ? [...box.querySelectorAll('[data-sponsor-row]')] : [];
    }

    function addSponsorRow() {
      const box = document.getElementById('sponsor-rows');
      if (!box) return;
      if (sponsorRowNodes().length >= RD_SPONSOR_MAX) {
        showToast('An event can have at most ' + RD_SPONSOR_MAX + ' sponsors.', 'error');
        return;
      }
      const key = 'sp' + (++rdSponsorSeq);
      const row = document.createElement('div');
      row.setAttribute('data-sponsor-row', key);
      row.className = 'rounded-xl border border-slate-200 bg-white p-3 sm:p-4';
      row.innerHTML =
        '<div class="flex items-start gap-3">'
        + '  <span class="mt-2.5 w-6 h-6 shrink-0 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-black flex items-center justify-center" data-sponsor-index>1</span>'
        + '  <div class="min-w-0 flex-1 grid sm:grid-cols-2 gap-3">'
        + '    <div><label class="form-label">Sponsor name</label>'
        + '      <input data-sponsor-name type="text" class="form-input" placeholder="XYZ Enterprise"></div>'
        + '    <div><label class="form-label">Logo (optional)</label>'
        + '      <input data-sponsor-logo type="file" accept="image/*" class="form-input py-2"></div>'
        + '  </div>'
        + '  <button type="button" aria-label="Remove this sponsor" onclick="removeSponsorRow(\'' + key + '\')" class="mt-1 shrink-0 w-11 h-11 rounded-xl border border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 flex items-center justify-center transition cursor-pointer">'
        + '    <i data-lucide="trash-2" class="w-4 h-4"></i>'
        + '  </button>'
        + '</div>';
      box.appendChild(row);
      refreshSponsorRows();
      const input = row.querySelector('[data-sponsor-name]');
      if (input) input.focus();
    }

    function removeSponsorRow(key) {
      const row = document.querySelector('[data-sponsor-row="' + key + '"]');
      if (row && row.parentNode) row.parentNode.removeChild(row);
      refreshSponsorRows();
    }

    function refreshSponsorRows() {
      const rows = sponsorRowNodes();
      rows.forEach((row, i) => {
        const badge = row.querySelector('[data-sponsor-index]');
        if (badge) badge.textContent = bnNum(i + 1);
      });
      const note = document.getElementById('sponsor-empty-note');
      if (note) note.classList.toggle('hidden', rows.length > 0);
      const add = document.getElementById('sponsor-add-btn');
      if (add) add.disabled = rows.length >= RD_SPONSOR_MAX;
      lucide.createIcons();
    }

    function resetSponsorRows() {
      const box = document.getElementById('sponsor-rows');
      if (box) box.innerHTML = '';
      refreshSponsorRows();
    }

    /* Rows with neither a name nor a logo are simply ignored. */
    function collectSponsorRows() {
      return sponsorRowNodes().map(row => {
        const nameEl = row.querySelector('[data-sponsor-name]');
        const logoEl = row.querySelector('[data-sponsor-logo]');
        return {
          name: nameEl ? String(nameEl.value || '').trim() : '',
          file: logoEl && logoEl.files ? logoEl.files[0] : null
        };
      }).filter(x => x.name || x.file);
    }

    /* Accepts the new `sponsors` array (or its JSON string, straight out of a
       sheet cell) and falls back to the old single Sponsor Name / Logo pair, so
       events saved before the backend patch still show their sponsor. */
    function eventSponsors(e) {
      let raw = (e && (e.sponsors || e['Sponsors'])) || '';
      if (typeof raw === 'string') {
        try { raw = raw.trim() ? JSON.parse(raw) : []; } catch (err) { raw = []; }
      }
      let list = Array.isArray(raw) ? raw : [];
      list = list.map(x => ({
        name: String((x && (x.name || x.sponsorName)) || '').trim(),
        logo: normalizeAlumniImage((x && (x.logo || x.sponsorLogo || x.image)) || '')
      })).filter(x => x.name || x.logo);
      if (!list.length) {
        const n = String((e && (e.sponsorName || e['Sponsor Name'])) || '').trim();
        const l = normalizeAlumniImage((e && (e.sponsorLogo || e['Sponsor Logo'])) || '');
        if (n || l) list = [{ name: n, logo: l }];
      }
      return list;
    }

    function sponsorSectionHtml(sponsors) {
      if (!sponsors.length) return '';
      const cards = sponsors.map(sp => `
        <div class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
          ${sp.logo
            ? `<img src="${escapeHtml(sp.logo)}" alt="${escapeHtml(sp.name || 'Sponsor')} logo" loading="lazy" decoding="async" class="w-12 h-12 shrink-0 rounded-xl object-contain bg-white border border-slate-200 p-1">`
            : `<div class="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-300"><i data-lucide="handshake" class="w-5 h-5"></i></div>`}
          <p class="font-bold text-slate-900 text-sm leading-snug min-w-0 line-clamp-2">${escapeHtml(sp.name || 'Sponsor')}</p>
        </div>`).join('');
      return `
           <div class="mb-10">
               <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><i data-lucide="handshake" class="w-5 h-5 text-blue-600"></i> ${'Sponsors'}</h4>
               <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">${cards}</div>
           </div>`;
    }

    async function submitEventFromWebsite(e) {
      e.preventDefault();
      const f=e.target, b=document.getElementById('event-submit-btn'), fd=new FormData(f);
      const main=f.querySelector('[name="mainImage"]').files[0], gf=[...f.querySelector('[name="gallery"]').files];
      const box=document.getElementById('event-upload-progress'), status=document.getElementById('event-upload-status'), pct=document.getElementById('event-upload-percent'), bar=document.getElementById('event-upload-bar');
      
      if(!main) return showToast('Please choose a main image.', 'error');
      b.disabled=true; b.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Uploading...</span>'; lucide.createIcons();
      box.classList.remove('hidden');
      
      const setProgress = (p, text) => { pct.textContent = p+'%'; status.textContent = text; bar.style.width = p+'%'; };

      try {
        setProgress(5, 'Preparing images...');
        const gallery=[]; const total = gf.length+1;
        for(let i=0; i<gf.length; i++) {
          const x = await filePayload(gf[i]); x.sortOrder=i+1; gallery.push(x);
          setProgress(Math.round(((i+1)/total)*40), `Gallery image ${i+1}/${gf.length} ready`);
        }
        const mainPayload = await filePayload(main);
        const sponsors = [];
        const sponsorRows = collectSponsorRows();
        for (let i = 0; i < sponsorRows.length; i++) {
          const sponsorLogoFile = sponsorRows[i].file;
          sponsors.push({
            name: sponsorRows[i].name,
            logo: sponsorLogoFile ? await filePayload(sponsorLogoFile, 700) : null
          });
          setProgress(40 + Math.round(((i + 1) / sponsorRows.length) * 8), `Sponsor ${i + 1}/${sponsorRows.length} ready`);
        }
        setProgress(50, 'Uploading to server... (Please wait)');

        const payloadEvent = {
          eventName: fd.get('eventName'), category: fd.get('category'), shortDescription: fd.get('shortDescription'), fullDescription: fd.get('fullDescription'),
          eventDate: fd.get('eventDate'), startTime: '', endTime: '', venue: fd.get('venue'), organizedBy: 'RANGDHANU DUET Alumni',
          googleMapsLink: '', contactPerson: '', contactNumber: '', registrationLink: '', facebookLink: '',
          sponsors: sponsors,
          /* The first sponsor also goes up in the old single fields, so an
             Apps Script that has not been patched yet still records something. */
          sponsorName: sponsors.length ? sponsors[0].name : '',
          sponsorLogo: sponsors.length ? sponsors[0].logo : null,
          submittedBy: fd.get('submittedBy'), submitterEmail: fd.get('submitterEmail'), submitterMobile: '',
          mainImage: mainPayload, gallery: gallery
        };

        const r = await apiPost('submitEvent', {event: payloadEvent});
        if(!r.success) throw new Error(r.message);

        setProgress(100, 'Upload Complete!');
        f.reset();
        resetSponsorRows();
        box.classList.add('hidden'); setProgress(0, '');
        loadPublicEvents();
        showToast(r.message || 'Your event has been submitted. It will be published once an admin approves it.', 'success', 'Event submitted', {backTo: 'events'});
      } catch(err) {
        status.textContent = 'Upload failed!'; bar.style.width='0%';
        reportError(err, f);
      } finally {
        b.disabled=false; b.textContent='Submit Event';
      }
    }

    window.publicEvents = [];

    /* Draws the grid from a list of dynamic events.  Called twice: once with the
       remembered list so a reload has something on screen immediately, once with
       the fresh list from the network. */
    function rdEventsPaint(dynamicEvs) {
      const g = document.getElementById('public-events-grid'), st = document.getElementById('public-events-status');
      if (!g || !st) return;
      dynamicEvs = Array.isArray(dynamicEvs) ? dynamicEvs : [];
        window.publicEvents = [...staticEvents, ...dynamicEvs];
        st.innerHTML = `<span class="text-xs font-bold text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-lg">${dynamicEvs.length} events from the website</span>`;
        
        g.innerHTML = window.publicEvents.map((e, index) => {
          const img = normalizeAlumniImage(e.mainImage || e['Main Image'] || '');
          const title = e.eventName || e['Event Name'] || 'Event';
          const cat = e.category || e['Category'] || 'Event';
          const date = e.eventDate || e['Event Date'] || '';
          const short = e.shortDescription || e['Short Description'] || '';
          
          return `
            <article class="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
               <div class="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer" onclick="openDynamicEvent(${index})">
                 ${img ? `<img src="${escapeHtml(img)}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">` : '<div class="w-full h-full flex items-center justify-center"><i data-lucide="image" class="w-8 h-8 text-slate-300"></i></div>'}
                 <div class="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-blue-700 text-[10px] font-black uppercase tracking-widest shadow-sm">${escapeHtml(cat)}</div>
               </div>
               <div class="p-6 flex-1 flex flex-col">
                 <div class="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                   <i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${escapeHtml(date ? new Date(date).toLocaleDateString('bn-BD', {day:'numeric', month:'long', year:'numeric'}) : '')}
                 </div>
                 <h3 class="text-lg font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer" onclick="openDynamicEvent(${index})">${escapeHtml(title)}</h3>
                 <p class="text-sm text-slate-600 line-clamp-2 mb-5">${escapeHtml(short)}</p>
                 <div class="mt-auto pt-4 border-t border-slate-100">
                   <button onclick="openDynamicEvent(${index})" class="rd-detail-btn w-full py-2.5 rounded-xl bg-slate-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white text-sm font-bold transition-colors">View details</button>
                 </div>
               </div>
            </article>
          `;
        }).join('');
        lucide.createIcons();
    }

    async function loadPublicEvents() {
      const g = document.getElementById('public-events-grid'), st = document.getElementById('public-events-status');
      if (!g) return;
      const warm = rdFeedRecall('events');
      if (warm && !window.publicEvents.length) {
        rdEventsPaint(warm);
      } else if (!window.publicEvents.length) {
        st.innerHTML = '<span class="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg"><i data-lucide="loader-circle" class="w-3.5 h-3.5 inline animate-spin"></i> Loading...</span>';
        lucide.createIcons();
      }
      try {
        const q = new URLSearchParams({action: 'events', _: Date.now()});
        const r = await fetch(API_BASE_URL + '?' + q.toString());
        const json = await r.json();
        const dynamicEvs = Array.isArray(json.data) ? json.data : [];
        rdFeedRemember('events', dynamicEvs);
        rdEventsPaint(dynamicEvs);
        
      } catch (err) {
        if (!window.publicEvents.length) {
          st.innerHTML = '<span class="text-xs text-rose-600 font-semibold bg-rose-50 px-3 py-1 rounded-lg">Events could not be loaded</span>';
        }
        console.warn('[rd] events unavailable:', err && err.message ? err.message : err);
      }
    }

    async function openDynamicEvent(i) {
      const e = rdEventFromDrive(window.publicEvents?.[i]);
      if (!e) return;
      const c = document.getElementById('dynamic-event-content');
      
      const img = normalizeAlumniImage(e.mainImage || e['Main Image'] || '');
      const title = e.eventName || e['Event Name'] || 'Event';
      const id = e.eventId || e['Event ID'] || '';
      const date = e.eventDate || e['Event Date'] || '';
      const venue = e.venue || e['Venue'] || '';
      const desc = e.fullDescription || e['Full Description'] || e.shortDescription || '';
      const sponsors = eventSponsors(e);
      const staticGal = e.gallery || []; 
      
      let staticGalleryHtml = '';
      if (staticGal.length > 0) {
          staticGalleryHtml = staticGal.map(x => {
              const src = normalizeAlumniImage(x.image || '');
              return src ? `<div onclick="openCustomLightbox('${escapeHtml(src)}', '${escapeHtml(x.caption || title)}')" class="aspect-square rounded-xl overflow-hidden border border-slate-200 cursor-pointer relative group/img"><img src="${escapeHtml(src)}" alt="${escapeHtml(x.caption || title)}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover/img:scale-110 transition"><div class="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition flex items-center justify-center"><i data-lucide="maximize-2" class="w-5 h-5 text-white"></i></div></div>` : '';
          }).join('');
      }

      c.innerHTML = `
        <div class="relative w-full h-[250px] sm:h-[400px] bg-slate-900 sm:rounded-t-3xl overflow-hidden">
           ${img ? `<img src="${escapeHtml(img)}" alt="" loading="lazy" decoding="async" class="w-full h-full object-cover opacity-70">` : ''}
           <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
           <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
               <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-3">${escapeHtml(e.category || 'Event')}</span>
               <h2 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight">${escapeHtml(title)}</h2>
           </div>
        </div>
        <div class="p-6 sm:p-10 bg-white sm:rounded-b-3xl">
           <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              ${date ? `<div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><i data-lucide="calendar" class="w-5 h-5"></i></div><div><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Date</p><p class="font-bold text-slate-900">${new Date(date).toLocaleDateString('bn-BD', {day:'numeric', month:'long', year:'numeric'})}</p></div></div>` : ''}
              ${venue ? `<div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0"><i data-lucide="map-pin" class="w-5 h-5"></i></div><div><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Venue</p><p class="font-bold text-slate-900 line-clamp-1">${escapeHtml(venue)}</p></div></div>` : ''}
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><i data-lucide="users" class="w-5 h-5"></i></div><div><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Organized By</p><p class="font-bold text-slate-900 line-clamp-1">RANGDHANU</p></div></div>
           </div>
           <div class="mb-10">
               <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><i data-lucide="info" class="w-5 h-5 text-blue-600"></i> ইভেন্ট সম্পর্কে বিস্তারিত</h4>
               <p class="whitespace-pre-line leading-relaxed text-slate-700 sm:text-lg">${escapeHtml(desc)}</p>
           </div>

           ${sponsorSectionHtml(sponsors)}
           
           ${staticGalleryHtml ? `
           <div>
               <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-600"></i> ইভেন্ট গ্যালারি</h4>
               <div id="dynamic-event-gallery" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">${staticGalleryHtml}</div>
           </div>` : `<div id="dynamic-event-gallery" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"></div>`}
        </div>
      `;
      openSubPage('event-detail', 'events');
      lucide.createIcons();

      // Load dynamic Gallery
      if (id && !id.startsWith('STATIC-')) {
        try {
          const q = new URLSearchParams({action: 'eventGallery', eventId: id, _: Date.now()});
          const r = await fetch(API_BASE_URL + '?' + q.toString());
          const json = await r.json();
          const items = Array.isArray(json.data) ? json.data : [];
          if(items.length > 0) {
            const galHtml = items.map(x => {
              const src = normalizeAlumniImage(x.image || '');
              return src ? `<div onclick="openCustomLightbox('${escapeHtml(src)}', '${escapeHtml(title)}')" class="aspect-square rounded-xl overflow-hidden border border-slate-200 cursor-pointer relative group/img"><img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover/img:scale-110 transition"><div class="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition flex items-center justify-center"><i data-lucide="maximize-2" class="w-5 h-5 text-white"></i></div></div>` : '';
            }).join('');
            
            const galContainer = document.getElementById('dynamic-event-gallery');
            if(!staticGalleryHtml) {
               galContainer.parentElement.insertAdjacentHTML('afterbegin', `<h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-600"></i> ইভেন্ট গ্যালারি</h4>`);
               lucide.createIcons();
            }
            galContainer.innerHTML = staticGalleryHtml + galHtml;
          }
        } catch(e) {}
      }
    }

    /* REGISTRATION API (FIXED EXACT PAYLOAD + JS BUG) */
    /* ---------- ADDRESS PICKER ------------------------------------------
       The address was a free textarea, and the collected answers show exactly
       why that cannot be filtered: one member wrote "Rangpur", another
       "Ishwardi, Pabna, Rajshahi, Bangladesh", a third "N/A".  No filter can
       join those into one place.

       Division and district are picked from a list.  The upazila stays a typed
       box on purpose -- there are 495 of them, and a list that long is slower
       to use than simply typing the name, besides being easy to get wrong.

       All three parts live in ONE sheet column, comma-joined in a fixed order,
       so no column is added per part:

           Rangpur, Rangpur, Badarganj
           Abroad, Toronto Canada

       The fixed order is what makes the column filterable later -- part 2 is
       always the district.  rdAddrJoin and rdAddrParse are the only two places
       that know the order, so a change stays in one spot. */

    const RD_ADDR_ABROAD = 'Abroad';

    /* Greater Rangpur first.  This is a Rangpur association, so for most
       members the first row is the only row they need to read. */
    const RD_BD_DIVISIONS = [
      ['Rangpur',    ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon']],
      ['Dhaka',      ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail']],
      ['Rajshahi',   ['Bogura', 'Chapai Nawabganj', 'Joypurhat', 'Naogaon', 'Natore', 'Pabna', 'Rajshahi', 'Sirajganj']],
      ['Khulna',     ['Bagerhat', 'Chuadanga', 'Jashore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira']],
      ['Chattogram', ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cumilla', "Cox's Bazar", 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati']],
      ['Sylhet',     ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet']],
      ['Barishal',   ['Barguna', 'Barishal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur']],
      ['Mymensingh', ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur']]
    ];

    function rdAddrDivisionNames() { return RD_BD_DIVISIONS.map(d => d[0]); }

    function rdAddrDistrictsOf(division) {
      const hit = RD_BD_DIVISIONS.find(d => d[0] === division);
      return hit ? hit[1] : [];
    }

    /* Every district in the country, sorted -- the member filter uses this. */
    function rdAddrAllDistricts() {
      return RD_BD_DIVISIONS.reduce((all, d) => all.concat(d[1]), []).sort();
    }

    function rdAddrJoin(s) {
      if (!s || !s.div) return '';
      if (s.div === RD_ADDR_ABROAD) {
        const t = String(s.text || '').trim();
        return t ? (RD_ADDR_ABROAD + ', ' + t) : RD_ADDR_ABROAD;
      }
      return [s.div, s.dist, String(s.thana || '').trim()].filter(Boolean).join(', ');
    }

    function rdAddrParse(value) {
      const p = String(value || '').split(',').map(x => x.trim()).filter(Boolean);
      const empty = { div: '', dist: '', thana: '', text: '' };
      if (!p.length) return empty;
      if (p[0] === RD_ADDR_ABROAD) {
        return { div: RD_ADDR_ABROAD, dist: '', thana: '', text: p.slice(1).join(', ') };
      }
      /* An unknown first part means hand-typed legacy text.  It is kept whole in
         .thana rather than silently dropped, so nobody's old address is lost --
         the picker just shows it as "not chosen yet" and asks again. */
      if (rdAddrDivisionNames().indexOf(p[0]) === -1) return empty;
      return { div: p[0], dist: p[1] || '', thana: p.slice(2).join(', '), text: '' };
    }

    /* One state object per field name, so the same widget serves both the
       permanent and the present address without either knowing about the other. */
    const rdAddrState = {};

    function rdAddrMount(name) { return document.querySelector('[data-addr="' + name + '"]'); }

    /* The hidden input is rendered inside its own mount, not looked up by name
       across the document.  Two forms may both post a `workLocation`, and a
       document-wide name lookup would hand the second form the first form's
       box. */
    function rdAddrHidden(name) {
      const mount = rdAddrMount(name);
      return mount ? mount.querySelector('input[type="hidden"]') : null;
    }

    function rdAddrFieldName(name) {
      const mount = rdAddrMount(name);
      return (mount && mount.getAttribute('data-addr-name')) || name;
    }

    /* The hidden input is the single source of truth for submit.  Writing it
       here means submitMemberRegistration keeps reading fd.get('address') and
       never learns that the field became a picker. */
    function rdAddrSync(name) {
      const box = rdAddrHidden(name);
      if (box) box.value = rdAddrJoin(rdAddrState[name]);
      rdAddrMirrorWork(name);
    }

    /* Work location is the present address for almost everyone, so it is filled
       in from there instead of being asked twice.  Only an untouched work
       location is overwritten -- once the member picks a different place, the
       present address stops following it. */
    function rdAddrMirrorWork(name) {
      if (name !== 'presentAddress') return;
      const w = rdAddrState.workLocation;
      if (!w || w.dirty) return;
      if (!rdAddrMount('workLocation')) return;
      rdAddrState.workLocation = Object.assign({}, rdAddrState.presentAddress, { dirty: false });
      rdAddrRenderOnly('workLocation');
    }

    /* Draws without writing the hidden input -- the caller has just written it,
       and going back through rdAddrSync would start the mirror over again. */
    function rdAddrRenderOnly(name) {
      rdAddrRender(name);
    }

    function rdAddrPillRow(name, level, items, current) {
      return items.map(v => {
        const on = v === current;
        return '<button type="button" onclick="rdAddrPick(\'' + name + '\',\'' + level + '\',this.dataset.v)" data-v="' +
          escapeHtml(v) + '" class="px-3 py-1.5 rounded-full text-sm border transition ' +
          (on ? 'bg-blue-600 border-blue-600 text-white font-semibold shadow-sm'
              : 'bg-white border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-700') +
          '">' + escapeHtml(v) + '</button>';
      }).join('');
    }

    function rdAddrCrumb(name, s) {
      const parts = [s.div, s.dist, s.thana || s.text].filter(Boolean).map(escapeHtml);
      if (!parts.length) return '';
      return '<div class="flex items-center gap-2 flex-wrap mb-3">' +
        '<span class="text-sm font-semibold text-slate-800">' + parts.join('<span class="text-slate-400"> / </span>') + '</span>' +
        '<button type="button" onclick="rdAddrReset(\'' + name + '\')" class="text-xs text-blue-600 hover:text-blue-800 underline">বদলান</button>' +
        '</div>';
    }

    /* Three steps in one box, never three boxes.  Only the step the member is
       on is drawn, which is what keeps the registration form short. */
    function rdAddrRender(name) {
      const mount = rdAddrMount(name);
      if (!mount) return;
      const s = rdAddrState[name] || (rdAddrState[name] = { div: '', dist: '', thana: '', text: '' });
      let html = '<input type="hidden" name="' + escapeHtml(rdAddrFieldName(name)) + '" value="' + escapeHtml(rdAddrJoin(s)) +
        '"><div class="rounded-xl border border-slate-300 bg-slate-50 p-3">' + rdAddrCrumb(name, s);

      if (!s.div) {
        html += '<p class="text-xs text-slate-500 mb-2">বিভাগ বাছুন</p><div class="flex flex-wrap gap-2">' +
          rdAddrPillRow(name, 'div', rdAddrDivisionNames().concat([RD_ADDR_ABROAD]), '') + '</div>';
      } else if (s.div === RD_ADDR_ABROAD) {
        html += '<p class="text-xs text-slate-500 mb-2">দেশ ও শহরের নাম লিখুন</p>' +
          '<input type="text" value="' + escapeHtml(s.text || '') + '" oninput="rdAddrType(\'' + name + '\',\'text\',this.value)" ' +
          'placeholder="Toronto, Canada" class="form-input">';
      } else if (!s.dist) {
        html += '<p class="text-xs text-slate-500 mb-2">জেলা বাছুন</p><div class="flex flex-wrap gap-2">' +
          rdAddrPillRow(name, 'dist', rdAddrDistrictsOf(s.div), '') + '</div>';
      } else {
        html += '<p class="text-xs text-slate-500 mb-2">উপজেলা / থানার নাম লিখুন</p>' +
          '<input type="text" value="' + escapeHtml(s.thana || '') + '" oninput="rdAddrType(\'' + name + '\',\'thana\',this.value)" ' +
          'placeholder="Badarganj" class="form-input">';
      }

      html += '<p class="rd-addr-error text-xs text-red-600 mt-2 hidden"></p></div>';
      mount.innerHTML = html;
      rdAddrSync(name);
    }

    function rdAddrPick(name, level, value) {
      const s = rdAddrState[name] || (rdAddrState[name] = { div: '', dist: '', thana: '', text: '' });
      if (level === 'div') { s.div = value; s.dist = ''; s.thana = ''; s.text = ''; }
      else { s.dist = value; s.thana = ''; }
      s.dirty = true;
      rdAddrClearError(name);
      rdAddrRender(name);
    }

    /* Typing must not redraw -- a redraw would replace the input under the
       cursor and the member would lose focus after every letter. */
    function rdAddrType(name, key, value) {
      const s = rdAddrState[name];
      if (!s) return;
      s[key] = value;
      s.dirty = true;
      rdAddrClearError(name);
      rdAddrSync(name);
    }

    function rdAddrReset(name) {
      rdAddrState[name] = { div: '', dist: '', thana: '', text: '' };
      rdAddrClearError(name);
      rdAddrRender(name);
    }

    /* setFieldError cannot serve this field: it binds an input listener and
       focuses the element, and a hidden input takes neither.  So the picker
       carries its own line, inside its own border. */
    function rdAddrError(name, message) {
      const mount = rdAddrMount(name);
      if (!mount) return;
      const p = mount.querySelector('.rd-addr-error');
      if (!p) return;
      p.textContent = message;
      p.classList.remove('hidden');
      mount.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function rdAddrClearError(name) {
      const mount = rdAddrMount(name);
      const p = mount && mount.querySelector('.rd-addr-error');
      if (p) { p.textContent = ''; p.classList.add('hidden'); }
    }

    /* Complete means: a district was reached, or Abroad was named.  The upazila
       is left optional -- a member who does not remember the exact spelling
       should still be able to submit, and the district is what we filter on. */
    function rdAddrComplete(name) {
      const s = rdAddrState[name];
      if (!s || !s.div) return false;
      if (s.div === RD_ADDR_ABROAD) return !!String(s.text || '').trim();
      return !!s.dist;
    }

    function rdAddrInit(name, value) {
      rdAddrState[name] = rdAddrParse(value);
      rdAddrRender(name);
    }

    /* Every picker on the page.  The starting value comes from data-addr-value,
       so a prefilled profile and a blank registration form use one code path;
       rdAddrInit(name, value) is there for the caller that has the value in hand. */
    function rdAddrInitAll() {
      document.querySelectorAll('[data-addr]').forEach(el => {
        rdAddrInit(el.getAttribute('data-addr'), el.getAttribute('data-addr-value') || '');
      });
    }

    async function submitMemberRegistration(e){
      e.preventDefault();
      const f=e.target, b=document.getElementById('member-submit-btn'), fd=new FormData(f);
      /* Check the phone numbers before anything is uploaded, so a typo costs the
         user one red outline instead of a whole re-typed form. */
      clearFieldErrors(f);
      let firstBad = '';
      [['mobile', 'Mobile'], ['whatsapp', 'WhatsApp']].forEach(([nm, label]) => {
        const raw = String(fd.get(nm) || '').trim();
        if (!raw || isValidBdMobile(raw)) return;
        setFieldError(f, nm, label + ' ' + RD_MOBILE_RULE, !firstBad);
        firstBad = firstBad || nm;
      });
      if (firstBad) return;
      /* The address pickers are hidden inputs, so `required` cannot guard them --
         the browser refuses to report a field it cannot show.  They are checked
         here instead, and each carries its own message inside its own box. */
      let addrBad = '';
      [['address', 'স্থায়ী ঠিকানা'], ['presentAddress', 'বর্তমান ঠিকানা']].forEach(([nm, label]) => {
        if (!rdAddrMount(nm) || rdAddrComplete(nm)) return;
        if (!addrBad) rdAddrError(nm, label + ' বাছাই সম্পূর্ণ করুন — অন্তত জেলা পর্যন্ত।');
        addrBad = addrBad || nm;
      });
      if (addrBad) return;
      b.disabled=true; b.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Submitting...</span>'; lucide.createIcons();
      try {
        const payload = {
          fullName: fd.get('fullName'),
          mobile: normalizeBdMobile(fd.get('mobile')),
          whatsapp: normalizeBdMobile(fd.get('whatsapp')),
          email: fd.get('email'),
          address: fd.get('address'),
          presentAddress: fd.get('presentAddress'),
          bloodGroup: fd.get('bloodGroup'),
          department: fd.get('department'),
          series: fd.get('series'),
          batch: fd.get('batch'),
          employmentType: fd.get('employmentType'),
          organization: fd.get('organization'),
          designation: fd.get('designation'),
          workLocation: fd.get('workLocation'),
          formerPosition: fd.get('formerPosition')
        };
        const photoFile = f.querySelector('[name="photo"]').files[0];
        if (photoFile && photoFile.size > 0) {
            b.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Preparing the photo...</span>'; lucide.createIcons();
            payload.photo = await filePayload(photoFile, 1200);
        }
        b.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Saving your details...</span>'; lucide.createIcons();
        
        const r = await apiPost('submitRegistration', {registration: payload});
        f.reset();
        clearFieldErrors(f);
        /* form.reset() empties the hidden inputs but cannot redraw the pickers;
           without this the next applicant would see the previous one's district. */
        rdAddrInitAll();
        /* The backend flags a duplicate instead of failing; say so plainly and
           keep the "admin will review" promise, because that is what happens. */
        const dup = String(r.status || '').toUpperCase() === 'DUPLICATE';
        showToast(friendlyError(r.message || 'Once an admin verifies your details, your Member ID will be emailed to you.').msg,
                  dup ? 'info' : 'success',
                  dup ? 'Application is under admin review' : 'Application submitted',
                  {backTo: 'home'});
      } catch(err) {
        reportError(err, f);
      } finally {
        b.disabled=false; b.textContent='Submit Membership Application';
      }
    }

    /* UPDATE MY INFO + EMAIL OTP MODAL */
    let uinfoAuthed = { memberId: '', mobile: '' };

    function openUpdateInfoModal() {
      openSubPage('my-info', 'alumni');
      document.getElementById('update-info-auth-form').reset();
      document.getElementById('update-info-otp-form').reset();
      document.getElementById('update-info-otp-verify-form').reset();
      showUpdateInfoStep('auth');
      lucide.createIcons();
    }
    function closeUpdateInfoModal() {
      goBackFromSubPage('my-info');
    }
    function showUpdateInfoStep(step) {
      document.getElementById('update-info-auth-form').classList.toggle('hidden', step !== 'auth');
      document.getElementById('update-info-otp-form').classList.toggle('hidden', step !== 'otp');
      document.getElementById('update-info-otp-verify-form').classList.toggle('hidden', step !== 'otp-verify');
      document.getElementById('update-info-edit-form').classList.toggle('hidden', step !== 'edit');
    }

    function applyUpdateInfoPrefill(info) {
      const f = document.getElementById('update-info-edit-form');
      f.employmentType.value = info.employmentType || '';
      f.organization.value = info.organization || '';
      f.designation.value = info.designation || '';
      /* The work location is a picker here too, so an update cannot put free
         text back into a column the directory now filters on.  Whatever the
         sheet holds is parsed; an old unrecognised value simply shows as
         unchosen and the member picks it once. */
      rdAddrInit('uinfoWork', info.workLocation || '');
      document.getElementById('uinfo-verified-badge').innerHTML = `${escapeHtml(info.fullName || '')} • Member ID: <strong>${escapeHtml(info.memberId || '')}</strong>`;
    }

    async function submitUpdateInfoAuth(e) {
      e.preventDefault();
      const memberId = document.getElementById('uinfo-memberid').value.trim();
      const mobile = normalizeBdMobile(document.getElementById('uinfo-mobile').value);
      const btn = e.target.querySelector('button[type="submit"]');
      clearFieldErrors(e.target);
      if (!isValidBdMobile(mobile)) {
        setFieldError(e.target, 'mobile', RD_MOBILE_RULE, true);
        return false;
      }
      btn.disabled = true; btn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Verifying...</span>'; lucide.createIcons();
      try {
        const r = await apiPost('verifymemberforupdate', { data: { memberId, mobile } });
        if (!r.success) throw new Error(r.message || 'The Member ID and mobile number do not match.');
        uinfoAuthed = { memberId: r.memberId, mobile };
        /* Matching the ID to the mobile number is not proof of identity on its
           own: both are printed on the membership card. So the edit form is
           never opened from here. A code goes to the registered email address
           and submitOtpVerify() is the only way through to it. */
        btn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Sending the code...</span>'; lucide.createIcons();
        const sent = await apiPost('requestemailotp', { data: { mobile } });
        if (!sent.success) throw new Error(sent.message || 'The verification code could not be sent.');
        document.getElementById('otp-sent-msg').textContent = (sent.message || 'A verification code has been sent.') + ' Please check your email, including the Spam or Junk folder.';
        showUpdateInfoStep('otp-verify');
      } catch (err) {
        reportError(err);
      } finally {
        btn.disabled = false; btn.textContent = 'Next step'; lucide.createIcons();
      }
      return false;
    }

    async function submitOtpRequest(e) {
      e.preventDefault();
      const mobile = normalizeBdMobile(document.getElementById('otp-mobile').value);
      clearFieldErrors(e.target);
      if (!isValidBdMobile(mobile)) {
        setFieldError(e.target, 'mobile', RD_MOBILE_RULE, true);
        return false;
      }
      try {
        const r = await apiPost('requestemailotp', { data: { mobile } });
        if (!r.success) throw new Error(r.message);
        uinfoAuthed.mobile = mobile;
        document.getElementById('otp-sent-msg').textContent = (r.message || 'A verification code has been sent.') + ' Please check your email, including the Spam or Junk folder.';
        showUpdateInfoStep('otp-verify');
      } catch (err) { reportError(err); }
      return false;
    }

    async function submitOtpVerify(e) {
      e.preventDefault();
      const otp = document.getElementById('otp-code').value.trim();
      try {
        const r = await apiPost('verifyemailotp', { data: { mobile: uinfoAuthed.mobile, otp } });
        if (!r.success) throw new Error(r.message);
        const info = await apiPost('verifymemberforupdate', { data: { memberId: r.memberId, mobile: uinfoAuthed.mobile } });
        if (!info.success) throw new Error(info.message);
        uinfoAuthed.memberId = r.memberId;
        applyUpdateInfoPrefill(info);
        showUpdateInfoStep('edit');
      } catch (err) { reportError(err); }
      return false;
    }

    async function submitUpdateInfoEdit(e) {
      e.preventDefault();
      const f = e.target, btn = document.getElementById('uinfo-edit-submit-btn');
      btn.disabled = true; btn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Updating...</span>'; lucide.createIcons();
      try {
        const payload = {
          memberId: uinfoAuthed.memberId,
          mobile: uinfoAuthed.mobile,
          employmentType: f.employmentType.value,
          organization: f.organization.value,
          designation: f.designation.value,
          workLocation: f.workLocation.value
        };
        const photoFile = f.querySelector('[name="photo"]').files[0];
        if (photoFile) {
          btn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-circle" class="w-5 h-5 animate-spin"></i> Uploading the photo...</span>'; lucide.createIcons();
          payload.photo = await filePayload(photoFile, 1200);
        }
        const r = await apiPost('updatememberinfo', { data: payload });
        if (!r.success) throw new Error(r.message);
f.reset();
        loadPublicAlumni();
        showToast(r.message || 'Your information has been updated.', 'success', 'Update complete', {backTo: 'alumni'});
      } catch (err) {
        reportError(err);
      } finally {
        btn.disabled = false; btn.textContent = 'Update information'; lucide.createIcons();
      }
      return false;
    }

    function copyToClipboard(text) { navigator.clipboard.writeText(text).then(() => { showToast(`Number copied: ${text}`, 'success'); }); }
    /* ================= NOTICE BOARD + SOCIAL MEDIA CORNER =============
       Two feeds, one page. Both are written so that a failure leaves a quiet,
       empty board rather than an error card: a notice board that shouts at the
       visitor is worse than one that says nothing. The backend already returns
       success:true with empty lists when the sheet is missing.            */
    const RD_NB_PER_PAGE = 8;
    /* The corner slides, so it has no page size and no page number. */
    let RD_NB = { state: 'idle', ticker: [], notices: [], page: 1 };
    let RD_SC = { state: 'idle', posts: [] };

    async function loadNoticeBoard(force) {
      if (RD_NB.state === 'loading') return;
      if (RD_NB.state === 'ready' && !force) { renderNoticeBoard(); return; }
      /* The remembered copy is shown at once; the fresh one lands a moment
         later, so the board never opens as a blank skeleton twice. */
      const warm = rdFeedRecall('notices');
      if (warm) {
        RD_NB.ticker = warm.ticker || [];
        RD_NB.notices = warm.notices || [];
        RD_SC.posts = warm.posts || [];
        RD_NB.page = 1;
        RD_NB.state = 'ready';
        RD_SC.state = 'ready';
        renderNoticeBoard();
      } else {
        RD_NB.state = 'loading';
        RD_SC.state = 'loading';
        renderNoticeBoard();
      }
      const [nb, sc] = await Promise.all([
        apiGet('notices').catch(err => { console.warn('[rd] notices:', err); return {}; }),
        apiGet('socialposts').catch(err => { console.warn('[rd] social:', err); return {}; })
      ]);
      RD_NB.ticker = Array.isArray(nb.ticker) ? nb.ticker : [];
      RD_NB.notices = Array.isArray(nb.notices) ? nb.notices : [];
      RD_SC.posts = Array.isArray(sc.posts) ? sc.posts : [];
      RD_NB.page = 1;
      RD_NB.state = 'ready';
      RD_SC.state = 'ready';
      rdFeedRemember('notices',
        { ticker: RD_NB.ticker, notices: RD_NB.notices, posts: RD_SC.posts });
      renderNoticeBoard();
    }

    /* 2026-08-26 14:05 -> 26 Aug 2026. Anything unexpected is printed as it
       came, because a wrong date is worse than an unformatted one. */
    function rdNiceDate(v) {
      const s = String(v || '').trim();
      const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
      if (!m) return s;
      const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return (+m[3]) + ' ' + MON[(+m[2]) - 1] + ' ' + m[1];
    }

    /* The alumni pager, generalised: same buttons, same ellipsis rule, any
       list. alumniPageNumbers() is already list-agnostic. */
    function rdRenderPager(elId, cur, last, handler, label) {
      const pager = document.getElementById(elId);
      if (!pager) return;
      if (last <= 1) { pager.innerHTML = ''; return; }
      const btn = (inner, page, extra, disabled, aria) =>
        '<button type="button" class="alumni-page-btn ' + (extra || '') + '"' +
        (disabled ? ' disabled' : ' onclick="' + handler + '(' + page + ')"') +
        (aria ? ' aria-label="' + escapeHtml(aria) + '"' : '') +
        (page === cur ? ' aria-current="page"' : '') + '>' + inner + '</button>';
      let html = btn('<i data-lucide="chevron-left" class="w-4 h-4"></i><span class="hidden sm:inline">Previous</span>',
                     cur - 1, 'alumni-page-edge', cur === 1, 'Previous page');
      alumniPageNumbers(cur, last).forEach(p => {
        html += p === '...'
          ? '<span class="px-1.5 text-slate-400 font-bold select-none">…</span>'
          : btn(String(p), p, p === cur ? 'is-current' : '', false, label + ' page ' + p);
      });
      html += btn('<span class="hidden sm:inline">Next</span><i data-lucide="chevron-right" class="w-4 h-4"></i>',
                  cur + 1, 'alumni-page-edge', cur === last, 'Next page');
      pager.innerHTML = html;
    }

    function rdPageCount(total, per) { return Math.max(1, Math.ceil(total / per)); }

    function rdBoardSkeleton(n) {
      let out = '';
      for (let i = 0; i < n; i++) out += '<div class="h-64 rounded-2xl bg-slate-100 animate-pulse"></div>';
      return out;
    }

    function rdBoardEmpty(icon, text) {
      return '<div class="col-span-full rounded-2xl border border-slate-200 bg-white p-10 text-center">' +
        '<div class="w-14 h-14 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">' +
        '<i data-lucide="' + icon + '" class="w-7 h-7 text-slate-400"></i></div>' +
        '<p class="text-sm font-bold text-slate-500">' + escapeHtml(text) + '</p></div>';
    }

    function renderNoticeBoard() {
      renderNoticeTicker();
      renderNoticeList();
      renderSocialGrid();
      if (window.lucide) lucide.createIcons();
    }

    function renderNoticeTicker() {
      const wrap = document.getElementById('notice-ticker-wrap');
      const track = document.getElementById('notice-ticker');
      if (!wrap || !track) return;
      const lines = RD_NB.ticker.filter(t => String(t && t.text || '').trim());
      wrap.classList.toggle('hidden', lines.length === 0);
      if (!lines.length) { track.innerHTML = ''; return; }
      /* The list is printed twice so the line never leaves a visible gap
         between the last notice and the first one coming round again. */
      const one = lines.map(t =>
        '<span class="inline-flex items-center gap-2 text-[13px] font-bold text-amber-900">' +
        '<i data-lucide="dot" class="w-4 h-4 text-amber-500"></i>' + escapeHtml(t.text) + '</span>').join('');
      track.innerHTML = one + (lines.length < 4 ? one : '');
    }

    function noticeThumb(n) {
      if (n.fileType === 'image' && n.viewUrl) {
        return '<div class="rd-news-thumb"><span class="rd-news-tag"><i data-lucide="image" class="w-3 h-3"></i>Image</span>' +
          '<img src="' + escapeHtml(n.viewUrl) + '" alt="' + escapeHtml(n.title) + '" loading="lazy" decoding="async" onerror="rdNewsFallback(this)"></div>';
      }
      const pdf = n.fileType === 'pdf';
      return '<div class="rd-news-thumb" style="background:linear-gradient(135deg,#f8fafc,#eff6ff);">' +
        (pdf ? '<span class="rd-news-tag"><i data-lucide="file-text" class="w-3 h-3"></i>PDF</span>' : '') +
        '<i data-lucide="' + (pdf ? 'file-text' : 'clipboard-list') + '" class="w-14 h-14 text-blue-400"></i></div>';
    }

    function noticeCard(n) {
      const id = escapeHtml(n.noticeId);
      return '<article class="rd-news-card">' +
        '<button type="button" class="block w-full text-left" aria-label="Open the notice" onclick="openNoticeFile(\'' + id + '\')">' +
          noticeThumb(n) +
        '</button>' +
        '<div class="p-4 sm:p-5">' +
          '<button type="button" class="rd-news-title text-sm sm:text-[15px] rd-clamp3" onclick="openNoticeFile(\'' + id + '\')">' +
            escapeHtml(n.title) + '</button>' +
          (String(n.body || '').trim()
            ? '<p class="mt-2 text-xs text-slate-500 font-semibold leading-relaxed rd-clamp2">' + escapeHtml(n.body) + '</p>'
            : '') +
        '</div>' +
        '<div class="rd-news-foot">' +
          '<span class="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-500">' +
            '<i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>' + escapeHtml(rdNiceDate(n.postedDate)) + '</span>' +
          '<button type="button" onclick="openNoticeFile(\'' + id + '\')" class="inline-flex items-center gap-0.5 text-[11px] font-extrabold uppercase tracking-wide text-blue-600 hover:text-blue-800 cursor-pointer">' +
            'View more <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></button>' +
        '</div>' +
      '</article>';
    }

    function renderNoticeList() {
      const box = document.getElementById('notice-list');
      if (!box) return;
      if (RD_NB.state === 'loading') { box.innerHTML = rdBoardSkeleton(4); document.getElementById('notice-pager').innerHTML = ''; return; }
      if (!RD_NB.notices.length) {
        box.innerHTML = rdBoardEmpty('clipboard-list', 'No notice has been published yet.');
        document.getElementById('notice-pager').innerHTML = '';
        return;
      }
      const last = rdPageCount(RD_NB.notices.length, RD_NB_PER_PAGE);
      if (RD_NB.page > last) RD_NB.page = last;
      const from = (RD_NB.page - 1) * RD_NB_PER_PAGE;
      box.innerHTML = RD_NB.notices.slice(from, from + RD_NB_PER_PAGE).map(noticeCard).join('');
      rdRenderPager('notice-pager', RD_NB.page, last, 'gotoNoticePage', 'Notice');
    }

    function gotoNoticePage(p) {
      const last = rdPageCount(RD_NB.notices.length, RD_NB_PER_PAGE);
      RD_NB.page = Math.min(Math.max(1, p), last);
      renderNoticeList();
      if (window.lucide) lucide.createIcons();
      const el = document.getElementById('notice-list');
      if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 120), behavior: 'smooth' });
    }

    /* ---------- The file itself, on its own page (never a popup) ---------- */
    function openNoticeFile(noticeId) {
      const n = RD_NB.notices.find(x => String(x.noticeId) === String(noticeId));
      if (!n) { showToast('That notice is no longer on the board.', 'info', 'Notice not found', {backTo: 'noticeboard'}); return; }
      document.getElementById('nfile-date').textContent = rdNiceDate(n.postedDate);
      document.getElementById('nfile-title').textContent = n.title || 'Notice';
      const body = document.getElementById('nfile-body');
      body.textContent = String(n.body || '');
      body.classList.toggle('hidden', !String(n.body || '').trim());

      /* The download link points at Drive's export URL, so the file arrives at
         its original resolution -- what the admin uploaded, untouched. */
      const dl = document.getElementById('nfile-download');
      const open = document.getElementById('nfile-open');
      const has = !!String(n.downloadUrl || '').trim();
      dl.href = n.downloadUrl || '#';
      dl.classList.toggle('hidden', !has);
      open.href = n.viewUrl || n.fileUrl || '#';
      open.classList.toggle('hidden', !String(n.viewUrl || n.fileUrl || '').trim());

      const frame = document.getElementById('nfile-frame');
      if (n.fileType === 'pdf' && n.viewUrl) {
        frame.innerHTML = '<iframe class="rd-file-frame" src="' + escapeHtml(n.viewUrl) +
          '" title="' + escapeHtml(n.title) + '" loading="lazy"></iframe>';
      } else if (n.viewUrl) {
        frame.innerHTML = '<div class="p-3 sm:p-5"><img src="' + escapeHtml(n.viewUrl) +
          '" alt="' + escapeHtml(n.title) + '" class="w-full h-auto rounded-2xl shadow-sm" onerror="rdPhotoFallback(this)"></div>';
      } else {
        frame.innerHTML = '';
      }
      openSubPage('notice-file', 'noticeboard');
      if (window.lucide) lucide.createIcons();
    }

    /* ---------- Social Media Corner ---------- */
    function socialCard(p) {
      const img = String(p.image || '').trim();
      const news = p.kind === 'NEWS';
      const heading = String(p.title || '').trim() || String(p.caption || '').trim();
      const tag = '<span class="rd-news-tag"><i data-lucide="' + (news ? 'newspaper' : 'facebook') +
        '" class="w-3 h-3"></i>' + (news ? 'News' : 'Facebook') + '</span>';
      /* No picture on the post? The Rangdhanu logo stands in, so the row of
         cards keeps its shape instead of collapsing into a blank box. */
      const thumb = img
        ? '<div class="rd-news-thumb">' + tag + '<img src="' + escapeHtml(img) + '" alt="' + escapeHtml(heading) +
          '" loading="lazy" decoding="async" onerror="rdNewsFallback(this)"></div>'
        : '<div class="rd-news-thumb is-logo">' + tag + '<img src="logo.png" alt="Rangdhanu" loading="lazy" decoding="async" onerror="rdNewsLogoFallback(this)"></div>';
      const caption = String(p.caption || '').trim();
      return '<article class="rd-news-card">' +
        '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener" class="block" aria-label="Open the post">' +
          thumb +
        '</a>' +
        '<div class="p-4 sm:p-5">' +
          (String(p.title || '').trim()
            ? '<h3 class="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-snug rd-clamp2">' + escapeHtml(p.title) + '</h3>'
            : '') +
          (caption
            ? '<p class="' + (String(p.title || '').trim() ? 'mt-2 ' : '') + 'text-xs text-slate-600 font-semibold leading-relaxed rd-clamp3">' + escapeHtml(caption) + '</p>'
            : '') +
        '</div>' +
        '<div class="rd-news-foot">' +
          '<span class="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-500">' +
            '<i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>' + escapeHtml(rdNiceDate(p.postedDate)) + '</span>' +
          '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[11px] font-extrabold uppercase tracking-wide text-blue-600 hover:text-blue-800">' +
            (news ? 'Read the news' : 'View more') + ' <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>' +
        '</div>' +
      '</article>';
    }

    /* Every post sits on one rail. There are no pages here any more, so the
       whole list is laid out once and the two buttons only scroll it. */
    function renderSocialGrid() {
      const box = document.getElementById('social-grid');
      if (!box) return;
      if (RD_SC.state === 'loading') { box.innerHTML = rdBoardSkeleton(3); rdSocialArrows(); return; }
      if (!RD_SC.posts.length) {
        box.innerHTML = rdBoardEmpty('share-2', 'No post has been added to the corner yet.');
        rdSocialArrows();
        return;
      }
      box.innerHTML = RD_SC.posts.map(socialCard).join('');
      /* Dragging or swiping the rail must move the buttons too, and the
         listener is attached once however often the cards are redrawn. */
      if (!box.dataset.rdRail) {
        box.dataset.rdRail = '1';
        box.addEventListener('scroll', rdSocialArrows, { passive: true });
      }
      box.scrollLeft = 0;
      rdSocialArrows();
    }

    /* One press = one card, gap included. Measured from the card that is
       actually on screen, so the same code fits phone and desktop. */
    function rdSocialStep(box) {
      const card = box.firstElementChild;
      const w = card ? card.getBoundingClientRect().width : 0;
      return Math.max(200, Math.round((w || box.clientWidth / 3) + 20));
    }

    function socialSlide(dir) {
      const box = document.getElementById('social-grid');
      if (!box) return;
      const step = rdSocialStep(box) * (dir < 0 ? -1 : 1);
      if (typeof box.scrollBy === 'function') box.scrollBy({ left: step, behavior: 'smooth' });
      else box.scrollLeft = box.scrollLeft + step;
      rdSocialArrows();
    }

    /* A rail with nothing to slide loses its buttons altogether, and at
       either end the button on that side goes quiet rather than dead. */
    function rdSocialArrows() {
      const box = document.getElementById('social-grid');
      const prev = document.getElementById('social-prev');
      const next = document.getElementById('social-next');
      if (!box || !prev || !next) return;
      const many = RD_SC.state === 'ready' && RD_SC.posts.length > 1;
      prev.style.display = many ? '' : 'none';
      next.style.display = many ? '' : 'none';
      const room = Math.max(0, (box.scrollWidth || 0) - (box.clientWidth || 0));
      prev.disabled = box.scrollLeft <= 4;
      next.disabled = box.scrollLeft >= room - 4;
    }

    /* ================= THE PDACC PAGE FEED ============================
       One call fills both the notice line and the Latest update rail. Like the
       notice board, a failure leaves the page quiet rather than shouting at a
       visitor: the backend answers success:true with empty lists.          */
    const RD_PD_RAIL_MAX = 8;
    const RD_PD_PER_PAGE = 15;
    let RD_PD = { state: 'idle', ticker: [], updates: [], page: 1 };

    async function loadPdacc(force) {
      if (RD_PD.state === 'loading') return;
      if (RD_PD.state === 'ready' && !force) { renderPdacc(); return; }
      const warm = rdFeedRecall('pdacc');
      if (warm) {
        RD_PD.ticker = warm.ticker || [];
        RD_PD.updates = warm.updates || [];
        RD_PD.page = 1;
        RD_PD.state = 'ready';
        renderPdacc();
      } else {
        RD_PD.state = 'loading';
        renderPdacc();
      }
      const j = await apiGet('pdacc').catch(err => { console.warn('[rd] pdacc:', err); return {}; });
      RD_PD.ticker = Array.isArray(j.ticker) ? j.ticker : [];
      RD_PD.updates = Array.isArray(j.updates) ? j.updates : [];
      RD_PD.page = 1;
      RD_PD.state = 'ready';
      rdFeedRemember('pdacc', { ticker: RD_PD.ticker, updates: RD_PD.updates });
      renderPdacc();
    }

    function renderPdacc() {
      renderPdaccTicker();
      renderPdaccUpdates();
      renderPdaccUpdatesPage();
      if (window.lucide) lucide.createIcons();
    }

    function renderPdaccTicker() {
      const wrap = document.getElementById('pdacc-ticker-wrap');
      const track = document.getElementById('pdacc-ticker');
      if (!wrap || !track) return;
      const lines = RD_PD.ticker.filter(t => String(t && t.text || '').trim());
      wrap.classList.toggle('hidden', lines.length === 0);
      if (!lines.length) { track.innerHTML = ''; return; }
      /* Printed twice, so the line never leaves a visible gap between the
         last notice and the first one coming round again. */
      const one = lines.map(t =>
        '<span class="inline-flex items-center gap-2 text-[13px] font-bold text-indigo-900">' +
        '<i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i>' + escapeHtml(t.text) + '</span>').join('');
      track.innerHTML = one + (lines.length < 4 ? one : '');
    }

    /* An update with no picture of its own carries the crest. */
    function pdaccUpdThumb(u) {
      const img = String(u.image || '').trim();
      if (img) {
        return '<div class="rd-news-thumb"><img src="' + escapeHtml(img) + '" alt="' +
          escapeHtml(u.title || '') + '" loading="lazy" decoding="async" onerror="rdPdCardFallback(this)"></div>';
      }
      return '<div class="rd-news-thumb is-logo"><img src="' + escapeHtml(RD_PDACC_LOGO) +
        '" alt="PDACC crest" loading="lazy" ' +
        'decoding="async" onerror="rdPdCardFallback(this)"></div>';
    }

    function pdaccUpdateCard(u) {
      const link = String(u.link || '').trim();
      const a = 'href="' + escapeHtml(link) + '" target="_blank" rel="noopener"';
      const head = link ? '<a ' + a + ' class="block">' + pdaccUpdThumb(u) + '</a>' : pdaccUpdThumb(u);
      const title = link
        ? '<a ' + a + ' class="rd-news-title text-sm sm:text-[15px] rd-clamp3">' + escapeHtml(u.title || '') + '</a>'
        : '<h3 class="rd-news-title text-sm sm:text-[15px] rd-clamp3">' + escapeHtml(u.title || '') + '</h3>';
      const more = link
        ? '<a ' + a + ' class="inline-flex items-center gap-0.5 text-[11px] font-extrabold uppercase tracking-wide text-indigo-600 hover:text-indigo-800">Read more <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>'
        : '';
      return '<article class="rd-news-card">' + head +
        '<div class="p-4 sm:p-5">' + title +
          (String(u.description || '').trim()
            ? '<p class="mt-2 text-xs text-slate-500 font-semibold leading-relaxed rd-clamp3">' + escapeHtml(u.description) + '</p>'
            : '') +
        '</div>' +
        '<div class="rd-news-foot">' +
          '<span class="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-500">' +
            '<i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>' +
            escapeHtml(rdNiceDate(u.postedDate)) + '</span>' + more +
        '</div>' +
      '</article>';
    }

    function renderPdaccUpdates() {
      const box = document.getElementById('pdacc-updates');
      const all = document.getElementById('pdacc-updates-all');
      if (!box) return;
      if (RD_PD.state === 'loading') { box.innerHTML = rdBoardSkeleton(3); pdaccUpdArrows(); return; }
      if (!RD_PD.updates.length) {
        box.innerHTML = rdBoardEmpty('newspaper', 'No update has been published yet.');
        if (all) all.classList.add('hidden');
        pdaccUpdArrows();
        return;
      }
      box.innerHTML = RD_PD.updates.slice(0, RD_PD_RAIL_MAX).map(pdaccUpdateCard).join('');
      /* More than the rail holds is what the View all button is for. */
      if (all) all.classList.toggle('hidden', RD_PD.updates.length <= RD_PD_RAIL_MAX);
      if (!box.dataset.rdRail) {
        box.dataset.rdRail = '1';
        if (box.addEventListener) box.addEventListener('scroll', pdaccUpdArrows, { passive: true });
      }
      box.scrollLeft = 0;
      pdaccUpdArrows();
    }

    /* One press = one card, gap included, measured from the card on screen. */
    function pdaccRailStep(box) {
      const card = box.firstElementChild;
      const w = (card && card.getBoundingClientRect) ? card.getBoundingClientRect().width : 0;
      return Math.max(200, Math.round((w || (box.clientWidth || 900) / 3) + 20));
    }

    function pdaccUpdSlide(dir) {
      const box = document.getElementById('pdacc-updates');
      if (!box) return;
      const step = pdaccRailStep(box) * (dir < 0 ? -1 : 1);
      if (typeof box.scrollBy === 'function') box.scrollBy({ left: step, behavior: 'smooth' });
      else box.scrollLeft = box.scrollLeft + step;
      pdaccUpdArrows();
    }

    function pdaccUpdArrows() {
      const box = document.getElementById('pdacc-updates');
      const prev = document.getElementById('pdacc-upd-prev');
      const next = document.getElementById('pdacc-upd-next');
      if (!box || !prev || !next) return;
      const many = RD_PD.state === 'ready' && RD_PD.updates.length > 1;
      prev.style.display = many ? '' : 'none';
      next.style.display = many ? '' : 'none';
      const room = Math.max(0, (box.scrollWidth || 0) - (box.clientWidth || 0));
      prev.disabled = box.scrollLeft <= 4;
      next.disabled = box.scrollLeft >= room - 4;
    }

    /* View all: every update, fifteen to a page, on a page of its own. */
    function openPdaccUpdates() {
      RD_PD.page = 1;
      openSubPage('pdacc-updates', 'prokoushali');
      renderPdaccUpdatesPage();
      if (window.lucide) lucide.createIcons();
    }

    function renderPdaccUpdatesPage() {
      const box = document.getElementById('pdacc-updates-list');
      const pager = document.getElementById('pdacc-updates-pager');
      if (!box) return;
      if (RD_PD.state === 'loading') {
        box.innerHTML = rdBoardSkeleton(6);
        if (pager) pager.innerHTML = '';
        return;
      }
      if (!RD_PD.updates.length) {
        box.innerHTML = rdBoardEmpty('newspaper', 'No update has been published yet.');
        if (pager) pager.innerHTML = '';
        return;
      }
      const last = rdPageCount(RD_PD.updates.length, RD_PD_PER_PAGE);
      if (RD_PD.page > last) RD_PD.page = last;
      const from = (RD_PD.page - 1) * RD_PD_PER_PAGE;
      box.innerHTML = RD_PD.updates.slice(from, from + RD_PD_PER_PAGE).map(pdaccUpdateCard).join('');
      rdRenderPager('pdacc-updates-pager', RD_PD.page, last, 'gotoPdaccUpdatePage', 'Update');
    }

    function gotoPdaccUpdatePage(p) {
      const last = rdPageCount(RD_PD.updates.length, RD_PD_PER_PAGE);
      RD_PD.page = Math.min(Math.max(1, p), last);
      renderPdaccUpdatesPage();
      if (window.lucide) lucide.createIcons();
      const el = document.getElementById('pdacc-updates-list');
      if (el && el.getBoundingClientRect) {
        window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 120), behavior: 'smooth' });
      }
    }

    /* A jump button on the little nav scrolls; it never opens a page. */
    function pdaccJump(id) {
      const box = document.getElementById(id);
      if (!box || !box.scrollIntoView) return;
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ================= ADMIN DASHBOARD ===============================
       Three record types, one renderer. Everything the admin can press here
       maps onto an API that already existed; authentication stays with the
       backend's requireAdmin_(), so no email is ever sent from the browser. */
    const RD_ADMIN_TABS = [
      { key: 'registrations', label: 'Membership Applications', icon: 'user-plus',    action: 'getadminregistrations' },
      { key: 'events',        label: 'Events',                  icon: 'calendar-days', action: 'getadminevents' },
      { key: 'committee',     label: 'Executive Committee',     icon: 'shield-check', action: 'adminexecutivecommittee' },
      /* custom: true means the tab is not an approval queue -- no status
         filter, no adminCard(), its own loader and its own renderer. */
      { key: 'notices',       label: 'Notices',                 icon: 'megaphone',    action: 'getadminnotices',     custom: true },
      { key: 'social',        label: 'Social Media Corner',     icon: 'share-2',      action: 'getadminsocialposts', custom: true },
      { key: 'slides',        label: 'Slideshows',              icon: 'images',       action: 'getadminslides',      custom: true },
      { key: 'pdacc',         label: 'PDACC Page',              icon: 'graduation-cap', action: 'getadminpdacc',     custom: true },
      { key: 'activity',      label: 'Edit History',            icon: 'history',      action: 'getadminactivity',    custom: true },
      { key: 'summary',       label: 'Members Summary',         icon: 'bar-chart-3',  action: '',                    custom: true }
    ];
    const RD_ADMIN_STATUSES = ['PENDING', 'DUPLICATE', 'APPROVED', 'REJECTED', 'ALL'];

    /* A repeat application is saved with Status = 'DUPLICATE' instead of being
       thrown away, and the applicant is told an admin will check it. Only the
       Registrations sheet ever writes that value, so the extra filter is
       offered on that one tab. */
    function adminStatusList() {
      return RD_ADMIN.tab === 'registrations'
        ? RD_ADMIN_STATUSES
        : RD_ADMIN_STATUSES.filter(s => s !== 'DUPLICATE');
    }

    let RD_ADMIN = { tab: 'registrations', status: 'PENDING', state: 'idle', gate: 'locked',
                     error: '', admin: '', rows: {}, busy: '', noteOpen: '',
                     nbEdit: '', scEdit: '', evEdit: '', slEdit: '', slPlace: 'home',
                     pdKind: 'LINE', pdEdit: '', role: 'ALL',
                     askWhat: '', askId: '' };

    function adminTabMeta(key) {
      return RD_ADMIN_TABS.find(t => t.key === key) || RD_ADMIN_TABS[0];
    }

    /* ---------- two kinds of admin -----------------------------------------
       A PDACC admin looks after the PDACC page and nothing else, so the rest
       of the panel is not drawn for them. This is only what is on screen --
       the sheets are guarded on the server by rdRequireRole_(), which is what
       actually decides. Anything unrecognised is treated as a full admin, so a
       backend that has not been redeployed yet behaves exactly as before. */
    function adminTabList() {
      return RD_ADMIN.role === 'PDACC'
        ? RD_ADMIN_TABS.filter(t => t.key === 'pdacc')
        : RD_ADMIN_TABS;
    }

    function adminTabAllowed(key) {
      return adminTabList().some(t => t.key === key);
    }

    /* The refusal itself is the signal. A PDACC admin is turned away from the
       Membership Applications feed by rdRequireRole_() on the server, and that
       message is what opens their own tab instead of locking the page -- so
       nobody pays an extra round trip just to ask who they are. */
    function rdIsRoleError(err) {
      return /not open to your account/i.test(String(err && err.message || err));
    }

    async function adminOpenPdaccOnly() {
      RD_ADMIN.role = 'PDACC';
      RD_ADMIN.tab = 'pdacc';
      RD_ADMIN.state = 'idle';
      RD_ADMIN.error = '';
      RD_ADMIN.gate = 'open';
      adminGateRender();
      renderAdmin();
      await loadAdminDashboard(true);
    }

    /* Each source has its own column names. Normalising here means the card,
       the filter and the buttons are written exactly once. */
    function adminNormalize(tab, raw) {
      if (tab === 'registrations') {
        return {
          kind: 'registrations', id: String(raw['Registration ID'] || '').trim(),
          title: raw['Full Name (English)'] || '(no name)',
          subtitle: [raw['Department'], raw['Series'] ? 'Series ' + raw['Series'] : ''].filter(Boolean).join(' • '),
          status: String(raw['Status'] || '').trim().toUpperCase(),
          photo: raw['Passport Size Image'] || '',
          note: raw['Rejection Reason'] || raw['Admin Note'] || '',
          meta: [['Mobile', raw['Mobile Number']], ['Email', raw['Email']],
                 ['Blood', raw['Blood Group']], ['Batch', raw['Batch']],
                 ['Employment', raw['Employment Type']],
                 ['Organization', raw['Current Organization / Company']],
                 ['Designation', raw['Current Designation']],
                 ['Member ID', raw['Member ID']], ['Applied', raw['Registration Date']]]
        };
      }
      if (tab === 'events') {
        return {
          kind: 'events', id: String(raw['Event ID'] || '').trim(),
          /* The edit form fills itself from the sheet's own columns, so the
             untouched row travels with the card. */
          raw: raw,
          title: raw['Event Name'] || '(no title)',
          subtitle: [raw['Category'], raw['Event Date']].filter(Boolean).join(' • '),
          status: String(raw['Status'] || '').trim().toUpperCase(),
          photo: raw['Main Image'] || '',
          note: raw['Admin Note'] || '',
          featured: String(raw['Featured'] || '').trim().toUpperCase() === 'YES',
          meta: [['Venue', raw['Venue']], ['Organized by', raw['Organized By']],
                 ['Contact', raw['Contact Person']], ['Contact no.', raw['Contact Number']],
                 ['Submitted by', raw['Submitted By']], ['Submitter email', raw['Submitter Email']],
                 ['Submitted', raw['Submitted Date']]]
        };
      }
      return {
        kind: 'committee', id: String(raw.entryId || '').trim(),
        title: raw.fullName || '(no name)',
        subtitle: [raw.position, raw.session].filter(Boolean).join(' • '),
        status: String(raw.status || '').trim().toUpperCase(),
        photo: raw.photo || '', note: raw.adminNote || '',
        meta: [['Committee', raw.committee], ['Department', raw.department],
               ['Series', raw.series], ['Mobile', raw.mobile], ['Email', raw.email],
               ['Submitted', raw.submittedDate], ['Approved', raw.approvedDate]]
      };
    }

    function adminRows() {
      const list = RD_ADMIN.rows[RD_ADMIN.tab] || [];
      if (RD_ADMIN.status === 'ALL') return list;
      return list.filter(r => r.status === RD_ADMIN.status);
    }

    function adminCounts() {
      const c = { PENDING: 0, DUPLICATE: 0, APPROVED: 0, REJECTED: 0, ALL: 0 };
      (RD_ADMIN.rows[RD_ADMIN.tab] || []).forEach(r => {
        if (c.hasOwnProperty(r.status)) c[r.status]++;
        c.ALL++;
      });
      return c;
    }

    /* ---------------- the sign-in gate ----------------
       'locked'   nothing has been tried yet
       'checking' one admin GET is in flight
       'denied'   the backend said no (not an admin, or not signed in)
       'open'     an admin GET succeeded -> the dashboard may be shown
       The browser never claims who it is; the backend decides. */
    function adminGateRender() {
      const gate = document.getElementById('admin-gate');
      const panel = document.getElementById('admin-panel');
      const btn = document.getElementById('admin-gate-btn');
      const msg = document.getElementById('admin-gate-msg');
      const open = RD_ADMIN.gate === 'open';
      if (gate) gate.classList.toggle('hidden', open);
      if (panel) panel.classList.toggle('hidden', !open);
      if (btn) {
        /* With Google's button on screen this one is only the retry. */
        const gsi = rdGsiReady();
        btn.disabled = RD_ADMIN.gate === 'checking';
        btn.classList.toggle('hidden', gsi && RD_ADMIN.gate !== 'denied');
        btn.textContent = RD_ADMIN.gate === 'checking'
          ? 'Checking your access\u2026'
          : (RD_ADMIN.gate === 'denied'
              ? (gsi ? 'Sign in again' : 'Try again')
              : 'Continue with your Google account');
      }
      if (msg) {
        msg.innerHTML = RD_ADMIN.gate === 'denied'
          ? '<p class="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-bold text-rose-700 leading-relaxed">' +
            escapeHtml(RD_ADMIN.error || 'This Google account is not on the admin list.') +
            '</p>'
          : '';
      }
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    /* ---------- Google sign-in -------------------------------------------
       A cross-origin fetch carries no Google session, so the backend cannot
       see who is calling. Google's own button hands us a signed ID token
       instead; the backend verifies that token and reads the email out of it.
       The browser never states who it is. */
    let rdGsiDrawn = false;

    function rdGsiReady() {
      return !!(RD_ADMIN_CLIENT_ID && window.google && google.accounts && google.accounts.id);
    }

    function adminGoogleCredential(resp) {
      RD_ADMIN_TOKEN = (resp && resp.credential) || '';
      if (!RD_ADMIN_TOKEN) { adminGateLock('The Google sign-in did not complete.'); return; }
      adminGateVerify();
    }

    function rdDrawGsiButton() {
      const box = document.getElementById('admin-gsi-btn');
      if (!box) return false;
      if (!rdGsiReady()) { box.classList.add('hidden'); return false; }
      box.classList.remove('hidden');
      if (rdGsiDrawn && rdGsiOwner === 'admin') return true;
      try {
        google.accounts.id.initialize({
          client_id: RD_ADMIN_CLIENT_ID,
          callback: adminGoogleCredential,
          auto_select: false,
          cancel_on_tap_outside: true
        });
        google.accounts.id.renderButton(box, {
          theme: 'outline', size: 'large', shape: 'pill',
          text: 'signin_with', width: 260
        });
        rdGsiDrawn = true;
        rdGsiOwner = 'admin';
        return true;
      } catch (err) {
        box.classList.add('hidden');
        return false;
      }
    }

    /* Opening the page never fetches anything on its own. */
    function adminEnterPage() {
      if (RD_ADMIN.gate === 'open') { adminGateRender(); loadAdminDashboard(); return; }
      if (RD_ADMIN.gate === 'checking') return;
      RD_ADMIN.gate = 'locked';
      RD_ADMIN.error = '';
      adminGateRender();
      /* The GIS script loads async, so try now and once more shortly after. */
      if (!rdDrawGsiButton()) setTimeout(rdDrawGsiButton, 700);
    }

    async function adminGateVerify() {
      if (RD_ADMIN.gate === 'checking') return;
      /* Pressed with no token in hand: ask Google first. */
      if (rdGsiReady() && !RD_ADMIN_TOKEN) {
        if (rdDrawGsiButton()) {
          try { google.accounts.id.prompt(); } catch (err) { /* button is there */ }
          return;
        }
      }
      RD_ADMIN.gate = 'checking';
      RD_ADMIN.error = '';
      adminGateRender();

      /* Ask who this is before asking for anything they may not be allowed to
         see. This used to be inferred from the refusal that came back when a
         PDACC admin reached for the Membership Applications feed, which saved a
         round trip but read the server's wording to do it -- so any handler
         that rephrased or wrapped the message sent a PDACC admin to the error
         card instead of their own page. The role now comes from the one route
         that exists to answer exactly that question. */
      try {
        const who = await apiGet('adminrole', {});
        if (who && who.role === 'PDACC') { await adminOpenPdaccOnly(); return; }
      } catch (err) {
        /* An older deployment has no adminrole route. Fall through: the refusal
           below is still read, so nothing gets worse than it was. */
      }

      try {
        const meta = adminTabMeta('registrations');
        const res = await apiGet(meta.action, {});
        const raw = Array.isArray(res.data) ? res.data : [];
        RD_ADMIN.rows.registrations = raw.map(r => adminNormalize('registrations', r)).filter(r => r.id);
        RD_ADMIN.admin = res.admin && res.admin.adminId ? res.admin.adminId : (res.admin || '');
        RD_ADMIN.tab = 'registrations';
        RD_ADMIN.state = 'ready';
        RD_ADMIN.gate = 'open';
        adminGateRender();
        renderAdmin();
      } catch (err) {
        if (rdIsRoleError(err)) { await adminOpenPdaccOnly(); return; }
        adminGateLock(friendlyError(err).msg);
      }
    }

    /* Which failures actually mean "you are not signed in".
       This used to be /admin/i, and that was the bug: an ordinary error
       like "getAdminSocialPosts is not defined" carries the word admin in
       it, so changing a tab threw the sign-in page up. The test now reads
       the server's own wording, and a missing function is never auth. */
    function rdIsAuthError(raw) {
      const text = String(raw && raw.message ? raw.message : (raw == null ? '' : raw));
      if (/is not defined|Script function not found|not a function/i.test(text)) return false;
      return /sign ?-?in|signed in|not on the admin list|admin list|no admin|expired|not authoris|not authoriz|permission denied|token/i.test(text);
    }

    /* A later request may still be refused (the Google session can expire, or
       an admin can be removed from the sheet); when that happens the gate
       closes again instead of leaving an empty dashboard on screen. */
    function adminGateLock(message) {
      RD_ADMIN.gate = 'denied';
      RD_ADMIN.error = message || '';
      /* An expired sign-in must not be sent a second time. */
      if (/sign in again|expired|not be verified|not be identified/i.test(RD_ADMIN.error)) {
        RD_ADMIN_TOKEN = '';
        try { if (rdGsiReady()) google.accounts.id.disableAutoSelect(); } catch (err) {}
      }
      RD_ADMIN.rows = { registrations: null, events: null, committee: null };
      adminGateRender();
    }

    /* Signing out is the gate closing on purpose. The token is dropped, Google
       is told not to sign this browser back in by itself, and every loaded row
       is thrown away so the next person on this computer starts from the
       sign-in card with nothing of the last admin left on screen. No popup:
       the page simply goes back to its locked state. */
    function adminSignOut() {
      RD_ADMIN_TOKEN = '';
      try { if (rdGsiReady()) google.accounts.id.disableAutoSelect(); } catch (err) {}
      RD_ADMIN.gate = 'locked';
      RD_ADMIN.state = 'idle';
      RD_ADMIN.error = '';
      RD_ADMIN.admin = '';
      RD_ADMIN.role = 'ALL';
      RD_ADMIN.tab = 'registrations';
      RD_ADMIN.status = 'PENDING';
      RD_ADMIN.rows = {};
      RD_ADMIN.busy = '';
      RD_ADMIN.noteOpen = '';
      RD_ADMIN.askWhat = '';
      RD_ADMIN.askId = '';
      adminGateRender();
      if (!rdDrawGsiButton()) setTimeout(rdDrawGsiButton, 700);
    }

    async function loadAdminDashboard(force) {
      const tab = RD_ADMIN.tab;
      if (RD_ADMIN.state === 'loading') return;
      if (RD_ADMIN.rows[tab] && !force) { renderAdmin(); return; }
      RD_ADMIN.state = 'loading';
      RD_ADMIN.error = '';
      renderAdmin();
      try {
        const meta = adminTabMeta(tab);
        if (meta.custom) {
          RD_ADMIN.rows[tab] = await adminLoadCustom(tab);
        } else {
          const res = await apiGet(meta.action, tab === 'committee' ? { status: 'ALL' } : {});
          const raw = Array.isArray(res.data) ? res.data : [];
          RD_ADMIN.rows[tab] = raw.map(r => adminNormalize(tab, r)).filter(r => r.id);
          RD_ADMIN.admin = res.admin && res.admin.adminId ? res.admin.adminId : (res.admin || '');
        }
        RD_ADMIN.state = 'ready';
      } catch (err) {
        /* The tab is marked as tried, so leaving it and coming back does not
           fire the same doomed request again. */
        RD_ADMIN.rows[tab] = RD_ADMIN.rows[tab] || [];
        RD_ADMIN.state = 'error';
        RD_ADMIN.error = friendlyError(err).msg;
        /* The raw message is what carries the server's wording; the friendly
           one has already been softened. */
        if (rdIsAuthError(err)) { adminGateLock(RD_ADMIN.error); return; }
      }
      renderAdmin();
    }

    function adminSwitchTab(key) {
      if (RD_ADMIN.tab === key) return;
      if (!adminTabAllowed(key)) return;
      RD_ADMIN.tab = key;
      /* Events and Committee have no DUPLICATE status; do not strand the view
         on a filter that can never match. */
      if (RD_ADMIN.status === 'DUPLICATE' && key !== 'registrations') RD_ADMIN.status = 'PENDING';
      RD_ADMIN.noteOpen = '';
      RD_ADMIN.nbEdit = '';
      RD_ADMIN.scEdit = '';
      RD_ADMIN.evEdit = '';
      RD_ADMIN.slEdit = '';
      RD_ADMIN.askWhat = '';
      RD_ADMIN.askId = '';
      loadAdminDashboard();
    }

    function adminSetStatus(status) {
      RD_ADMIN.status = status;
      RD_ADMIN.noteOpen = '';
      renderAdmin();
    }

    function adminStatusChip(status) {
      const map = {
        PENDING:  'bg-amber-50 border-amber-200 text-amber-700',
        DUPLICATE: 'bg-orange-100 border-orange-300 text-orange-800',
        APPROVED: 'bg-emerald-50 border-emerald-200 text-emerald-700',
        REJECTED: 'bg-rose-50 border-rose-200 text-rose-700'
      };
      return '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
        (map[status] || 'bg-slate-100 border-slate-200 text-slate-600') + '">' + escapeHtml(status || 'UNKNOWN') + '</span>';
    }

    function adminCard(r) {
      const busy = RD_ADMIN.busy === r.id;
      const noteOn = RD_ADMIN.noteOpen === r.id;
      const rows = r.meta.filter(m => String(m[1] || '').trim() !== '')
        .map(m => '<div class="flex gap-2 min-w-0"><span class="w-28 shrink-0 text-[11px] font-extrabold uppercase tracking-wide text-slate-400">' +
          escapeHtml(m[0]) + '</span><span class="text-xs font-semibold text-slate-700 break-words min-w-0">' +
          escapeHtml(String(m[1])) + '</span></div>').join('');

      const thumb = String(r.photo || '').trim()
        ? '<img src="' + escapeHtml(r.photo) + '" alt="' + escapeHtml(r.title) + '" loading="lazy" ' +
          'class="w-16 h-16 rounded-2xl object-cover border border-slate-200 shrink-0" ' +
          'onerror="rdPhotoFallback(this)"/>'
        : '<div class="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center text-slate-400"><i data-lucide="image" class="w-5 h-5"></i></div>';

      const act = (label, icon, cls, fn) =>
        '<button type="button" ' + (busy ? 'disabled ' : '') + 'onclick="' + fn + '" ' +
        'class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ' +
        (busy ? 'opacity-50 pointer-events-none ' : '') + cls + '">' +
        '<i data-lucide="' + icon + '" class="w-3.5 h-3.5"></i> ' + label + '</button>';

      let buttons = '';
      if (r.status !== 'APPROVED') {
        buttons += act('Approve', 'check-circle-2',
          'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
          "adminApprove('" + r.id + "')");
      }
      if (r.status !== 'REJECTED') {
        buttons += act(noteOn ? 'Cancel' : 'Reject', noteOn ? 'x' : 'circle-x',
          'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
          "adminToggleNote('" + r.id + "')");
      }
      if (r.kind === 'events' && (r.status === 'APPROVED' || r.status === 'PENDING')) {
        buttons += act(RD_ADMIN.evEdit === r.id ? 'Close the form' : 'Edit the details',
          RD_ADMIN.evEdit === r.id ? 'x' : 'pencil',
          'bg-white border-slate-300 text-slate-700 hover:bg-slate-50',
          "adminEventEdit('" + r.id + "')");
      }
      if (r.kind === 'events' && r.status === 'APPROVED') {
        /* The public list shows APPROVED only, so hiding is a move back to
           PENDING -- no new Status value is ever written to the sheet. */
        buttons += act('Hide from the site', 'eye-off',
          'bg-white border-amber-200 text-amber-700 hover:bg-amber-50',
          "adminAsk('evHide','" + r.id + "')");
        buttons += act(r.featured ? 'Unfeature' : 'Feature', 'star',
          r.featured ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700'
                     : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
          "adminToggleFeatured('" + r.id + "'," + (r.featured ? 'false' : 'true') + ")");
      }

      /* The committee backend refuses an empty reason, so saying "optional"
         there meant every rejection silently failed and the row stayed
         PENDING. The label now matches what the server will accept. */
      const noteMust = r.kind === 'committee';
      const noteBox = noteOn
        ? '<div class="mt-4 rounded-2xl border border-rose-200 bg-rose-50/60 p-4">' +
            '<label class="block text-xs font-extrabold text-rose-800 mb-2" for="admin-note-' + escapeHtml(r.id) + '">Reason for rejection ' + (noteMust ? '(required)' : '(optional)') + '</label>' +
            '<textarea id="admin-note-' + escapeHtml(r.id) + '" rows="2" class="form-input" placeholder="Write a short reason. The applicant may see this."></textarea>' +
            '<button type="button" onclick="adminReject(\'' + r.id + '\')" class="mt-3 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-extrabold hover:bg-rose-700 cursor-pointer"><i data-lucide="circle-x" class="w-3.5 h-3.5"></i> Confirm rejection</button>' +
          '</div>'
        : '';

      return '' +
      '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6">' +
        '<div class="flex items-start gap-4">' +
          thumb +
          '<div class="min-w-0 flex-1">' +
            '<div class="flex flex-wrap items-center gap-2">' +
              '<h4 class="font-extrabold text-base text-slate-900 break-words">' + escapeHtml(r.title) + '</h4>' +
              adminStatusChip(r.status) +
              (r.kind === 'events' && r.featured ? '<span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-extrabold"><i data-lucide="star" class="w-3 h-3"></i> Featured</span>' : '') +
            '</div>' +
            (r.subtitle ? '<p class="text-xs font-bold text-slate-500 mt-1">' + escapeHtml(r.subtitle) + '</p>' : '') +
            '<p class="text-[11px] font-mono font-bold text-slate-400 mt-1">' + escapeHtml(r.id) + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">' + rows + '</div>' +
        (r.status === 'DUPLICATE'
          ? '<p class="mt-4 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2 leading-relaxed"><span class="font-extrabold">Possible repeat application.</span> The same name, mobile number or email already appears on the list. Check the directory first: approve it only if this is a different person, otherwise reject it with a short note.</p>'
          : '') +
        (String(r.note || '').trim()
          ? '<p class="mt-4 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 break-words"><span class="font-extrabold text-slate-500">Admin note:</span> ' + escapeHtml(r.note) + '</p>'
          : '') +
        (buttons ? '<div class="mt-5 flex flex-wrap gap-2">' + buttons + '</div>' : '') +
        noteBox +
        adminEventEditBox(r) +
      '</article>';
    }

    function adminRenderTabs() {
      const box = document.getElementById('admin-tabs');
      if (!box) return;
      const counts = {};
      const tabs = adminTabList();
      tabs.forEach(t => {
        const list = RD_ADMIN.rows[t.key];
        /* A duplicate also waits on the admin, so the badge counts it. */
        counts[t.key] = (list && !t.custom)
          ? list.filter(r => r.status === 'PENDING' || r.status === 'DUPLICATE').length
          : null;
      });
      box.innerHTML = tabs.map(t => {
        const on = RD_ADMIN.tab === t.key;
        const badge = counts[t.key] ? '<span class="ml-auto inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-lg text-[11px] font-extrabold ' +
          (on ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700') + '">' + counts[t.key] + '</span>' : '';
        return '<button type="button" onclick="adminSwitchTab(\'' + t.key + '\')" ' +
          'class="flex items-center gap-2 px-4 py-3 rounded-2xl border text-xs font-extrabold transition cursor-pointer text-left ' +
          (on ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700') + '">' +
          '<i data-lucide="' + t.icon + '" class="w-4 h-4 shrink-0"></i><span class="min-w-0 truncate">' + t.label + '</span>' + badge +
        '</button>';
      }).join('');
    }

    function adminRenderFilters() {
      const box = document.getElementById('admin-filters');
      if (!box) return;
      /* PENDING / APPROVED / REJECTED mean nothing on a notice or a summary,
         so those tabs keep the Refresh button and drop the rest. */
      if (adminTabMeta(RD_ADMIN.tab).custom) {
        box.innerHTML = '<button type="button" onclick="loadAdminDashboard(true)" class="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-600 hover:border-blue-300 hover:text-blue-700 transition cursor-pointer"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Refresh</button>';
        return;
      }
      const c = adminCounts();
      const loaded = !!RD_ADMIN.rows[RD_ADMIN.tab];
      box.innerHTML = adminStatusList().map(s => {
        const on = RD_ADMIN.status === s;
        return '<button type="button" onclick="adminSetStatus(\'' + s + '\')" ' +
          'class="px-3.5 py-2 rounded-xl border text-[11px] font-extrabold tracking-wide transition cursor-pointer ' +
          (on ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400') + '">' +
          s + (loaded ? ' (' + (c[s] || 0) + ')' : '') + '</button>';
      }).join('') +
      '<button type="button" onclick="loadAdminDashboard(true)" class="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-600 hover:border-blue-300 hover:text-blue-700 transition cursor-pointer"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Refresh</button>';
    }

    function adminInfoBox(icon, title, body, tone) {
      const map = {
        error: 'border-rose-200 bg-rose-50 text-rose-800',
        empty: 'border-slate-200 bg-white text-slate-600'
      };
      return '<div class="rounded-3xl border ' + (map[tone] || map.empty) + ' p-8 text-center">' +
        '<div class="w-14 h-14 mx-auto rounded-2xl bg-white/70 border border-current/10 flex items-center justify-center mb-4">' +
        '<i data-lucide="' + icon + '" class="w-7 h-7"></i></div>' +
        '<p class="font-extrabold">' + escapeHtml(title) + '</p>' +
        '<p class="mt-2 text-sm font-semibold leading-relaxed max-w-md mx-auto opacity-80">' + escapeHtml(body) + '</p>' +
        (tone === 'error' ? '<button type="button" onclick="loadAdminDashboard(true)" class="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-extrabold hover:bg-rose-700 cursor-pointer"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Try again</button>' : '') +
      '</div>';
    }

    function renderAdmin() {
      adminRenderTabs();
      adminRenderFilters();
      const st = document.getElementById('admin-auth-status');
      if (st) {
        st.innerHTML = RD_ADMIN.state === 'ready'
          ? '<span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Signed in as admin' +
            (RD_ADMIN.admin ? ': ' + escapeHtml(RD_ADMIN.admin) : '') + '</span>'
          : (RD_ADMIN.state === 'error'
            ? '<span class="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-lg"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Admin access could not be verified</span>'
            : '<span class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg"><i data-lucide="loader" class="w-3.5 h-3.5"></i> Checking admin access\u2026</span>');
      }

      const box = document.getElementById('admin-events-list');
      if (box) {
        if (RD_ADMIN.state === 'loading') {
          box.innerHTML = '<div class="space-y-4">' +
            '<div class="h-32 rounded-3xl bg-slate-100 animate-pulse"></div>' +
            '<div class="h-32 rounded-3xl bg-slate-100 animate-pulse"></div>' +
            '<div class="h-32 rounded-3xl bg-slate-100 animate-pulse"></div></div>';
        } else if (RD_ADMIN.state === 'error') {
          box.innerHTML = adminInfoBox('shield-alert', 'This list could not be loaded',
            RD_ADMIN.error || 'Please sign in with the admin Google account and try again.', 'error');
        } else if (adminTabMeta(RD_ADMIN.tab).custom) {
          box.innerHTML = adminCustomHtml(RD_ADMIN.tab);
        } else {
          const rows = adminRows();
          box.innerHTML = rows.length
            ? rows.map(adminCard).join('')
            : adminInfoBox('inbox', 'Nothing here right now',
                RD_ADMIN.status === 'DUPLICATE'
                  ? 'No repeat applications are waiting. Anything the system flags as a possible duplicate shows up here.'
                  : 'No ' + adminTabMeta(RD_ADMIN.tab).label.toLowerCase() + ' with status ' + RD_ADMIN.status + '.', 'empty');
        }
      }
      lucide.createIcons();
    }

    /* ================= ADMIN: NOTICES, SOCIAL CORNER, SUMMARY ==========
       These three tabs are not approval queues, so they carry their own
       renderers instead of adminCard(). Everything still goes through the
       same requireAdmin_() gate on the server; no email is ever sent from
       the browser and none comes back.                                   */

    /* The three approval tabs answer with res.data and get normalised; the
       new ones answer with res.rows and are used as they are, plus an `id`
       alias so adminFind() keeps working for all six. */
    async function adminLoadCustom(tab) {

      if (tab === 'summary') {
        /* The member count is the approved directory, which the public feed
           already carries -- no extra admin call for something visitors can
           see anyway. The application counts come from the queue. */
        if (!alumniData.length) await loadPublicAlumni();
        if (!RD_ADMIN.rows.registrations) {
          const res = await apiGet('getadminregistrations', {});
          const raw = Array.isArray(res.data) ? res.data : [];
          RD_ADMIN.rows.registrations = raw.map(r => adminNormalize('registrations', r)).filter(r => r.id);
        }
        return [{ id: 'summary' }];
      }

      if (tab === 'activity') {
        /* The log is one flat list, newest first, and nothing on the card is
           pressable -- so a running index is all the id it needs. */
        const res = await apiGet('getadminactivity', {});
        const rows = Array.isArray(res.rows) ? res.rows : [];
        return rows.map((r, i) => Object.assign({}, r, { id: 'act-' + i }));
      }

      const res = await apiGet(adminTabMeta(tab).action, {});
      const rows = Array.isArray(res.rows) ? res.rows : [];
      return rows.map(r => Object.assign({}, r, { id: String(r.noticeId || r.postId || r.slideId || r.lineId || r.updateId || '').trim() }))
                 .filter(r => r.id);
    }

    function adminCustomHtml(tab) {
      if (tab === 'notices') return adminNoticesHtml();
      if (tab === 'social') return adminSocialHtml();
      if (tab === 'slides') return adminSlidesHtml();
      if (tab === 'pdacc') return adminPdaccHtml();
      if (tab === 'activity') return adminActivityHtml();
      return adminSummaryHtml();
    }

    /* ---------- Edit History tab ---------------------------------------
       Read only. Every admin function on the server passes through
       rdRequireRole_(), which writes one line per change, so this tab is
       simply that sheet turned around: newest first, one card per line.
       Nothing here can be pressed, because nothing here should be edited. */
    function adminActivityRowHtml(r) {
      const verb = String(r.action || '');
      const tone = /delete|remove|reject|clear/i.test(verb)
        ? 'bg-rose-50 text-rose-700 border-rose-200'
        : (/approve|publish|add|create|upload/i.test(verb)
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : 'bg-blue-50 text-blue-700 border-blue-200');

      return '<li class="rounded-2xl border border-slate-200 bg-white px-4 py-3.5">' +
        '<div class="flex flex-wrap items-center gap-2">' +
          '<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' + tone + '">' +
            escapeHtml(verb || 'change') + '</span>' +
          (r.section ? '<span class="text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">' + escapeHtml(r.section) + '</span>' : '') +
          '<span class="ml-auto text-[11px] font-bold text-slate-400 tabular-nums">' + escapeHtml(r.when || '') + '</span>' +
        '</div>' +
        (r.item ? '<p class="mt-2 text-sm font-bold text-slate-800 break-words">' + escapeHtml(r.item) + '</p>' : '') +
        '<p class="mt-1.5 text-[11px] font-semibold text-slate-500 break-words">' +
          '<i data-lucide="user" class="w-3 h-3 inline-block align-[-1px]"></i> ' + escapeHtml(r.email || 'unknown') +
          (r.role ? ' &middot; ' + escapeHtml(r.role) : '') + '</p>' +
        (r.detail ? '<p class="mt-1.5 text-[11px] text-slate-400 leading-relaxed break-words">' + escapeHtml(r.detail) + '</p>' : '') +
      '</li>';
    }

    function adminActivityHtml() {
      const rows = Array.isArray(RD_ADMIN.rows.activity) ? RD_ADMIN.rows.activity : [];
      const inner = rows.length
        ? '<ul class="mt-5 space-y-2.5">' + rows.map(adminActivityRowHtml).join('') + '</ul>'
        : '<div class="mt-5">' + adminInfoBox('history', 'Nothing recorded yet',
            'Every change an admin makes shows up here with the date and time. The list fills up as the panel is used.', 'empty') + '</div>';

      return adminPanelShell('history', 'Edit History',
        'Who changed or removed what, newest first. This list is written by the server and cannot be edited here.',
        inner);
    }

    /* A small, consistent set of buttons for these tabs. */
    function adminMiniBtn(label, icon, cls, onclick, busy) {
      return '<button type="button" ' + (busy ? 'disabled ' : 'onclick="' + onclick + '" ') +
        'class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-extrabold border transition cursor-pointer ' +
        (busy ? 'opacity-50 pointer-events-none ' : '') + cls + '">' +
        '<i data-lucide="' + icon + '" class="w-3.5 h-3.5"></i> ' + label + '</button>';
    }

    function adminPanelShell(icon, title, hint, inner) {
      return '<section class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7">' +
        '<div class="flex items-start gap-3">' +
          '<div class="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">' +
            '<i data-lucide="' + icon + '" class="w-5 h-5 text-blue-600"></i></div>' +
          '<div class="min-w-0">' +
            '<h3 class="text-lg font-extrabold text-slate-900 font-display tracking-tight">' + escapeHtml(title) + '</h3>' +
            '<p class="text-xs font-semibold text-slate-500 mt-0.5 leading-relaxed">' + escapeHtml(hint) + '</p>' +
          '</div>' +
        '</div>' + inner +
      '</section>';
    }

    /* A destructive button asks first, and it asks inside the card: the site
       carries no popups anywhere, and a browser confirm box is still a popup.
       So the row arms itself and grows a red strip instead. */
    function adminAsk(what, id) { RD_ADMIN.askWhat = what; RD_ADMIN.askId = id; renderAdmin(); }
    function adminAskClear() { RD_ADMIN.askWhat = ''; RD_ADMIN.askId = ''; renderAdmin(); }
    function adminAskArmed(what, id) { return RD_ADMIN.askWhat === what && RD_ADMIN.askId === id; }

    function adminConfirmStrip(text, yesLabel, yesOnclick) {
      return '<div class="mt-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3">' +
        '<p class="text-xs font-bold text-rose-800 leading-relaxed">' + escapeHtml(text) + '</p>' +
        '<div class="mt-2.5 flex flex-wrap gap-2">' +
          '<button type="button" onclick="' + yesOnclick + '" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 text-white text-[11px] font-extrabold hover:bg-rose-700 cursor-pointer"><i data-lucide="check" class="w-3.5 h-3.5"></i> ' + escapeHtml(yesLabel) + '</button>' +
          '<button type="button" onclick="adminAskClear()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-[11px] font-extrabold hover:bg-slate-50 cursor-pointer"><i data-lucide="x" class="w-3.5 h-3.5"></i> Cancel</button>' +
        '</div></div>';
    }

    /* ---------- Home Slideshow tab ------------------------------------
       The pictures that turn under the Welcome text on the home page. The
       sheet leads only when it has rows: an empty tab means the home page
       keeps showing exactly the pictures it shows today. */
    function adminSlRow(id) {
      return (RD_ADMIN.rows.slides || []).find(r => r.id === id) || null;
    }

    /* The same tab controls both bars. Only the folder differs, and the
       folder is decided in the backend, so nothing here needs an id. */
    const RD_SL_PLACES_UI = [
      { key: 'home',  label: 'Home page',  page: 'home page',  folder: 'RANGDHANU Home' },
      { key: 'pdacc', label: 'PDACC page', page: 'PDACC page', folder: 'RANGDHANU PDACC' }
    ];

    function adminSlPlace() {
      const p = String(RD_ADMIN.slPlace || 'home');
      return RD_SL_PLACES_UI.some(x => x.key === p) ? p : 'home';
    }
    function adminSlPlaceMeta(key) {
      return RD_SL_PLACES_UI.find(x => x.key === (key || adminSlPlace())) || RD_SL_PLACES_UI[0];
    }
    /* A picture saved before this tab knew about places belongs to the home
       bar -- that is where every one of them used to go. */
    function adminSlPlaceOf(row) {
      return String((row && row.place) || 'home') === 'pdacc' ? 'pdacc' : 'home';
    }
    function adminSlRowsOf(place) {
      const want = place || adminSlPlace();
      return (RD_ADMIN.rows.slides || []).filter(r => adminSlPlaceOf(r) === want);
    }
    function adminSlidePlace(place) {
      RD_ADMIN.slPlace = place;
      RD_ADMIN.slEdit = '';
      RD_ADMIN.askWhat = '';
      renderAdmin();
    }

    function adminSlPlaceSwitch() {
      const now = adminSlPlace();
      return '<div class="flex flex-wrap gap-2">' + RD_SL_PLACES_UI.map(p => {
        const on = p.key === now;
        return '<button type="button" onclick="adminSlidePlace(\'' + p.key + '\')" ' +
          'class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-[11px] font-extrabold border transition cursor-pointer ' +
          (on ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50') +
          '"><i data-lucide="' + (p.key === 'home' ? 'house' : 'book-open') + '" class="w-3.5 h-3.5"></i> ' +
          p.label + ' <span class="opacity-70">(' + adminSlRowsOf(p.key).length + ')</span></button>';
      }).join('') + '</div>';
    }

    function adminSlideForm() {
      const editing = RD_ADMIN.slEdit ? adminSlRow(RD_ADMIN.slEdit) : null;
      const shown = editing ? editing.show !== 'NO' : true;
      const place = editing ? adminSlPlaceOf(editing) : adminSlPlace();
      const meta = adminSlPlaceMeta(place);
      const inner =
        (editing && editing.url
          ? '<div class="mt-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">' +
              '<img src="' + escapeHtml(editing.url) + '" alt="' + escapeHtml(editing.caption || editing.id) +
              '" class="w-full h-44 object-cover" onerror="rdPhotoFallback(this)"></div>'
          : '') +
        '<div class="mt-5 grid sm:grid-cols-2 gap-4">' +
          '<div><label class="form-label" for="sl-file">Picture' + (editing ? ' (leave it to keep the old one)' : ' *') + '</label>' +
            '<input id="sl-file" type="file" accept="image/*" class="form-input"></div>' +
          '<div><label class="form-label" for="sl-badge">Small label (optional)</label>' +
            '<input id="sl-badge" class="form-input" maxlength="60" placeholder="RANGDHANU &bull; DUET" value="' +
              escapeHtml(editing ? editing.badge : '') + '"></div>' +
        '</div>' +
        '<div class="mt-4"><label class="form-label" for="sl-place">Which slideshow</label>' +
          '<select id="sl-place" class="form-input">' + RD_SL_PLACES_UI.map(p =>
            '<option value="' + p.key + '"' + (p.key === place ? ' selected' : '') + '>' +
              p.label + '</option>').join('') + '</select></div>' +
        '<div class="mt-4"><label class="form-label" for="sl-caption">Headline on the picture (optional)</label>' +
          '<input id="sl-caption" class="form-input" maxlength="160" placeholder="Write it in your own words." value="' +
            escapeHtml(editing ? editing.caption : '') + '"></div>' +
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-slate-600 cursor-pointer">' +
          '<input id="sl-show" type="checkbox" class="w-4 h-4 accent-blue-600"' + (shown ? ' checked' : '') +
          '> Show this slide on the ' + meta.page + '</label>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="sl-save" type="button" onclick="adminSlideSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> ' + (editing ? 'Save the changes' : 'Add the slide') + '</button>' +
          (editing
            ? '<button type="button" onclick="adminSlideNew()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>'
            : '') +
        '</div>';
      return adminPanelShell('images',
        editing ? 'Editing ' + (editing.fileName || editing.id)
                : 'Add a picture to the ' + meta.label + ' slideshow',
        'Everything already in the ' + meta.folder + ' folder on Drive is listed below, so nothing has to be '
        + 'uploaded twice. Untick a picture to take it off the ' + meta.page + ' and tick it again to bring it back. '
        + 'A wide picture looks best; large files are shrunk on the way up, so no size error ever reaches you.',
        inner);
    }

    function adminSlideNew() { RD_ADMIN.slEdit = ''; renderAdmin(); }
    function adminSlideEdit(id) { RD_ADMIN.slEdit = id; renderAdmin(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

    async function adminSlideSave() {
      const fileEl = document.getElementById('sl-file');
      if (!fileEl || RD_ADMIN.busy) return;
      const file = (fileEl.files || [])[0] || null;
      const caption = String((document.getElementById('sl-caption') || {}).value || '').trim();
      const badge = String((document.getElementById('sl-badge') || {}).value || '').trim();
      const show = !!(document.getElementById('sl-show') || {}).checked;
      const editing = RD_ADMIN.slEdit;

      if (!editing && !file) {
        showToast('Please choose the picture for this slide.', 'error', 'A picture is needed', { backTo: 'admin' });
        return;
      }

      RD_ADMIN.busy = editing || 'new';
      const btn = document.getElementById('sl-save');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const place = String((document.getElementById('sl-place') || {}).value || adminSlPlace());
        const data = { slideId: editing || '', place: place, caption: caption,
                       badge: badge, show: show ? 'YES' : 'NO' };
        /* 1900px wide is what the home slideshow asks Drive for, so anything
           larger is only weight. The shrink happens here, in the browser. */
        if (file) data.file = await filePayload(file, 1900);
        const r = await apiPost('saveslide', { data: data });
        RD_ADMIN.slEdit = '';
        RD_ADMIN.slPlace = place;
        RD_ADMIN.busy = '';
        RD_SL.ready = false;
        loadHomeSlides();
        showToast(r.message || 'The slide is saved.', 'success', 'Slide saved', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'The slide was not saved', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminSlideShow(id, on) {
      const row = adminSlRow(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      RD_ADMIN.askWhat = '';
      renderAdmin();
      try {
        const r = await apiPost('setslideshow', { slideId: id, show: on ? 'YES' : 'NO' });
        row.show = on ? 'YES' : 'NO';
        RD_ADMIN.busy = '';
        RD_SL.ready = false;
        loadHomeSlides();
        showToast(r.message || (on ? 'The slide is showing.' : 'The slide is hidden.'),
          'success', on ? 'Slide showing' : 'Slide hidden', { backTo: 'admin' });
        renderAdmin();
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'That did not change', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminSlideMove(id, dir) {
      const rows = RD_ADMIN.rows.slides || [];
      const at = rows.findIndex(r => r.id === id);
      if (at < 0 || RD_ADMIN.busy) return;
      /* The neighbour is the next picture on the same bar, exactly as the
         backend re-numbers the order inside one place only. */
      const place = adminSlPlaceOf(rows[at]);
      const step = dir === 'UP' ? -1 : 1;
      let to = -1;
      for (let n = at + step; n >= 0 && n < rows.length; n += step) {
        if (adminSlPlaceOf(rows[n]) === place) { to = n; break; }
      }
      if (to < 0 || to >= rows.length) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        await apiPost('moveslide', { slideId: id, dir: dir });
        /* The list is re-ordered here as well, so the card visibly moves
           before the refetch lands. */
        const moved = rows.splice(at, 1)[0];
        rows.splice(to, 0, moved);
        RD_ADMIN.busy = '';
        RD_SL.ready = false;
        loadHomeSlides();
        renderAdmin();
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'The order did not change', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminSlideDelete(id) {
      if (RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      RD_ADMIN.askWhat = '';
      renderAdmin();
      try {
        const r = await apiPost('deleteslide', { slideId: id });
        RD_ADMIN.rows.slides = (RD_ADMIN.rows.slides || []).filter(x => x.id !== id);
        RD_ADMIN.busy = '';
        RD_SL.ready = false;
        loadHomeSlides();
        showToast(r.message || 'The slide is removed.', 'success', 'Slide removed', { backTo: 'admin' });
        renderAdmin();
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'The slide was not removed', { backTo: 'admin' });
        renderAdmin();
      }
    }

    function adminSlideItem(r, i, all) {
      const busy = RD_ADMIN.busy === r.id;
      const on = r.show !== 'NO';
      const first = i === 0;
      const last = i === all.length - 1;
      return '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        '<div class="flex flex-wrap items-center gap-2">' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border bg-indigo-50 border-indigo-200 text-indigo-700 text-[11px] font-extrabold">' +
            '<i data-lucide="hash" class="w-3 h-3"></i>Position ' + (i + 1) + '</span>' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
            (on ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-slate-100 border-slate-200 text-slate-500') + '">' +
            '<i data-lucide="' + (on ? 'eye' : 'eye-off') + '" class="w-3 h-3"></i>' + (on ? 'Showing' : 'Hidden') + '</span>' +
          '<span class="ml-auto text-[11px] font-extrabold text-slate-400 truncate max-w-[14rem]">' +
            escapeHtml(r.fileName || '') + '</span>' +
        '</div>' +
        '<div class="mt-3 flex gap-4">' +
          '<div class="w-28 sm:w-40 shrink-0 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">' +
            (r.url
              ? '<img src="' + escapeHtml(r.url) + '" alt="' + escapeHtml(r.caption || r.id) +
                '" class="w-full h-20 sm:h-24 object-cover" loading="lazy" onerror="rdPhotoFallback(this)">'
              : '<div class="w-full h-20 sm:h-24 flex items-center justify-center text-slate-300"><i data-lucide="image-off" class="w-6 h-6"></i></div>') +
          '</div>' +
          '<div class="min-w-0">' +
            (String(r.badge || '').trim()
              ? '<p class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">' + escapeHtml(r.badge) + '</p>' : '') +
            '<p class="mt-0.5 text-sm font-extrabold text-slate-900 leading-snug break-words">' +
              escapeHtml(String(r.caption || '').trim() || 'No headline on this one') + '</p>' +
            '<p class="mt-1 text-[11px] font-semibold text-slate-400 break-words">' + escapeHtml(r.fileName || '') + '</p>' +
          '</div>' +
        '</div>' +
        /* A tick box, not a button: this is the one control that has to be
           readable at a glance across a whole folder of pictures. */
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold cursor-pointer ' +
          (on ? 'text-emerald-700' : 'text-slate-500') + '">' +
          '<input type="checkbox" class="w-4 h-4 accent-emerald-600"' +
            (on ? ' checked' : '') + (busy ? ' disabled' : '') +
            ' onchange="adminSlideShow(\'' + r.id + '\', this.checked)">' +
          (on ? 'Showing on the ' + adminSlPlaceMeta(adminSlPlaceOf(r)).page
              : 'Not showing on the ' + adminSlPlaceMeta(adminSlPlaceOf(r)).page) +
        '</label>' +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          adminMiniBtn('Move up', 'arrow-up', 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50',
            "adminSlideMove('" + r.id + "','UP')", busy || first) +
          adminMiniBtn('Move down', 'arrow-down', 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50',
            "adminSlideMove('" + r.id + "','DOWN')", busy || last) +
          adminMiniBtn('Edit', 'pencil', 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
            "adminSlideEdit('" + r.id + "')", busy) +
          adminMiniBtn('Delete', 'trash-2', 'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
            "adminAsk('slDel','" + r.id + "')", busy) +
        '</div>' +
        (adminAskArmed('slDel', r.id)
          ? adminConfirmStrip('Delete this picture from Drive? To take it off the '
              + adminSlPlaceMeta(adminSlPlaceOf(r)).page + ' only, '
              + 'untick the box instead. The file goes to the Drive bin, so it can still be brought back.',
              'Yes, delete it', "adminSlideDelete('" + r.id + "')")
          : '') +
      '</article>';
    }

    function adminSlidesHtml() {
      const rows = adminSlRowsOf();
      const meta = adminSlPlaceMeta();
      return '<div class="space-y-4">' + adminSlPlaceSwitch() + adminSlideForm() +
        (rows.length
          ? rows.map((r, i) => adminSlideItem(r, i, rows)).join('')
          : adminInfoBox('images', 'No picture was found in the folder',
              'This slideshow reads the ' + meta.folder + ' folder on Drive. Nothing was read from it just now, '
              + 'so the ' + meta.page + ' is showing the pictures that came with the site. Add one above and it appears here.', 'empty')) +
      '</div>';
    }

    /* ---------- Notices tab ---------- */
    function adminNbRow(id) {
      return (RD_ADMIN.rows.notices || []).find(r => r.id === id) || null;
    }

    function adminNoticeForm() {
      const editing = RD_ADMIN.nbEdit ? adminNbRow(RD_ADMIN.nbEdit) : null;
      const kind = editing ? (editing.kind === 'TEXT' ? 'TEXT' : 'FILE') : 'FILE';
      const isText = kind === 'TEXT';
      const shown = editing ? editing.show !== 'NO' : true;
      const inner =
        '<div class="mt-5 grid sm:grid-cols-2 gap-4">' +
          '<div><label class="form-label" for="nb-kind">What kind of notice</label>' +
            '<select id="nb-kind" class="form-input" onchange="adminNoticeKind(this.value)">' +
              '<option value="FILE"' + (isText ? '' : ' selected') + '>A notice with a file (PDF or image)</option>' +
              '<option value="TEXT"' + (isText ? ' selected' : '') + '>A short line for the scrolling bar</option>' +
            '</select></div>' +
          '<div id="nb-file-wrap" class="' + (isText ? 'hidden' : '') + '">' +
            '<label class="form-label" for="nb-file">The file' + (editing && editing.fileUrl ? ' (leave empty to keep the current one)' : '') + '</label>' +
            '<input id="nb-file" type="file" accept="application/pdf,image/*" class="form-input"></div>' +
        '</div>' +
        '<div id="nb-title-wrap" class="mt-4 ' + (isText ? 'hidden' : '') + '">' +
          '<label class="form-label" for="nb-title">Notice title *</label>' +
          '<input id="nb-title" class="form-input" maxlength="180" placeholder="Reunion 2026 registration notice" value="' +
            escapeHtml(editing ? editing.title : '') + '"></div>' +
        '<div class="mt-4"><label class="form-label" for="nb-body"><span id="nb-body-label">' +
          (isText ? 'The scrolling line *' : 'A short line under the title (optional)') + '</span></label>' +
          '<textarea id="nb-body" rows="2" maxlength="300" class="form-input" placeholder="Keep it under 300 characters.">' +
            escapeHtml(editing ? editing.body : '') + '</textarea></div>' +
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-slate-600 cursor-pointer">' +
          '<input id="nb-show" type="checkbox" class="w-4 h-4 accent-blue-600"' + (shown ? ' checked' : '') + '> Show this on the website</label>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="nb-save" type="button" onclick="adminNoticeSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> ' + (editing ? 'Save the changes' : 'Publish the notice') + '</button>' +
          (editing
            ? '<button type="button" onclick="adminNoticeNew()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>'
            : '') +
        '</div>';
      return adminPanelShell('megaphone', editing ? 'Editing ' + editing.id : 'Add a notice',
        editing ? 'The file stays as it is unless you choose a new one.'
                : 'A file notice appears on the board. A short line runs across the scrolling bar instead.',
        inner);
    }

    /* The two shapes share one form, so switching between them must not throw
       away what has already been typed -- the fields are hidden, not redrawn. */
    function adminNoticeKind(kind) {
      const isText = kind === 'TEXT';
      const t = document.getElementById('nb-title-wrap');
      const f = document.getElementById('nb-file-wrap');
      const l = document.getElementById('nb-body-label');
      if (t) t.classList.toggle('hidden', isText);
      if (f) f.classList.toggle('hidden', isText);
      if (l) l.textContent = isText ? 'The scrolling line *' : 'A short line under the title (optional)';
    }

    function adminNoticeNew() { RD_ADMIN.nbEdit = ''; renderAdmin(); }
    function adminNoticeEdit(id) { RD_ADMIN.nbEdit = id; renderAdmin(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

    async function adminNoticeSave() {
      const kindEl = document.getElementById('nb-kind');
      if (!kindEl || RD_ADMIN.busy) return;
      const kind = kindEl.value === 'TEXT' ? 'TEXT' : 'FILE';
      const title = String((document.getElementById('nb-title') || {}).value || '').trim();
      const body = String((document.getElementById('nb-body') || {}).value || '').trim();
      const show = !!(document.getElementById('nb-show') || {}).checked;
      const file = ((document.getElementById('nb-file') || {}).files || [])[0] || null;
      const editing = RD_ADMIN.nbEdit;

      if (kind === 'FILE' && !title) {
        showToast('Please write the notice title.', 'error', 'A title is needed', { backTo: 'admin' });
        return;
      }
      if (kind === 'TEXT' && !body) {
        showToast('Please write the line that should scroll across the bar.', 'error', 'Nothing to show', { backTo: 'admin' });
        return;
      }
      if (kind === 'FILE' && !editing && !file) {
        showToast('Please choose the PDF or the image for this notice.', 'error', 'No file chosen', { backTo: 'admin' });
        return;
      }

      RD_ADMIN.busy = editing || 'new';
      const btn = document.getElementById('nb-save');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const data = { noticeId: editing || '', kind: kind, title: title, body: body, show: show ? 'YES' : 'NO' };
        /* filePayload leaves a PDF exactly as it is and only shrinks an image
           that is larger than 2400px, so the download stays high resolution. */
        if (kind === 'FILE' && file) data.file = await filePayload(file, 2400);
        const r = await apiPost('savenotice', { data: data });
        RD_ADMIN.nbEdit = '';
        RD_ADMIN.busy = '';
        RD_NB.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'The notice is saved.', 'success', 'Notice saved', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminNoticeShow(id, on) {
      const row = adminNbRow(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('setnoticeshow', { noticeId: id, show: on ? 'YES' : 'NO' });
        row.show = on ? 'YES' : 'NO';
        RD_NB.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'Saved.', 'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    async function adminNoticeDelete(id) {
      const row = adminNbRow(id);
      if (!row || RD_ADMIN.busy) return;
      /* Deleting also throws the Drive file away, so it is worth one question. */
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('deletenotice', { noticeId: id });
        RD_ADMIN.rows.notices = (RD_ADMIN.rows.notices || []).filter(x => x.id !== id);
        RD_ADMIN.askWhat = ''; RD_ADMIN.askId = '';
        if (RD_ADMIN.nbEdit === id) RD_ADMIN.nbEdit = '';
        RD_NB.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'The notice is removed.', 'success', 'Removed', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not remove', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    function adminNoticeItem(r) {
      const busy = RD_ADMIN.busy === r.id;
      const on = r.show !== 'NO';
      const isText = r.kind === 'TEXT';
      return '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        '<div class="flex flex-wrap items-center gap-2">' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
            (isText ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-blue-50 border-blue-200 text-blue-700') + '">' +
            '<i data-lucide="' + (isText ? 'scroll-text' : (r.fileType === 'pdf' ? 'file-text' : 'image')) + '" class="w-3 h-3"></i>' +
            (isText ? 'Scrolling line' : (r.fileType === 'pdf' ? 'PDF' : 'Image')) + '</span>' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
            (on ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-slate-100 border-slate-200 text-slate-500') + '">' +
            '<i data-lucide="' + (on ? 'eye' : 'eye-off') + '" class="w-3 h-3"></i>' + (on ? 'Showing' : 'Hidden') + '</span>' +
          '<span class="text-[11px] font-mono font-bold text-slate-400">' + escapeHtml(r.id) + '</span>' +
          '<span class="ml-auto text-[11px] font-extrabold text-slate-400">' + escapeHtml(rdNiceDate(r.postedDate)) + '</span>' +
        '</div>' +
        '<h4 class="mt-2.5 font-extrabold text-slate-900 break-words">' + escapeHtml(r.title || (isText ? r.body : '(no title)')) + '</h4>' +
        (String(r.body || '').trim() && r.title
          ? '<p class="mt-1 text-xs font-semibold text-slate-500 leading-relaxed break-words">' + escapeHtml(r.body) + '</p>'
          : '') +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          adminMiniBtn('Edit', 'pencil', 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
            "adminNoticeEdit('" + r.id + "')", busy) +
          adminMiniBtn(on ? 'Hide' : 'Show', on ? 'eye-off' : 'eye',
            on ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
               : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
            "adminNoticeShow('" + r.id + "'," + (on ? 'false' : 'true') + ")", busy) +
          (String(r.viewUrl || '').trim()
            ? '<a href="' + escapeHtml(r.viewUrl) + '" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-extrabold border bg-white border-slate-200 text-slate-600 hover:bg-slate-50"><i data-lucide="external-link" class="w-3.5 h-3.5"></i> Open the file</a>'
            : '') +
          adminMiniBtn('Delete', 'trash-2', 'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
            "adminAsk('nbDel','" + r.id + "')", busy) +
        '</div>' +
        (adminAskArmed('nbDel', r.id)
          ? adminConfirmStrip('Delete ' + r.id + ' for good? The uploaded file goes with it.',
              'Yes, delete it', "adminNoticeDelete('" + r.id + "')")
          : '') +
      '</article>';
    }

    function adminNoticesHtml() {
      const rows = RD_ADMIN.rows.notices || [];
      return '<div class="space-y-4">' + adminNoticeForm() +
        (rows.length
          ? rows.map(adminNoticeItem).join('')
          : adminInfoBox('megaphone', 'No notice yet', 'Whatever you publish above appears here and on the Notice page.', 'empty')) +
      '</div>';
    }

    /* ---------- Social Media Corner tab ---------- */
    function adminScRow(id) {
      return (RD_ADMIN.rows.social || []).find(r => r.id === id) || null;
    }

    function adminSocialForm() {
      const editing = RD_ADMIN.scEdit ? adminScRow(RD_ADMIN.scEdit) : null;
      const shown = editing ? editing.show !== 'NO' : true;
      const inner =
        '<div class="mt-5"><label class="form-label" for="sc-link">The link *</label>' +
          '<input id="sc-link" class="form-input" inputmode="url" placeholder="https://www.facebook.com/... or a news link" value="' +
            escapeHtml(editing ? editing.link : '') + '"></div>' +
        '<div class="mt-4 grid sm:grid-cols-2 gap-4">' +
          '<div><label class="form-label" for="sc-title">Headline (optional)</label>' +
            '<input id="sc-title" class="form-input" maxlength="180" placeholder="For a news link, the headline" value="' +
              escapeHtml(editing ? editing.title : '') + '"></div>' +
          '<div><label class="form-label" for="sc-image">Picture (optional)</label>' +
            '<input id="sc-image" type="file" accept="image/*" class="form-input"></div>' +
        '</div>' +
        '<div class="mt-4"><label class="form-label" for="sc-caption">Caption *</label>' +
          '<textarea id="sc-caption" rows="3" maxlength="600" class="form-input" placeholder="Write the caption in your own words.">' +
            escapeHtml(editing ? editing.caption : '') + '</textarea></div>' +
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-slate-600 cursor-pointer">' +
          '<input id="sc-show" type="checkbox" class="w-4 h-4 accent-blue-600"' + (shown ? ' checked' : '') + '> Show this in the corner</label>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="sc-save" type="button" onclick="adminSocialSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> ' + (editing ? 'Save the changes' : 'Add the post') + '</button>' +
          (editing
            ? '<button type="button" onclick="adminSocialNew()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>'
            : '') +
        '</div>';
      return adminPanelShell('share-2', editing ? 'Editing ' + editing.id : 'Add a post to the corner',
        'Facebook does not hand its pictures and captions to another site, so the caption is yours to write. Without a picture the card carries the Rangdhanu logo.',
        inner);
    }

    function adminSocialNew() { RD_ADMIN.scEdit = ''; renderAdmin(); }
    function adminSocialEdit(id) { RD_ADMIN.scEdit = id; renderAdmin(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

    async function adminSocialSave() {
      const linkEl = document.getElementById('sc-link');
      if (!linkEl || RD_ADMIN.busy) return;
      const link = String(linkEl.value || '').trim();
      const title = String((document.getElementById('sc-title') || {}).value || '').trim();
      const caption = String((document.getElementById('sc-caption') || {}).value || '').trim();
      const show = !!(document.getElementById('sc-show') || {}).checked;
      const image = ((document.getElementById('sc-image') || {}).files || [])[0] || null;
      const editing = RD_ADMIN.scEdit;

      if (!/^https?:\/\/\S+$/i.test(link)) {
        showToast('Please paste the full link, starting with https://', 'error', 'The link is not complete', { backTo: 'admin' });
        return;
      }
      if (!caption && !title) {
        showToast('Please write a caption for this post.', 'error', 'A caption is needed', { backTo: 'admin' });
        return;
      }

      RD_ADMIN.busy = editing || 'new';
      const btn = document.getElementById('sc-save');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const data = { postId: editing || '', link: link, title: title, caption: caption, show: show ? 'YES' : 'NO' };
        if (image) data.image = await filePayload(image, 1600);
        const r = await apiPost('savesocialpost', { data: data });
        RD_ADMIN.scEdit = '';
        RD_ADMIN.busy = '';
        RD_SC.state = 'idle';
        rdFeedForget('notices');
        RD_NB.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'The post is saved.', 'success', 'Post saved', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminSocialShow(id, on) {
      const row = adminScRow(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('setsocialpostshow', { postId: id, show: on ? 'YES' : 'NO' });
        row.show = on ? 'YES' : 'NO';
        RD_SC.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'Saved.', 'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    async function adminSocialDelete(id) {
      const row = adminScRow(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('deletesocialpost', { postId: id });
        RD_ADMIN.rows.social = (RD_ADMIN.rows.social || []).filter(x => x.id !== id);
        RD_ADMIN.askWhat = ''; RD_ADMIN.askId = '';
        if (RD_ADMIN.scEdit === id) RD_ADMIN.scEdit = '';
        RD_SC.state = 'idle';
        rdFeedForget('notices');
        showToast(r.message || 'The post is removed.', 'success', 'Removed', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not remove', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    function adminSocialItem(r) {
      const busy = RD_ADMIN.busy === r.id;
      const on = r.show !== 'NO';
      const gone = r.health === 'GONE';
      return '<article class="bg-white rounded-3xl border ' + (gone ? 'border-amber-300' : 'border-slate-200') + ' shadow-sm p-5">' +
        '<div class="flex flex-wrap items-center gap-2">' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
            (r.kind === 'NEWS' ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-sky-50 border-sky-200 text-sky-700') + '">' +
            '<i data-lucide="' + (r.kind === 'NEWS' ? 'newspaper' : 'facebook') + '" class="w-3 h-3"></i>' +
            (r.kind === 'NEWS' ? 'News' : 'Facebook') + '</span>' +
          '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
            (on ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-slate-100 border-slate-200 text-slate-500') + '">' +
            '<i data-lucide="' + (on ? 'eye' : 'eye-off') + '" class="w-3 h-3"></i>' + (on ? 'Showing' : 'Hidden') + '</span>' +
          '<span class="text-[11px] font-mono font-bold text-slate-400">' + escapeHtml(r.id) + '</span>' +
          '<span class="ml-auto text-[11px] font-extrabold text-slate-400">' + escapeHtml(rdNiceDate(r.postedDate)) + '</span>' +
        '</div>' +
        (String(r.title || '').trim()
          ? '<h4 class="mt-2.5 font-extrabold text-slate-900 break-words">' + escapeHtml(r.title) + '</h4>' : '') +
        (String(r.caption || '').trim()
          ? '<p class="mt-1.5 text-xs font-semibold text-slate-600 leading-relaxed break-words">' + escapeHtml(r.caption) + '</p>' : '') +
        '<p class="mt-2 text-[11px] font-semibold text-blue-600 break-all">' + escapeHtml(r.link) + '</p>' +
        /* The audit only ever hides a post it is sure about. This line is the
           "message in the panel" the admin asked for: the visitor sees nothing
           broken, the admin sees exactly what happened. */
        (gone
          ? '<p class="mt-3 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed"><span class="font-extrabold">This post could not be found on ' +
            escapeHtml(r.kind === 'NEWS' ? 'the news site' : 'Facebook') + '.</span> It has already been taken off the website, quietly. Update the link or delete the row.</p>'
          : '') +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          adminMiniBtn('Edit', 'pencil', 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
            "adminSocialEdit('" + r.id + "')", busy) +
          adminMiniBtn(on ? 'Hide' : 'Show', on ? 'eye-off' : 'eye',
            on ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
               : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
            "adminSocialShow('" + r.id + "'," + (on ? 'false' : 'true') + ")", busy) +
          '<a href="' + escapeHtml(r.link) + '" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-extrabold border bg-white border-slate-200 text-slate-600 hover:bg-slate-50"><i data-lucide="external-link" class="w-3.5 h-3.5"></i> Open the post</a>' +
          adminMiniBtn('Delete', 'trash-2', 'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
            "adminAsk('scDel','" + r.id + "')", busy) +
        '</div>' +
        (adminAskArmed('scDel', r.id)
          ? adminConfirmStrip('Remove ' + r.id + ' from the corner?',
              'Yes, remove it', "adminSocialDelete('" + r.id + "')")
          : '') +
      '</article>';
    }

    function adminSocialHtml() {
      const rows = RD_ADMIN.rows.social || [];
      return '<div class="space-y-4">' + adminSocialForm() +
        (rows.length
          ? rows.map(adminSocialItem).join('')
          : adminInfoBox('share-2', 'The corner is empty', 'Paste a Facebook or news link above and it appears on the Notice page.', 'empty')) +
      '</div>';
    }

    /* ---------- PDACC Page tab ----------------------------------------
       Two lists live in one tab because they belong to one page: the notice
       line that scrolls across the top, and the "Latest update" cards. A
       switch at the top decides which of the two the form is for, so the
       panel never shows two forms at once and nothing can be saved into the
       wrong list by accident. */
    const RD_PD_KINDS_UI = [
      { key: 'LINE',   label: 'Notice line',   icon: 'megaphone' },
      { key: 'UPDATE', label: 'Latest update', icon: 'newspaper' },
      { key: 'STATS',  label: 'A Proven Journey', icon: 'trending-up' }
    ];

    function adminPdKind() {
      const k = RD_ADMIN.pdKind;
      return (k === 'UPDATE' || k === 'STATS') ? k : 'LINE';
    }

    function adminPdKindMeta(kind) {
      return RD_PD_KINDS_UI.find(k => k.key === kind) || RD_PD_KINDS_UI[0];
    }

    function adminPdRowsOf(kind) {
      return (RD_ADMIN.rows.pdacc || []).filter(r => String(r.kind || '') === kind);
    }

    function adminPdRow(id) {
      return (RD_ADMIN.rows.pdacc || []).find(r => r.id === id) || null;
    }

    /* Switching the kind drops whatever was half-edited, on purpose: an
       update's title has nowhere to go in a one-line notice. */
    function adminPdaccKind(kind) {
      RD_ADMIN.pdKind = (kind === 'UPDATE' || kind === 'STATS') ? kind : 'LINE';
      RD_ADMIN.pdEdit = '';
      renderAdmin();
    }

    function adminPdaccNew() { RD_ADMIN.pdEdit = ''; renderAdmin(); }

    function adminPdaccEdit(id) {
      const row = adminPdRow(id);
      if (!row) return;
      RD_ADMIN.pdKind = String(row.kind || '') === 'UPDATE' ? 'UPDATE' : 'LINE';
      RD_ADMIN.pdEdit = id;
      renderAdmin();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function adminPdKindSwitch() {
      const now = adminPdKind();
      return '<div class="flex flex-wrap gap-2 mb-4">' +
        RD_PD_KINDS_UI.map(k =>
          '<button type="button" onclick="adminPdaccKind(\'' + k.key + '\')" ' +
            'class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-extrabold border cursor-pointer ' +
            (k.key === now
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-transparent text-white'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50') + '">' +
            '<i data-lucide="' + k.icon + '" class="w-3.5 h-3.5"></i> ' + k.label +
            (k.key === 'STATS' ? '' : '<span class="ml-1 opacity-70">(' + adminPdRowsOf(k.key).length + ')</span>') +
          '</button>').join('') +
      '</div>';
    }

    /* The scrolling line. One field and one switch -- anything longer than a
       sentence belongs in an update card, not on a moving ticker. */
    function adminPdLineForm() {
      const editing = RD_ADMIN.pdEdit ? adminPdRow(RD_ADMIN.pdEdit) : null;
      const row = editing && String(editing.kind || '') === 'LINE' ? editing : null;
      const shown = row ? row.show !== 'NO' : true;
      const inner =
        '<div class="mt-5"><label class="form-label" for="pd-text">The line *</label>' +
          '<input id="pd-text" class="form-input" maxlength="300" ' +
            'placeholder="Admission form collection starts on 1 September." value="' +
            escapeHtml(row ? row.text : '') + '"></div>' +
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-slate-600 cursor-pointer">' +
          '<input id="pd-show" type="checkbox" class="w-4 h-4 accent-blue-600"' +
          (shown ? ' checked' : '') + '> Show this on the PDACC page</label>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="pd-save" type="button" onclick="adminPdLineSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> ' + (row ? 'Save the changes' : 'Add the line') + '</button>' +
          (row
            ? '<button type="button" onclick="adminPdaccNew()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>'
            : '') +
        '</div>';
      return adminPanelShell('megaphone', row ? 'Editing ' + row.id : 'Add a notice line',
        'This scrolls across the top of the PDACC page. Keep it to one sentence; a line nobody can finish reading is a line nobody reads.',
        inner);
    }

    /* An update card: link, title, description, picture. Only the title is
       required -- a notice with nothing to link to is still worth posting, and
       without a picture the card carries the PDACC crest. */
    function adminPdUpdateForm() {
      const editing = RD_ADMIN.pdEdit ? adminPdRow(RD_ADMIN.pdEdit) : null;
      const row = editing && String(editing.kind || '') === 'UPDATE' ? editing : null;
      const shown = row ? row.show !== 'NO' : true;
      const inner =
        '<div class="mt-5"><label class="form-label" for="pd-title">Title *</label>' +
          '<input id="pd-title" class="form-input" maxlength="200" ' +
            'placeholder="Admission coaching, 2026 batch" value="' +
            escapeHtml(row ? row.title : '') + '"></div>' +
        '<div class="mt-4 grid sm:grid-cols-2 gap-4">' +
          '<div><label class="form-label" for="pd-link">Link (optional)</label>' +
            '<input id="pd-link" class="form-input" inputmode="url" placeholder="https://..." value="' +
              escapeHtml(row ? row.link : '') + '"></div>' +
          '<div><label class="form-label" for="pd-image">Picture (optional)</label>' +
            '<input id="pd-image" type="file" accept="image/*" class="form-input"></div>' +
        '</div>' +
        '<div class="mt-4"><label class="form-label" for="pd-desc">Description (optional)</label>' +
          '<textarea id="pd-desc" rows="3" maxlength="1500" class="form-input" placeholder="A few lines about this update.">' +
            escapeHtml(row ? row.description : '') + '</textarea></div>' +
        (row && String(row.image || '').trim()
          ? '<p class="mt-2 text-[11px] font-semibold text-slate-500">A picture is already on this update. Choosing a new one replaces it; leaving the box empty keeps it.</p>'
          : '') +
        '<label class="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-slate-600 cursor-pointer">' +
          '<input id="pd-ushow" type="checkbox" class="w-4 h-4 accent-blue-600"' +
          (shown ? ' checked' : '') + '> Show this in Latest update</label>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="pd-usave" type="button" onclick="adminPdUpdateSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> ' + (row ? 'Save the changes' : 'Add the update') + '</button>' +
          (row
            ? '<button type="button" onclick="adminPdaccNew()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>'
            : '') +
        '</div>';
      return adminPanelShell('newspaper', row ? 'Editing ' + row.id : 'Add a Latest update',
        'Eight of these slide sideways on the PDACC page; the rest wait behind View all, fifteen to a page. The picture is compressed here before it is sent.',
        inner);
    }

    function adminPdBadges(r, on) {
      return '<div class="flex flex-wrap items-center gap-2">' +
        '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
          (String(r.kind || '') === 'UPDATE'
            ? 'bg-violet-50 border-violet-200 text-violet-700'
            : 'bg-amber-50 border-amber-200 text-amber-700') + '">' +
          '<i data-lucide="' + adminPdKindMeta(r.kind).icon + '" class="w-3 h-3"></i>' +
          adminPdKindMeta(r.kind).label + '</span>' +
        '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold ' +
          (on ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-slate-100 border-slate-200 text-slate-500') + '">' +
          '<i data-lucide="' + (on ? 'eye' : 'eye-off') + '" class="w-3 h-3"></i>' + (on ? 'Showing' : 'Hidden') + '</span>' +
        '<span class="text-[11px] font-mono font-bold text-slate-400">' + escapeHtml(r.id) + '</span>' +
        '<span class="ml-auto text-[11px] font-extrabold text-slate-400">' + escapeHtml(rdNiceDate(r.postedDate)) + '</span>' +
      '</div>';
    }

    function adminPdLineItem(r) {
      const busy = RD_ADMIN.busy === r.id;
      const on = r.show !== 'NO';
      return '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        adminPdBadges(r, on) +
        '<p class="mt-2.5 font-extrabold text-slate-900 break-words">' + escapeHtml(r.text || '(empty)') + '</p>' +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          adminMiniBtn('Edit', 'pencil', 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
            "adminPdaccEdit('" + r.id + "')", busy) +
          adminMiniBtn(on ? 'Hide' : 'Show', on ? 'eye-off' : 'eye',
            on ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
               : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
            "adminPdLineShow('" + r.id + "'," + (on ? 'false' : 'true') + ")", busy) +
          adminMiniBtn('Delete', 'trash-2', 'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
            "adminAsk('pdDel','" + r.id + "')", busy) +
        '</div>' +
        (adminAskArmed('pdDel', r.id)
          ? adminConfirmStrip('Remove ' + r.id + ' from the PDACC page?',
              'Yes, remove it', "adminPdLineDelete('" + r.id + "')")
          : '') +
      '</article>';
    }

    function adminPdUpdateItem(r) {
      const busy = RD_ADMIN.busy === r.id;
      const on = r.show !== 'NO';
      const pic = String(r.image || '').trim();
      return '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        adminPdBadges(r, on) +
        '<div class="mt-3 flex gap-4">' +
          '<div class="w-20 h-20 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex-none flex items-center justify-center">' +
            '<img src="' + escapeHtml(pic || RD_PDACC_LOGO) + '" alt="" loading="lazy" decoding="async" ' +
              'onerror="rdPdCardFallback(this)" class="w-full h-full object-' + (pic ? 'cover' : 'contain p-2') + '">' +
          '</div>' +
          '<div class="min-w-0">' +
            '<h4 class="font-extrabold text-slate-900 break-words">' + escapeHtml(r.title || '(no title)') + '</h4>' +
            (String(r.description || '').trim()
              ? '<p class="mt-1.5 text-xs font-semibold text-slate-600 leading-relaxed break-words">' + escapeHtml(r.description) + '</p>'
              : '') +
            (String(r.link || '').trim()
              ? '<p class="mt-2 text-[11px] font-semibold text-blue-600 break-all">' + escapeHtml(r.link) + '</p>'
              : '<p class="mt-2 text-[11px] font-semibold text-slate-400">No link on this one.</p>') +
          '</div>' +
        '</div>' +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          adminMiniBtn('Edit', 'pencil', 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50',
            "adminPdaccEdit('" + r.id + "')", busy) +
          adminMiniBtn(on ? 'Hide' : 'Show', on ? 'eye-off' : 'eye',
            on ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
               : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
            "adminPdUpdateShow('" + r.id + "'," + (on ? 'false' : 'true') + ")", busy) +
          (String(r.link || '').trim()
            ? '<a href="' + escapeHtml(r.link) + '" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-extrabold border bg-white border-slate-200 text-slate-600 hover:bg-slate-50"><i data-lucide="external-link" class="w-3.5 h-3.5"></i> Open the link</a>'
            : '') +
          adminMiniBtn('Delete', 'trash-2', 'bg-white border-rose-200 text-rose-700 hover:bg-rose-50',
            "adminAsk('pdUDel','" + r.id + "')", busy) +
        '</div>' +
        (adminAskArmed('pdUDel', r.id)
          ? adminConfirmStrip('Delete ' + r.id + ' for good? The uploaded picture goes with it.',
              'Yes, delete it', "adminPdUpdateDelete('" + r.id + "')")
          : '') +
      '</article>';
    }

    /* ---------- A Proven Journey ------------------------------------------
       Five fields, one row in the sheet. This tab reads the same public
       endpoint the PDACC page reads, so what is shown here is exactly what a
       visitor sees. The figure is a free text box, not a number box: the page
       carries Bengali digits, and a number box would fight them. */
    async function adminPdStatsLoad() {
      if (RD_PDSTATS) return;
      try { await fetchPdaccStats(); renderAdmin(); }
      catch (err) {
        console.warn('[rd] pdaccstats:', err);
        RD_PDSTATS = {};
        renderAdmin();
      }
    }

    function adminPdStatsForm() {
      if (!RD_PDSTATS) {
        adminPdStatsLoad();
        return adminInfoBox('trending-up', 'Reading the figures',
          'Fetching what the PDACC page is showing right now.', 'empty');
      }
      const d = RD_PDSTATS;
      const box = function (id, label, val, max, ph) {
        return '<div><label class="form-label" for="' + id + '">' + label + '</label>' +
          '<input id="' + id + '" class="form-input" maxlength="' + max + '" placeholder="' +
          escapeHtml(ph) + '" value="' + escapeHtml(String(d[val] == null ? '' : d[val])) + '"></div>';
      };
      const inner =
        '<div class="mt-5">' + box('pd-sk', 'Small heading above', 'kicker', 60, 'A Proven Journey') + '</div>' +
        '<div class="mt-4">' + box('pd-st', 'Heading *', 'title', 120, 'Last year’s result') + '</div>' +
        '<div class="mt-4 grid sm:grid-cols-2 gap-4">' +
          box('pd-sf', 'The figure *', 'figure', 20, '90') +
          box('pd-su', 'What the figure counts *', 'unit', 40, 'students') +
        '</div>' +
        '<div class="mt-4"><label class="form-label" for="pd-sn">The line under it *</label>' +
          '<textarea id="pd-sn" rows="3" maxlength="500" class="form-input" placeholder="One sentence about the season.">' +
            escapeHtml(String(d.note == null ? '' : d.note)) + '</textarea></div>' +
        '<div class="mt-5 flex flex-wrap gap-2">' +
          '<button id="pd-ssave" type="button" onclick="adminPdStatsSave()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold cursor-pointer">' +
            '<i data-lucide="save" class="w-4 h-4"></i> Save the figures</button>' +
        '</div>';
      return adminPanelShell('trending-up', 'A Proven Journey',
        'The block on the right of the PDACC page. Write the figure the same way it should read on the page — Bengali digits stay Bengali.',
        inner);
    }

    async function adminPdStatsSave() {
      if (RD_ADMIN.busy) {
        showToast('Another change is still being saved. Please wait a moment, or reload the admin page.',
          'error', 'One at a time', { backTo: 'admin' });
        return;
      }
      const val = id => String((document.getElementById(id) || {}).value || '').trim();
      const data = { kicker: val('pd-sk'), title: val('pd-st'), figure: val('pd-sf'),
                     unit: val('pd-su'), note: val('pd-sn') };
      if (!data.title || !data.figure || !data.unit || !data.note) {
        showToast('Please fill the heading, the figure, what it counts, and the line under it.',
          'error', 'Something is missing', { backTo: 'admin' });
        return;
      }
      RD_ADMIN.busy = 'pdstats';
      const btn = document.getElementById('pd-ssave');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const r = await apiPost('savepdaccstats', { data: data });
        RD_ADMIN.busy = '';
        RD_PDSTATS = r.stats || data;
        showToast(r.message || 'The figures are saved.', 'success', 'Saved', { backTo: 'admin' });
        renderAdmin();
      } catch (err) {
        console.warn('[rd] savepdaccstats:', err);
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
        renderAdmin();
      }
    }

    function adminPdaccHtml() {
      const kind = adminPdKind();
      /* One row, not a list: the stats tab is a form with nothing under it. */
      if (kind === 'STATS') {
        return '<div class="space-y-4">' + adminPdKindSwitch() + adminPdStatsForm() + '</div>';
      }
      const rows = adminPdRowsOf(kind);
      return '<div class="space-y-4">' + adminPdKindSwitch() +
        (kind === 'UPDATE' ? adminPdUpdateForm() : adminPdLineForm()) +
        (rows.length
          ? rows.map(kind === 'UPDATE' ? adminPdUpdateItem : adminPdLineItem).join('')
          : adminInfoBox(adminPdKindMeta(kind).icon,
              kind === 'UPDATE' ? 'No update yet' : 'No notice line yet',
              kind === 'UPDATE'
                ? 'Whatever you add above appears in Latest update on the PDACC page.'
                : 'Whatever you add above scrolls across the top of the PDACC page.',
              'empty')) +
      '</div>';
    }

    /* RD_PD.state is dropped back to 'idle' after every write, so the next
       visit to the PDACC page fetches the feed again instead of showing what
       the admin has just changed away from. */
    async function adminPdLineSave() {
      const el = document.getElementById('pd-text');
      if (!el) return;
      if (RD_ADMIN.busy) {
        showToast('Another change is still being saved. Please wait a moment, or reload the admin page.',
          'error', 'One at a time', { backTo: 'admin' });
        return;
      }
      const text = String(el.value || '').trim();
      const show = !!(document.getElementById('pd-show') || {}).checked;
      const editing = RD_ADMIN.pdEdit;

      if (!text) {
        showToast('Please write the notice line.', 'error', 'The line is empty', { backTo: 'admin' });
        return;
      }

      RD_ADMIN.busy = editing || 'new';
      const btn = document.getElementById('pd-save');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const r = await apiPost('savepdaccline',
          { data: { lineId: editing || '', text: text, show: show ? 'YES' : 'NO' } });
        RD_ADMIN.pdEdit = '';
        RD_ADMIN.busy = '';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'The line is saved.', 'success', 'Line saved', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        console.warn('[rd] savepdaccline:', err);
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminPdLineShow(id, on) {
      if (!adminPdRow(id) || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('setpdacclineshow', { lineId: id, show: on ? 'YES' : 'NO' });
        const row = adminPdRow(id);
        if (row) row.show = on ? 'YES' : 'NO';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'Saved.', 'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    async function adminPdLineDelete(id) {
      if (!adminPdRow(id) || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('deletepdaccline', { lineId: id });
        RD_ADMIN.rows.pdacc = (RD_ADMIN.rows.pdacc || []).filter(x => x.id !== id);
        RD_ADMIN.askWhat = ''; RD_ADMIN.askId = '';
        if (RD_ADMIN.pdEdit === id) RD_ADMIN.pdEdit = '';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'The line is removed.', 'success', 'Removed', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not remove', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    async function adminPdUpdateSave() {
      const el = document.getElementById('pd-title');
      if (!el) return;
      /* A silent return here used to look like a dead button: if an earlier
         save had left RD_ADMIN.busy set, nothing at all happened on click.
         Now the reason is said out loud instead. */
      if (RD_ADMIN.busy) {
        showToast('Another change is still being saved. Please wait a moment, or reload the admin page.',
          'error', 'One at a time', { backTo: 'admin' });
        return;
      }
      const title = String(el.value || '').trim();
      const description = String((document.getElementById('pd-desc') || {}).value || '').trim();
      const link = String((document.getElementById('pd-link') || {}).value || '').trim();
      const show = !!(document.getElementById('pd-ushow') || {}).checked;
      const image = ((document.getElementById('pd-image') || {}).files || [])[0] || null;
      const editing = RD_ADMIN.pdEdit;

      if (!title) {
        showToast('Please write the title of this update.', 'error', 'A title is needed', { backTo: 'admin' });
        return;
      }
      if (link && !/^https?:\/\/\S+$/i.test(link)) {
        showToast('Please paste the full link, starting with https://', 'error', 'The link is not complete', { backTo: 'admin' });
        return;
      }

      RD_ADMIN.busy = editing || 'new';
      const btn = document.getElementById('pd-usave');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try {
        const data = { updateId: editing || '', title: title, description: description,
                       link: link, show: show ? 'YES' : 'NO' };
        if (image) {
          /* The picture is its own step, so a picture problem says so rather
             than hiding behind a general "could not save". */
          if (btn) btn.textContent = 'Preparing the picture…';
          try {
            data.image = await filePayload(image, 1600);
          } catch (imgErr) {
            console.warn('[rd] pdacc picture:', imgErr);
            throw new Error('The picture could not be prepared. Please try another picture, or add the update without one.');
          }
          if (btn) btn.textContent = 'Saving…';
        }
        const r = await apiPost('savepdaccupdate', { data: data });
        RD_ADMIN.pdEdit = '';
        RD_ADMIN.busy = '';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'The update is saved.', 'success', 'Update saved', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        console.warn('[rd] savepdaccupdate:', err);
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
        renderAdmin();
      }
    }

    async function adminPdUpdateShow(id, on) {
      if (!adminPdRow(id) || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('setpdaccupdateshow', { updateId: id, show: on ? 'YES' : 'NO' });
        const row = adminPdRow(id);
        if (row) row.show = on ? 'YES' : 'NO';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'Saved.', 'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    async function adminPdUpdateDelete(id) {
      if (!adminPdRow(id) || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('deletepdaccupdate', { updateId: id });
        RD_ADMIN.rows.pdacc = (RD_ADMIN.rows.pdacc || []).filter(x => x.id !== id);
        RD_ADMIN.askWhat = ''; RD_ADMIN.askId = '';
        if (RD_ADMIN.pdEdit === id) RD_ADMIN.pdEdit = '';
        RD_PD.state = 'idle';
        rdFeedForget('pdacc');
        showToast(r.message || 'The update is removed.', 'success', 'Removed', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not remove', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    /* ---------- Members Summary tab -----------------------------------
       Everything here is counted from lists the panel already holds, so the
       tab costs no extra call once the directory has loaded once. */
    function adminTally(list, pick) {
      const map = {};
      list.forEach(row => {
        const key = String(pick(row) || '').trim() || 'Not given';
        map[key] = (map[key] || 0) + 1;
      });
      return Object.keys(map)
        .sort((a, b) => map[b] - map[a] || a.localeCompare(b, undefined, { numeric: true }))
        .map(k => [k, map[k]]);
    }

    function adminStatCard(icon, label, value, tone) {
      return '<div class="rounded-2xl border ' + tone + ' p-4">' +
        '<div class="flex items-center gap-2"><i data-lucide="' + icon + '" class="w-4 h-4"></i>' +
        '<span class="text-[11px] font-extrabold uppercase tracking-widest opacity-80">' + escapeHtml(label) + '</span></div>' +
        '<p class="mt-1.5 text-2xl font-extrabold tabular-nums">' + value + '</p></div>';
    }

    /* A bar per row, widest = the largest group. Plain divs, no chart library:
       the panel must open on a slow phone too. */
    function adminBreakdown(title, icon, pairs, total) {
      const top = pairs.length ? pairs[0][1] : 1;
      const body = pairs.length
        ? pairs.map(p => {
            const pct = total ? Math.round((p[1] / total) * 100) : 0;
            return '<div class="py-1.5">' +
              '<div class="flex items-baseline gap-2 text-xs font-bold text-slate-700">' +
                '<span class="min-w-0 truncate">' + escapeHtml(p[0]) + '</span>' +
                '<span class="ml-auto tabular-nums font-extrabold text-slate-900">' + p[1] + '</span>' +
                '<span class="w-10 text-right tabular-nums text-[11px] font-extrabold text-slate-400">' + pct + '%</span>' +
              '</div>' +
              '<div class="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">' +
                '<div class="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style="width:' +
                  Math.max(3, Math.round((p[1] / top) * 100)) + '%"></div>' +
              '</div></div>';
          }).join('')
        : '<p class="text-xs font-semibold text-slate-400 py-2">Nothing to count yet.</p>';
      return '<div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">' +
        '<div class="flex items-center gap-2 mb-2"><i data-lucide="' + icon + '" class="w-4 h-4 text-blue-600"></i>' +
        '<h4 class="font-extrabold text-slate-900 text-sm">' + escapeHtml(title) + '</h4>' +
        '<span class="ml-auto text-[11px] font-extrabold text-slate-400">' + pairs.length + ' groups</span></div>' +
        body + '</div>';
    }

    function adminSummaryHtml() {
      const members = Array.isArray(alumniData) ? alumniData : [];
      const regs = RD_ADMIN.rows.registrations || [];
      const total = members.length;
      const alumni = members.filter(a => a.status === 'Alumni').length;
      const running = total - alumni;
      const pending = regs.filter(r => r.status === 'PENDING').length;
      const dup = regs.filter(r => r.status === 'DUPLICATE').length;
      const rejected = regs.filter(r => r.status === 'REJECTED').length;
      const withPhoto = members.filter(a => String(a.image || '').trim()).length;

      return '<div class="space-y-4">' +
        adminPanelShell('bar-chart-3', 'Members at a glance',
          'Counted from the published directory, so these are the same numbers a visitor sees. Applications still waiting are counted separately.',
          '<div class="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">' +
            adminStatCard('users', 'Total members', total, 'border-blue-200 bg-blue-50 text-blue-800') +
            adminStatCard('graduation-cap', 'Alumni', alumni, 'border-indigo-200 bg-indigo-50 text-indigo-800') +
            adminStatCard('backpack', 'Running members', running, 'border-emerald-200 bg-emerald-50 text-emerald-800') +
            adminStatCard('image', 'With a photo', withPhoto, 'border-slate-200 bg-slate-50 text-slate-700') +
          '</div>' +
          '<div class="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">' +
            adminStatCard('user-plus', 'Waiting', pending, 'border-amber-200 bg-amber-50 text-amber-800') +
            adminStatCard('copy', 'Possible repeats', dup, 'border-orange-200 bg-orange-50 text-orange-800') +
            adminStatCard('circle-x', 'Rejected', rejected, 'border-rose-200 bg-rose-50 text-rose-700') +
            adminStatCard('layers', 'Applications in all', regs.length, 'border-slate-200 bg-slate-50 text-slate-700') +
          '</div>' +
          (total ? '' : '<p class="mt-4 text-xs font-semibold text-slate-500">The directory has not loaded yet. Press Refresh once.</p>')) +
        '<div class="grid lg:grid-cols-2 gap-4">' +
          adminBreakdown('Department', 'building-2', adminTally(members, a => a.dept), total) +
          adminBreakdown('Series', 'hash', adminTally(members, a => a.series), total) +
          adminBreakdown('Blood group', 'droplet', adminTally(members, a => a.blood), total) +
          adminBreakdown('Employment', 'briefcase', adminTally(members, a => a.emp_type), total) +
          adminBreakdown('Work location', 'map-pin', adminTally(members, a => a.loc), total) +
          adminBreakdown('Batch', 'calendar', adminTally(members, a => a.batch), total) +
        '</div>' +
      '</div>';
    }

    /* ---------- Editing an event that is already approved -------------
       The form only sends the boxes the admin actually touched, so a column
       this form does not know about is never overwritten with a blank. */
    var RD_EV_FIELDS = [
      ['name', 'Event Name', 'Event Name', 'text'],
      ['category', 'Category', 'Category', 'select'],
      ['eventDate', 'Event Date', 'Event Date', 'date'],
      ['startTime', 'Start Time', 'Start Time', 'text'],
      ['endTime', 'End Time', 'End Time', 'text'],
      ['venue', 'Venue', 'Venue', 'text'],
      ['mapsLink', 'Google Maps Link', 'Google Maps link', 'text'],
      ['organizedBy', 'Organized By', 'Organized by', 'text'],
      ['contactName', 'Contact Person', 'Contact person', 'text'],
      ['contactNo', 'Contact Number', 'Contact number', 'text'],
      ['regLink', 'Registration Link', 'Registration link', 'text'],
      ['fbLink', 'Facebook Link', 'Facebook link', 'text'],
      ['shortDesc', 'Short Description', 'Short description', 'text'],
      ['fullDesc', 'Full Description', 'Full description', 'area'],
      ['adminNote', 'Admin Note', 'Admin note', 'area']
    ];
    var RD_EV_CATEGORIES = ['Academic', 'Cultural', 'Sports', 'Workshop', 'Seminar',
                            'Competition', 'Reunion', 'Tour', 'Social'];

    function adminEventEdit(id) {
      RD_ADMIN.evEdit = RD_ADMIN.evEdit === id ? '' : id;
      RD_ADMIN.noteOpen = '';
      renderAdmin();
    }

    /* This one hook carries both extras an event card can grow: the hide
       confirmation strip and the edit form. */
    function adminEventEditBox(r) {
      if (r.kind !== 'events') return '';
      const ask = adminAskArmed('evHide', r.id)
        ? adminConfirmStrip('Hide ' + r.id + ' from the website? Nothing is deleted -- you will find it again under PENDING.',
            'Yes, hide it', "adminEventVisible('" + r.id + "',false)")
        : '';
      if (RD_ADMIN.evEdit !== r.id) return ask;
      const raw = r.raw || {};
      const val = header => {
        const v = raw[header];
        if (v instanceof Date) {
          const p = n => (n < 10 ? '0' : '') + n;
          return v.getFullYear() + '-' + p(v.getMonth() + 1) + '-' + p(v.getDate());
        }
        return String(v == null ? '' : v).trim();
      };
      const eid = escapeHtml(r.id);
      const fields = RD_EV_FIELDS.map(f => {
        const key = f[0], cur = val(f[1]), label = f[2], type = f[3];
        const dom = 'ev-' + eid + '-' + key;
        let input;
        if (type === 'select') {
          input = '<select id="' + dom + '" data-ev-key="' + key + '" class="form-input">' +
            RD_EV_CATEGORIES.map(c => '<option' + (c === cur ? ' selected' : '') + '>' + escapeHtml(c) + '</option>').join('') +
            (RD_EV_CATEGORIES.indexOf(cur) === -1 && cur ? '<option selected>' + escapeHtml(cur) + '</option>' : '') +
            '</select>';
        } else if (type === 'area') {
          input = '<textarea id="' + dom + '" data-ev-key="' + key + '" rows="3" class="form-input">' + escapeHtml(cur) + '</textarea>';
        } else {
          input = '<input id="' + dom + '" data-ev-key="' + key + '"' + (type === 'date' ? ' type="date"' : '') +
            ' class="form-input" value="' + escapeHtml(cur) + '">';
        }
        return '<div class="' + (type === 'area' ? 'sm:col-span-2' : '') + '">' +
          '<label class="form-label" for="' + dom + '">' + escapeHtml(label) + '</label>' + input + '</div>';
      }).join('');
      return ask + '<div class="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-4 sm:p-5" data-ev-form="' + eid + '">' +
        '<p class="text-xs font-extrabold text-blue-900 mb-3"><i data-lucide="pencil" class="w-3.5 h-3.5 inline"></i> Correcting the details of ' + eid +
          ' — the pictures and the submitter are left as they are.</p>' +
        '<div class="grid sm:grid-cols-2 gap-4">' + fields + '</div>' +
        '<div class="mt-4 flex flex-wrap gap-2">' +
          '<button type="button" onclick="adminEventEditSave(\'' + eid + '\')" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer"><i data-lucide="save" class="w-3.5 h-3.5"></i> Save the changes</button>' +
          '<button type="button" onclick="adminEventEdit(\'' + eid + '\')" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-extrabold hover:bg-slate-50 cursor-pointer"><i data-lucide="x" class="w-3.5 h-3.5"></i> Close</button>' +
        '</div></div>';
    }

    async function adminEventEditSave(id) {
      const form = document.querySelector('[data-ev-form="' + id + '"]');
      const row = adminFind(id);
      if (!form || !row || RD_ADMIN.busy) return;
      const data = { eventId: id };
      let changed = 0;
      form.querySelectorAll('[data-ev-key]').forEach(el => {
        const key = el.getAttribute('data-ev-key');
        const was = RD_EV_FIELDS.filter(f => f[0] === key)[0];
        const cur = String(el.value == null ? '' : el.value).trim();
        let old = (row.raw || {})[was[1]];
        if (old instanceof Date) {
          const p = n => (n < 10 ? '0' : '') + n;
          old = old.getFullYear() + '-' + p(old.getMonth() + 1) + '-' + p(old.getDate());
        }
        if (cur !== String(old == null ? '' : old).trim()) { data[key] = cur; changed++; }
      });
      if (!changed) {
        showToast('Nothing was changed on this event.', 'info', 'No change', { backTo: 'admin' });
        return;
      }
      if (data.hasOwnProperty('name') && !data.name) {
        showToast('The event name cannot be left empty.', 'error', 'A name is needed', { backTo: 'admin' });
        return;
      }
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('adminupdateevent', { data: data });
        RD_ADMIN.evEdit = '';
        RD_ADMIN.busy = '';
        showToast(r.message || 'The event is updated.', 'success', 'Event updated', { backTo: 'admin' });
        loadAdminDashboard(true);
      } catch (err) {
        RD_ADMIN.busy = '';
        showToast(friendlyError(err).msg, 'error', 'Could not update', { backTo: 'admin' });
        renderAdmin();
      }
    }

    /* Hiding is a move back to PENDING, because the public list only ever
       shows APPROVED. Nothing is deleted and the row does not disappear. */
    async function adminEventVisible(id, show) {
      const row = adminFind(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        const r = await apiPost('adminseteventvisible', { eventId: id, show: show ? 'YES' : 'NO' });
        row.status = show ? 'APPROVED' : 'PENDING';
        RD_ADMIN.askWhat = ''; RD_ADMIN.askId = '';
        showToast(r.message || 'Saved.', 'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    function adminToggleNote(id) {
      RD_ADMIN.noteOpen = RD_ADMIN.noteOpen === id ? '' : id;
      renderAdmin();
    }

    /* One place that knows how each record type is approved/rejected, so the
       card renderer never has to care which tab it is showing. */
    function adminActionCall(kind, what, id, note) {
      if (kind === 'registrations') {
        return what === 'approve'
          ? apiPost('approvemember', { registrationId: id })
          : apiPost('rejectmember', { registrationId: id, adminNote: note });
      }
      if (kind === 'events') {
        return what === 'approve'
          ? apiPost('approveevent', { eventId: id })
          : apiPost('rejectevent', { eventId: id, adminNote: note });
      }
      return what === 'approve'
        ? apiPost('approveexecutivecommittee', { data: { entryId: id } })
        : apiPost('rejectexecutivecommittee', { data: { entryId: id, adminNote: note } });
    }

    function adminFind(id) {
      return (RD_ADMIN.rows[RD_ADMIN.tab] || []).find(r => r.id === id) || null;
    }

    async function adminRunAction(id, what, note) {
      const row = adminFind(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        await adminActionCall(row.kind, what, id, note || '');
        /* The public pages must not keep showing the row that just changed. */
        rdFeedForget('alumni');
        rdFeedForget('events');
        rdFeedForget('committee');
        row.status = what === 'approve' ? 'APPROVED' : 'REJECTED';
        if (note) row.note = note;
        RD_ADMIN.noteOpen = '';
        showToast(row.title + ' \u2014 ' + (what === 'approve' ? 'approved' : 'rejected') + '.',
          'success', what === 'approve' ? 'Approved' : 'Rejected', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    function adminApprove(id) { return adminRunAction(id, 'approve', ''); }

    function adminReject(id) {
      const el = document.getElementById('admin-note-' + id);
      const note = el ? String(el.value || '').trim() : '';
      const row = adminFind(id);
      /* Catch the empty reason here instead of letting the server return an
         error the admin has to decode. */
      if (row && row.kind === 'committee' && !note) {
        showToast('Please write a short reason before rejecting a committee entry.',
          'error', 'A reason is needed', { backTo: 'admin' });
        if (el) el.focus();
        return;
      }
      return adminRunAction(id, 'reject', note);
    }

    async function adminToggleFeatured(id, on) {
      const row = adminFind(id);
      if (!row || RD_ADMIN.busy) return;
      RD_ADMIN.busy = id;
      renderAdmin();
      try {
        await apiPost('seteventfeatured', { eventId: id, featured: on ? 'YES' : 'NO' });
        row.featured = !!on;
        showToast(row.title + (on ? ' is now featured.' : ' is no longer featured.'),
          'success', 'Saved', { backTo: 'admin' });
      } catch (err) {
        showToast(friendlyError(err).msg, 'error', 'Could not save', { backTo: 'admin' });
      }
      RD_ADMIN.busy = '';
      renderAdmin();
    }

    function toggleMobileMenu() {
      const m = document.getElementById("mobile-menu");
      m.classList.toggle("hidden");
      syncMobileMenuButton();
    }
    function syncMobileMenuButton() {
      const m = document.getElementById("mobile-menu"), b = document.getElementById("mobile-menu-btn");
      if (!m || !b) return;
      const open = !m.classList.contains("hidden");
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
      const icon = document.getElementById("mobile-menu-icon");
      if (icon) icon.outerHTML = '<i id="mobile-menu-icon" class="w-6 h-6" data-lucide="' + (open ? 'x' : 'menu') + '"></i>';
      lucide.createIcons();
    }

    /* ---------- Confirmation page (replaces every success/error popup) ---------- */
    const RD_NOTICE_STYLES = {
      success: { icon:'check-circle-2', wrap:'bg-emerald-50', color:'text-emerald-600', btn:'from-emerald-600 to-teal-600', btnText:'OK' },
      error:   { icon:'alert-triangle', wrap:'bg-rose-50',    color:'text-rose-600',    btn:'from-rose-600 to-red-600',    btnText:'Try again' },
      info:    { icon:'info',           wrap:'bg-blue-50',    color:'text-blue-600',    btn:'from-blue-600 to-indigo-600', btnText:'OK' }
    };

    /* Kept the old name so every existing call site keeps working; it now routes to
       #notice instead of opening a blurred popup. opts.backTo picks the return page. */
    function showToast(msg, type, title, opts) {
      opts = opts || {};
      const st = RD_NOTICE_STYLES[type] || RD_NOTICE_STYLES.info;
      const wrap = document.getElementById('notice-icon-wrap');
      const icon = document.getElementById('notice-icon');
      const ttl  = document.getElementById('notice-title');
      const btn  = document.getElementById('notice-primary-btn');
      const home = document.getElementById('notice-home-btn');

      wrap.className = 'w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-5 ' + st.wrap;
      icon.outerHTML = '<i id="notice-icon" data-lucide="' + st.icon + '" class="w-10 h-10 ' + st.color + '"></i>';
      btn.className = 'flex-1 py-3.5 rounded-2xl bg-gradient-to-r ' + st.btn + ' text-white font-bold text-sm';
      btn.textContent = opts.btnText || st.btnText;

      if (title) { ttl.textContent = title; ttl.classList.remove('hidden'); }
      else { ttl.textContent = ''; ttl.classList.add('hidden'); }

      document.getElementById('notice-message').textContent = msg;

      const back = opts.backTo || (rdCurrentPageId !== 'notice' ? rdCurrentPageId : 'home') || 'home';
      home.classList.toggle('hidden', back === 'home');
      openSubPage('notice', back);
      lucide.createIcons();
    }
    function closeAlert() { goBackFromSubPage('notice'); }

    /* ---------- Swipe between photos on touch devices ---------- */
    (function () {
      let sx = 0, sy = 0, tracking = false;
      const page = () => document.getElementById('page-photo');
      document.addEventListener('touchstart', function (e) {
        const p = page();
        if (!p || rdCurrentPageId !== 'photo' || !e.touches || e.touches.length !== 1) return;
        if (!p.contains(e.target)) return;
        sx = e.touches[0].clientX; sy = e.touches[0].clientY; tracking = true;
      }, { passive: true });
      document.addEventListener('touchend', function (e) {
        if (!tracking) return;
        tracking = false;
        const t = e.changedTouches && e.changedTouches[0];
        if (!t) return;
        const dx = t.clientX - sx, dy = t.clientY - sy;
        if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;   // a scroll, not a swipe
        if (dx < 0) nextLightboxPhoto(); else prevLightboxPhoto();
      }, { passive: true });
    })();

    /* ---------- Keyboard shortcuts on the photo viewer page ---------- */
    document.addEventListener('keydown', function (e) {
      if (rdCurrentPageId !== 'photo') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); nextLightboxPhoto(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevLightboxPhoto(); }
      else if (e.key === 'Escape') { closeLightbox(); }
    });
