import '../style.css'
import Link from 'next/link';


export default function Page() {
    
    return (
            
        <div>

            <div className='fullPageHorizontalCenterFlex'>

            <div className='text-center'>
                <h3 className='font-mono mt-10'>Database Testing options:</h3>

                <div className="testingOptionsTable">
                    <Link href="/testing/database/get"><button className='simpleButton'>GET</button></Link>
                    <Link href="/testing/database/post"><button className='simpleButton'>POST</button></Link>
                    <Link href="/testing/database/put"><button className='simpleButton'>PUT</button></Link>
                    <Link href="/testing/database/delete"><button className='simpleButton'>DELETE</button></Link>
                </div>

                </div>

            </div>

        </div>

    );
}
