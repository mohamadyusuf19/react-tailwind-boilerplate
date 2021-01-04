/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { data } from "../data/data";
import {
  convertPackages,
  pricePackages,
  formatCurrency,
  convertPhone,
  textApiWhatsapp,
} from "../utils/packages";

const Table = () => {
  return (
    <div className='box-border px-auto'>
      <table className=' p-2 m-2 box-border'>
        <thead>
          <tr className='p-1 h-6 items-center'>
            <td className='border p-2 text-center h-6'>No</td>
            <td className='border p-2 text-center '>Nama</td>
            <td className='border p-2 text-center '>No.Hp</td>
            <td className='border p-2 text-center '>Operator</td>
            <td className='border p-2 text-center '>Paket</td>
            <td className='border p-2 text-center '>Harga</td>
            {/* <td className='border p-2 text-center '>Pesan</td> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr className='border  h-6 box-border'>
              <td className='border p-1 box-border text-center' key={i}>
                {i + 1}
              </td>
              <td className='border p-1 box-border'>{item.nama}</td>
              <td className='border p-1 box-border'>{item.hp}</td>
              <td className='border p-1 box-border'>{item.operator}</td>
              <td className='border p-1 box-border'>
                {convertPackages(item.operator)}
              </td>
              <td className='border p-1 box-border'>
                Rp {formatCurrency(pricePackages(item.operator))}
              </td>
              {/* <td className='border p-1 box-border'>
                <a
                  href={`${textApiWhatsapp(item.operator, item.hp)}`}
                  className='bg-green-500 h-6 w-40 text-white p-2 text-center mt-5 box-border '>
                  Pesan
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
