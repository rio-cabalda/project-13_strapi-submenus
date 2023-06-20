import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(false); // this is use for the nav bar showing the white page

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <AppContext.Provider 
        value={{isSidebarOpen, 
            setSidebarOpen,
            openSidebar,
            closeSidebar,
            pageId,
            setPageId}} >
                {children}
            </AppContext.Provider>
    );
    
}

export const useGlobalContext = () => useContext(AppContext);