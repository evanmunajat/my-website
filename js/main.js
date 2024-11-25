
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY ANIV SAYANKU').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// Mengambil elemen-elemen yang diperlukan
// Mengambil elemen tombol dan audio
const toggleButton = document.getElementById("toggleButton");
const audioPlayer = document.getElementById("audioPlayer");

// Menangani klik tombol untuk memutar musik
toggleButton.addEventListener("click", function() {
    audioPlayer.play(); // Mulai memutar musik
});

