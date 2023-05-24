import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Employment = () => {
  const handleSubmit = (values, actions) => {
    // Send form data to email here
    console.log(values);
    actions.setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email address'),
    workExperience: Yup.string(),
    resume: Yup.mixed()
  });

  return (
    <><div className="bg-cover bg-[#ffffff] bg-fixed pb-[10%]"><div className="px-[10%] mx-[8.5%] pt-[18%] md:pt-[10%] text-xl">
        <div className="text-4xl font-bold my-7">Employment</div>
        <div className="xl:bg-[#f1f1f1] h-min rounded-xl xl:shadow-md xl:p-10">
                <div className="pb-4">Click&nbsp;<a className="font-bold text-blue-500 hover:text-blue-700" href="/vectorapp.pdf" target="_blank" rel="noopener noreferrer">HERE</a>&nbsp;to download the Vector Employment PDF. You can print, complete, and mail or fax to us.</div>
                <div className="text-2xl font-semibold mb-3">Job Description:</div>
                We are seeking experienced and responsible construction personnel to join our heavy highway construction company. We want to offer you competitive pay, a generous benefits package and opportunities for advancement. Join our team and learn how fulfilling it is to be rewarded appropriately for your efforts while you develop your skills and learn the newest construction techniques in a fast-paced environment.
                <div className="text-2xl font-semibold my-3">Responsibilities:</div>
                <div className="flex flex-col space-y-0">
                    <p>➪&nbsp;Report each day on time and ready to work.</p>
                    <p>➪&nbsp;Have reliable transportation to work site.</p>
                    <p>➪&nbsp;Be able to perform construction tasks that involve strenuous manual labor.</p>
                    <p>➪&nbsp;Ability to take and follow directions from superiors.</p>
                    <p>➪&nbsp;Attention to Safety Rules and Regulations.</p>
                    <p>➪&nbsp;Must be willing to travel to locations within NY.</p>
                    <p>➪&nbsp;Must be willing to work overtime, weekends and nights when required.</p>
                    <p>➪&nbsp;Must be able to work as a team member.</p>
                </div>
                <div className="text-2xl font-semibold my-3">Qualifications:</div>
                <div className="flex flex-col space-y-0">
                    <p>➪&nbsp;Must have valid driver’s license.</p>
                    <p>➪&nbsp;One or more years of experience in construction.</p>
                    <p>➪&nbsp;Must pass a pre‐hire drug test.</p>
                </div>
                <div className="text-2xl font-bold mt-7">Vector Construction is an Equal Opportunity Employer.</div>
            <div className="h-min">
                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            phone: '',
                            address: '',
                            email: '',
                            workExperience: '',
                            resume: null
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched, setFieldValue }) => (
                            <Form className="rounded-lg py-9">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                        Name*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="name"
                                        placeholder="Name*" />
                                        {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                        Phone Number*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="phone"
                                        placeholder="Phone Number*" />
                                        {errors.phone && touched.phone && <div className="text-red-500">{errors.phone}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
                                        Address*
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="address"
                                        placeholder="Address*" />
                                        {errors.address && touched.address && <div className="text-red-500">{errors.address}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="email"
                                        placeholder="Email"
                                        type="email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="workExperience">
                                        Work Experience
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="workExperience"
                                        placeholder="Work Experience"
                                        component="textarea" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="resume">
                                        Resume
                                    </label>
                                    <Field
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        name="resume"
                                        component="input"
                                        type="file"
                                        onChange={event => {
                                            setFieldValue("resume", event.currentTarget.files[0]);
                                        } } />
                                </div>
                                <button
                                    className="bg-slate-300 text-slate-700 border border-slate-400 border-solid border-5 shadow text-lg font-semibold py-2 px-4 rounded-lg transition ease-in duration-200 hover:bg-blue-300"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div></div></>
  );
};

export default Employment;

