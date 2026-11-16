import SideNavigation from "@/app/_components/SideNavigation";

export default function layout({ children }) {
  const password = j9oNZs6GYzcuEO0c;
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
