const userKey = "quiz_attempt";
const whatsappLink = "https://wa.me/972546842169"; 


const questions = [
  {
    question: "מה התחביבים שלך ?",
    answers: [
      "משחקי מחשב",
      "לטייל בטבע ולגלות מקומות חדשים",
      "שינה וצפייה בתוכניות טלוויזיה"
    ],
    correct: [1]
  },
  {
    question: "מה דעתך על חיות מחמד ?",
    answers: [
      "אני לא מתקרב לבעלי חיים ומעדיף להימנע מהם",
      "אני חושב שבעלי חיים הם מטרד בחיי היומיום",
      "אין לי בעיה עם בעלי חיים, הם בסדר מבחינתי"
    ],
    correct: [2]
  },
  {
    question: "איזה סגנון מוזיקה אתה נוהג לשמוע ?",
    answers: [
      "Afrobeat,Hip-Pop וסגנונות קצביים דומים",
      "מוזיקה מזרחית ללא ז'אנרים נוספים",
      "מוזיקה קלאסית",
    ],
    correct: [0]
  },
  {
    question: "איך נראה הדייט הראשון המושלם מבחינתך ?",
    answers: [
      "משהו קצת שונה – חדר בריחה, ערב טריוויה או סדנה .",
      "דייט קלאסי – מסעדה טובה, יין טוב  .",
      "פיקניק בשקיעה – מקום שקט בטבע וקצת אוכל טעים.",
      
    ],
    correct: [2]
  },
  {
    question: "מה הדברים החשובים לך בקשר זוגי ?",
    answers: [
      "שכל אחד יעשה את שלו בלי הרבה דיבורים",
      "תקשורת פתוחה,אמינות ונאמנות הדדית",
      " מראה חיצוני ומשיכה  ",
      
    ],
    correct: [1]
  },
  {
    question: "איך אתה אוהב לבלות את סופי השבוע ?",
    answers: [
      "אוהב לצאת לטבע ולטייל במקומות חדשים",
      "אוהב בעיקר לנוח בבית, לראות סדרות או סרטים בלי יותר מדי תכנונים",
      "יוצא למסיבות או מועדונים מדי פעם, תלוי במצב רוח ובחבר'ה"
    ],
    correct: [0]
  },
  {
    question: "איך היית מתאר את עצמך מבחינת יחסים חברתיים ?",
    answers: [
      "אני טיפוס עצמאי שלא מרבה להיות עם אנשים",
      "אני חברותי, יש לי חברים טובים ואני שומר על קשרים קרובים",
      "אין לי הרבה קשרים, אני מעדיף להיות לבד"
    ],
    correct: [1]
  },
  {
    question: "מהי הדרך האידיאלית שלך להתמודד עם לחץ ?",
    answers: [
      "משתדל לא להרגיש כלום ולתת לדברים להסתדר לבד",
      "אני יוצא להליכה או מדבר עם מישהו קרוב כדי להירגע ולחשוב בצלילות",
      "כשיש לחץ – אני בורח מהכול, מוותר ומתנתק"
    ],
    correct: [1]
  },
  {
    question: "כמה חשוב לך להיות מסודר ומאורגן בחיים ?",
    answers: [
      "אני מעדיף לחיות בספונטניות מוחלטת, בלי תכנון",
      "משתדל להיות מאורגן, אבל יש ימים שבהם אני זורם ולא מקפיד על הכול",
      "לרוב שוכח איפה שמתי את הדברים – סדר זה לא הצד החזק שלי"
    ],
    correct: [1]
  },
  {
    question: "מה הכי חשוב לך בעתיד ?",
    answers: [
      "לא לדאוג, פשוט לזרום עם החיים בלי תכנונים",
      "לא אכפת לי מה יהיה, החיים הם מקריות בלבד",
      " להיות אדם עם תוכנית מסודרת לעתיד ולבנות יציבות כלכלית"
    ],
    correct: [2]
  },
  {
    question: "איך אתה מתמודד עם משבר בזוגיות ?",
    answers: [
      "משתדל לדבר על הדברים בגובה העיניים, גם אם זה לא תמיד קל",
      "מעדיף להוריד פרופיל ולחכות שזה יעבור",
      "לפעמים הכל יוצא לי בלי סינון, במיוחד כשאני לחוץ"
    ],
    correct: [0]
  },
  {
    question: "איזה סוג חופשה הכי מושך אותך ?",
    answers: [
      "טיולים בטבע ופעילות אקטיבית – אבל גם לדעת לקחת רגע לעצמי",
      "לא ממש בקטע של טיולים, מעדיף שגרה וספה",
      "תלוי מי יוזם – אם מציעים לי, אני זורם, לא מתכנן מראש"
    ],
    correct: [0]
  },
  {
    question: "האם אתה מאמין בקשרי ידידות כשאתה בזוגיות ?",
    answers: [
      "כן, לגמרי – אמון הוא הבסיס לזוגיות",
      "רק אם שני בני הזוג מרגישים בנוח עם זה",
      "לא, בעיניי זה לא מתאים כשנמצאים בזוגיות רצינית"
    ],
    correct: [2]
  },
  {
    question: "איך אתה מתאר את הגישה שלך לחיים ?",
    answers: [
      "לא סומך בקלות, אבל גם לא שלילי בהכרח",
      "מסתכל על הדברים בצורה ריאלית ומעשית",
      "לפעמים אדיש, פשוט לא נותן לדברים לחדור עמוק"
    ],
    correct: [1]
  },
  {
    question: "מה היחס שלך למסורת ולדת ?",
    answers: [
      "אני לא מאמין בדת - אתאיסט",
      " אני לא שומר מסורת/כן שומר מסורת, אבל מכבד מי שכן/לא ",
      "אני לא מתחבר לדת – זה לא חלק מהחיים שלי"
    ],
    correct: [1]
  },
  {
    question: "מהי הדרך שלך להראות אהבה ותמיכה לבת הזוג ?",
    answers: [
      "מנסה להראות אהבה בעיקר דרך מחוות קטנות",
      "לפעמים מעדיף להראות את זה בשקט, בלי יותר מדי מילים או מחוות גדולות",
      "מילים ופעולות יחד, תלוי במצב"
    ],
    correct: [2]
  },
  {
    question: "האם לדעתך בגידה בזוגיות = תמיד סיבה לסיום הקשר ?",
    answers: [
      "לא, אפשר להתמודד ולתקן את הקשר",
      "תלוי בנסיבות ובכוונות של המעורבים",
      "Once a cheater, always a cheater"
    ],
    correct: [2]
  },
  {
    question: "איך אתה מתנהל מבחינה כלכלית ?",
    answers: [
      "כסף בא והולך, לא מתכנן כלום מראש",
      "יש לי שליטה על התקציב, אבל גם יודע לפרגן לעצמי כשצריך",
      "אני מתכנן כל הוצאה ומנסה לחסוך כמה שאפשר"
    ],
    correct: [1]
  },
  {
    question: "איך אתה נוהג להגיב כשמישהו טועה או פוגע בך ?",
    answers: [
      "מנסה להבין למה זה קרה ולשוחח על זה בכבוד",
      "מחכה שיתנצלו לפני שאני מדבר על זה",
      " מתעצבן ואומר את מה שיש לי להגיד  "
    ],
    correct: [0]
  },
  {
    question: "כמה זמן ואנרגיה אתה מוכן להשקיע בקשר ?",
    answers: [
      "להקדיש זמן איכות קבוע, גם אם זה דורש תכנון מראש",
      "נוטה להתמקד יותר בעניינים אישיים, והקשר מתנהל בהתאם",
      "בדרך כלל שומר על איזון בין זמן אישי לזמן זוגי, לא תמיד משקיע בצורה אחידה",
      
    ],
    correct: [0]
  },
  {
    question: "איך אתה מתייחס למשפחה המורחבת של בת הזוג ?",
    answers: [
      " מעדיף לשמור על פרטיות ולא להיות חלק מרכזי במשפחה המורחבת",
      "משתדל מאוד לשמור על קשר אך לא פעיל 100% באירועים משפחתיים",
      "חשוב לי לשמור על יחסים טובים בלבד לא מעבר לכך"
    ],
    correct: [1]
  },
  {
    question: "איך אתה רואה זוגיות לטווח הארוך ?",
    answers: [
      "מקום לגדול יחד ולבנות חיים משותפים",
      "מסגרת שדורשת התאמות – לפעמים מרגיש מגביל",
      "משהו שמתפתח עם הזמן, קשה לדעת מה ייצא מזה",
      
    ],
    correct: [0]
  }
];

