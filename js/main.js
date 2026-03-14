(function () {
    "use strict";

    var loader = document.getElementById("loader");
    var navbar = document.getElementById("navbar");
    var navLinks = document.getElementById("navLinks");
    var hamburger = document.getElementById("hamburger");
    var backToTop = document.getElementById("backToTop");
    var gamesGrid = document.getElementById("gamesGrid");
    var gamesCount = document.getElementById("gamesCount");
    var gameModal = document.getElementById("gameModal");
    var cursorGlow = document.getElementById("cursorGlow");
    var toast = document.getElementById("toast");
    var toastMsg = document.getElementById("toastMsg");

    function createParticles() {
        var bg = document.getElementById("bgAnimation");
        if (!bg) return;
        var colors = ["#00f0ff", "#7b2fff", "#ff2d75", "#00ff88", "#ffd700"];
        for (var i = 0; i < 45; i++) {
            var p = document.createElement("div");
            p.className = "particle";
            var size = Math.random() * 3 + 1;
            p.style.left = Math.random() * 100 + "%";
            p.style.width = size + "px";
            p.style.height = size + "px";
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = Math.random() * 18 + 10 + "s";
            p.style.animationDelay = Math.random() * 12 + "s";
            bg.appendChild(p);
        }
    }

    if (cursorGlow && window.matchMedia("(hover: hover)").matches) {
        document.addEventListener("mousemove", function (e) {
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        });
    }

    window.addEventListener("load", function () {
        setTimeout(function () {
            if (loader) loader.classList.add("hidden");
        }, 1800);
    });

    window.addEventListener("scroll", function () {
        var scrollY = window.scrollY;
        if (scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
        if (scrollY > 500) backToTop.classList.add("visible");
        else backToTop.classList.remove("visible");

        var sections = document.querySelectorAll("section, .stats-banner");
        var current = "";
        sections.forEach(function (sec) {
            if (scrollY >= sec.offsetTop - 250) current = sec.getAttribute("id");
        });
        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) link.classList.add("active");
        });
    });

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
        });
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function renderGames(filter) {
        filter = filter || "all";
        gamesGrid.innerHTML = "";
        var filtered = filter === "all" ? GAMES : GAMES.filter(function (g) { return g.category === filter; });
        gamesCount.textContent = "Showing " + filtered.length + " game" + (filtered.length !== 1 ? "s" : "");

        filtered.forEach(function (game, idx) {
            var card = document.createElement("div");
            card.className = "game-card";

            // Navigate to detail page if available, otherwise open modal
            card.onclick = function () {
                if (game.detailPageUrl) {
                    window.location.href = game.detailPageUrl;
                } else {
                    openModal(game);
                }
            };

            var badgeClass = game.badge === "new" ? "badge-new" : game.badge === "popular" ? "badge-popular" : "badge-featured";
            var stars = "";
            for (var s = 0; s < Math.floor(game.rating); s++) stars += "\u2605";
            if (game.rating % 1 >= 0.5) stars += "\u00BD";

            // Handle SVG vs emoji icon types
            var iconWrapperClass = "game-icon-wrapper" + (game.iconType === "svg" ? " svg-icon" : "");
            var iconHtml = '<div class="' + iconWrapperClass + '" style="background:' + game.iconBg + ';">' + game.icon + '</div>';

            // Button text and icon based on detail page availability
            var viewBtnIcon = game.detailPageUrl ? "fas fa-external-link-alt" : "fas fa-eye";
            var viewBtnText = game.detailPageUrl ? "View Game Page" : "View Details";

            card.innerHTML =
                '<div class="game-card-image">' +
                '<div class="game-visual" style="background:' + game.gradient + ';">' +
                iconHtml +
                '</div>' +
                '<div class="game-card-overlay"></div>' +
                '<span class="game-card-badge ' + badgeClass + '">' + game.badge + '</span>' +
                '</div>' +
                '<div class="game-card-content">' +
                '<div class="game-card-category">' + game.category + '</div>' +
                '<h3 class="game-card-title">' + game.title + '</h3>' +
                '<p class="game-card-desc">' + game.shortDesc + '</p>' +
                '<div class="game-card-meta">' +
                '<div class="game-rating"><span class="stars">' + stars + '</span><span class="rating-text">' + game.rating + '</span></div>' +
                '<div class="game-platform"><i class="fab fa-android"></i> Android</div>' +
                '</div>' +
                '<div class="game-download-btn"><i class="' + viewBtnIcon + '"></i> ' + viewBtnText + '</div>' +
                '</div>';

            gamesGrid.appendChild(card);
            setTimeout(function () { card.classList.add("visible"); }, idx * 80);
        });
    }

    document.querySelectorAll(".filter-tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".filter-tab").forEach(function (t) { t.classList.remove("active"); });
            tab.classList.add("active");
            renderGames(tab.getAttribute("data-filter"));
        });
    });

    function openModal(game) {
        document.getElementById("modalHeader").style.background = game.gradient;
        document.getElementById("modalIcon").style.background = game.iconBg;
        document.getElementById("modalIcon").innerHTML = game.icon;

        // Toggle SVG icon class for proper styling
        var modalIconEl = document.getElementById("modalIcon");
        if (game.iconType === "svg") {
            modalIconEl.classList.add("svg-icon");
        } else {
            modalIconEl.classList.remove("svg-icon");
        }

        document.getElementById("modalCategory").textContent = game.category;
        document.getElementById("modalTitle").textContent = game.title;
        var starsHtml = "";
        for (var s = 0; s < Math.floor(game.rating); s++) starsHtml += "\u2605";
        document.getElementById("modalRating").innerHTML = '<span style="color:#ffd700;">' + starsHtml + '</span> ' + game.rating + ' / 5.0';
        document.getElementById("modalDesc").textContent = game.fullDesc;
        document.getElementById("modalFeatures").innerHTML = game.features.map(function (f) {
            return '<div class="modal-feature"><i class="fas fa-check-circle"></i> ' + f + '</div>';
        }).join("");

        // Handle download/detail button
        var downloadBtn = document.getElementById("modalDownload");
        if (game.detailPageUrl) {
            downloadBtn.href = game.detailPageUrl;
            downloadBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> View Game Page';
        } else {
            downloadBtn.href = game.playStoreUrl || "#";
            downloadBtn.innerHTML = '<i class="fab fa-google-play"></i> Download on Play Store';
        }

        gameModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    window.closeModal = function () {
        gameModal.classList.remove("active");
        document.body.style.overflow = "";
    };
    gameModal.addEventListener("click", function (e) { if (e.target === gameModal) closeModal(); });

    function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add("show");
        setTimeout(function () { toast.classList.remove("show"); }, 3000);
    }

    window.handleContact = function (e) {
        e.preventDefault();
        e.target.reset();
        showToast("Message sent successfully!");
    };
    window.handleSubscribe = function (e) {
        e.preventDefault();
        e.target.querySelector("input").value = "";
        showToast("Subscribed successfully!");
    };

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add("revealed"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

    function animateCounter(el) {
        if (el.getAttribute("data-animated")) return;
        el.setAttribute("data-animated", "true");
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var isDecimal = target % 1 !== 0;
        var duration = 2200;
        var start = performance.now();
        function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = eased * target;
            if (target >= 1000) el.textContent = Math.floor(current).toLocaleString() + suffix;
            else if (isDecimal) el.textContent = current.toFixed(1) + suffix;
            else el.textContent = Math.floor(current) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll("[data-count]").forEach(animateCounter);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll(".hero-stats, .stats-grid").forEach(function (el) { counterObserver.observe(el); });

    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

    createParticles();
    renderGames("all");
})();