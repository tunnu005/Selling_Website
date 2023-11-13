import '../css/admin.css'

const Head = ({open,setopen}) => {

    return (
        <>
            <div className='outside'>
                <div className='inside' onClick={()=>{setopen(true)}} >
                    Upload Item
                </div>
            </div>
        </>
    )
}

export default Head;