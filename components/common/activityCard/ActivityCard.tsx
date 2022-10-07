import React from "react";
import type { SingleActivity } from ".";
import { useLocale } from "../../../hooks/useLocale";

interface ActivityCardProps {
  singleActivity: SingleActivity;
}
const ActivityCard = ({ singleActivity }: ActivityCardProps) => {
  const isEn = useLocale();

  return (
    <article className="border-b-[1px] border-black py-4">
      <h2 className="flex flex-col text-title-color">
        <span className="text-m uppercase">
          {isEn ? singleActivity.title.title : singleActivity.title.title_cn}
        </span>
        <span className="text-main uppercase">
          {isEn
            ? singleActivity.title.content
            : singleActivity.title.content_cn}
        </span>
      </h2>
      <div className="text-m mt-4">
        <p>{isEn ? singleActivity.date : singleActivity.date_cn}</p>
        <p>{singleActivity.time}</p>
        <p>{isEn ? singleActivity.venue : singleActivity.venue_cn}</p>
      </div>
      <div className="mt-4">
        <p className="text-base">
          {isEn
            ? singleActivity.personeOnelTitle.title
            : singleActivity.personeOnelTitle.title_cn}
        </p>
        <ul className="text-m">
          {isEn
            ? singleActivity.personeOnelTitle.list.map((p) => (
                <li key={p}>{p}</li>
              ))
            : singleActivity.personeOnelTitle.list_cn.map((p) => (
                <li key={`${p}-cn`}>{p}</li>
              ))}
        </ul>
      </div>
      {singleActivity.personeTwolTitle && (
        <div className="mt-4">
          <p className="text-base">
            {isEn
              ? singleActivity.personeTwolTitle.title
              : singleActivity.personeTwolTitle.title_cn}
          </p>
          <ul className="text-m">
            {isEn
              ? singleActivity.personeTwolTitle.list.map((p) => (
                  <li key={p}>{p}</li>
                ))
              : singleActivity.personeTwolTitle.list_cn.map((p) => (
                  <li key={`${p}-cn`}>{p}</li>
                ))}
          </ul>
        </div>
      )}
      <div className="mt-4">
        {isEn
          ? singleActivity.details.map((d) => (
              <li key={d} className="text-m">
                {d}
              </li>
            ))
          : singleActivity.details_cn.map((d) => (
              <li key={`${d}-cn`} className="text-m">
                {d}
              </li>
            ))}
      </div>

      <a
        href={singleActivity.registeration_link}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 uppercase text-m p-2 text-title-color border-title-color border-[1px] hover:opacity-70"
      >
        {isEn ? "registration" : "註冊參加"}
      </a>
    </article>
  );
};

export default ActivityCard;
