import React from "react";
import Table from "../components/Table";
import { totalPrice, formatCurrency } from "../utils/packages";
import { data } from "../data/data";

const ss1 = require("../assets/ss1.png");
const ss2 = require("../assets/ss2.png");
const ss3 = require("../assets/ss3.png");
const ss4 = require("../assets/ss4.jpeg");
const HomeContainer = () => {
  return (
    <div>
      <div className='m-auto w-full'>
        <p className='text-center font-bold text-xl mt-10'>Bu Nafik Store</p>
        <p className='font-bold underline text-center'>Struk Pembayaran</p>
        <p className='text-center mb-5 font-bold'>
          Paket Data 30 Hari SLB Dharma Wanita Grogol Kediri
        </p>
        <p className='text-center mb-5 font-bold'>Tanggal: 21 November 2020</p>
        <div className='h-1 w-full bg-black mb-5'></div>
        {/* <p className='text-center mb-5 font-bold'>Bukti Paket Terkirim</p>
        <img src={ss2} alt='ss2' className='mx-auto' />
        <img src={ss1} alt='ss1' className='mx-auto' />
        <img src={ss3} alt='ss3' className='mx-auto w-2/4' />
        <p className='text-center my-5 font-bold'>Bukti Pulsa Terkirim</p>
        <img src={ss4} alt='ss2' className='mx-auto' /> */}
        <p className='text-center my-12 font-bold'>Nota</p>
        <div className='w-1/2 mx-auto'>
          <Table />
        </div>
        <p className='text-center mb-10 mt-5 font-bold'>
          Total Harga = Rp {formatCurrency(totalPrice(data))}
        </p>
      </div>
    </div>
  );
};

export default HomeContainer;
