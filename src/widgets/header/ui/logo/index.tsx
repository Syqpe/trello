import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
    to: string;
}

const Logo: FC<Props> = ({ to = "/" }) => {
    return (
        <Link to={to}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 293.29 64.56">
                <defs>
                    <linearGradient id="A" x1="31.52" y1="64.56" x2="31.52" y2="1.51" gradientUnits="userSpaceOnUse">
                        <stop offset=".18" stopColor="#0052cc" />
                        <stop offset="1" stopColor="#2684ff" />
                    </linearGradient>
                </defs>
                <g fillRule="evenodd">
                    <path
                        d="M130.14 4.58v7.57H111V62.4h-7.92V12.14H86.84V4.58zM134 18.4h7.4v7.74c2.55-5.2 7-8.9 15.58-8.36v7.4c-9.68-1-15.58 1.94-15.58 11.26v26H134zm49.64 44.88c-16.46 0-23.67-9.5-23.67-23 0-13.3 7.4-22.8 20.77-22.8 13.55 0 19 9.42 19 22.8v3.43h-32.1c1.06 7.48 5.9 12.32 16.28 12.32a39 39 0 0 0 13.38-2.38v7c-3.6 1.93-9.16 2.63-13.65 2.63zm-16.1-26h24.55c-.44-8.18-4.14-12.85-11.7-12.85-8-.04-12.06 5.15-12.85 12.8zm52.98 25.38c-7.22 0-11.8-3.43-11.8-11.53V0h7.57v50.25c0 4 2.64 5.37 5.9 5.37a19.17 19.17 0 0 0 2.2-.09v6.77a16.11 16.11 0 0 1-3.88.35zm22.96 0c-7.22 0-11.8-3.43-11.8-11.53V0h7.57v50.25c0 4 2.64 5.37 5.9 5.37a19.17 19.17 0 0 0 2.2-.09v6.77a16.11 16.11 0 0 1-3.88.35zm8.1-22.35c0-13.2 7.74-22.8 20.94-22.8s20.77 9.6 20.77 22.8-7.66 23-20.77 23-20.94-9.8-20.94-23zm7.4 0c0 8.36 4.14 15.93 13.55 15.93s13.38-7.57 13.38-15.93-4-15.75-13.37-15.75S259 31.94 259 40.3z"
                        fill="#253858"
                    />
                    <path
                        d="M55.16 1.5H7.88A7.88 7.88 0 0 0 0 9.39v47.28a7.88 7.88 0 0 0 7.88 7.88h47.28A7.88 7.88 0 0 0 63 56.67V9.4a7.88 7.88 0 0 0-7.84-7.88zM27.42 49.26A3.78 3.78 0 0 1 23.64 53H12a3.78 3.78 0 0 1-3.8-3.74V13.5A3.78 3.78 0 0 1 12 9.71h11.64a3.78 3.78 0 0 1 3.78 3.78zM54.85 33.5a3.78 3.78 0 0 1-3.78 3.78H39.4a3.78 3.78 0 0 1-3.78-3.78v-20a3.78 3.78 0 0 1 3.78-3.79h11.67a3.78 3.78 0 0 1 3.78 3.78z"
                        fill="url(#A)"
                    />
                </g>
            </svg>
        </Link>
    );
};

export { Logo };
