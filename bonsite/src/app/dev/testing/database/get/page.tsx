import '../../style.css'
import Link from 'next/link';


export default function Page() {
    
    return (
            
        <div>

            <div className='fullPageHorizontalCenterFlex'>

            <div className='text-center'>
                <h3 className='font-mono mt-10'>GET Testing options:</h3>

                <div className="testingOptionsTable">
                    <Link href="/dev/testing/database/get/all"><button className='simpleButton'>GET All</button></Link>
                    <Link href="/dev/testing/database/get/id"><button className='simpleButton'>GET by ID</button></Link>
                </div>

                </div>

            </div>

        </div>

    );
}
