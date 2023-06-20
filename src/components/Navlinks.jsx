import { useGlobalContext } from '../Context';
import sublinks from './../data';

const Navlinks = () => {
    const {setPageId} = useGlobalContext();
    return (
            <div className="nav-links">
                {sublinks.map((item)=>{
                    const {pageId,page,links} = item;
                    return (
                        <button type='button' key={pageId} className='nav-link-btn'
                        onMouseEnter={()=>setPageId(pageId)}
                        >
                            {page}
                        </button>
                    );
                })}
          </div>
    )
}

export default Navlinks