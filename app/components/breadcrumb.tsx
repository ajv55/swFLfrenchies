'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export const BreadcrumbWrapper = ({id, path}: {id?: string, path?: string}) => {
  return (
    <Breadcrumb className='w-full mb-10 px-3 py-1' aria-label="Default breadcrumb example">
      <Breadcrumb.Item  href="/">
        <div className='flex justify-start items-center gap-3'>
            <HiHome size={21} />
            <h1 className='text-teal-500 text-lg'>Home</h1>
        </div>
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`/${path}`}><h1 className='text-teal-500 text-lg'>{path}</h1></Breadcrumb.Item>
     {id && <Breadcrumb.Item><h1 className='text-teal-500 text-lg'>{id}</h1></Breadcrumb.Item>}
    </Breadcrumb>
  );
}