let currentQuestion = 0;
let selectedAnswers = [];
let score = 0;
let currentPhone = "0546842169"; // נשמור פה את מספר הטלפון

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-btn").addEventListener("click", startQuiz);

    // מניעת חזרה אחורה עם הודעה מותאמת
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        alert("לא ניתן לחזור אחורה בשלב זה.");
        history.go(1);
    };
});

function checkAccess() {
    const phone = document.getElementById("phoneInput").value.trim();

    if (phone.length !== 10) {
        alert("מספר הטלפון חייב להכיל בדיוק 10 ספרות.");
        return;
    }

    if (!/^05\d{8}$/.test(phone)) {
        alert("מספר הטלפון חייב להתחיל ב-05 ולהכיל רק ספרות.");
        return;
    }

    currentPhone = phone;

    const completedPhones = JSON.parse(localStorage.getItem("completedPhones") || "[]");
    const adminPhone = "0546842169";

    if (phone === adminPhone) {
        showQuiz();
    } else if (completedPhones.includes(phone)) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("done-message").style.display = "block";
    } else {
        showQuiz();
    }
}

function showQuiz() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}

function startQuiz() {
    const music = document.getElementById("background-music");
    music.muted = false;
    music.play();
    music .volume = 0.1;

    console.log(" התחלת השאלון");

    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.transition = "opacity 0.8s ease-in-out";
    quizContainer.style.opacity = "0";

    setTimeout(() => {
        quizContainer.style.display = "none";
        document.getElementById("question-container").style.display = "block";
        showQuestion();
    }, 800);
}

