import React from "react";

const HomeContainer = () => {
  return (
    <div>
      <div className='m-auto w-1/2'>
        <p className='text-center font-bold text-xl mt-10'>Bu Nafik Store</p>
        <p className='font-bold underline text-center'>Struk Pembayaran</p>
        <p className='text-center mb-10'>PLN TOKEN</p>
        <div className='h-1 w-full bg-black mb-5'></div>
        <div className='flex'>
          <p className='w-48'>Tanggal</p>
          <p>: 2020-10-26 09:03:22</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Nomor Resi</p>
          <p>: 33036751</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Nomor Meter</p>
          <p>: 32173692453</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Nama Pelanggan</p>
          <p>: SLB DHARMA WANITA</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Tarif/Daya</p>
          <p>: S2/1300VA</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Total KWH</p>
          <p>: KWH:256.9</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Token</p>
          <p>: 2953-1429-0603-9133-0903</p>
        </div>
        <div className='flex'>
          <p className='w-48'>Total Pembayaran</p>
          <p>: Rp 202.000</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
