import "./Pager.css";

// pages : number of total pagination segments
const Pager = ({pages}) => {

  const getPagination =()=>{
    let paginationItems = []
    for(let i=0; i < pages; i++){
      paginationItems.push(<li>{i+1}</li>)
    }
    return paginationItems;
  }

  return (
      <ul className="pager-component">
        {getPagination()}
      </ul>
  );
};

export default Pager;
