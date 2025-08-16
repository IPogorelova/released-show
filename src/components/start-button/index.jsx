import errorImg from '../../assets/images/error.png';

import './index.css';

const handleStartButtonClick = () => {
  window.scrollTo(0, 0);
  const body = document.querySelector('body');
  const images = document.querySelectorAll('.error-img');

  body.style.position = 'fixed';

  images.forEach((image, index) => {
    image.style.top = `${50 * index}px`;
    image.style.left = `${50 * index}px`;

    setTimeout(() => {
      image.classList += ' error-img-shown';
    }, index * 200);

    setTimeout(() => {
      image.classList = 'error-img';
    }, images.length * 200 + index * 200);

    setTimeout(() => {
      body.style = '';
    }, images.length * 200 * 2);
  });
};

export const StartButton = ({ className }) => (
  <button
    onClick={handleStartButtonClick}
    type="button"
    className={`start-button ${className}`}
  >
    <span className="visually-hidden">Start</span>
  </button>
);

export const StartButtonImages = () => (
  <>
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
    <img src={errorImg} className="error-img" alt="Error: Fail" />
  </>
);
