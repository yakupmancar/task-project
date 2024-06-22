import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Nav = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
    const openModalLogin = () => {
        setModalIsOpenLogin(true);
    };
    const closeModal = () => {
        setModalIsOpenLogin(false);
    };

    const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
    const openModalRegister = () => {
        setModalIsOpenRegister(true);
    };
    const closeModalRegister = () => {
        setModalIsOpenRegister(false);
    };


    return (
        <div className='bg-[#3AB424] mx-4 flex h-20 justify-between items-center text-gray-100'>

            <button className='text-gray-100 text-3xl mb-6' onClick={toggleSidebar}>
                {isSidebarOpen ? <IoMdClose /> : <IoMenu />}
            </button>

            <section className='flex flex-col items-center font-semibold gap-y-2 mt-2'>
                <a href="/" aria-label="BiletBayisi Anasayfa" title="BiletBayisi Anasayfa" class="navbar-brand float-left"><svg version="1.1" id="Layer_1" width="163px" height="36.44px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 81.4 18.2" xml:space="preserve"><g><g><path fill="#FFFFFF" d="M12.2,3.5h-1.4v10.4h2.6V4.7C13.5,3.9,13.1,3.5,12.2,3.5z"></path> <path fill="#FFFFFF" d="M12.2,0.5h-1.4v2.1h2.6V1.8C13.5,0.9,13.1,0.5,12.2,0.5z"></path> <path fill="#FFFFFF" d="M15.9,0.5h-1.4v13.4h2.6V1.8C17.2,1.1,16.6,0.5,15.9,0.5z"></path> <path fill="#FFFFFF" d="M23,3.3c-3.2,0-4.8,1.8-4.8,5.4s1.6,5.4,4.7,5.5c2.6,0,4-1.2,4.6-3.4h-1.9c-0.4,0-0.7,0.1-0.9,0.4
			C24.2,11.7,23.6,12,23,12c-1.3,0-2-0.8-2.1-2.4h6.8C27.9,5.4,26.4,3.3,23,3.3z M21,7.6c0.2-1.4,0.9-2.1,2-2.1s1.8,0.7,1.9,2.1H21z
			"></path> <path fill="#FFFFFF" d="M31.7,5.4c0.7,0,1.3-0.6,1.3-1.3V3.5h-1.6V1.8c0-0.7-0.6-1.3-1.3-1.3h-1.4v11.4c0,1.2,0.5,1.8,1.4,1.9
			c1,0.1,1.9,0.1,2.8,0v-2h-0.8c-0.5,0-0.8-0.2-0.8-0.7V5.3L31.7,5.4L31.7,5.4z"></path> <path fill="#FFFFFF" d="M5.6,3.3c-1.3,0-2.3,0.5-3,1.6V1.8c0-0.9-0.4-1.3-1.3-1.3H0v8.9c0,0.1,0,0.3,0,0.4v0.1v3.8
			c0,0.2,0.2,0.4,0.4,0.4h1.8c0.2,0,0.4-0.1,0.4-0.3C3.2,14,4,14.1,4.9,14.1c3.2-0.1,4.9-1.8,4.9-5.3C9.8,5.2,8.4,3.4,5.6,3.3z
			 M4.9,11.8c-1.5,0-2.2-1.1-2.2-3.2c0.1-2,0.8-3,2.2-3s2.2,1,2.2,3C7.1,10.8,6.4,11.8,4.9,11.8z"></path></g> <g><path fill="#FFFFFF" d="M39.9,3c-1.3,0-2.4,0.5-3.1,1.7V1.5c0-0.9-0.4-1.4-1.3-1.4h-1.4v9.2c0,0.1,0,0.3,0,0.4v0.1v3.9
			c0,0.2,0.2,0.4,0.4,0.4h1.9c0.2,0,0.4-0.1,0.4-0.3c0.7,0.2,1.4,0.3,2.4,0.3c3.3-0.1,5-1.9,5-5.5C44.2,4.9,42.7,3.1,39.9,3z
			 M39.1,11.8c-1.5,0-2.3-1.1-2.3-3.3c0.1-2.1,0.8-3.1,2.3-3.1s2.2,1,2.3,3.1C41.4,10.7,40.6,11.8,39.1,11.8z"></path> <path fill="#FFFFFF" d="M49.4,3c-2.5,0-3.9,1-4.2,3h2.7c0.1-0.5,0.7-0.8,1.6-0.8c1.1,0,1.7,0.3,1.8,0.9c0,0.6-0.6,0.9-1.8,1.1
			c-2.7,0.3-4.6,1-4.7,3.5c0,2.4,1.8,3.6,4.4,3.4c0.7-0.1,1.4-0.2,2-0.4c0,0.2,0.2,0.3,0.4,0.3h1.9c0.2,0,0.4-0.2,0.4-0.4V9.7l0,0
			V9.6V5.9C53.9,4,52.4,3,49.4,3z M48.9,11.9c-0.9,0-1.3-0.4-1.4-1.3c0-0.8,0.5-1.3,1.6-1.5c0.8-0.2,1.5-0.4,2.2-0.7v1
			C51.3,11,50.4,11.9,48.9,11.9z"></path> <path fill="#FFFFFF" d="M61.1,4.1l-1.9,6.5l-2.1-7.5H54l3.6,10.6c0.4,1.4-0.1,2.2-1.6,2.2h-0.8v2.2c0.1,0.1,0.4,0.1,1.1,0.1
			c2.2,0,2.9-0.6,3.5-2.4l4.3-12.6h-1.9C61.7,3.1,61.2,3.5,61.1,4.1z"></path> <path fill="#FFFFFF" d="M66.3,0h-1.4v2.1h2.7V1.3C67.7,0.5,67.2,0,66.3,0z"></path> <path fill="#FFFFFF" d="M66.3,3.1h-1.4v10.8h2.7V4.4C67.6,3.6,67.2,3.1,66.3,3.1z"></path> <path fill="#FFFFFF" d="M73.6,7.2c-1.4-0.3-2.1-0.7-2.1-1.2s0.5-0.8,1.6-0.8c0.9,0,1.4,0.3,1.6,0.7s0.6,0.7,1.2,0.7h1.7
			c-0.1-1.1-0.5-2-1.3-2.6S74.4,3.1,73,3.1c-2.5,0-4.3,1.1-4.3,3.5c0,1.7,1.2,2.8,3.6,3.2c1.9,0.3,2.8,0.8,2.8,1.3
			c0,0.7-0.6,1-1.7,1c-1.3,0-2.2-0.4-2.2-1.6h-2.8c0,1.2,0.4,2.2,1.2,2.8c0.7,0.6,1.9,1,3.4,1c2.9,0,4.9-1,4.9-3.6
			c0-0.7-0.2-1.4-0.8-1.9C76.6,8,75.4,7.5,73.6,7.2z"></path> <path fill="#FFFFFF" d="M80.1,0h-1.4v2.1h2.7V1.3C81.5,0.5,81,0,80.1,0z"></path> <path fill="#FFFFFF" d="M80.1,3.1h-1.4v10.8h2.7V4.4C81.4,3.6,81,3.1,80.1,3.1z"></path></g></g></svg></a>
                <span className='text-lg'>Uçak Bileti, En Ucuz Uçak Biletleri</span>
            </section>

            <button className='text-gray-100 mb-6 text-xl'>
                <FaPhone />
            </button>

            {isSidebarOpen && (

                <div className='duration-500 z-10 absolute top-20 left-0 w-full sm:inset-x-0 sm:mx-auto h-full bg-white lg:w-[600px] text-gray-800 px-6 py-3 sm:px-28'>
                    <a href="/" className='flex items-center gap-x-4'>
                        <i class="fa-solid fa-house"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>Uçak Bileti</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <a href="/" className='flex items-center gap-x-4 my-5'>
                        <i class="fa-solid fa-plane-departure"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>Yurtiçi</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <a href="/" className='flex items-center gap-x-4 my-5'>
                        <i class="fa-solid fa-globe"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>Yurtdışı</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <a href="/" className='flex items-center gap-x-4 my-5'>
                        <i class="fa-solid fa-check"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>Check-In</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <a href="/" className='flex items-center gap-x-4 my-5'>
                        <i class="fa-regular fa-circle-question text-xl"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>Blog</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <a href="/" className='flex items-center gap-x-4 my-5'>
                        <i class="fa-regular fa-envelope"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1'>İletişim</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </a>

                    <button className='flex items-center gap-x-4 my-5 w-full' onClick={openModalLogin}>
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1 flex'>Giriş Yap</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </button>

                    <button className='flex items-center gap-x-4 my-5 w-full' onClick={openModalRegister}>
                        <i class="fa-regular fa-user"></i>
                        <div className='flex items-center w-full'>
                            <span className='text-gray-600 w-full border-b pb-1 flex'>Üye Ol</span>
                            <div className='ml-auto'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </button >
                </div>
            )}


            {/* GİRİŞ MODALI */}
            <Modal
                style={{ overlay: { zIndex: 1000 }, content: { zIndex: 1000 } }}
                isOpen={modalIsOpenLogin}
                onRequestClose={closeModal}
                contentLabel="Giriş Yap"
                className="shadow-2xl border-2 bg-white mx-6 sm:mx-28 mt-8 h-[440px] px-2 py-3">

                <div className='flex w-full'>
                    <h1 className='font-semibold text-xl text-gray-800'>Bilet Bayisi'ne Giriş Yap</h1>
                    <button onClick={closeModal} className='ml-auto text-xl'><IoMdClose /></button>
                </div>
                <form className='mt-4'>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="email" className='text-sm text-gray-600'>E-Posta Adresiniz</label>
                        <input type="text" name="email" id='email' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex flex-col gap-y-1 pt-5'>
                        <label htmlFor="parola" className='text-sm text-gray-600'>Şifreniz</label>
                        <input type="text" name="parola" id='parola' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex items-center gap-x-2 pt-4 text-sm text-gray-600'>
                        <input type="checkbox" name="hatirla" id="hatirla" />
                        <label htmlFor="hatirla">Beni Hatırla</label>
                    </div>

                    <button className='text-gray-50 text-lg py-3 items-center w-full bg-[#3AB424] mt-3 hover:bg-[#49933c] transition-all duration-300'>Giriş Yap</button>

                    <div className='flex justify-between items-center pt-3 text-sm text-blue-600'>
                        <button>Üye Ol</button>
                        <button>Şifremi Unuttum</button>
                    </div>

                    <div className='flex items-center gap-x-4 mx-5 pt-5'>
                        <div className="w-full border-b border-gray-200"></div>
                        <span className='text-sm text-gray-600'>yada</span>
                        <div className='w-full border-b border-gray-200'></div>
                    </div>

                    <div className='bg-[#3B5998] h-11 mt-5 flex items-center w-[214px] mx-auto gap-x-2'>
                        <div className='px-3 text-3xl border-r border-gray-800'>
                            <i class="fa-brands fa-facebook-f text-gray-50"></i>
                        </div>
                        <div className='text-gray-50 text-lg'>Facebook ile Bağlan</div>
                    </div>
                </form>
            </Modal>


            {/* üYE MODALI */}
            <Modal
                style={{ overlay: { zIndex: 1000 }, content: { zIndex: 1000 } }}
                isOpen={modalIsOpenRegister}
                onRequestClose={closeModalRegister}
                contentLabel="Üye Ol"
                className="shadow-2xl border-2 bg-white mx-10 sm:mx-28 mt-2 sm:mt-8 h-[665px] px-2 py-3">

                <div className='flex w-full'>
                    <h1 className='font-semibold text-xl text-gray-800'>Bilet Bayisi'ne Üye Ol</h1>
                    <button onClick={closeModalRegister} className='ml-auto text-xl'><IoMdClose /></button>
                </div>
                <form className='mt-4 flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="name" className='text-sm text-gray-600'>Adınız</label>
                        <input type="text" name="name" id='name' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="lastname" className='text-sm text-gray-600'>Soyadınız</label>
                        <input type="text" name="lastname" id='lastname' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="email" className='text-sm text-gray-600'>E-mail</label>
                        <input type="text" name="email" id='email' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex flex-col gap-y-1 '>
                        <label htmlFor="parola" className='text-sm text-gray-600'>Şifre</label>
                        <input type="text" name="parola" id='parola' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <div className='flex flex-col gap-y-1 '>
                        <label htmlFor="passwordAgain" className='text-sm text-gray-600'>Şifre Tekrar</label>
                        <input type="password" name="passwordAgain" id='passwordAgain' className='border border-gray-300 py-1 outline-none hover:outline-blue-600 hover:border-none pl-2' />
                    </div>

                    <button className='text-gray-50 text-lg py-3 items-center w-full bg-[#3AB424] mt-3 hover:bg-[#49933c] transition-all duration-300'>Üye Ol</button>

                    <div className='flex items-center gap-x-4 mx-5 pt-5'>
                        <div className="w-full border-b border-gray-200"></div>
                        <span className='text-sm text-gray-600'>yada</span>
                        <div className='w-full border-b border-gray-200'></div>
                    </div>

                    <div className='bg-[#3B5998] h-11 mt-5 flex items-center w-[214px] mx-auto gap-x-2'>
                        <div className='px-3 text-3xl border-r border-gray-800'>
                            <i class="fa-brands fa-facebook-f text-gray-50"></i>
                        </div>
                        <div className='text-gray-50 text-lg'>Facebook ile Bağlan</div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Nav