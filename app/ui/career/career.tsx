export default function Career() {
    return(
        <>
            <main className="h-screen ">
                <section className="max-w-5xl my-auto mx-auto pt-16 px-8">
                    <section className="">
                        <div className="mb-36">
                            <h1 className="text-2xl">Intern form.</h1>
                        </div>
                        <div className="w-full md:grid grid-cols-2 gap-14">
                            <div className="w-full mb-8 md:md-0">
                                <div className="mb-6">
                                    <span className="text-sm">Personal Information</span>
                                </div>
                                <div className="w-full">
                                    <div className="w-full mb-8">
                                        <input type="name" placeholder="Name" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                    </div>
                                    <div className=" md:grid grid-cols-2 gap-4">
                                        <div className=" mb-8">
                                            <input type="name" placeholder="Email" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                        <div className=" mb-8">
                                            <input type="phone" placeholder="Phone" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                    </div>
                                    <div className=" md:grid grid-cols-2 gap-4">
                                        <div className=" mb-8">
                                            <input type="number" placeholder="Age" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                        <div className=" mb-8">
                                            <input type="text" placeholder="Gender" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-6">
                                    <span className="text-sm">Educational Information</span>
                                </div>
                                <div className="w-full">
                                    <div className="w-full mb-8">
                                        <input type="text" placeholder="School Name" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                    </div>
                                    <div className="md:grid grid-cols-2 gap-4">
                                        <div className=" mb-8">
                                            <input type="text" placeholder="Programme" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                        <div className=" mb-8">
                                            <input type="numbers" placeholder="Level" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                        </div>
                                    </div>
                                    <div className="w-full mb-8">
                                        <input type="text" placeholder="Major" className="text-xs border-black border-b b-2 py-1 w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-28 w-max mx-auto">
                            <button type="button" className="text-xs bg-gray-300 py-4 px-12 rounded-full mx-auto">SUBMIT FORM</button>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}