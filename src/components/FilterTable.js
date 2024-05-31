import React, { useState } from 'react';

function SearchFilter  () {
    const datatableUsers = [
        { name: "Currey Slee", position: "Food Chemist", gender: "Male", office: "Damietta", email: "cslee0@netlog.com", id: 1 },
        { name: "Chrissie MacInerney", position: "Account Executive", gender: "Male", office: "Ferreiras", email: "cmacinerney1@youtu.be", id: 2 },
        { name: "Karly Okeshott", position: "Cost Accountant", gender: "Female", office: "Cornillon", email: "kokeshott2@bravesites.com", id: 3 },
        { name: "Hermia Dayton", position: "VP Sales", gender: "Female", office: "Chernoyerkovskaya", email: "hdayton3@un.org", id: 4 },
        { name: "Willem O'Hdirscoll", position: "Recruiting Manager", gender: "Female", office: "Sukatani", email: "wohdirscoll4@businessinsider.com", id: 5 },
        { name: "Jose Caswall", position: "Environmental Tech", gender: "Female", office: "Concepcion", email: "jcaswall5@e-recht24.de", id: 6 },
        { name: "Cal Russell", position: "Computer Systems Analyst II", gender: "Female", office: "Melíssi", email: "crussell6@histats.com", id: 7 },
        { name: "Lavinia Atwill", position: "Occupational Therapist", gender: "Male", office: "Mendeleyevo", email: "latwill7@hexun.com", id: 8 },
        { name: "Sophronia De Hooch", position: "Account Representative II", gender: "Female", office: "Verkhnyaya Toyma", email: "sde8@mozilla.org", id: 9 },
        { name: "Harmon Argente", position: "Media Manager IV", gender: "Male", office: "Azeitão", email: "hargente9@vistaprint.com", id: 10 },
        { name: "Andreana Hablot", position: "Geological Engineer", gender: "Male", office: "Rameshki", email: "ahablota@digg.com", id: 11 },
        { name: "Elbertina Hinnerk", position: "Account Coordinator", gender: "Female", office: "Fujishiro", email: "ehinnerkb@typepad.com", id: 12 },
        { name: "Dill Morrallee", position: "Assistant Media Planner", gender: "Female", office: "Sandyford", email: "dmorralleec@eventbrite.com", id: 13 },
        { name: "Quinn Gully", position: "Actuary", gender: "Male", office: "Palangue", email: "qgullyd@sogou.com", id: 14 },
        { name: "Edythe Comberbach", position: "VP Quality Control", gender: "Female", office: "Boden", email: "ecomberbache@cnn.com", id: 15 },
        { name: "Marco Ferrotti", position: "Business Systems Development Analyst", gender: "Female", office: "Pingshanhu", email: "mferrottif@pcworld.com", id: 16 },
        { name: "Trumaine Underhill", position: "Data Coordiator", gender: "Female", office: "Casimiro de Abreu", email: "tunderhillg@house.gov", id: 17 },
        { name: "Mariana Trevillion", position: "GIS Technical Architect", gender: "Male", office: "Mafinga", email: "mtrevillionh@imgur.com", id: 18 },
        { name: "Rowney D'Almeida", position: "Community Outreach Specialist", gender: "Male", office: "Tokombere", email: "rdalmeidai@topsy.com", id: 19 },
        { name: "Jule Sibborn", position: "Assistant Manager", gender: "Female", office: "Belize City", email: "jsibbornj@mashable.com", id: 20 },
    ];

    const [searchInput, setSearchInput] = useState("");

    const FilteredData = () => {
        return datatableUsers.filter(
            (user) =>
                user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.position.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.gender.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.office.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.email.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    return (
        <div className="container-fluid mt-4 mb-4 ">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row justify-content-between align-items-center">
                                {/* <div className="col-md-3">
                                    {FilteredData().length === datatableUsers.length ? (
                                        ""
                                    ) : (
                                        <h5 className="text-primary">
                                            Search ({FilteredData().length}) result found from {datatableUsers.length}
                                        </h5>
                                    )}
                                </div> */}
                                <div className="col-md-3">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-text-small mb-0">
                                    <thead className="thead-dark table-sorting">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Position </th>
                                            <th>Gender</th>
                                            <th>Office</th>
                                            <th>Email </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {FilteredData().map((data, index) => (
                                            <tr key={index} className='border-2'>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.position}</td>
                                                <td>{data.gender}</td>
                                                <td>{data.office}</td>
                                                <td>{data.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter
