/*
 * Személyes checklista — a pipák a böngésző localStorage-ában tárolódnak,
 * kizárólag kliensoldalon. A <div class="checklist-toolbar"></div> elemet
 * tartalmazó oldalakon aktiválódik.
 */
(function () {
  var PREFIX = "ujvilag-checklist:";

  function storageKey() {
    return PREFIX + window.location.pathname;
  }

  function loadState() {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey()) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    try {
      window.localStorage.setItem(storageKey(), JSON.stringify(state));
    } catch (e) {
      /* privát mód / letiltott tárolás — a lista ilyenkor is működik, csak nem marad meg */
    }
  }

  /* A listaelem saját szövege, a beágyazott allisták és a checkbox nélkül. */
  function itemText(li) {
    var clone = li.cloneNode(true);
    clone.querySelectorAll("ul, ol, label.task-list-control").forEach(function (el) {
      el.remove();
    });
    return clone.textContent.replace(/\s+/g, " ").trim();
  }

  /* Stabil azonosító a szövegből — átrendezésnél is megmarad a pipa. */
  function makeId(text, seen) {
    var base = text.toLowerCase().replace(/[^a-z0-9áéíóöőúüű ]/g, "").slice(0, 60);
    var count = seen.get(base) || 0;
    seen.set(base, count + 1);
    return count === 0 ? base : base + "#" + count;
  }

  function nearestHeading(li) {
    var list = li.closest("ul");
    var node = list;
    while (node) {
      if (node.tagName && /^H[23]$/.test(node.tagName)) return node.textContent.replace("¶", "").trim();
      node = node.previousElementSibling || node.parentElement;
      if (node && node.classList && node.classList.contains("md-content__inner")) return null;
    }
    return null;
  }

  function copyText(text, button) {
    var done = function (ok) {
      var original = button.dataset.label;
      button.textContent = ok ? "✅ Kimásolva" : "❌ Nem sikerült";
      window.setTimeout(function () {
        button.textContent = original;
      }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }, function () {
        done(false);
      });
      return;
    }

    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    done(ok);
  }

  function init() {
    var toolbar = document.querySelector(".checklist-toolbar");
    if (!toolbar || toolbar.dataset.ready === "1") return;

    var items = Array.prototype.slice.call(
      document.querySelectorAll(".md-content li.task-list-item")
    );
    if (!items.length) return;

    var state = loadState();
    var seen = new Map();
    var entries = [];

    items.forEach(function (li) {
      var box = li.querySelector('input[type="checkbox"]');
      if (!box) return;
      var text = itemText(li);
      var id = makeId(text, seen);
      box.disabled = false;
      box.checked = state[id] === true;
      entries.push({ id: id, text: text, box: box, li: li });
    });
    if (!entries.length) return;

    toolbar.dataset.ready = "1";
    toolbar.innerHTML =
      '<div class="checklist-bar"><span class="checklist-bar-fill"></span></div>' +
      '<div class="checklist-actions">' +
      '<span class="checklist-count"></span>' +
      '<button type="button" class="checklist-btn" data-action="copy">📋 Lista másolása</button>' +
      '<button type="button" class="checklist-btn" data-action="reset">↩️ Visszaállítás</button>' +
      "</div>" +
      '<p class="checklist-note">A kipipált elemek csak a te böngésződben tárolódnak — nem kerülnek sehova, és csak ezen a gépen látszanak.</p>';

    var fill = toolbar.querySelector(".checklist-bar-fill");
    var count = toolbar.querySelector(".checklist-count");

    function refresh() {
      var done = entries.filter(function (e) {
        return e.box.checked;
      }).length;
      fill.style.width = Math.round((done / entries.length) * 100) + "%";
      count.textContent = done + " / " + entries.length + " kész";
      entries.forEach(function (e) {
        e.li.classList.toggle("task-done", e.box.checked);
      });
    }

    entries.forEach(function (e) {
      e.box.addEventListener("change", function () {
        var current = loadState();
        if (e.box.checked) {
          current[e.id] = true;
        } else {
          delete current[e.id];
        }
        saveState(current);
        refresh();
      });
    });

    toolbar.addEventListener("click", function (event) {
      var button = event.target.closest(".checklist-btn");
      if (!button) return;

      if (button.dataset.action === "reset") {
        saveState({});
        entries.forEach(function (e) {
          e.box.checked = false;
        });
        refresh();
        return;
      }

      if (button.dataset.action === "copy") {
        button.dataset.label = button.dataset.label || button.textContent;
        var lines = ["# Kezdő TODO lista — Újvilág Birodalom", ""];
        var lastHeading = null;
        entries.forEach(function (e) {
          var heading = nearestHeading(e.li);
          if (heading && heading !== lastHeading) {
            lines.push("", "## " + heading);
            lastHeading = heading;
          }
          lines.push("- [" + (e.box.checked ? "x" : " ") + "] " + e.text);
        });
        lines.push("", window.location.href);
        copyText(lines.join("\n"), button);
      }
    });

    refresh();
  }

  /* navigation.instant miatt minden oldalváltásnál újra kell futnia */
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
