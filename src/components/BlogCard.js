import React from 'react'
import { Link } from 'react-router-dom'
import { FaPencilAlt, FaArrowRight, FaFilter, FaTableCells, FaClone, FaFileAlt } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";

function BlogCard() {

  const data = [
    {
      id: 1,
      description: "BLOG TYPES",
      items: [
        { id: 1, label: "Boxed Layout", link: "/boxedlayout", icon: <FaPencilAlt /> },
        { id: 2, label: "Posts Carousel", link: "/postcarousel", icon: <FaArrowRight /> },
        { id: 3, label: "News Filtered", link: "/newsfiltered", icon: <FaFilter /> },
        { id: 4, label: "Blog Minimal", link: "/blogminimal", icon: <FaTableList /> },
        { id: 5, label: "Simple Layout", link: "/simplelayout", icon: <FaClone /> },
        { id: 6, label: "Article Details", link: "/articledetails", icon: <FaFileAlt /> },
      ],
    },
  ];

  return (
    <div className='w-[200px] h-[330px] px-[42px] bg-white text-[#606060] shadow-2xl p-4'>
      {data.map((section) => (
        <div key={section.id}>
          <h1 className='text-lg font-bold mb-4'>{section.description}</h1>
          <ul>
            {section.items.map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="w-full h-[35px] flex items-center py-[15px] hover:text-[#2695ff] text-[14px] font-normal mb-2">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
