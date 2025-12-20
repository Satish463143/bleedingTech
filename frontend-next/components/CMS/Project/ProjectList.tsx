'use client'
import { useState } from 'react';
import { useListAllQuery, useDeleteProjectsMutation } from '../../api/project.api';
import { toast } from 'react-toastify';
import AdminTitle from '../AdminTitle/AdminTitle';
import Link from 'next/link';
import LoadingComponent from '../../common/Loading/Loading.component';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Pagination } from 'flowbite-react';

const BlogList = () => {
    const [search, setSearch] = useState(''); // Ensure default value is a string
    const [page, setPage] = useState(1);
    const [limit] = useState(10); 

    const {data, error, isLoading} = useListAllQuery({ page, limit, search })
    const [deleteProject] = useDeleteProjectsMutation()
    const project = data?.details || []

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Update the search state
        setPage(1); // Reset to the first page
      };
    
      const handlePageChange = (newPage: number) => {
        setPage(newPage);
      };     
    
      const deleteData=async(id:string)=>{
        try{
          await deleteProject(id).unwrap()
          toast.success("project deleted sucessfully")
          
        }catch(exception){
          toast.error("Cannot delete project at this moment")
        }    
      }
  return (
    <div className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle url='/admin/project' label1=' Project List' label2='' />
        <div className='Dashboard_title'>
          <h1>Project List</h1>
          <div>
          <input
              type="search"
              className="search_btn"
              placeholder="Filter by title..."
              value={search}
              onChange={handleSearchChange}
          />
          <Link href='/admin/add_project'>
            <button className='edit_btn'>Add Project</button>
          </Link>          
          </div>
        </div>
      </div>
      <div className='blog_table'>        
        <table border={2}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Is Featured</th>
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
            ) : project && project.length > 0 ? (
              project.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td className="table_img">
                    <img src={row.image} alt=""/>
                  </td>
                  <td>{row.title}</td>
                  <td>{row.category}</td>
                  <td>{row.isFeatured ? 'Yes' : 'No'}</td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <EditButton editUrl={`/admin/edit_project/${row._id}`}/>
                    <DeleteButton deleteAction={deleteData} rowId={row._id}/>                  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Project List is Empty</td>
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

export default BlogList