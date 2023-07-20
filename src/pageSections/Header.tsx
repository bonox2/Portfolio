import Image from 'next/image'

export default function Header() {
    return (
        <section className='mt-10'>
            <div className='container w-[1240px] m-auto flex justify-center items-center"'>
                    <nav className='flex justify-between items-center text-xl w-full mr-10'>
                        <Image 
                            src="/logo.svg"
                            alt="logo"
                            width={128}
                            height={24}
                        />

                        <ul className='flex gap-10 text-xl'>
                            <li><a href="#" id='#about'>About us</a></li>
                            <li><a href="#" id='#services'>Services</a></li>
                            <li><a href="#" id='#cases'>Use cases</a></li>
                            <li><a href="#" id='#pricing'>Pricing</a></li>
                            <li><a href="#" id='#blog'>Blog</a></li>
                        </ul>
                    </nav>

                <button className=' flex text-center justify-center items-center whitespace-nowrap bg-white
                 border-black border-[1px] rounded-2xl px-9 py-5 text-xl'>Request a quote</button>
            </div>
        </section>
    )
}