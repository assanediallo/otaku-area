import '../styles/Category.css'
import Men from './Men'
import Women from './Women'
import Jewelery from './Jewelery'
import Electronics from './Electronics'

export default function Category (){
    return(
        <>
            <ul className="list_category">
            <li><a href="/Men" > Men </a></li>
            <li><a href="/Women" > Women </a></li>
            <li><a href="/Jewelery" > Jewelery </a></li>
            <li><a href="/Electronics" > Electronics </a></li>

            </ul>
      </>
    )
}