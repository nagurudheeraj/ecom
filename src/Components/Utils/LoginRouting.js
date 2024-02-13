import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addUser } from '../../Redux/features/userLoginSlice';

import { Form, Input, Button, Checkbox, notification, Dropdown } from 'antd';

import logo from '../../Images/Vector.jpg'
import { Link } from 'react-router-dom';

const LoginRouting = () => {
    const navigate = useNavigate();

    const usersJsonStringGet = localStorage.getItem('users');
    let usersLocal = {}
    if (usersJsonStringGet) {
        usersLocal = JSON.parse(usersJsonStringGet);
        console.log({ usersLocal });
    } else {
        console.log('No users data found in local storage');
    }

    const dispatch = useDispatch();
    const [form] = Form.useForm();




    window.scrollTo(0, 0)
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
        if (usersLocal[values.username] && usersLocal[values.username].password === values.password) {
            dispatch(addUser(usersLocal[values.username]))
            openNotification(usersLocal[values.username].name);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            form.resetFields();
        }
    };







    return (
        <>
            {contextHolder}
            <div className="h-screen flex items-center justify-center py-12 mt-5 px-4 sm:px-6 lg:px-8">
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
                            <Button htmlType="submit" size="large" block className='bg-primary !hover:bg-red-700 font-semibold text-white mb-5'>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link className="text-sm text-gray-600" to="/registration">Create new account, Click here!</Link>
                </div>
            </div>
        </>
    )
}

export default LoginRouting

