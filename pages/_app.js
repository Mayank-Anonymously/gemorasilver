import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper, getPersistor } from '@/component/redux/store';
import ClientToast from '@/component/common/ClientContainer';

/* ---------- App Content ---------- */

function AppContent({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	useEffect(() => {
		const disableZoom = (e) => {
			if (e.touches.length > 1) e.preventDefault();
		};

		document.addEventListener('touchmove', disableZoom, { passive: false });
		document.addEventListener('gesturestart', (e) => e.preventDefault());

		return () => {
			document.removeEventListener('touchmove', disableZoom);
			document.removeEventListener('gesturestart', (e) => e.preventDefault());
		};
	}, []);

	return <Component {...pageProps} />;
}

/* ---------- Client-only wrapper ---------- */

function ClientOnly({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return children;
}

/* ---------- MyApp ---------- */

function MyApp({ Component, pageProps }) {
	const store = useStore();
	const persistor = getPersistor(store);

	return (
		<>
			{/* 🔒 SAME TREE on server & client */}
			<AppContent
				Component={Component}
				pageProps={pageProps}
			/>

			{/* 🧠 Client-only features AFTER hydration */}
			<ClientOnly>
				<PersistGate persistor={persistor}>
					{/* PersistGate does not wrap layout */}
				</PersistGate>

				<ClientToast />
			</ClientOnly>
		</>
	);
}

export default wrapper.withRedux(MyApp);
