'use client'
import { useState } from 'react';
import { useListAllQuery, useDeleteBlogMutation } from '../../api/blog.api';
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
    const [deleteBlog] = useDeleteBlogMutation()
    const blogs = data?.result || []

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
          await deleteBlog(id).unwrap()
          toast.success("COllection deleted ucessfully")
          
        }catch(exception){
          toast.error("Cannot delete collection at this moment")
        }    
      }
  return (
    <div className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle url='/admin/blog' label1=' Blog List' label2=' Blog' />
        <div className='Dashboard_title'>
          <h1>Blog List</h1>
          <div>
          <input
              type="search"
              className="search_btn"
              placeholder="Filter by title..."
              value={search}
              onChange={handleSearchChange}
          />
          <Link href='/admin/add_blog'>
            <button className='edit_btn'>Add Blog</button>
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
              <th>Content</th>
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
                <td colSpan={6} className="error-message">{(error as any).data.message}</td>
              </tr>
            ) : blogs && blogs.length > 0 ? (
              blogs.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td className="table_img">
                    <img src={row.image} alt=""/>
                  </td>
                  <td>{row.title}</td>
                  <td>{truncateContent(row.content, 10)}</td>
                  <td>{row.isFeatured ? 'Yes' : 'No'}</td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <EditButton editUrl={`/admin/edit_blog/${row._id}`}/>
                    <DeleteButton deleteAction={deleteData} rowId={row._id}/>                  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Blog List is Empty</td>
              </tr>
            )}
          </tbody>
        </table>       
        <div className='flex overflow-x-auto sm:justify-center'>
            {data?.meta && (
            <div className='flex overflow-x-auto sm:justify-center'>
                <Pagination
                currentPage={data?.meta.currentPage}
                totalPages={Math.ceil(data?.meta.total / limit)}
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