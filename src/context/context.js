import { createContext, useState } from "react";
import { message } from "antd";
const MyContext = createContext();

export const MyContextProvider = (props) =>{




    const [navBarIsOpen,setNavBarIsOpen] = useState(false);


    const [appColorTheme,setAppColorTheme] = useState('#676767');
    const [isAppLoading,setIsAppLoading] = useState(true)

    const toggleNavbar = () => setNavBarIsOpen(!navBarIsOpen);

    const [messageApi, contextHolder] = message.useMessage();
  //error message
  const promptMessage = (type,msg) => {
    messageApi.open({
      type: type,
      content: msg,
    });
  };

    return(
        <MyContext.Provider value={{
            navBarIsOpen,setNavBarIsOpen,
            toggleNavbar,
            appColorTheme,setAppColorTheme,
            isAppLoading,setIsAppLoading,
            promptMessage,contextHolder
            }}>
            {props.children}
        </MyContext.Provider>
    )
}


export default MyContext;