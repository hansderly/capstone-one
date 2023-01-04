const speakers = [
  {
    id: 0,
    speaker_name: 'Hans-Derly Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/7.png',
  },
  {
    id: 1,
    speaker_name: 'Ken Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/15.png',
  },
  {
    id: 2,
    speaker_name: 'Roodson Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/16.png',
  },
  {
    id: 3,
    speaker_name: 'Jackson Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/28.png',
  },
  {
    id: 4,
    speaker_name: 'Julberthe Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/30.png',
  },
  {
    id: 5,
    speaker_name: 'Jacques Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: 'assets/images/bg-img-speaker.png',
    speaker_img: 'assets/images/43.png',
  },
];

const showSpeaker = () => {
  const speakerContainer = document.querySelector(
    '.featured_speaker_container_wrapper',
  );
  let speakersDiv = '';
  let classHide = ''
  speakers.forEach((speaker, index) => {
    if (index > 1) classHide = 'speaker_hide hide--mobile'
    speakersDiv += `
            <div class="featured_speaker_container ${classHide}">
                <div class="featured_speaker_image">
                    <img class="bg_img_speaker" src="${speaker.bg_img_speaker}" alt="" srcset="">
                    <img class="img_speaker" src="${speaker.speaker_img}" alt="" srcset="">
                </div>
                <div class="featured_speaker_infos">
                    <div class="featured_speaker_name">
                        <p>${speaker.speaker_name}</p>
                    </div>
                    <div class="featured_speaker_work">
                        <p>${speaker.speaker_work}</p>
                        <hr class="featured_hr">
                    </div>
                    <div class="featured_speaker_description">
                        <p>${speaker.speaker_description}</p>
                    </div>
                </div>
            </div>
            `;
  });
  speakerContainer.innerHTML = speakersDiv;
};
showSpeaker();
