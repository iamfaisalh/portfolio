import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface SkillRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: string;
  rating: number;
  isVisible: boolean;
}

export default React.forwardRef<HTMLElement, SkillRatingProps>(
  function SkillRating(
    { skill, rating, className, isVisible, ...otherProps }: SkillRatingProps,
    ref
  ) {
    const [percent, setPercent] = useState<string>("0%");
    const cn = className + " flex items-center w-full";

    useEffect(() => {
      if (isVisible) {
        const rating_percent = (rating * 10).toFixed(2) + "%" || "100%";
        setTimeout(() => {
          setPercent(rating_percent);
        }, 50);
      }
    }, [isVisible, rating]);

    return (
      <div className={cn} ref={ref as any} {...otherProps}>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-medium text-sm mr-auto flex items-center">
              {skill}
            </h4>
            <span
              className={classNames(
                "px-2 py-1 rounded-lg bg-brand-gray text-xs bounce-in-top",
                { "bounce-in-top": isVisible }
              )}
            >
              {rating} / 10
            </span>
          </div>
          <div className="overflow-hidden bg-brand-gray h-1.5 rounded-full w-full">
            <span
              className={
                "h-full bg-brand-pink w-full block rounded-full skill-rating"
              }
              style={{ width: percent }}
            ></span>
          </div>
        </div>
      </div>
    );
  }
);
