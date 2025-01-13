// import Modals from '../modals/modals';
// import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './theme-provider';

const Providers = async ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
