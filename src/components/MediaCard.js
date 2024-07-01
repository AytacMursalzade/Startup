import React from 'react'
import { Link } from 'react-router-dom';


function MediaCard() {

    const data = [
        {
          id: 1,
          description: "Media",
          items: [
            { id: 1, label: "4 columns", link: "/mediafourcolumn"},
            { id: 2, label: "3 columns", link: "/mediathreecolumn"},
            { id: 3, label: "2 columns", link: "/mediatwocolumn"},
          ],
        },
        {
          id: 2,
          description: "Projects",
          items: [
            { id: 1, label: "4 columns", link: "/projecfour"},
            { id: 2, label: "3 columns", link: "/projecthree"},
            { id: 3, label: "2 columns", link: "/projectwo"},
          ],
        }
      ];
    
      return (
        <div className='w-[500px] min-h-[200px] bg-[white] py-[30px] px-[30px] flex pt-[9px] justify-around gap-[5px] '>
          {data.map((section) => (
            <div key={section.id}>
              <h1>{section.description}</h1>
              <ul className='flex flex-col mt-[15px]'>
                {section.items.map((item) => (
                  <Link key={item.id} to={item.link}>
                    <li className="w-[150px] h-[35px] text-[#484848] flex gap-[8px] items-center py-[15px] hover:text-[#2695ff] text-[14px] font-semibold ">
                      {item.icon} {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

export default MediaCard;
