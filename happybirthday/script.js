// ==========================================
// PASSWORD
// ==========================================

const CORRECT_PASSWORD = "m10";

const passwordScreen = document.getElementById("password-screen");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password");
const enterBtn = document.getElementById("enter-btn");
const errorMessage = document.getElementById("error-message");
const birthdaySong = document.getElementById("birthday-song");

const envClick = document.getElementById("env-click");
const giftClick = document.getElementById("gift-click");
const giftImageContainer = document.getElementById("gift-image-container");


// ==========================================
// OPEN WEBSITE
// ==========================================

enterBtn.addEventListener("click", function () {

    if (passwordInput.value === CORRECT_PASSWORD) {

        passwordScreen.style.opacity = "0";

        setTimeout(() => {
            passwordScreen.style.display = "none";
            mainContent.style.display = "block";

            // تشغيل الزينة
            createDecorations();

        }, 500);

        // تشغيل الموسيقى
        birthdaySong.play().catch(() => {
            console.log("اضغط Play لتشغيل الأغنية.");
        });

    } else {

        errorMessage.textContent =
            "كلمة السر غير صحيحة! حاول مرة أخرى. ❌";

        passwordInput.value = "";
    }
});


// ==========================================
// ENTER KEY
// ==========================================

passwordInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        enterBtn.click();
    }

});


// ==========================================
// MESSAGE
// ==========================================

envClick.addEventListener("click", function () {

    alert(
        "💌 الرسالة:\n" +
        "كل سنه وانتي طيبه يا فنان ودكتوره ❤️✨"
    );

});


// ==========================================
// GIFT
// ==========================================

giftClick.addEventListener("click", function () {

    if (giftImageContainer.style.display === "block") {

        giftImageContainer.style.display = "none";

    } else {

        giftImageContainer.style.display = "block";

        alert("🎁 المفاجأة! أتمنى أن تنال إعجابكِ ✨");

    }

});


// ==========================================
// ❤️🌹 DECORATIONS
// ==========================================

function createDecorations() {

    // منع التكرار
    if (document.getElementById("hearts-container")) {
        return;
    }

    const container = document.createElement("div");

    container.id = "hearts-container";

    document.body.appendChild(container);


    // أماكن محددة عشان الشكل يبقى مرتب
    const positions = [

        // قلوب
        { symbol: "❤️", type: "heart", left: "4%", top: "18%" },
        { symbol: "❤️", type: "heart", left: "92%", top: "20%" },
        { symbol: "❤️", type: "heart", left: "8%", top: "55%" },
        { symbol: "❤️", type: "heart", left: "94%", top: "58%" },
        { symbol: "❤️", type: "heart", left: "18%", top: "82%" },
        { symbol: "❤️", type: "heart", left: "84%", top: "80%" },

        // ورود
        { symbol: "🌹", type: "rose", left: "2%", top: "32%" },
        { symbol: "🌹", type: "rose", left: "95%", top: "35%" },
        { symbol: "🌹", type: "rose", left: "12%", top: "90%" },
        { symbol: "🌹", type: "rose", left: "88%", top: "90%" }
    ];


    positions.forEach((item, index) => {

        const element = document.createElement("div");

        element.classList.add("decoration");

        if (item.type === "heart") {
            element.classList.add("heart-decoration");
        } else {
            element.classList.add("rose-decoration");
        }

        element.textContent = item.symbol;

        element.style.left = item.left;
        element.style.top = item.top;

        // أحجام مختلفة
        element.style.fontSize =
            item.type === "heart"
                ? (18 + (index % 3) * 5) + "px"
                : (23 + (index % 3) * 6) + "px";

        // حركة مختلفة قليلًا
        element.style.animationDelay =
            (index * 0.25) + "s";

        container.appendChild(element);
    });

}
