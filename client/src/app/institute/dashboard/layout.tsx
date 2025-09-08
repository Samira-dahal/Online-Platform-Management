import Dashboard from "@/lib/components/dashboard/Dashboard";



function InstituteDashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <div>
            <Dashboard>
                {children}
            </Dashboard>
        </div>
    )

}

export default InstituteDashboardLayout;