import { db } from '@/database/db';
import '../../style.css'
import './style.css'
import { bonsaiTable } from '@/database/schema';
import { createBonsai } from '../_queries/post';


export default function Page() {
    
    return (
            
        <div className='fullPageHorizontalCenterFlex'>
            
            <div className='text-center mt-10 bg-gray-400 p-10'>

                <h3 className='font-semibold'>POST | Create Bonsai</h3>

                <div className='w-full'>

                    <form 
                    className='dbTestInputForm'
                    action={async (formData) => {

                        "use server"

                        const id = formData.get('id');
                        const name = formData.get('name');
                        const amount = formData.get('amount');

                        await createBonsai({
                            id: Number(id),
                            name: String(name),
                            amount: Number(amount),
                        })

                    }}>

                        <label>
                            ID:
                            <input type='number' name='id'></input>
                        </label>

                        <label>
                            Name:
                            <input type='text' name='name'></input>
                        </label>

                        <label>
                            Amount:
                            <input type='number' name='amount'></input>
                        </label>

                        <button className='simpleButton'>Submit</button>

                    </form>

                </div>

                    <p>For now, you need to check the database or the application console to see if the request was successful.</p>

            </div>

        </div>

    );
}