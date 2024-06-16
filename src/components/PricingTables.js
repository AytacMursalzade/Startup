import React from 'react';

function PricingTables() {
    const data = [
        {
            id: 1,
            description1: "Most Popular",
            description2: "STANDARD",
            price: "$29/mo",
            paragraph1: "Storage Space",
            priceB1: "20 GB",
            paragraph2: "Video Uploads",
            priceB2: "5",
            paragraph3: "Portfolio Items",
            priceB3: "20",
            button1: "CHOOSE PLAN"
        },
        {
            id: 2,
            description1: "Best Value",
            description2: "DEVELOPER",
            price: "$49/mo",
            paragraph1: "Storage Space",
            priceB1: "20 GB",
            paragraph2: "Video Uploads",
            priceB2: "5",
            paragraph3: "Portfolio Items",
            priceB3: "45",
            button1: "CHOOSE PLAN"
        },
        {
            id: 3,
            description1: "Best Value",
            description2: "ENTERPRISE",
            price: "$99/mo",
            paragraph1: "Storage Space",
            priceB1: "150 GB",
            paragraph2: "Video Uploads",
            priceB2: "100",
            paragraph3: "Portfolio Items",
            priceB3: "Unlimited",
            button1: "CHOOSE PLAN"
        },
        
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-[32px] font-bold text-[#333] ml-[73px] mb-[20px]">Pricing Tables</h1>
            <ul className="flex justify-evenly">
                {data.map((item) => (
                    <li key={item.id} className='min-h-[400px] m-[10px]'>
                        <div className='w-[400px] h-[205px] text-center flex flex-col bg-[#494949] p-[20px]'>
                            <div className='flex flex-col gap-[7px] border-b-2 border-[black] pb-[10px]'>
                                <p className='text-[15px] text-[white] font-light'>{item.description1}</p>
                                <h1 className='font-bold text-[white] text-[20px]'>{item.description2}</h1>
                            </div>
                            <div className="flex justify-center  mt-[20px]">
                                <button className='text-[22px] text-[white] rounded-[45px] font-bold bg-[#2c2b2b] px-[20px] py-[10px]'>{item.price}</button>
                            </div>
                        </div>
                        <div className='w-[400px] h-[480px] text-center flex flex-col justify-around items-center bg-[#F1F1F1] p-[20px]'>
                            <div className='flex flex-col gap-[5px] border-b-[2px] border-[#ddd] pb-[10px]'>
                                <p className='text-[#838383] text-[14px] font-medium '>{item.paragraph1}</p>
                                <p className='text-[#444] text-[24px] font-normal '>{item.priceB1}</p>
                            </div>
                            <div className='flex flex-col gap-[5px] border-b-[2px] border-[#ddd] pb-[10px]'>
                                <p className='text-[#838383] text-[14px] font-medium '>{item.paragraph2}</p>
                                <p className='text-[#444] text-[24px] font-normal '>{item.priceB2}</p>
                            </div>
                            <div className='flex flex-col gap-[5px] border-b-[2px] border-[#ddd] pb-[10px]'>
                                <p className='text-[#838383] text-[14px] font-medium '>{item.paragraph3}</p>
                                <p className='text-[#444] text-[24px] font-normal '>{item.priceB3}</p>
                            </div>
                            <button className='  mt-[25px] hover:opacity-100 rounded-[9px]  w-[304px] h-[64px] bg-[#F94213] text-[white] font-bold'>{item.button1}</button>
                        </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PricingTables;
