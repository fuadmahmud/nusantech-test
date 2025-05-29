"use client";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Nav } from "./nav";
import { ChevronLeftIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { useDebounceCallback } from "usehooks-ts";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./drawer";

export default function Header() {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const searchRef = useRef<HTMLInputElement>(null);
	const visible = pathname === "/search";

	const handleClickIcon = useCallback(() => {
		if (visible && searchRef.current?.value) {
			router.push(`/search?s=${searchRef.current.value}`);
		} else {
			router.push("/search");
		}
	}, [visible, router]);

	const handleSearch = useDebounceCallback(
		() => router.push(`/search?s=${searchRef.current?.value}`),
		500,
	);

	return (
		<header className="flex flex-row items-center justify-between p-4 sticky top-0 z-50 glass lg:px-16 w-full">
			{pathname === "/search" ? (
				<Button onClick={() => router.back()} variant="ghost" size="icon">
					<ChevronLeftIcon />
				</Button>
			) : (
				<Link href="/">Movie Next App</Link>
			)}
			<Nav className="hidden lg:block" />
			<div className="flex flex-row items-center gap-2">
				<Input
					placeholder="Search movies, tv shows or even people"
					ref={searchRef}
					onChange={handleSearch}
					className={cn(visible ? "block" : "hidden", "max-w-3/4")}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleClickIcon();
						}
					}}
				/>
				<Button variant="ghost" size="icon" onClick={handleClickIcon}>
					<SearchIcon />
				</Button>
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button variant="ghost" size="icon" className="lg:hidden">
							{open ? <XIcon /> : <MenuIcon />}
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Menu</DrawerTitle>
						</DrawerHeader>
						<Nav />
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	);
}
