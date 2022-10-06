import React, { FC, memo } from "react";
import cn from "clsx";
import { useGlobalContext } from "../common";
import { useLocale } from "../../hooks/useLocale";
import { sponsors, curators, artists } from "./data";

interface Props {
  className?: string;
}

const ExhibitionInfo: FC<Props> = ({ className }) => {
  const { setOpenSidebar } = useGlobalContext();
  const isEn = useLocale();

  const showSidebar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpenSidebar!(true);
  };

  return (
    <>
      {/* <div className="absolute top-[26px] sm:top-8 left-2 sm:left-3 p-2 bg-white w-fit  text-title-color text-m mix-blend-normal">
        <p
          className={cn("w-fit uppercase", {
            ["!w-[254px] sm:!w-fit"]: isEn,
          })}
        >
          {isEn
            ? "The official website will be launched on 8・10・2022"
            : "正式網頁將於 8・10・2022 公佈"}
        </p>
      </div> */}
      <div
        className={cn(
          "flex flex-col gap-y-5 text-base sm:text-sm text-white",
          className,
          {
            ["!text-sm-cn sm:!text-base-cn"]: !isEn,
          }
        )}
      >
        <div
          className={cn("text-m mix-blend-exclusion", {
            ["text-m-cn"]: !isEn,
          })}
        >
          <p>8 — 30·10·2022</p>
          <p>{isEn ? "4/F, Pao Galleries" : "香港藝術中心四樓包氏畫廊"}</p>
          {isEn && <p>Hong Kong Arts Centre</p>}
        </div>
        <div className="mix-blend-exclusion">
          <p>8 — 29·10·2022 (10:00am — 8:00pm)</p>
          <p>30·10·2022 (10:00am — 4:00pm)</p>
          <p>
            {isEn
              ? "Opening: 7·10·2022 (6:30pm onwards)"
              : "開幕: 7·10·2022 (6:30pm 始)"}
          </p>
        </div>
        {/* <div className="mix-blend-exclusion">
          <p>
            {isEn
              ? "Co-presented by Jumu Tang & HKAC"
              : "舉目堂・香港藝術中心呈獻"}
          </p>
          <p>
            {isEn
              ? "Supported by AVA & KTO, HKBU・HKADC"
              : "香港浸會大學視覺藝術院 & "}
          </p>
          <p></p>
          <p>
            {isEn
              ? "Highlighted Programme of"
              : "知識轉移處・香港藝術發展局支持"}
          </p>
          <p>
            {isEn
              ? "HKAC's 45th Anniversary Celebration"
              : "香港藝術中心四十五週年誌慶重點節目"}
          </p>
        </div> */}
        <div className="mix-blend-exclusion">
          <p>{isEn ? "Curator" : "策展人"}</p>
          {artists.map((i) => (
            <p key={i.name_en}>{isEn ? i.name_en : i.name_cn}</p>
          ))}
        </div>
        <div className="mix-blend-exclusion">
          <p>{isEn ? "Curator" : "策展人"}</p>
          {curators.map((i) => (
            <p key={i.name_en}>{isEn ? i.name_en : i.name_cn}</p>
          ))}
        </div>
        <div className="mix-blend-exclusion">
          <p>
            {isEn
              ? "Please drop by Hong Kong Arts Centre or"
              : "如欲知策展概念及藝術作品等資訊，"}
          </p>
          <p>
            {isEn
              ? "revisit this website after 31·10·2022 to"
              : "或於30 ·10·2022後再瀏覽本網頁。"}
          </p>
          <p>
            {isEn
              ? "know more  this exhibition such as"
              : "請到香港藝術中心參觀，"}
          </p>
          {isEn && <p>the curatorial idea and the artworks.</p>}
        </div>
        {/* <div className="mix-blend-exclusion">
          <p >{isEn ? "Sponsors" : "贊助"}</p>
          {sponsors.map((i, index) => (
            <p key={index}>{isEn ? i.name_en : i.name_cn}</p>
          ))}
        </div> */}
        <div>
          <button
            className="relative z-10 hover:bg-black p-2 text-m text-[#C68F5C] bg-white cursor-pointer uppercase"
            onClick={showSidebar}
          >
            {isEn ? "more info" : "更多資訊"}
          </button>
        </div>
      </div>
    </>
  );
};
export default memo(ExhibitionInfo);
