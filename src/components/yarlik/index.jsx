import './index.css';

export const Yarlik = ({ icon, link, text }) => {

  return (
    <a href={link} target="_blank" className="yarlik">
        <span className="yarlik__image"><img src={icon} alt={`${text} icon`} /></span>
        <span className="yarlik__text">{text}</span>
    </a>
  )
};

export const YarlikButton = ({ icon, text, onClick }) => {

  return (
    <button className="yarlik yarlik_button" onClick={onClick}>
        <span className="yarlik__image"><img src={icon} alt={`${text} icon`} /></span>
        <span className="yarlik__text">{text}</span>
    </button>
  )
};
