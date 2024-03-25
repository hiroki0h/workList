'use client';
import React from 'react';
const LodingImage = () => {
    return (
        <div className="loding-image">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="197px"
                height="197px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="84" cy="50" r="10" fill="#fd6f00">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="0.3846153846153846s"
                        calcMode="spline"
                        keyTimes="0;1"
                        values="10;0"
                        keySplines="0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                    <animate
                        attributeName="fill"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="discrete"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="#fd6f00;#fefefe;#ffe8d2;#8d5b3f;#fd6f00"
                        begin="0s"
                    ></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#fd6f00">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;10;10;10"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                </circle>
                <circle cx="50" cy="50" r="10" fill="#8d5b3f">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;10;10;10"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.3846153846153846s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.3846153846153846s"
                    ></animate>
                </circle>
                <circle cx="84" cy="50" r="10" fill="#ffe8d2">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;10;10;10"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.7692307692307692s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.7692307692307692s"
                    ></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#fefefe">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;10;10;10"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.1538461538461537s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.5384615384615383s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.1538461538461537s"
                    ></animate>
                </circle>
            </svg>
        </div>
    );
};

export default LodingImage;
