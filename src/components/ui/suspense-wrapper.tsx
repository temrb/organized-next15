import { Suspense } from 'react';
import LoadingSpinner from './loading/loading-spinner';
import PageLoading from './loading/page-loading';

interface SuspenseWrapperProps {
	type?: 'component' | 'page';
	children: React.ReactNode;
	loadingSize?: number;
}

const SuspenseWrapper = ({
	children,
	loadingSize = 16,
	type,
}: Readonly<SuspenseWrapperProps>) => {
	return (
		<Suspense
			fallback={
				type === 'page' ? (
					<PageLoading />
				) : (
					<LoadingSpinner size={loadingSize || 16} />
				)
			}
		>
			{children}
		</Suspense>
	);
};

export default SuspenseWrapper;
