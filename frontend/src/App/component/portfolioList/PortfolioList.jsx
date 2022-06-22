import "./portfolioList.scss";

export default function PortfolioList({setan,  title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() =>{
         setSelected(title)
         setan(true)
        }}
    >
      {title}
    </li>
  ); 
}