function showQuestion() {
    console.log(`🧐 שאלה ${currentQuestion + 1}: ${questions[currentQuestion].question}`);
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <div class="box-container">
            <h2>${questions[currentQuestion].question}</h2>
        </div>
    `;

    selectedAnswers = [];

    questions[currentQuestion].answers.forEach((answer, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "answer-wrapper";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "answer";
        checkbox.value = index;
        checkbox.id = `answer-${index}`;
        checkbox.className = "answer-checkbox";

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                selectedAnswers.push(index);
            } else {
                selectedAnswers = selectedAnswers.filter((i) => i !== index);
            }

            document.getElementById("next-btn").style.display = (selectedAnswers.length === 1) ? "block" : "none";
        });

        const label = document.createElement("label");
        label.htmlFor = `answer-${index}`;
        label.textContent = answer;

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        container.querySelector(".box-container").appendChild(wrapper);
    });

    let nextButton = document.createElement("button");
    nextButton.id = "next-btn";
    nextButton.textContent = (currentQuestion === questions.length - 1) ? "סיום" : "שאלה הבאה";
    nextButton.style.display = "none";
    nextButton.addEventListener("click", nextQuestion);

    container.querySelector(".box-container").appendChild(nextButton);
}

function nextQuestion() {
    const correct = questions[currentQuestion].correct;
    if (arraysEqual(selectedAnswers.sort(), correct.slice().sort())) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question-container").innerHTML = "";
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    if (currentPhone !== "0546842169") {
        const completedPhones = JSON.parse(localStorage.getItem("completedPhones") || "[]");
        if (!completedPhones.includes(currentPhone)) {
            completedPhones.push(currentPhone);
            localStorage.setItem("completedPhones", JSON.stringify(completedPhones));
        }
    }

    localStorage.setItem("quizCompleted", "true");

    const totalQuestions = 22;
    const maxMistakesAllowed = 4;
    const requiredScore = totalQuestions - maxMistakesAllowed;

    if (score >= requiredScore) {
        container.innerHTML = `<h2>🎉🎉🎉 כל הכבוד לך עברת את השאלון</h2>
        <button id="go-to-whatsapp">המשך לווצאפ</button>`;
        document.getElementById("go-to-whatsapp").addEventListener("click", () => {
            window.location.href = "https://wa.me/972546842169";
        });
    } else {
        container.innerHTML = `
          <h2>💔 כנראה שזה פחות יעבוד בינינו... בהצלחה</h2>
          <div class="exit-btn-container">
            <button id="exit-quiz-btn" class="exit-btn">
              <span class="door-icon">🚪</span> יציאה
            </button>
          </div>
        `;

        document.getElementById("exit-quiz-btn").addEventListener("click", exitQuiz);
        blockUser();
    }
}

function exitQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "none";
    alert("יצאת מהשאלון. תודה שהיית כאן.");
}

function arraysEqual(a, b) {
    return (a.length === b.length && a.every((val, index) => val === b[index]));
}

function blockUser() {
    console.log("חסימת המשתמש (לוגיקה להוסיף כאן)");
}
