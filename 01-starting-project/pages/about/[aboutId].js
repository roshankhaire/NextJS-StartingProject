//our-domain.com/about/developer
import {useRouter} from "next/router"
import Link from "next/link"
function Developer(){
    const router=useRouter()
     const aboutid=router.query.aboutId

    return(
        <>
        <h1>{aboutid} Yash Senior Developer</h1>
        <ul>
            <li>
                <Link href="backend">Vaibhav</Link>
            </li>
            <li>
                <Link href="fullStack">Suresh</Link>
            </li>
            <li>
                <Link href="frontend">Yash</Link>
            </li>
         </ul>
       
        </>
    )
}
export default Developer