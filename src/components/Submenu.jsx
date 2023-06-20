import { useGlobalContext } from '../Context';
import sublinks from './../data';

const Submenu = () => {
  const {pageId, setPageId} = useGlobalContext();
  const currentPage = sublinks.find((item)=> item.pageId == pageId);
  
  const handleMouseLeave = (e) => { // onMouseLeave will trigger when the cursor is outside the target element(submenu class)
    setPageId(null);  // In css, must the submenu container at the top of nav element to not hiding the menu 
                      //when hover the bottom of the nav-link-btn. put z-index on it.
  }                   //{currentPage? 'submenu show-submenu' : 'submenu'}
  return (
    <div className="submenu-container" onMouseLeave={handleMouseLeave}>
        <div  className={currentPage? 'submenu show-submenu' : 'submenu'}>
          <h5>{currentPage?.page}</h5>
          <div className="submenu-links" 
            style={{gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr':'1fr',}}>

                {currentPage?.links?.map((link)=>{
                  const {id,url,label,icon} = link;
                
                  return <a key={id} href={url}>
                          {icon}
                          {label}
                      </a>
                })}

          </div>
        </div>
    </div>
    
  )
}

export default Submenu;