import React, { createContext, useContext, useState, ReactNode} from "react";

export interface UserAuth {
    userId?: number;
    userCode?: string;
    userName?: string;
    userRole?: string;
    loginTime?: string;
}

interface UserContextType {
    userAuth: UserAuth;
    setUserAuth: (userAuth: UserAuth) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [userAuth, setUserAuth] = useState<UserAuth>({});

    return (
        <UserContext.Provider value={{userAuth, setUserAuth}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('within a UserProvider');
    }
    return context;
}

export { UserContext };