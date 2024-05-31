/* eslint-disable react-hooks/exhaustive-deps */
import {ReactNode, createContext, useContext, useMemo} from 'react';
import {useLocalStorage} from './useLocalStorage';

interface AuthContextType {
	user: any;
	login: (data: string) => Promise<void>;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: AuthProviderProps) => {
	const [user, setUser] = useLocalStorage('user', null);

	// call this function when you want to authenticate the user
	const login = async (data: string) => {
		setUser(data);
	};

	// call this function to sign out logged in user
	const logout = () => {
		setUser(null);
	};

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
