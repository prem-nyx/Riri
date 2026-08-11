document.addEventListener("DOMContentLoaded", function () {

  const startBtn = document.getElementById("startBtn");
  const landing = document.getElementById("landing");
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const muteIcon = document.getElementById("muteIcon");

  const birthdaySection = document.getElementById("birthdaySection");
  const lightVeil = document.querySelector(".light-veil");
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");
  const nextBtn = document.getElementById("nextBtn");

  const letterSection = document.getElementById("letterSection");
  const finalBtn = document.getElementById("finalBtn");
  const typedContainer = document.getElementById("typedText");

  const darkOverlay = document.getElementById("darkOverlay");

  const TARGET_VOLUME = 0.65;

  let userScrolled = false;

  document.body.style.overflow = "hidden";

  window.addEventListener("scroll", () => {
    userScrolled = true;
  });

  startBtn.addEventListener("click", () => {

    startBtn.disabled = true;

    music.volume = 0;
    music.play().then(() => {
      const fade = setInterval(() => {
        if (music.volume < TARGET_VOLUME) {
          music.volume += 0.02;
        } else {
          music.volume = TARGET_VOLUME;
          clearInterval(fade);
        }
      }, 100);
    });

    setTimeout(() => landing.classList.add("fall"), 150);
    setTimeout(() => landing.style.display = "none", 5500);

    setTimeout(() => {
      birthdaySection.classList.remove("hidden");
      birthdaySection.classList.add("show");
    }, 2500);

    setTimeout(() => lightVeil.classList.add("reveal"), 3500);
    setTimeout(() => line1.classList.add("show"), 5500);
    setTimeout(() => line2.classList.add("show"), 7500);
    setTimeout(() => line3.classList.add("show"), 9500);
    setTimeout(() => nextBtn.classList.add("show-btn"), 12000);
  });

  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicIcon.style.display = "block";
      muteIcon.style.display = "none";
    } else {
      music.pause();
      musicIcon.style.display = "none";
      muteIcon.style.display = "block";
    }
  });

  nextBtn.addEventListener("click", () => {

  birthdaySection.classList.add("fade-out");
  lightVeil.classList.add("fade-out");

  const aurora = document.querySelector(".aurora");
  if (aurora) aurora.classList.add("fade-out");

  setTimeout(() => {

    birthdaySection.style.display = "none";

    letterSection.classList.remove("hidden");
    letterSection.classList.add("show");

    document.body.style.overflow = "auto";

    startTyping();

  }, 2000);

});

  function startTyping() {

    userScrolled = false;
    typedContainer.innerHTML = "";

    const text = `
Dear Nidhi,

I hope this little letter finds you smiling, the way you always manage to light up my world.

The night sky here in the background is beautiful, isn’t it? The stars are twinkling, the music is peaceful… but something is missing.

There is no moon.

Now you might be wondering why I chose the night sky without one. It’s because the moon reminds me of you. Because you are the moon in my night sky.

Even the moon has craters.
Imperfections.
Scars from old impacts.
Yet we still call it beautiful.

And without it… the night never feels complete, no matter how many stars there are.

Sometimes the moon disappears. It fades. It hides.

But it always comes back. And when it does… it shines even brighter.

So even if you feel distant sometimes… even if you feel imperfect… you are still the light that makes someone’s sky complete.

And trust me… this sky wouldn’t look the same without you.

Should the world ever feel heavy upon your crown, know there stands a knight who would gladly walk beside you.

Happy 19th birthday, princess Nidhi. May this year bring you growth, gentle moments, loud laughter, and all the happiness you quietly deserve.
`;

    let index = 0;

    function type() {

      if (index < text.length) {

        typedContainer.innerHTML += text[index];

        let delay = 22;

        const char = text[index];

        if (char === ".") delay = 380;
        if (char === ",") delay = 160;
        if (char === "\n") delay = 500;

        index++;

        if (!userScrolled) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }

        setTimeout(type, delay);

      } else {

        setTimeout(() => {
          finalBtn.classList.add("show-btn");
        }, 800);

      }
    }

    type();
  }
  
  finalBtn.addEventListener("click", () => {
    letterSection.style.opacity = "0";

    music.volume = 0.3;

    setTimeout(() => {
      darkOverlay.classList.add("active");
    }, 1000);
    
    setTimeout(() => {
      letterSection.style.display = "none";
      showFinalMessage();
    }, 3000);
  });

  function showFinalMessage() {
    if (document.getElementById("finalMessage")) return;
    const finalSection = document.createElement("section");
    finalSection.id = "finalMessage"
    
    finalSection.innerHTML = `
    <div class="ritual-line hidden-word" id="ritualLine">
      Let me complete the ritual...
    </div>

    <div class="final-hero">
      <h1 id="happy" class="hidden-word">HAPPY</h1>
      <h1 id="birthday" class="hidden-word">BIRTHDAY</h1>
      <h2 id="princess" class="hidden-word">Princess Nidhi ✨</h2>
    </div>
  `;

  document.body.appendChild(finalSection);

  setTimeout(() => {

    window.scrollTo({ top: 0, behavior: "smooth" });

    document.getElementById("ritualLine").classList.add(
      "animate__animated", "animate__fadeIn"
    );
  }, 500);

  setTimeout(() => {
    document.getElementById("happy").classList.add(
      "animate__animated", "animate__lightSpeedInLeft"
    );
  }, 3000);

  setTimeout(() => {
    document.getElementById("birthday").classList.add(
      "animate__animated", "animate__lightSpeedInRight"
    );
  }, 4000);

  setTimeout(() => {
    document.getElementById("princess").classList.add(
      "animate__animated", "animate__fadeInUp"
    );
  }, 5000);
}

});


