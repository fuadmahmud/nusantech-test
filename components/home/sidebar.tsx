import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
} from "../ui/sidebar";

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>Movie App Next</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>Grup</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
