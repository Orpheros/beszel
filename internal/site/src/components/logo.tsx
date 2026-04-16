import { useId } from "react"

export function Logo({ className }: { className?: string }) {
	return (
		// Change into CTI Monitor logo
		<img
			src="/static/icon.png"
			alt="CTI Monitor Logo"
			className={className}
			// Ensure the image doesn't exceed its container
			style={{ height: "auto", maxWidth: "100%" }}
		/>
	)
}
