import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Modal from 'react-modal';
Modal.setAppElement('#root');
import { IoMdClose } from "react-icons/io";
import Select from 'react-select';


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        //Şehir api
        const fetchData = async () => {
            try {
                const res = await axios.get("https://turkiyeapi.dev/api/v1/provinces");
                setData(res.data.data);
                console.log("Veri başarıyla alındı:", res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    //Tab kontrolü
    const [activeTab, setActiveTab] = useState("uçak")
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    //Tarih yazdırma
    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', weekday: 'long' };
        return new Intl.DateTimeFormat('tr-TR', options).format(date);
    }
    const today = new Date();
    const formattedDate = formatDate(today).split(' ');
    const day = formattedDate[0];
    const month = formattedDate[1];
    const dayOfWeek = formattedDate[2];


    //Gidiş-Dönüş
    const [tripType, setTripType] = useState("tek_yon");
    const [showReturnDate, setShowReturnDate] = useState(false);

    const handleTripTypeChange = (type) => {
        setTripType(type);
        setShowReturnDate(type === "gidis_donus");
    }
    const handleReturnButtonClick = () => {
        setShowReturnDate(true);
        setTripType("gidis_donus");
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const options = data.map((province) => ({
        label: province.name,
        value: province.id
    }));

    const [selectedCity, setSelectedCity] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        closeModal();
    }

    return (
        <div>
            <nav>
                <Nav />
            </nav>

            <div className='bg-[#F8FAF9] sm:max-w-[650px] mx-auto rounded-[35px] mt-3 py-4 h-screen'>

                <section className='bg-gray-200 rounded-full flex justify-between mx-3 sm:mx-5 text-gray-100'>
                    <div
                        className={`flex items-center gap-x-2 py-2 px-4 sm:px-10 rounded-full cursor-pointer ${activeTab === "uçak" ? 'bg-[#3AB424] text-white' : 'text-gray-800 font-semibold transition-all duration-300'}`}
                        onClick={() => handleTabClick("uçak")} >

                        <i className="fa-solid fa-plane-departure"></i>
                        <span>Uçak</span>
                    </div>

                    <div
                        className={`flex items-center gap-x-2 py-2 px-4 sm:px-10 rounded-full cursor-pointer ${activeTab === "otobüs" ? 'bg-[#3AB424] text-white' : 'text-gray-800 font-semibold transition-all duration-300'}`}
                        onClick={() => handleTabClick("otobüs")} >

                        <i className="fa-solid fa-bus-simple"></i>
                        <span>Otobüs</span>
                    </div>

                    <div
                        className={`flex items-center gap-x-2 py-2 px-4 sm:px-10 rounded-full cursor-pointer ${activeTab === "araç" ? 'bg-[#3AB424] text-white' : 'text-gray-800 font-semibold transition-all duration-300'}`}
                        onClick={() => handleTabClick("araç")} >

                        <i className="fa-solid fa-car"></i>
                        <span>Araç</span>
                    </div>

                    <div className='relative'>
                        <div
                            className="flex items-center gap-x-2 py-2 px-4 sm:px-10 rounded-full text-gray-800">
                            <i className="fa-solid fa-bed"></i>
                            <span>Otel</span>
                        </div>
                        <span className='absolute top-0 right-10 sm:right-16 bg-blue-500 text-white text-[11px] font-semibold px-2 rounded-full transform translate-x-1/2 -translate-y-1/2'>Yakında</span>
                    </div>
                </section>

                <div className='flex justify-center my-4 gap-x-8'>
                    <div className='flex gap-x-1'>
                        <input
                            type="radio"
                            name="tripType"
                            id="tek_yon"
                            checked={tripType === "tek_yon"}
                            onChange={() => handleTripTypeChange("tek_yon")}
                        />
                        <label htmlFor="tek_yon">Tek Yön</label>
                    </div>

                    <div className='flex gap-x-1'>
                        <input
                            type="radio"
                            name="tripType"
                            id="gidis_donus"
                            checked={tripType === "gidis_donus"}
                            onChange={() => handleTripTypeChange("gidis_donus")}
                        />
                        <label htmlFor="gidis_donus">Gidiş Dönüş</label>
                    </div>

                </div>

                <section className='flex justify-center text-gray-700 px-4'>

                    <div className='text-[14px] flex flex-col bg-white gap-y-1 py-1 items-center w-72 shadow rounded-2xl cursor-pointer' onClick={openModal}>
                        <span>Lütfen Seçin</span>
                        <span className='text-xl font-bold'>{selectedCity ? selectedCity.label : "Nereden?"}</span>
                        <span>
                            {selectedCity ? selectedCity.label + " Havalimanı, Türkiye" : "Şehir / Havalimanı"}
                            </span>
                    </div>

                    <div>
                        {modalIsOpen && (
                            <Modal
                                style={{ overlay: { zIndex: 1000 }, content: { zIndex: 1000 } }}
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Üye Ol"
                                className="shadow-2xl border-2 bg-white mx-10 sm:mx-28 mt-2 sm:mt-8 h-[420px] px-2 py-3">

                                <div className='flex w-full mb-2'>
                                    <h1 className='font-semibold text-xl text-gray-800'>Nereden?</h1>
                                    <button onClick={closeModal} className='ml-auto text-xl'><IoMdClose /></button>
                                </div>

                                <div>
                                    <Select className='border border-gray-400 rounded'
                                        placeholder="Şehir Seçiniz.."
                                        options={options}
                                        onChange={handleSelectChange} />
                                </div>
                            </Modal>
                        )}
                    </div>
                    <button className='py-1 px-1 my-auto bg-white'><FaArrowRightArrowLeft /></button>

                    <div className='text-[14px] flex flex-col justfiy-center bg-white gap-y-1 py-1 items-center w-72 shadow rounded-2xl' >
                        <span>Lütfen Seçin</span>
                        <span className='text-xl font-bold'>Nereye?</span>
                        <span>Şehir / Havalimanı</span>
                    </div>
                </section>

                <section className='flex justify-center mt-5 px-4'>

                    <div className='flex flex-col justfiy-center bg-white gap-y-1 items-center w-72 py-1 shadow rounded-2xl cursor-pointer'>
                        <span>Gidiş Tarihi</span>
                        <div className='flex items-center'>
                            <span className='text-3xl font-semibold'>{day}</span>
                            <div className='flex flex-col text-xs'>
                                <span>{month}</span>
                                <span>{dayOfWeek}</span>
                            </div>
                        </div>
                    </div>

                    <button className='py-1 px-1 my-auto bg-white'><FaRegCalendarAlt /></button>

                    {!showReturnDate ? (
                        <div className='flex justify-center bg-white items-center w-72 py-2 shadow rounded-2xl gap-x-2 cursor-pointer'>
                            <FiPlusCircle />
                            <button onClick={handleReturnButtonClick}>Dönüş Ekle</button>
                        </div>
                    ) : (
                        <div className='flex flex-col justfiy-center bg-white gap-y-1 items-center w-72 py-1 shadow rounded-2xl cursor-pointer'>
                            <span>Dönüş Tarihi</span>
                            <div className='flex items-center'>
                                <span className='text-3xl font-semibold'>{day}</span>
                                <div className='flex flex-col text-xs'>
                                    <span>{month}</span>
                                    <span>{dayOfWeek}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section className='text-gray-800 rounded-full flex justify-between mx-5 shadow mt-4 py-3 px-4'>
                    <div className='flex items-center gap-x-2'>
                        <FaUserAlt />
                        <span>Yolcu Sayısı: 1</span>
                    </div>

                    <button>+ Yolcu Ekle</button>
                </section>

                <div className='cursor-pointer flex gap-x-1 items-center bg-[#3AB424] text-gray-50 font-bold justify-center rounded-full py-3 mx-5 mt-5'>
                    <span>Uçuş Ara</span>
                    <IoIosArrowForward className='mt-1' />
                </div>

                <section className='justify-around mt-10 font-semibold text-sm'>

                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center gap-y-2'>
                            <img src='src\img\call.png' className='w-10' />
                            <span>7/24 Çağrı Merkezi</span>
                        </div>

                        <div className='flex flex-col items-center gap-y-2'>
                            <img src='src\img\credit.png' className='w-10' />
                            <span>Online Ödeme</span>
                        </div>
                    </div>

                    <div className='mt-5 sm:mt-0 flex flex-col items-center gap-y-2'>
                        <img src='src\img\time.png' className='w-10' />
                        <span>2 Dakikada Seyahatini Oluştur</span>
                    </div>
                </section>
            </div>

            <Modal
                style={{ overlay: { zIndex: 1000 }, content: { zIndex: 1000 } }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Üye Ol"
                className="shadow-2xl border-2 bg-white mx-10 sm:mx-28 mt-2 sm:mt-8 h-[420px] px-2 py-3">

                <div className='flex w-full mb-2'>
                    <h1 className='font-semibold text-xl text-gray-800'>Nereden?</h1>
                    <button onClick={closeModal} className='ml-auto text-xl'><IoMdClose /></button>
                </div>

                <div>
                    <Select className='border border-gray-400 rounded'
                        placeholder="Şehir Seçiniz.."
                        options={options} />
                </div>
            </Modal>

        </div>
    )
}

export default Home