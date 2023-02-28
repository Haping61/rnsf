import React from 'react';
import { SiBankofamerica } from 'react-icons/si';
import { TiBusinessCard } from 'react-icons/ti';
import { HiCreditCard } from 'react-icons/hi';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { BiCool } from 'react-icons/bi';

export default function BankMenu() {
  return (
    <section className="container flex mx-auto mt-12 bg-slate-100 p-12 rounded-3xl justify-between">
      <a href="#" className="flex items-center gap-3">
        <SiBankofamerica color="#10b981" size="24px" />
        <h3 className="text-lg">Bank</h3>
      </a>
      <a href="#" className="flex items-center gap-3">
        <TiBusinessCard color="#f97316" size="24px" />
        <h3 className="text-lg">Business</h3>
      </a>
      <a href="#" className="flex items-center gap-3">
        <HiCreditCard color="#c026d3" size="24px" />
        <h3 className="text-lg">Credit Cards</h3>
      </a>
      <a href="#" className="flex items-center gap-3">
        <FaMoneyBillWaveAlt color="#ef4444" size="24px" />
        <h3 className="text-lg">Credits</h3>
      </a>
      <a href="#" className="flex items-center gap-3">
        <BiCool color="#65a30d" size="24px" />
        <h3 className="text-lg">Smart Investors</h3>
      </a>
    </section>
  );
}
