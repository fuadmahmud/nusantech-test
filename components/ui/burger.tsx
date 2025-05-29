import { cn } from "@/lib/utils";
import styles from "../styles/burger.module.css";

interface BurgerProps {
	open: boolean;
	onClick: () => void;
}

export default function Burger({ open, onClick }: BurgerProps) {
	return (
		<div
			className={cn(
				styles.burger,
				styles["burger-squeeze"],
				open && styles.open,
			)}
		>
			<div className={cn(styles["burger-lines"], "bg-black dark:bg-white")} />
			<div className={cn(styles["burger-lines"], "bg-black dark:bg-white")} />
			<div className={cn(styles["burger-lines"], "bg-black dark:bg-white")} />
		</div>
	);
}
