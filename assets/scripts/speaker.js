const speakers = [
  {
    id: 0,
    speaker_name: 'Hans-Derly Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
  {
    id: 1,
    speaker_name: 'Ken Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
  {
    id: 2,
    speaker_name: 'Roodson Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
  {
    id: 3,
    speaker_name: 'Jackson Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
  {
    id: 4,
    speaker_name: 'Julberthe Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
  {
    id: 5,
    speaker_name: 'Jacques Rameau',
    speaker_work: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    bg_img_speaker: '../images/bg-img-speaker.png',
    speaker_img: '../images/ken.png',
  },
];

const showSpeaker = () => {
  const speakerContainer = document.querySelector(
    '.featured_speaker_container_wrapper',
  );
  let speakersDiv = '';
  let sectionHide = '';
  let closeSectionHideDiv = '';
  speakers.forEach((speaker, index) => {
    if (index === 2) { sectionHide = '<div class="speaker_hide hide--mobile">'; }
    if (index === speakers.length - 1) closeSectionHideDiv = '</div>';

    speakersDiv += `
        ${sectionHide}
            <div class="featured_speaker_container">
                <div class="featured_speaker_image">
                    <img class="bg_img_speaker" src="./assets/images/bg-img-speaker.png" alt="" srcset="">
                    <img class="img_speaker" src="./assets/images/hans.png" alt="" srcset="">
                </div>
                <div class="featured_speaker_infos">
                    <div class="featured_speaker_name">
                        <p>${speaker.speaker_name}</p>
                    </div>
                    <div class="featured_speaker_work">
                        <p>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
                        <hr class="featured_hr">
                    </div>
                    <div class="featured_speaker_description">
                        <p>Benkler studies commons-based peer production, and published his seminal book, The Wealth
                        of
                        Networks in 2006</p>
                    </div>
                </div>
            </div>
            ${closeSectionHideDiv}`;
    sectionHide = '';
  });
  speakerContainer.innerHTML = speakersDiv;
};
showSpeaker();
