import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/Vector.jpg'


import { Form, Input, Button, notification } from 'antd';
import { users } from "../../Redux/userDetails"
// import { MongoClient } from "mongodb"

const usersJsonString = JSON.stringify(users);
localStorage.setItem('users', usersJsonString);

window.scrollTo(0, 0)

const Registration = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        notification.success({
            message: 'Registration Successful',
            description: 'You have successfully registered. Redirecting to login page...',
            duration: 3, // Set duration to 0 for the notification to stay open until closed manually
        });
    };



    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        const storedUsers = JSON.parse(localStorage.getItem('users')) || usersJsonString;
        const updatedUsers = {
            ...storedUsers,
            [values.email]: {
                name: values.fullname,
                email: values.email,
                password: values.password
            }
        };
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        openNotification()
        navigate('/login');
    };





    return (
        <div className="h-screen mt-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {contextHolder}
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for an account</h2>
                </div>
                <Form
                    name="normal_register"
                    className="mt-8 space-y-6"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    form={form}
                >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    >
                        <Input size="large" placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input a valid Email!' }]}
                    >
                        <Input size="large" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password size="large" placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size="large" placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" size="large" block className='bg-primary !hover:bg-red-700 font-semibold text-white'>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Registration;
