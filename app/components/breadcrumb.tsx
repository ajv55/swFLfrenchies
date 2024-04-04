'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export const BreadcrumbWrapper = ({id, path}: {id?: string, path?: string}) => {
  return (
    <Breadcrumb className='w-full flex justify-starts items-center mb-10 px-3 py-1' aria-label="Default breadcrumb example">
      <Breadcrumb.Item  href="/">
        <div className='flex justify-start items-center gap-3'>
            <HiHome className='lg:w-9 lg:h-9' size={21} />
            <h1 className='text-teal-500 lg:text-2xl font-semibold text-lg'>Home</h1>
        </div>
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`/${path}`}><h1 className='text-teal-500 lg:text-2xl font-semibold text-lg'>{path}</h1></Breadcrumb.Item>
     {id && <Breadcrumb.Item><h1 className='text-teal-500 font-semibold lg:text-2xl text-lg'>{id}</h1></Breadcrumb.Item>}
    </Breadcrumb>
  );
}