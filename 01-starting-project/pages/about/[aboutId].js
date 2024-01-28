//our-domain.com/about/developer
import {useRouter} from "next/router"
function Developer(){
    const router=useRouter()
     const aboutid=router.query.aboutId

    return(
        <>
        <h1>{aboutid} Yash Senior Developer</h1>
       
        </>
    )
}
export default Developer