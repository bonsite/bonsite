import './style.css'
import Link from 'next/link';


export default function Page() {
    
    return (
            
        <div>

            <div className='fullPageHorizontalCenterFlex'>

            <div className='text-center'>
                <h3 className='font-mono mt-10'>Testing options:</h3>

                <div className="testingOptionsTable">
                    <Link href="./testing/database"><button className='simpleButton'>Database</button></Link>
                    <Link href=""><button className='simpleButton' disabled>Coming soon</button></Link>
                </div>

                </div>

            </div>

        </div>

    );
}

