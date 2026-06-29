const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

/* ===== MASAJ DATA ===== */
const data = {
    reflexo: {
        title: "Reflexoterapie",
        desc: "Reflexoterapia stimulează punctele reflexe din tălpi, care corespund diferitelor organe și sisteme ale corpului.",
        benefits: "Reduce stresul, îmbunătățește circulația și relaxează organismul.",
        suitable: "Persoane stresate sau obosite.",
        time: "30 min",
        price: "120 RON"
    },

    spate: {
        title: "Masaj spate",
        desc: "Masaj pentru zona cervicală, umeri și spate.",
        benefits: "Reduce durerile și tensiunile musculare.",
        suitable: "Persoane cu muncă la birou sau dureri de spate.",
        time: "30 min",
        price: "120 RON"
    },

    suedez: {
        title: "Masaj suedez",
        desc: "Masaj clasic relaxant pentru tot corpul.",
        benefits: "Relaxare profundă și îmbunătățirea circulației.",
        suitable: "Oricine dorește relaxare.",
        time: "60 min",
        price: "250 RON"
    },

    terapeutic: {
        title: "Masaj terapeutic",
        desc: "Masaj pentru dureri și contracturi musculare.",
        benefits: "Reduce durerile și îmbunătățește mobilitatea.",
        suitable: "Persoane cu dureri cronice.",
        time: "60 min",
        price: "250 RON"
    },

    relaxare: {
        title: "Masaj de relaxare",
        desc: "Masaj calmant pentru reducerea stresului.",
        benefits: "Reduce stresul și anxietatea.",
        suitable: "Persoane stresate.",
        time: "60 min",
        price: "250 RON"
    },

    anticel: {
        title: "Masaj anticelulitic",
        desc: "Masaj pentru stimularea circulației.",
        benefits: "Reduce aspectul celulitei.",
        suitable: "Persoane care vor tonifiere.",
        time: "60 min",
        price: "250 RON"
    },

    lomi: {
        title: "Lomi Lomi",
        desc: "Masaj hawaian profund relaxant.",
        benefits: "Relaxare completă.",
        suitable: "Persoane care vor experiență premium.",
        time: "90 min",
        price: "350 RON"
    },

    terapie: {
        title: "Terapie corporală personalizată",
        desc: "Masaj adaptat nevoilor fiecărei persoane.",
        benefits: "Reducerea tensiunilor și relaxare.",
        suitable: "Persoane cu probleme specifice.",
        time: "90 min",
        price: "350 RON"
    }
};

/* ===== URL PARAM ===== */
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

if (data[type]) {
    document.getElementById("title").innerText = data[type].title;
    document.getElementById("desc").innerText = data[type].desc;
    document.getElementById("benefits").innerText = data[type].benefits;
    document.getElementById("suitable").innerText = data[type].suitable;
    document.getElementById("time").innerText = data[type].time;
    document.getElementById("price").innerText = data[type].price;
}

/* ===== WHATSAPP BUTTON ===== */
const messages = {
    spate: "Salut! Aș dori o programare pentru masaj spate la Brașov.",
    terapeutic: "Salut! Aș dori o programare pentru masaj terapeutic.",
    relaxare: "Salut! Aș dori o programare pentru masaj de relaxare.",
    suedez: "Salut! Aș dori o programare pentru masaj suedez.",
    anticel: "Salut! Aș dori o programare pentru masaj anticelulitic.",
    lomi: "Salut! Aș dori o programare pentru Lomi Lomi.",
    reflexo: "Salut! Aș dori o programare pentru reflexoterapie."
};

const btn = document.getElementById("whatsappBtn");

if (btn && type && messages[type]) {
    btn.href = "https://wa.me/40732483823?text=" + encodeURIComponent(messages[type]);
}

/* ===== MENU ===== */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const links = menu.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});