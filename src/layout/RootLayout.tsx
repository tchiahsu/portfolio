import Header from "../components/Header";
import Left from "../components/Left";

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Portfolio Header */}
			<Header />

			{/* Main Content */}
			<main className="w-screen">
				{children}
			</main>

			{/* Social Media Links */}
			<Left />
		</div>
	)
}