import { FC } from "react";
import { Typography } from "antd";

import { cn } from "@utils/";

import "./Page.scss";

const { Title } = Typography;

const b = cn("signin");

const SignIn: FC = function () {
    return (
        <div className={b()}>
            <div className={b("inner")}>
                <div className={b("title")}>
                    <Title level={1}>Sign-in</Title>
                </div>
                <div className={b("content")}>Content</div>
            </div>
        </div>
    );

    // return status !== "success" ? (
    //     <Spin />
    // ) : (
    //     <div className={b()}>
    //         <div className={b("inner")}>
    //             <div className={b("title")}>
    //                 <Title level={1}>Amazing breeds :)</Title>
    //             </div>
    //             <div className={b("content")}>
    //                 {breedRecords.map(breedRecord => (
    //                     <BreedRow key={breedRecord.breed} breedRecord={breedRecord} />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );
};

export { SignIn };
