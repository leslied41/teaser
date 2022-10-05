import React, { Fragment, useEffect } from "react";
import { useGlobalContext } from "../index";
import { CloseIcon } from "../../icons";
import { ActivityCard, ActivityData } from "../index";
import SidebarFooter from "../../sidebarFooter";
import { useLocale } from "../../../hooks/useLocale";
import cn from "clsx";

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  const closeSidebar = () => setOpenSidebar!(false);
  const isEn = useLocale();

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("#sidebar")) return;
      closeSidebar();
    };
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <aside
      id="sidebar"
      className={cn(
        "fixed inset-0 z-20   bg-white overflow-y-scroll transition-all",
        {
          ["w-0"]: !openSidebar,
          ["w-full md:w-[640px]"]: openSidebar,
        }
      )}
    >
      <div className="relative w-full px-4 pt-20 pb-[100px]">
        <button
          aria-label="close sidebar"
          className="absolute top-4 right-4 cursor-pointer hover:opacity-70"
          onClick={closeSidebar}
        >
          <CloseIcon />
        </button>
        <div className="w-fit p-2 bg-black text-title-color text-main capitalize">
          <h1>{isEn ? "Exhibition activities" : "展覽活動"}</h1>
        </div>
        <div className="mt-4">
          {ActivityData.map((item) => (
            <Fragment key={item.id}>
              <ActivityCard singleActivity={item} />
            </Fragment>
          ))}
        </div>
        <SidebarFooter className="mt-6" />
      </div>
    </aside>
  );
};

export default Sidebar;
