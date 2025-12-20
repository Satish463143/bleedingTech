'use client'
import { useState } from 'react';
import { useListAllQuery } from '../../api/contact.api';
import AdminTitle from '../AdminTitle/AdminTitle';
import LoadingComponent from '../../common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const Contact = () => {
    const [search, setSearch] = useState(''); // Ensure default value is a string
    const [page, setPage] = useState(1);
    const [limit] = useState(10); 

    const {data, error, isLoading} = useListAllQuery({ page, limit, search })
    const contact = data?.details || []

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Update the search state
        setPage(1); // Reset to the first page
      };
    
      const handlePageChange = (newPage: number) => {
        setPage(newPage);
      };   
    
      
  return (
    <div className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle url='/admin/contact' label1=' Contact List' label2='' />
        <div className='Dashboard_title'>
          <h1>Contact List</h1>
          <div>
          <input
              type="search"
              className="search_btn"
              placeholder="Filter by name..."
              value={search}
              onChange={handleSearchChange}
          />         
          </div>
        </div>
      </div>
      <div className='blog_table'>        
        <table border={2}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>  
                <td colSpan={6}><LoadingComponent/></td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} className="error-message">{(error as any)?.data?.message}</td>
              </tr>
            ) : contact && contact.length > 0 ? (
              contact.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Contact List is Empty</td>
              </tr>
            )}
          </tbody>
        </table>       
        <div className='flex overflow-x-auto sm:justify-center'>
            {data?.meta && data.meta.total > 0 && (
            <div className='flex overflow-x-auto sm:justify-center'>
                <Pagination                
                currentPage={data.meta.currentPage || 1}
                totalPages={Math.ceil(data.meta.total / limit)}
                onPageChange={handlePageChange}
                />
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Contact