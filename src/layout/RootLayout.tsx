import Header from "../components/Header";
import Left from "../components/Left";
// import Right from "../components/Right";

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Portfolio Header */}
			<Header />

			{/* Main Content */}
			<main>
				{children}
			</main>

			{/* Social Media Links */}
			<Left />
		</div>
	)
}