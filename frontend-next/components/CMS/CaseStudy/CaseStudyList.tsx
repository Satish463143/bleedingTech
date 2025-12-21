'use client'
import { useState } from 'react';
import { useListAllQuery, useDeleteCaseStudiesMutation } from '../../api/caseStudies.api';
import { toast } from 'react-toastify';
import AdminTitle from '../AdminTitle/AdminTitle';
import Link from 'next/link';
import LoadingComponent from '../../common/Loading/Loading.component';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Pagination } from 'flowbite-react';

const CaseStudyList = () => {
    const [search, setSearch] = useState(''); // Ensure default value is a string
    const [page, setPage] = useState(1);
    const [limit] = useState(10); 

    const {data, error, isLoading} = useListAllQuery({ page, limit, search })
    const [deleteCaseStudy] = useDeleteCaseStudiesMutation()
    const blogs = data?.details || []


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Update the search state
        setPage(1); // Reset to the first page
      };
    
      const handlePageChange = (newPage: number) => {
        setPage(newPage);
      };  
      const truncateContent = (content = '', wordLimit: number) => {
        const words = content.split(' ');
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + '...'
          : content;
      };
    
    
      const deleteData=async(id:string)=>{
        try{
          await deleteCaseStudy(id).unwrap()
          toast.success("Case Study deleted ucessfully")
          
        }catch(exception){
          toast.error("Cannot delete case study at this moment")
        }    
      }
  return (
    <div className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle url='/admin/case-study' label1=' Case Study List' label2='' />
        <div className='Dashboard_title'>
          <h1>Case Study List</h1>
          <div>
          <input
              type="search"
              className="search_btn"
              placeholder="Filter by project name..."
              value={search}
              onChange={handleSearchChange}
          />
          <Link href='/admin/add_case_study'>
            <button className='edit_btn'>Add Case Study</button>
          </Link>          
          </div>
        </div>
      </div>
      <div className='blog_table'>        
        <table border={2}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Logo</th>
              <th>Project Name</th>
              <th>Company Name</th>
              <th>Tagline</th>
              <th>Overview</th>
              <th>Action</th>
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
            ) : blogs && blogs.length > 0 ? (
              blogs.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td className="table_img">
                    <img src={row.logo} alt=""/>
                  </td>
                  <td>{row.projectName}</td>
                  <td>{row.companyName}</td>
                  <td>{row.tagline}</td>
                  <td>{truncateContent(row.overview, 10)}</td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <EditButton editUrl={`/admin/edit_case_study?id=${row._id}`}/>
                    <DeleteButton deleteAction={deleteData} rowId={row._id}/>                  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Case Study List is Empty</td>
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

export default CaseStudyList