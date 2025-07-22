import LeadListTable from "../leadListTable/LeadListTable";


export default function LeadList(){
    return (
        <div className="border border-gray-100 rounded-md bg-white">
            <div className="flex justify-between items-center px-5 py-7">
                <div className="flex flex-col">
                    <span className="text-2xl">Lista de Leads</span>
                    <span className="text-sm font-medium text-neutral-500">Gerencie todos os seus leads</span>
                </div>
                <div className="flex">
                    <div className="relative">
                        <button className="absolute self-center left-2 fill-neutral-400 hover:cursor-pointer">    
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </button>
                        <input type="search" placeholder="Buscar leads..." className="text-lg h-10 ps-10 border border-neutral-400 rounded-md"/>
                    </div>
                    <button className="bg-black text-white flex items-center justify-center gap-3 px-3 py-1 rounded-md ms-3 hover:cursor-pointer">
                        <svg fill='#ffffff' width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                        <span>Filtros</span>
                    </button>
                </div>
            </div>
            <LeadListTable />
        </div>
    )
}