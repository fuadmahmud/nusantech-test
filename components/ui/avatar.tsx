import Image from "next/image";

interface AvatarProps {
	src: string;
	alt: string;
	title?: string;
	description?: string;
}

export default function Avatar({ src, alt, title, description }: AvatarProps) {
	return (
		<div className="flex flex-row items-center gap-2">
			<Image src={src} alt={alt} />
			<div className="flex flex-col gap-1">
				{title && <p className="text-sm font-medium">{title}</p>}
				{description && <p>{description}</p>}
			</div>
		</div>
	);
}
