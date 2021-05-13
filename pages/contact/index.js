import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layouts from '../../components/Layouts';
import { parseOnlyNumber } from '../../lib/helper';
import GlobalLoading from '../../components/Layouts/GlobalLoading';
import ResultModal from './ResultModal';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    const submit = async () => {
      const url = `${process.env.API_URL}/customers`;
      try {
        setIsLoading(true);
        const res = await axios.post(url, data);
        setIsLoading(false);
        reset();
        setPhone('');
        setIsOpen(true);
      } catch (error) {
        setIsLoading(false);
      }
    };
    submit();
  };

  const handleChangePhone = (e) => {
    const phone = parseOnlyNumber(e.target.value);
    setPhone(phone);
  };

  return (
    <Layouts>
      <>
        <Head>
          <title>Kaistudio.vn - Liên hệ với chúng tôi</title>
        </Head>
        <GlobalLoading isLoading={isLoading} />
        <ResultModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col justify-between">
                <div className="pb-4 md:pb-0">
                  <input
                    type="text"
                    name="name"
                    {...register('name', { required: true })}
                    placeholder="Your name *"
                    className="block w-full shadow-sm sm:text-sm border-green bg-green placeholder-white text-white focus:text-white focus:border-green"
                  />
                  {errors && errors.name && (
                    <span className="text-red-500 text-xs">Name is required</span>
                  )}
                </div>
                <div className="pb-4 md:pb-0">
                  <input
                    type="email"
                    name="email"
                    {...register('email', { required: true })}
                    placeholder="Email *"
                    className="block w-full shadow-sm sm:text-sm border-green bg-green placeholder-white text-white focus:text-white focus:border-green"
                  />
                  {errors && errors.email && (
                    <span className="text-red-500 text-xs">Email is required</span>
                  )}
                </div>
                <div className="pb-4 md:pb-0">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    {...register('phone')}
                    onChange={handleChangePhone}
                    placeholder="Phone"
                    className="block w-full shadow-sm sm:text-sm border-green bg-green placeholder-white text-white focus:text-white focus:border-green"
                  />
                </div>
                <div className="pb-4 md:pb-0">
                  <input
                    type="text"
                    name="subject"
                    {...register('subject')}
                    placeholder="Subject"
                    className="block w-full shadow-sm sm:text-sm border-green bg-green placeholder-white text-white focus:text-white focus:border-green"
                  />
                </div>
              </div>
              <img src="/images/contact.png" alt="contact" className="w-full" />
              <div className="md:col-start-1 md:col-end-3">
                <div className="md:grid grid-cols-2 gap-5">
                  <div className="">
                    <textarea
                      className="block w-full border-green bg-green placeholder-white focus:text-white text-white focus:border-green"
                      rows="6"
                      placeholder="Your messenge"
                      {...register('messenge')}
                    />
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-right">
                      <p>KAI STUDIO</p>
                      <p>DESIGN AND CONSTRUCTION</p>
                    </div>
                    <div className="text-right">
                      <p>278/9c Lê Lợi, 7 ward , Vũng Tàu city ( Ad )</p>
                      <a href="tel:O977979000" className="text-green font-medium block">
                        O97.79.79.000 ( T )
                      </a>
                      <a href="mailto:info@kaistudio.vn">info@kaistudio.vn ( E )</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-start-1 md:col-end-2">
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green focus:outline-none text-white py-2 px-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layouts>
  );
}
