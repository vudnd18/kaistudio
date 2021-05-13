import Head from 'next/head';
import React from 'react';
import Layouts from '../components/Layouts';

export default function Contact() {
  return (
    <Layouts>
      <Head>
        <title>Kaistudio.vn - Về chúng tôi</title>
      </Head>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative text-center">
            <h2 className="text-check-in text-3xl text-green">Về chúng tôi</h2>
            <p className="text-base pt-5">
              Kaistudio được thành lập với mục đích kiến tạo nên những công trình kiến trúc sang
              trọng, cũng như mang đến chất lượng & sự bền vững trong quá trình sử dụng sau này cho
              khách hàng. Các thiết kế của Kaistudio luôn cam kết mang đến giá trị cao nhất trong
              tính thẩm mỹ và sự vững chắc, bền lâu trong công năng sử dụng.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="">
              <img src="/images/about.jpg" alt="about" />
            </div>
            <div>
              <h4 className="text-green text-xl">Who is behind all this?</h4>
              <blockquote>
                <p>
                  Pellentesque non diam et tortor dignissim bibendum. Neque sit amet mauris egestas
                  quis mattis velit fringilla. Curabitur viver justo sed scelerisque.
                </p>
              </blockquote>
              <p>
                Pellentesque non diam et tortor dignissim bibendum. Neque sit amet mauris egestas
                quis mattis velit fringilla. Curabitur viver justo sed scelerisque.
              </p>
              <p>
                Pellentesque non diam et tortor dignissim bibendum. Neque sit amet mauris egestas
                quis mattis velit fringilla. Curabitur viver justo sed scelerisque.
              </p>
            </div>
          </div>
          <div className="py-20">
            <h2 className="text-check-in text-3xl text-green text-center pb-10">Các dịch vụ của chúng tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:grap-4">
              <div className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center">
                    <img className="w-14" src="/images/rocket.png" alt="chatting" />
                  </div> */}
                  <p className="ml-20 font-semibold text-xl">Tư vấn lên ý tưởng</p>
                </dt>
                <dd className="ml-20 mt-4">
                  Send a link or let your guest access the online check-in form in their messaging
                  apps for pre-registration.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center">
                    <img className="w-14" src="/images/coins.png" alt="correction" />
                  </div> */}
                  <p className="ml-20 font-semibold text-xl">Thiết kế</p>
                </dt>
                <dd className="ml-20 mt-4">
                  Everything will be online, including guest’s data, secured on a cloud server so
                  the manager can access anytime.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center">
                    <img className="w-14" src="/images/hearts.png" alt="faq" />
                  </div> */}
                  <p className="ml-20 font-semibold text-xl">Thi công</p>
                </dt>
                <dd className="ml-20 mt-4">
                  Creating a safer experience for your guests in the new normal will show that you
                  care, and that impresses them.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center">
                    <img className="w-14" src="/images/ecological.png" alt="faq" />
                  </div> */}
                  <p className="ml-20 font-semibold text-xl">Giám sát</p>
                </dt>
                <dd className="ml-20 mt-4">
                  Guests no longer need to queue and fill in a form at the reception, making it easy
                  for your team to handle group check-in.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
