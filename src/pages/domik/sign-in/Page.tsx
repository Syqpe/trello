import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { cn } from "@utils";

import "./Page.scss";
import { useSignInMutation } from "@app/services/auth";
import { useAppDispatch } from "@hooks";
import { setCredentials } from "@reducers/userSlice";
import { ToastStore } from "@widgets/index";
import { ICredentials } from "@localtypes";

const { Title } = Typography;

const b = cn("signin");

interface ISign {
    email: string;
    password: string;
}

const SignIn: FC = function () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [sign, { isLoading }] = useSignInMutation();

    const onFinish = async (values: ISign) => {
        try {
            const credentials: ICredentials = await sign(values).unwrap();
            dispatch(setCredentials(credentials));

            navigate("/");
        } catch (err) {
            console.log("1");
            dispatch(
                ToastStore.notify({
                    message: "Sign is failed!",
                    options: {
                        type: ToastStore.MessageType.ERROR,
                        duration: 3000,
                        position: ToastStore.MessagePositions["RIGHT-TOP"],
                    },
                }),
            );
        }
    };

    const handleSignUp = () => {
        navigate("/sign-up");
    };

    return (
        <div className={b()}>
            <div className={b("inner")}>
                <div className={b("title")}>
                    <Title level={1}>Sign-in</Title>
                </div>
                <div className={b("content")}>
                    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "The input is not valid Email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please input your password!" }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Sign-in
                            </Button>
                            <Button type="link" htmlType="button" onClick={handleSignUp}>
                                Sign-up
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export { SignIn };
