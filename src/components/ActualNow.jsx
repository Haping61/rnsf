import React from 'react';

export default function ActualNow(props) {
  const content = props.titles.map((title, index) => {
    return (<div className='w-72 h-72 flex flex-col justify-between p-7 bg-slate-50 rounded-lg transform transition-all hover:scale-110 duration-[350ms]'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-stone-500'>{props.descriptions[index]}</p>
      <a className='text-blue-500' href={props.links[index]}>Read</a>
    </div>)
  })
  return (
    <div className='container mx-auto flex justify-between items-center mt-10'>
      {content}
    </div>
  );
}
