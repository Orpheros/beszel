export function Logo({ className }: { className?: string }) {
	return (
		<img
			src="/static/icon.png"
			alt="CTI Monitor Logo"
			className={className}
			// Added object-contain to ensure the logo doesn't stretch
			// if the parent container has weird dimensions
			style={{ height: "100%", width: "auto", objectFit: "contain" }}
		/>
	)
}
