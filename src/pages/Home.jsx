import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import BankMenu from '../components/BankMenu';
import ActualNow from '../components/ActualNow';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Header />
      <HeroSection />
      <BankMenu />
      <section className="mt-12 flex flex-col justify-center">
        <h2 className="text-center font-bold text-4xl">Actual now</h2>
        <ActualNow
          titles={[
            'RNSF Bank application performance',
            'Smart investors and the financial market',
            'Currency transfers',
          ]}
          descriptions={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed eveniet commodi quas cum expedita.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed eveniet commodi quas cum expedita.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed eveniet commodi quas cum expedita.',
          ]}
          links={['#', '#', '#']}
        />
      </section>
      <Footer/>
    </div>
  );
}
