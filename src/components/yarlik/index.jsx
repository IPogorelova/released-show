import './index.css';

const Yarlik = ({ icon, link, text }) => {

  return (
    <a href={link} target="_blank" className="yarlik">
        <span className="yarlik__image"><img src={icon} alt={`${text} icon`} /></span>
        <span className="yarlik__text">{text}</span>
    </a>
  )
};

export default Yarlik;
