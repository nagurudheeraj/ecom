import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../Redux/features/userLoginSlice';

import { Form, Input, Button, Checkbox, Modal, notification, Dropdown } from 'antd';
import { users } from "../../Redux/userDetails"

import logo from '../../Images/Vector.jpg'

const LoginModal = () => {
    const user = useSelector((state) => state.userLogin)

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const loginLogout = () => {
        if (user.name) {

        } else {
            showModal()
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (name) => {
        api.success({
            message: 'Welcome back ' + name,
            // description:
            //     'Welcome back ' + name,
            duration: 2,
        });
    };

    const onFinish = (values) => {
        if (users[values.username] && users[values.username].password === values.password) {
            dispatch(addUser(users[values.username]))
            handleCancel()
            openNotification(users[values.username].name);
        } else {
            form.resetFields();
        }
    };

    const handleLogoutClick = () => {
        dispatch(addUser({})); // Dispatch addUser action when clicked
    };


    const items = [
        {
            label: <p onClick={handleLogoutClick}>Logout</p>,
            // label: <p>Logout</p>,
            key: '0',
        },
    ];



    return (
        <>
            {contextHolder}
            <div>
                <p className={`text-primary cursor-pointer font-medium`} onClick={loginLogout}>{user.name ? <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <li onClick={(e) => e.preventDefault()}>
                        Hey {user.name}
                    </li>
                </Dropdown> : "Login"}</p>
            </div>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={750}
                centered
            >
                <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img className="mx-auto h-12" src={logo} alt="Workflow" />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <Form
                            name="normal_login"
                            className="mt-8 space-y-6"
                            initialValues={{ remember: true, username: "test@gmail.com", password: "qwerty" }}
                            onFinish={onFinish}
                            form={form}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input size="large" placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password size="large" placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <div className="flex justify-between items-center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <a className="text-sm text-gray-600" href="/">Forgot password</a>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" size="large" block className='bg-primary !hover:bg-red-700 font-semibold text-white'>
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LoginModal

