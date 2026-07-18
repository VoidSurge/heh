// ===============================
// Elements
// ===============================

const bootLog = document.getElementById("bootLog");
const progressBar = document.getElementById("progressBar");
const clickText = document.getElementById("clickText");

const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
const messageScreen = document.getElementById("messageScreen");

const loginButton = document.getElementById("loginButton");
const loginStatus = document.getElementById("loginStatus");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const typedMessage = document.getElementById("typedMessage");
const secretMessageScreen = document.getElementById("secretMessageScreen");
const secretTypedMessage = document.getElementById("secretTypedMessage");
const secretMessageScreen2 = document.getElementById("secretMessageScreen2");
const secretTypedMessage2 = document.getElementById("secretTypedMessage2");

// ===============================
// Change these!
// ===============================

const correctUsername = "dabigmole";
const correctPassword = "poisonivy";
const secretPassword = "jvalinn";
const secretPassword2 = "mole";


// ===============================
// Boot Messages
// ===============================

const bootMessages = [
    "Initializing...",
    "✓ Loading kernel...",
    "✓ Checking Wi-Fi...",
    "✓ Watering plants...",
    "✓ Feeding pixel kuttoos...",
    "✓ Brewing milo...",
    "✓ Loading 2 brain cells...",
    "✗ Error",
    "...uhm anyways",
    "✓ Leaking embarrassing photos...",
    "✓ Searching for common sense...",
    "✗ None found.",
    "",
    "Continuing anyway...",
    "",
    "✓ Summoning hot old men...",
    "✓ Success.",
    "",
    "✓ Welcome back!",
    "",
    "System ready."
];

let bootIndex = 0;

// ===============================
// Boot Animation
// ===============================

function addBootMessage() {

    if (bootIndex >= bootMessages.length) {

        clickText.classList.remove("hidden");
        return;

    }

    const line = document.createElement("div");
    line.className = "logLine";
    line.textContent = bootMessages[bootIndex];

    bootLog.appendChild(line);

    progressBar.style.width =
        ((bootIndex + 1) / bootMessages.length) * 100 + "%";

    bootLog.scrollTop = bootLog.scrollHeight;

    bootIndex++;

    setTimeout(addBootMessage, 700);

}

addBootMessage();

// ===============================
// Boot -> Login
// ===============================

bootScreen.addEventListener("click", () => {

    if (bootIndex < bootMessages.length) return;

    bootScreen.style.opacity = "0";

    setTimeout(() => {

        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");

        usernameInput.focus();

    }, 500);

}, { once: true });

// ===============================
// Authentication
// ===============================

loginButton.addEventListener("click", authenticate);

passwordInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        authenticate();

    }

});

function authenticate() {

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    if (username !== correctUsername) {

        loginStatus.style.color = "#ff7777";
        loginStatus.textContent = "ACCESS DENIED";

        return;
    }

    if (password === secretPassword) {

        loginStatus.textContent = "Hidden archive located...";

        setTimeout(() => {

            loginScreen.classList.add("hidden");
            secretMessageScreen.classList.remove("hidden");

            typeSecretMessage();

        }, 1200);

        return;
    }

    if (password === secretPassword2) {

        loginStatus.textContent = "Hidden archive located...";

        setTimeout(() => {

            loginScreen.classList.add("hidden");
            secretMessageScreen2.classList.remove("hidden");

            typeSecretMessage2();

        }, 1200);

        return;
    }

    if (password !== correctPassword) {

        loginStatus.style.color = "#ff7777";
        loginStatus.textContent = "ACCESS DENIED";

        return;
    }

    loginButton.disabled = true;

    const steps = [

        "Authenticating...",
        "Consulting the ancient oak...",
        "Checking butterfly registry...",
        "Convincing the frogs...",
        "Decrypting mole eras...",
        "Birthday Protocol Accepted."

    ];

    let step = 0;

    const interval = setInterval(() => {

        loginStatus.style.color = "#A8BBA2";
        loginStatus.textContent = steps[step];

        step++;

        if (step >= steps.length) {

            clearInterval(interval);

            setTimeout(() => {

                loginScreen.classList.add("hidden");
                messageScreen.classList.remove("hidden");

                typeMessage();

            }, 900);

        }

    }, 700);

}

// ===============================
// Birthday Message
// ===============================

const birthdayMessage = `SYSTEM MESSAGE

Hey, Mole

So, you're officially old now. How does it feel to have arthritis?
I know the bday party, wasn't prolly the best one, but I hope you had fun!
Yknow, when i first met ya back in 11th, I thought you were pretty weird. Never thought we'd end up becoming so close💀
But I'm glad that I met you, you've been one of the best(maybe even tied for best?) friend I've had.
Thank you for those sleepless nights of chats, infecting my spotify with Taylor Swift, all the jokes and brainrot you've educated me on.
I also haven't given up on finding your one Harry Potter fanfic btw, no matter how long it takes, I'll find it.
And I'll never forget the chaos that was our hydrophonics project. It is the most fun I've had working on a group(?) project.
Also, one day, i'll definitely compile the list of all the old men you have in your harem, no matter how expansive it is.
What I'm trying to say, is thank you for being my friend. You're an amazing person, even if I don't really tell you that.
I hope we'll keep being friends till the end of time, and then some.
And also do remember my promise, no matter what, I'm always there for you.
I may not be that active on socials, but I'll always have time for you aight?
Please, keep being mole, mole.
I personally think the world would be a better place if there was more of you in it.
(Even if that might me mildly terrifying)

Happy Late Birthday, Gramma Mole❤️`;

function typeMessage() {

    typedMessage.textContent = "";

    let i = 0;

    function type() {

        if (i < birthdayMessage.length) {

            typedMessage.textContent += birthdayMessage.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}

const secretMessage = `ACCESSING HIDDEN ARCHIVE...

Uhhh....
if you're reading this, that means you found the secret secret password.
you might be wondering whats the point of a secret secret password, well, im testing something.
you can call it luck, or fate, or whatever.
i call it the result of sleep deprivation.
soo
i got something to tell you.
its important, really personal, and something(s?) ive been wondering if i should tell you.
why im even doing this? well, im scared, and tired of always keeping secrets from everyone.
its not really by choice, its just how ive learned to live ig ¯\_(ツ)_/¯
so yea, if ya wanna know more, send me a screenshot of this page ig.

...

Happy birthday, you little gremlin. ❤️`;

function typeSecretMessage() {

    secretTypedMessage.textContent = "";

    let i = 0;

    function type() {

        if (i < secretMessage.length) {

            secretTypedMessage.textContent += secretMessage.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}

const secretMessage2 = `ACCESSING HIDDEN ARCHIVE...





seriously.






`;

function typeSecretMessage2() {

    secretTypedMessage2.textContent = "";

    let i = 0;

    function type() {

        if (i < secretMessage2.length) {

            secretTypedMessage2.textContent += secretMessage2.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}
