import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="h-min bg-cover bg-[#f9f9f9] bg-fixed pb-[10%]">
        <div className="px-[10%] mx-[8.5%] pt-[18%] md:pt-[10%]">
            <div className="text-4xl font-bold my-7">Contact</div>
            <div className="xl:bg-slate-100 h-min xl:shadow-xl rounded-xl xl:p-10 pb-[10%]">
                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="rounded-lg mb-10">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                        Your Name*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="name"
                                        placeholder="Your Name*" 
                                        />
                                        {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                        Your Email*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="email"
                                        placeholder="Your Email*" 
                                        />
                                        {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                                        Subject*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="subject"
                                            placeholder="Subject*"
                                        />
                                        {errors.subject && touched.subject && <div className="text-red-500">{errors.subject}</div>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                            Message*
                                        </label>
                                        <Field
                                            className="bg-gray-200 appearance-none h-24 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            name="message"
                                            placeholder="Message*"
                                            component="textarea" 
                                        />
                                        {errors.message && touched.message && <div className="text-red-500">{errors.message}</div>}
                                    </div>
                                    <button
                                        className=" bg-slate-300 text-slate-700 border border-slate-400 border-solid border-5 shadow text-lg font-semibold py-2 px-4 rounded-lg transition ease-in duration-200 hover:bg-blue-300"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                    Send
                                    </button>
                                </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
