import React, { useEffect, useState, useRef, useMemo } from "react";
import ExhibitionInfo from "../components/ExhibitionInfo";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import LocaleSwitch from "../components/LocaleSwitch";
import ProgressBar from "../components/progressBar/";
import VideoBg from "../components/videoBg";
import { Layout } from "../components/common";
import { data } from "../components/TitleAndSubtitle/data";
import { useRouter } from "next/router";
import cn from "clsx";
var debounce = require("lodash.debounce");

const Home = () => {
  const [update, setUpdate] = useState(false);
  const indexRef = useRef<number>(0);
  const touchStartPositionRef = useRef<number>();
  const currentPositionRef = useRef<number>();
  const landingPageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const wheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (indexRef.current < data.length - 1) {
        indexRef!.current = indexRef.current! + 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === data.length - 1) {
        indexRef.current = 0;
        return setUpdate((prev) => !prev);
      }
    }
    if (e.deltaY < 0) {
      if (indexRef.current > 0) {
        indexRef.current = indexRef.current - 1;
        return setUpdate((prev) => !prev);
      }

      if (indexRef.current === 0) {
        indexRef.current = data.length - 1;
        return setUpdate((prev) => !prev);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartPositionRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    currentPositionRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartPositionRef.current) return;
    if (!currentPositionRef.current) return;
    if (currentPositionRef.current - touchStartPositionRef.current < -50) {
      if (indexRef.current < data.length - 1) {
        indexRef.current = indexRef.current + 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === data.length - 1) {
        indexRef.current = 0;
        return setUpdate((prev) => !prev);
      }
    }
    if (currentPositionRef.current - touchStartPositionRef.current > 50) {
      if (indexRef.current > 0) {
        indexRef.current = indexRef.current - 1;
        return setUpdate((prev) => !prev);
      }
      if (indexRef.current === 0) {
        indexRef.current = data.length - 1;
        return setUpdate((prev) => !prev);
      }
    }
  };

  const updateIndexRef = useMemo(
    () => (index: number) => {
      indexRef.current = index;
    },
    []
  );

  useEffect(() => {
    if (!landingPageRef.current) return;
    const debounceFn = debounce(wheel, 35);
    const debounceTouchMove = debounce(handleTouchMove, 50);
    landingPageRef.current.addEventListener("wheel", debounceFn);
    landingPageRef.current.addEventListener("touchstart", handleTouchStart);
    landingPageRef.current.addEventListener("touchmove", debounceTouchMove);
    landingPageRef.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (!landingPageRef.current) return;
      landingPageRef.current.removeEventListener("wheel", debounceFn);
      landingPageRef.current.removeEventListener(
        "touchstart",
        handleTouchStart
      );
      landingPageRef.current.removeEventListener(
        "touchmove",
        debounceTouchMove
      );
      landingPageRef.current.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full overflow-hidden "
      ref={landingPageRef}
    >
      <ExhibitionInfo
        className={cn("absolute top-[60px] left-2 sm:top-[75px] sm:left-3", {
          ["!top-[88px]"]: router.locale === "en",
        })}
      />
      {data.map((item, i) => {
        if (i === indexRef.current)
          return (
            <TitleAndSubtitle
              key={i}
              className={cn("absolute bottom-0 left-0")}
              obj={data[indexRef.current]}
              order={i}
            />
          );
      })}
      <ProgressBar
        className="absolute top-2 sm:top-3 w-full"
        index={indexRef.current}
      />
      <LocaleSwitch />
      <VideoBg
        index={indexRef.current}
        updateIndexRef={updateIndexRef}
        setUpdate={setUpdate}
        update={update}
      />
    </div>
  );
};
Home.Layout = Layout;
export default Home;
