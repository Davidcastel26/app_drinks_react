import React from 'react'

const Form = () => {
    return (
        <form className='col-12'>
            
            <fieldset className='text-center'>
                <legend>
                    Search drinks by category or by ingredients
                </legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        name ='name'
                        className='form-control' 
                        type='text'
                        placeholder='Search by ingredient'
                        />
                </div>
                <div>
                    <select 
                        name="category"
                        className='form-control'
                        >
                        <option value="">-- Select Category --</option>
                    </select>
                </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary' 
                        value='Search Drinks'/>
                </div>
            </div>
        </form>
    )
}

export default Form
