import React, { FC } from "react";
import { useLocale } from "../../hooks/useLocale";
import { data, sponsorData } from "./data";
import cn from "clsx";

interface Props {
  className: string;
}

const SidebarFooter: FC<Props> = ({ className }) => {
  const isEn = useLocale();
  return (
    <footer className={cn(className)}>
      <section aria-labelledby="Acknowledgements">
        <h2
          id="Acknowledgements"
          className="inline-block w-fit h-fit p-2 text-main text-title-color bg-black uppercase"
        >
          {isEn ? "Acknowledgements" : "鳴謝"}
        </h2>
        <div className="mt-6">
          <ul>
            {data.map((d) => (
              <li key={d.title} className="text-m">
                {isEn ? d.title : d.title_cn}: {isEn ? d.person : d.person_cn}
              </li>
            ))}
          </ul>
        </div>
        <section className="mt-6" aria-labelledby="Co-presented by">
          <h3
            id="Co-presented by"
            className="text-m text-title-color uppercase"
          >
            {isEn ? "Co-presented by" : "呈獻"}
          </h3>
          <div className="flex items-center  gap-x-[25px] sm:gap-x-[50px] mt-6">
            <figure>
              {" "}
              <img
                src="images/footer/logo-1.png"
                alt="logo-1"
                className="object-contain"
              />
            </figure>
            <figure>
              <img
                src="images/footer/logo-2.png"
                alt="logo-2"
                className="object-contain"
              />
            </figure>
          </div>
          <p className="text-m mt-6 sm:mt-[50px]">
            {isEn
              ? "Highlighted Programme of Hong Kong Arts Centre's 45th Anniversary Celebration This project is sponsored by the Research Grants Council under project number 12606618"
              : "香港藝術中心四十五週年誌慶重點節目 此項目乃研究資助局資助項目，項目編號為12606618"}
          </p>
        </section>
        <section aria-labelledby="supported by" className="mt-6 sm:mt-[50px]">
          <h3 className="text-m text-title-color uppercase" id="supported by">
            {isEn ? "supported by" : "支持"}
          </h3>
          <div className="mt-6 sm:mt-4">
            <figure>
              <img src="images/footer/logo-3.png" alt="logo-3" />
            </figure>
          </div>
          <div className="flex mt-6 sm:mt-4 items-center gap-x-[25px] sm:gap-x-[50px]">
            <figure>
              <img
                src="images/footer/logo-4.png"
                alt="logo-4"
                className="object-contain"
              />
            </figure>
            <figure>
              <img
                src="images/footer/logo-5.png"
                alt="logo-5"
                className="object-contain"
              />
            </figure>
          </div>
        </section>
        <section aria-labelledby="Sponsored by" className="mt-6 sm:mt-[50px]">
          <h3 className="text-m text-title-color uppercase" id="Sponsored by">
            {isEn ? "Sponsored by" : "贊助"}
          </h3>
          <div className="mt-6  flex gap-x-[25px] sm:gap-x-[50px]">
            <figure>
              <img
                src="images/footer/logo-6.png"
                alt="logo-6"
                className="object-contain"
              />
            </figure>
            <figure>
              <img
                src="images/footer/logo-7.png"
                alt="logo-7"
                className="object-contain"
              />
            </figure>
          </div>
          <div className="flex mt-6 items-center gap-x-[25px] sm:gap-x-[50px]">
            <figure>
              <img
                src="images/footer/logo-8.png"
                alt="logo-8"
                className="object-contain"
              />
            </figure>
            <figure>
              <img
                src="images/footer/logo-9.png"
                alt="logo-9"
                className="object-contain"
              />
            </figure>
          </div>
          <div className="mt-6">
            <ul className="text-m">
              {isEn
                ? sponsorData.en.map((s) => <li key={`${s}-en`}>{s}</li>)
                : sponsorData.cn.map((s) => <li key={`${s}-cn`}>{s}</li>)}
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default SidebarFooter;
