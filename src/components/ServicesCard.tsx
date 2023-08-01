import Link from "next/link"

interface ServicesCardProps {
    title: string;
    icon: React.ReactNode;
}

export default function ServicesCard({title, icon}: ServicesCardProps) {
    return (
        <div className="flex items-center">
            <div>
            <h3 className="text-2xl font-medium">{title}</h3>
                <div> <svg/>  <span className="ml-4">Learn more</span></div>
            </div>
            <div className="mr-10 px-2 py-1 bg-[#B9FF66] rounded-lg">
                {icon}
            </div>
        </div>
    )
}